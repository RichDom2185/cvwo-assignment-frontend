// adapted from https://codesandbox.io/s/github/atreya2011/react-tailwind-datepicker-test
import {
  addMonths,
  addYears,
  format,
  getDay,
  getDaysInMonth,
  isEqual,
  subMonths,
  subYears,
} from "date-fns";
import React, { useEffect, useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";

type DatepickerType = "date" | "month" | "year";

interface Props {
  initialDate?: Date;
  callback: (selectedDate: Date) => void;
}

const DatePicker: React.FC<Props> = ({ initialDate, callback }) => {
  const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [dayCount, setDayCount] = useState<Array<number>>([]);
  const [blankDays, setBlankDays] = useState<Array<number>>([]);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(initialDate ?? new Date());
  const [type, setType] = useState<DatepickerType>("date");

  useEffect(() => {
    callback(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const decrement = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => subYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const increment = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => addMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => addYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const isToday = (date: number) =>
    isEqual(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date),
      selectedDate
    );

  const setDateValue = (date: number) => () => {
    setSelectedDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        datepickerHeaderDate.getMonth(),
        date
      )
    );
    setShowDatepicker(false);
  };

  const getDayCount = (date: Date) => {
    const daysInMonth = getDaysInMonth(date);

    // find where to start calendar day of week
    const dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    const blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  };

  const isSelectedMonth = (month: number) =>
    isEqual(
      new Date(selectedDate.getFullYear(), month, selectedDate.getDate()),
      selectedDate
    );

  const setMonthValue = (month: number) => () => {
    setDatepickerHeaderDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        month,
        datepickerHeaderDate.getDate()
      )
    );
    setType("date");
  };

  const toggleDatepicker = () => setShowDatepicker((prev) => !prev);

  const showMonthPicker = () => setType("month");

  const showYearPicker = () => setType("date");

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);

  //   useEffect(() => {
  //       if (showDatepicker) {
  //         document.addEventListener("click", toggleDatepicker);
  //       } else {
  //         document.removeEventListener("click", toggleDatepicker);
  //       }
  //   }, [showDatepicker]);

  return (
    // <div className="h-screen w-screen flex items-center justify-center bg-gray-200 ">
    //   <div className="antialiased sans-serif">
    // <div>
    //   <div className="container mx-auto px-4 py-2 md:py-10">
    <div className="w-64">
      {/* <label
                htmlFor="datepicker"
                className="font-bold mb-1 text-gray-700 block"
              >
                Select Date
              </label> */}
      <div className="relative">
        <input type="hidden" name="date" />
        <input
          type="text"
          readOnly
          className="transition duration-100 cursor-pointer w-full pl-4 pr-10 py-3 leading-none appearance-none focus:outline-hidden text-gray-600 border-b border-gray-200 focus:border-blue-500"
          placeholder="Select date"
          value={format(selectedDate, "E, dd MMM yyyy")}
          onClick={toggleDatepicker}
        />
        <div
          className="cursor-pointer absolute top-0 right-0 px-3 py-2"
          onClick={toggleDatepicker}
        >
          <HiOutlineCalendar className="h-6 w-6 text-gray-400" />
        </div>
        {showDatepicker && (
          <div
            className="bg-white border border-blue-200 mt-14 rounded-lg shadow-xl shadow-blue-200 p-4 absolute top-0 left-0"
            style={{ width: "17rem" }}
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <button
                  type="button"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={decrement}
                >
                  <HiOutlineChevronLeft className="h-6 w-6 text-gray-500 inline-flex" />
                </button>
              </div>
              {/* {type === "date" && (
                        <div
                          onClick={showMonthPicker}
                          className="grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                        >
                          <p className="text-center">
                            {format(datepickerHeaderDate, "MMMM")}
                          </p>
                        </div>
                      )}
                      <div
                        onClick={showYearPicker}
                        className="grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                      >
                        <p className="text-center">
                          {format(datepickerHeaderDate, "yyyy")}
                        </p>
                      </div> */}
              {type === "date" && (
                <div
                  onClick={showMonthPicker}
                  className="transition grow p-1 text-lg font-semibold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                >
                  <p className="text-center">
                    {format(datepickerHeaderDate, "MMMM yyyy")}
                  </p>
                </div>
              )}
              {type === "month" && (
                <div
                  onClick={showYearPicker}
                  className="transition grow p-1 text-lg font-semibold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                >
                  <p className="text-center">
                    {format(datepickerHeaderDate, "yyyy")}
                  </p>
                </div>
              )}
              <div>
                <button
                  type="button"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={increment}
                >
                  <HiOutlineChevronRight className="h-6 w-6 text-gray-500 inline-flex" />
                </button>
              </div>
            </div>
            {type === "date" && (
              <>
                <div className="flex flex-wrap mb-3 -mx-1">
                  {DAYS.map((day, i) => (
                    <div key={i} style={{ width: "14.26%" }} className="px-1">
                      <div className="text-gray-400 font-semibold text-center text-xs">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap -mx-1">
                  {blankDays.map((_, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="text-center border p-1 border-transparent text-sm"
                    ></div>
                  ))}
                  {dayCount.map((d, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="px-1 mb-1"
                    >
                      <div
                        onClick={setDateValue(d)}
                        className={`transition duration-75 py-1 cursor-pointer text-center text-sm leading-none rounded-md ${
                          isToday(d)
                            ? "bg-blue-500 text-white font-bold hover:bg-blue-700"
                            : "text-gray-700 hover:bg-blue-100"
                        }`}
                      >
                        {d}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {type === "month" && (
              <div className="flex flex-wrap -mx-1">
                {Array(12)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      onClick={setMonthValue(i)}
                      style={{ width: "25%" }}
                    >
                      <div
                        className={`transition duration-75 cursor-pointer px-1 py-3 m-1 text-center text-sm rounded-md ${
                          isSelectedMonth(i)
                            ? "bg-blue-500 text-white font-bold hover:bg-blue-700"
                            : "text-gray-700 hover:bg-blue-100"
                        }`}
                      >
                        {format(
                          new Date(
                            datepickerHeaderDate.getFullYear(),
                            i,
                            datepickerHeaderDate.getDate()
                          ),
                          "MMM"
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}{" "}
            {/* {type === "year" && (
                      <Datepicker
                        datepickerHeaderDate={datepickerHeaderDate}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        closeDatepicker={() => setShowDatepicker(false)}
                      />
                    )} */}
          </div>
        )}
      </div>
    </div>
    //   </div>
    // </div>
    //   </div>
    // </div>
  );
};

export default DatePicker;
