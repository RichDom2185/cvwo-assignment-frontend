// import AddToCalendarButton from "../components/AddToCalendarButton";
import DatePicker from "../components/DatePicker";

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