// chips adapted from https://tailwind-elements.com/docs/standard/components/chips/
// form adapted from https://v1.tailwindcss.com/components/forms
import AddToCalendarButton from "../components/AddToCalendarButton";
import DatePicker from "../components/DatePicker";
import Header from "../navigation/Header";
import Footer from "../Footer";
import TagChip from "../components/TagChip";
import { useState } from "react";

export type TodoItem = {
    id: string,
    title?: string,
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
        if (e.key === 'Enter' && htmlElement.value.trim() !== '') {
            e.preventDefault();
            setAddTag('');
            setTodoItem({
                ...todoItem,
                tags: [...todoItem.tags ?? [], htmlElement.value.trim()],
            });
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

    const formChangeHandler : React.ChangeEventHandler = (e) => {
        const htmlElement = e.target as HTMLInputElement;
        setTodoItem({
            ...todoItem,
            [htmlElement.name]: htmlElement.value,
        });
    };

    return (
        // <div className="flex justify-center items-center min-h-screen">
        //     <AddToCalendarButton item={{
        //         id: '1',
        //         title: 'This is the test title',
        //         description: 'Test description',
        //         completed: false,
        //         tags: ['test'],
        //         reminderDate: new Date(),
        //     }}/>
        // </div>
        <div className="flex justify-between items-start">
            <Header />
            <div className="h-screen flex-grow flex flex-col">
                <div className="main-body flex-grow overflow-y-auto p-6 space-y-4">
                    <h1 className="font-display text-6xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, soluta?
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque ad sit ut perspiciatis eligendi nulla? Nisi temporibus ipsum possimus?</p>
                    {/* <div className="bg-gray-50 rounded-2xl">
                        <div className="divide-y divide-gray-200 px-3">
                            <p>Test</p>
                        </div>
                    </div> */}
                    <form className="w-full space-y-3">
                        <div className="flex items-center">
                            <input type="text" name="title" id="title" placeholder="Title" className="w-full max-w-lg transition font-outfit font-medium text-2xl tracking-wide appearance-none border-b focus:border-blue-500 text-gray-700 py-2 px-2 leading-tight focus:outline-none" />
                        </div>
                        <div className="text-sm">
                            <AddToCalendarButton item={todoItem} />
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/6">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Completed:
                                </label>
                            </div>
                            <div className="md:w-5/6 space-y-3">
                                <input type="checkbox" name="completed" id="completed" />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/6">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Tags:
                                </label>
                            </div>
                            <div className="md:w-5/6 space-y-3">
                                {/* <input type="text" className="w-full max-w-md transition bg-gray-100 appearance-none border border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" placeholder="Tags" onKeyDown={tagsHandler} /> */}
                                <input type="text" name="add-tags" id="add-tags" placeholder="Add Tags" className="w-full max-w-lg transition appearance-none border-b focus:border-blue-500 text-gray-700 py-2 px-2 leading-tight focus:outline-none" value={addTag} onChange={tagOnChangeHandler} onKeyDown={tagFormKeyDownHandler} />
                                <div className="flex flex-wrap justify-start space-x-2 items-center">
                                    {todoItem.tags?.map(tag => (<TagChip tagName={tag} clickFunction={removeTagFunction(tag)} />))}
                                </div>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/6">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Due:
                                </label>
                            </div>
                            <div className="md:w-5/6 space-y-3">
                                <DatePicker />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/6">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Description:
                                </label>
                            </div>
                            <div className="md:w-5/6 space-y-3">
                                <div className="bg-gray-50 rounded-2xl">
                                    <div className="divide-y divide-gray-200 px-3 py-2">
                                        <textarea id="description" name="description" className="w-full h-96 resize-none bg-transparents focus:outline-none" onChange={formChangeHandler} value={todoItem.description} />
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