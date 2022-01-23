import AddToCalendarButton from "../components/AddToCalendarButton";
import Header from "../navigation/Header";
import Footer from "../Footer";

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
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default DetailsPage;