// chips adapted from https://tailwind-elements.com/docs/standard/components/chips/
// form adapted from https://v1.tailwindcss.com/components/forms
import AddToCalendarButton from "../components/AddToCalendarButton";
import DatePicker from "../components/DatePicker";
import Header from "../navigation/Header";
import Footer from "../components/Footer";
import TagChip from "../components/TagChip";
import FormLabel from "../components/detailsView/FormLabel";
import Appbar from "../components/Appbar";
import { useState } from "react";

export type TodoItem = {
    id: string,
    title: string,
    description?: string,
    completed: boolean,
    tags?: string[],
    reminderDate?: Date,
    reminderTime?: Date,
};

const DetailsPage = () => {
    const [todoItem, setTodoItem] = useState<TodoItem>({
        id: '1',
        title: 'This is the test title',
        description: 'Test description',
        completed: false,
        tags: ['test', 'abc'],
        reminderDate: new Date(),
    });

    const [addTag, setAddTag] = useState<string>('');

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

    return (
        <div className="flex justify-between items-start">
            <Header />
            <div className="h-screen flex-grow flex flex-col">
                <Appbar />
                <div className="main-body flex-grow overflow-y-auto p-6 space-y-4">
                    {/* <p>Back to Tasks List</p> */}
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
                                <input type="checkbox" name="completed" id="completed" />
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
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default DetailsPage;