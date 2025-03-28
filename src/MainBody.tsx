import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import NewTaskButton from "./components/NewTaskButton";
import TaskList from "./components/taskView/TaskList";

const MainBody = () => {
  return (
    <div className="h-screen grow flex flex-col">
      <Appbar />
      <div className="main-body grow overflow-y-auto p-6 space-y-4">
        <h1 className="font-display text-6xl">Hello, User 😀</h1>
        <p>
          Start adding your tasks here! They are saved when you close the
          browser, so you can save as many tasks as you want and pick up where
          you left off anytime!
        </p>
        <p>
          If you want to access and sync your tasks across multiple devices,
          login with your email/GitHub account by clicking the user icon in the
          top right-hand corner.
        </p>
        <NewTaskButton />
        <TaskList />
      </div>
      <Footer />
    </div>
  );
};

export default MainBody;
