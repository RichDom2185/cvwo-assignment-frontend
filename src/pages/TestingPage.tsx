// import AddToCalendarButton from "../components/AddToCalendarButton";
// import sg from 'date-fns/locale/en-SG';
import uk from 'date-fns/locale/en-GB';
import { useState } from "react";
import DatePicker from "react-datepicker";

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
    const [date, setDate] = useState(new Date());
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
            {/* <DatePicker
                selected={date}
                onChange={(date : Date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                locale={uk} /> */}
            {/* <DatePicker
            selected={date}
            onChange={(date : Date) => setDate(date)}
            calendarClassName='flex flex-col first:bg-blue-500'
            // className='block w-full text-base md:text-sm bg-white border border-gray-300 rounded shadow-sm form-input'
            popperClassName='z-40 w-72 text-sm bg-white shadow px-3 py-2 border-2 border-gray-200 rounded'
            // monthClassName={(_ : Date) => 'flex flex-col'}
            dayClassName={(_ : Date) => 'flex justify-around text-gray-400 font-medium text-center text-xs mb-1 w-8 h-8 flex items-center justify-center py-1 text-sm leading-loose transition text-gray-700 rounded'}
            weekDayClassName={(_ : Date) => 'w-8 h-8 flex items-center justify-center py-1 rounded-full'}
            previousMonthButtonLabel='<'
            nextMonthButtonLabel='>'
            /> */}
            {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="react-datepicker-left"
                        customInput={<ButtonInput />}
                        renderCustomHeader={({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div className="flex items-center justify-between px-2 py-2">
                                <span className="text-lg text-gray-700">
                                    {format(date, 'MMMM yyyy')}
                                </span>

                                <div className="space-x-2">
                                    <button
                                        onClick={decreaseMonth}
                                        disabled={prevMonthButtonDisabled}
                                        type="button"
                                        className={`
                                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                                    >
                                        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                                    </button>

                                    <button
                                        onClick={increaseMonth}
                                        disabled={nextMonthButtonDisabled}
                                        type="button"
                                        className={`
                                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                                    >
                                        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        )}
                    /> */}
                    <DatePicker
                        selected={date}
                        onChange={(date : Date) => setDate(date)}
                        selectsStart
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="z-40 w-72 text-sm bg-white shadow px-3 py-2 border-2 border-gray-200 rounded absolute mx-0 top-11 transform-none absolute z-10 w-72 text-sm transform-none bg-white shadow px-3 py-2 top-12 right-0 border-2 border-gray-200 rounded"
                        monthClassName={(_ : Date) => 'ml-2.5 text-lg font-semibold text-gray-800'}
                    />
        </div>
    );
};

export default TestingPage;