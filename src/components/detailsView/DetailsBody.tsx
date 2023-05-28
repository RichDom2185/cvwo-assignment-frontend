// chips adapted from https://tailwind-elements.com/docs/standard/components/chips/
// form adapted from https://v1.tailwindcss.com/components/forms
import React, { useState } from "react";
import { addTodo, deleteTodo, updateTodo } from "../../api/todo";
import { TodoItem } from "../../types/todo";
import { useLocalStorage } from "../../utils/hooks";
import AddToCalendarButton from "../AddToCalendarButton";
import Appbar from "../Appbar";
import DatePicker from "../DatePicker";
import Footer from "../Footer";
import TagChip from "../TagChip";
import FormLabel from "../detailsView/FormLabel";
import DeleteTaskButton from "./DeleteTaskButton";
import SaveTaskButton from "./SaveTaskButton";

interface Props {
  todoItemId: string;
}

const DetailsBody: React.FC<Props> = ({ todoItemId }) => {
  const { getStorageToken } = useLocalStorage("token");
  const token = getStorageToken();

  const { getStorageTodoList, setStorageTodoList } =
    useLocalStorage("todoList");
  const [todo, setTodo] = useState<TodoItem>(() => {
    const todo = getStorageTodoList()?.find(({ id }) => id === todoItemId) ?? {
      id: todoItemId,
      title: "",
      description: "",
      completed: false,
      tags: [],
    };

    return {
      ...todo,
      // FIXME: Hacky fix due to Date objects not being JSON-safe
      reminderDate: todo.reminderDate ? new Date(todo.reminderDate) : undefined,
      reminderTime: todo.reminderTime ? new Date(todo.reminderTime) : undefined,
    };
  });

  const [addTag, setAddTag] = useState<string>("");

  const tagOnChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setAddTag(e.target.value);
  };

  const tagFormKeyDownHandler: React.KeyboardEventHandler = (e) => {
    const htmlElement = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedValue = htmlElement.value.trim();
      if (trimmedValue !== "") {
        if (!todo.tags?.includes(trimmedValue)) {
          setAddTag("");
          setTodo({
            ...todo,
            tags: [...(todo.tags ?? []), trimmedValue],
          });
        } else {
          alert("Tag already exists");
        }
      }
    }
  };

  function removeTagFunction(
    tag: string
  ): React.MouseEventHandler<HTMLSpanElement> {
    return (e) => {
      setTodo({
        ...todo,
        tags: todo.tags?.filter((t) => t !== tag) ?? [],
      });
    };
  }

  const formChangeHandler: React.ChangeEventHandler = (e) => {
    const htmlElement = e.target as HTMLInputElement;
    setTodo({
      ...todo,
      [htmlElement.name]:
        htmlElement.name === "completed"
          ? htmlElement.checked
          : htmlElement.value,
    });
  };

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const makeSaveCallbackFunction: (
    todoItem: TodoItem
  ) => React.MouseEventHandler = (newItem: TodoItem) => {
    return async () => {
      if (token) {
        // TODO: online mode
        if (newItem.id === "new") {
          await addTodo(newItem, token);
        } else {
          await updateTodo(newItem, token);
        }
        console.log("Saved todo item");
        window.history.back();
        return;
      }

      const oldList = getStorageTodoList() ?? [];
      const newTodoList = [
        ...oldList.filter((oldItem) => oldItem.id !== newItem.id),
        newItem,
      ];
      setStorageTodoList(newTodoList);
      window.history.back();
    };
  };

  const makeDeleteCallbackFunction: (
    todoItem: TodoItem
  ) => React.MouseEventHandler = (newItem: TodoItem) => {
    return async () => {
      console.log("Deleting todo item");
      if (newItem.id === "new") {
        window.history.back();
        return;
      }
      if (token) {
        await deleteTodo(newItem, token);
      }

      const oldList = getStorageTodoList() ?? [];
      const newTodoList = oldList.filter(
        (oldItem) => oldItem.id !== newItem.id
      );
      setStorageTodoList(newTodoList);
      window.history.back();
    };
  };

  const updateDate: (selectedDate: Date) => void = (selectedDate) => {
    setTodo({
      ...todo,
      reminderDate: selectedDate,
    });
  };

  return (
    <div className="h-screen flex-grow flex flex-col">
      <Appbar />
      <div className="main-body flex-grow overflow-y-auto p-6 space-y-12">
        <form
          className="w-full max-w-6xl space-y-3 mx-auto"
          onSubmit={formSubmitHandler}
        >
          <div className="flex items-center justify-between gap-x-4">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="flex-grow transition font-outfit font-medium text-2xl tracking-wide appearance-none border-b focus:border-blue-500 text-gray-700 py-2 px-2 leading-tight focus:outline-none"
              onChange={formChangeHandler}
              value={todo.title}
            />
            <div className="text-sm">
              <AddToCalendarButton item={todo} />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <FormLabel htmlFor="completed">Completed:</FormLabel>
            <div className="md:w-4/5 space-y-3">
              {todo.completed ? (
                <input
                  type="checkbox"
                  name="completed"
                  id="completed"
                  onChange={formChangeHandler}
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  name="completed"
                  id="completed"
                  onChange={formChangeHandler}
                />
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <FormLabel htmlFor="add-tags">Tags:</FormLabel>
            <div className="md:w-4/5 space-y-3">
              <input
                type="text"
                name="add-tags"
                id="add-tags"
                placeholder="Add Tags"
                className="w-full transition appearance-none border-b focus:border-blue-500 text-gray-700 py-2 px-2 leading-tight focus:outline-none"
                value={addTag}
                onChange={tagOnChangeHandler}
                onKeyDown={tagFormKeyDownHandler}
              />
              <div className="flex flex-wrap justify-start space-x-2 items-center">
                {todo.tags?.map((tag) => (
                  <TagChip
                    tagName={tag}
                    clickFunction={removeTagFunction(tag)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <FormLabel htmlFor="datepicker">Due:</FormLabel>
            <div className="md:w-4/5 space-y-3">
              <DatePicker
                initialDate={todo.reminderDate}
                callback={updateDate}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <FormLabel htmlFor="description">Description:</FormLabel>
            <div className="md:w-4/5 space-y-3">
              <div className="bg-gray-100 rounded-lg">
                <div className="divide-y divide-gray-200 px-3 py-2">
                  <textarea
                    id="description"
                    name="description"
                    className="w-full h-96 resize-none bg-transparent focus:outline-none"
                    onChange={formChangeHandler}
                    value={todo.description}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-center space-x-6">
          <SaveTaskButton callback={makeSaveCallbackFunction(todo)} />
          <DeleteTaskButton callback={makeDeleteCallbackFunction(todo)} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsBody;
