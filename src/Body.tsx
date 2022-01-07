import TaskList from './components/taskView/TaskList';
import Footer from './Footer';

const Body = () => {
    return (
        <div className="h-screen flex-grow flex flex-col">
            <div className="main-body flex-grow overflow-y-auto p-6 space-y-4">
                <h1 className="font-display text-6xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, soluta?
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque ad sit ut perspiciatis eligendi nulla? Nisi temporibus ipsum possimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque ad sit ut perspiciatis eligendi nulla? Nisi temporibus ipsum possimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque ad sit ut perspiciatis eligendi nulla? Nisi temporibus ipsum possimus?</p>
                <TaskList />
            </div>
            <Footer />
        </div>
    );
};

export default Body;