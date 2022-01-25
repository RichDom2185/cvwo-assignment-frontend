// chips adapted from https://tailwind-elements.com/docs/standard/components/chips/
// form adapted from https://v1.tailwindcss.com/components/forms
import AddToCalendarButton from "../AddToCalendarButton";
import DatePicker from "../DatePicker";
import Footer from "../Footer";
import TagChip from "../TagChip";
import FormLabel from "../detailsView/FormLabel";
import Appbar from "../Appbar";
import SaveTaskButton from "./SaveTaskButton";

import { compressToUTF16, decompressFromUTF16 } from "lz-string";
import { useState } from "react";

import { TodoItem } from "../../App";

interface Props {
    todoItemId: string;
};

const DetailsBody = ({ todoItemId }: Props) => {
    const currentUserData: string | null = decompressFromUTF16(window.localStorage.getItem("user") ?? '');

    const [addTag, setAddTag] = useState<string>('');

    const [todoItem, setTodoItem] = useState<TodoItem>(generateTodoBoilerplate());

    function generateTodoBoilerplate(): TodoItem {
        const blankTodoItem: TodoItem = {
            id: todoItemId,
            title: '',
            description: '',
            completed: false,
            tags: [],
            reminderDate: new Date(),
        };

        if (currentUserData) {
            // TODO: handle online
        }
        try {
            const todoListString: string = decompressFromUTF16(window.localStorage.getItem('todoData')!)!;
            const todoList: TodoItem[] = JSON.parse(todoListString) as TodoItem[];
            const todoItem: TodoItem = todoList.find(searchItem => searchItem.id === todoItemId) ?? blankTodoItem;
            return todoItem;
        } catch (e) {
            console.log('Error loading file from database:', e);
        }
        return blankTodoItem;
    }

    const tagOnChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setAddTag(e.target.value);
    };

    const tagFormKeyDownHandler: React.KeyboardEventHandler = (e) => {
        const htmlElement = e.target as HTMLInputElement;
        if (e.key === 'Enter') {
            e.preventDefault();
            if (htmlElement.value.trim() !== '') {
                setAddTag('');
                setTodoItem({
                    ...todoItem,
                    tags: [...todoItem.tags ?? [], htmlElement.value.trim()],
                });
            }
        }
    };

    function removeTagFunction(tag: string): React.MouseEventHandler<HTMLSpanElement> {
        return (e) => {
            setTodoItem({
                ...todoItem,
                tags: todoItem.tags?.filter(t => t !== tag) ?? [],
            });
        };
    };

    const formChangeHandler: React.ChangeEventHandler = (e) => {
        const htmlElement = e.target as HTMLInputElement;
        setTodoItem({
            ...todoItem,
            [htmlElement.name]: htmlElement.value,
        });
    };

    const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    };

    const makeSaveCallbackFunction: (todoItem: TodoItem) => React.MouseEventHandler = (newItem: TodoItem) => {
        return () => {
            console.log('Saving todo item');
            if (currentUserData) {
                // TODO: online mode
                return;
            }

            try {
                const todoListString: string = decompressFromUTF16(window.localStorage.getItem('todoData')!)!;
                const todoList: TodoItem[] = JSON.parse(todoListString) as TodoItem[];
                const newTodoList: string = JSON.stringify(
                    [...(todoList.filter(oldItem => oldItem.id !== newItem.id)), newItem]
                );
                const serializedTodoList = compressToUTF16(newTodoList);
                window.localStorage.setItem('todoData', serializedTodoList);
            } catch (e) {
                console.log('Error while saving file to database:', e);
            }
            window.history.back();
        }
    };

    return <div className="h-screen flex-grow flex flex-col">
        <Appbar />
        <div className="main-body flex-grow overflow-y-auto p-6 space-y-12">
            <form className="w-full max-w-6xl space-y-3 mx-auto" onSubmit={formSubmitHandler}>
                <div className="flex items-center justify-between gap-x-4">
                    <input type="text" name="title" id="title" placeholder="Title" className="flex-grow transition font-outfit font-medium text-2xl tracking-wide appearance-none border-b focus:border-blue-500 text-gray-700 py-2 px-2 leading-tight focus:outline-none" onChange={formChangeHandler} value={todoItem.title} />
                    <div className="text-sm">
                        <AddToCalendarButton item={todoItem} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <FormLabel htmlFor="completed">
                        Completed:
                    </FormLabel>
                    <div className="md:w-4/5 space-y-3">
                        {todoItem.completed
                            ? <input type="checkbox" name="completed" id="completed" onChange={formChangeHandler} defaultChecked />
                            : <input type="checkbox" name="completed" id="completed" onChange={formChangeHandler} />}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <FormLabel htmlFor="add-tags">
                        Tags:
                    </FormLabel>
                    <div className="md:w-4/5 space-y-3">
                        <input type="text" name="add-tags" id="add-tags" placeholder="Add Tags" className="w-full transition appearance-none border-b focus:border-blue-500 text-gray-700 py-2 px-2 leading-tight focus:outline-none" value={addTag} onChange={tagOnChangeHandler} onKeyDown={tagFormKeyDownHandler} />
                        <div className="flex flex-wrap justify-start space-x-2 items-center">
                            {todoItem.tags?.map(tag => (<TagChip tagName={tag} clickFunction={removeTagFunction(tag)} />))}
                        </div>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <FormLabel htmlFor="datepicker">
                        Due:
                    </FormLabel>
                    <div className="md:w-4/5 space-y-3">
                        <DatePicker />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <FormLabel htmlFor="description">
                        Description:
                    </FormLabel>
                    <div className="md:w-4/5 space-y-3">
                        <div className="bg-gray-100 rounded-lg">
                            <div className="divide-y divide-gray-200 px-3 py-2">
                                <textarea id="description" name="description" className="w-full h-96 resize-none bg-transparent focus:outline-none" onChange={formChangeHandler} value={todoItem.description} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="flex justify-center">
                <SaveTaskButton callback={makeSaveCallbackFunction(todoItem)} />
            </div>
        </div>
        <Footer />
    </div>;
};

export default DetailsBody;
