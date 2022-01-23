// import AddToCalendarButton from "../components/AddToCalendarButton";
import DatePicker from "../components/DatePicker";

export type TodoItem = {
    id: string,
    title?: string,
    description?: string,
    completed: boolean,
    tags?: string[],
    reminderDate?: Date,
    reminderTime?: Date,
};

const TestingPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* <AddToCalendarButton item={{
                id: '1',
                title: 'This is the test title',
                description: 'Test description',
                completed: false,
                tags: ['test'],
                reminderDate: new Date(),
            }}/> */}
            <DatePicker/>
        </div>
    );
};

export default TestingPage;