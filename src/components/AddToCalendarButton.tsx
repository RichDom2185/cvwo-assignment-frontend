import { FaRegCalendarPlus } from 'react-icons/fa';
import { TodoItem } from '../App';

interface Props {
    item: TodoItem;
};

const AddToCalendarButton = ({ item }: Props) => {
    const handleClick : React.MouseEventHandler = (e) => {
        // console.log('Add to calendar');
        // window.open('https://calendar.google.com/calendar/r/eventedit?text=' + item.title + '&dates=' + item.reminderDate?.toISOString() + '/' + item.reminderDate?.toISOString() + '&details=' + item.description + '&location=' + item.tags?.join(', ') + '&ctz=America/New_York');
        const dateString : string = item.reminderDate?.toISOString().replace(/-|:|\.\d\d\d/g,"") ?? '';
        console.log(dateString);
        window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + item.title + '&dates=' + dateString + '/' + dateString + '&details=' + item.description + '&ctz=Asia/Singapore');
    };

    return (
        <button className="transition bg-blue-500 hover:bg-blue-600 text-white font-outfit font-medium tracking-wide px-3 py-2 rounded space-x-3 flex items-center shadow-md" onClick={handleClick}>
            <FaRegCalendarPlus size={20} className='inline'/>
            <span>Add to Google Calendar</span>
        </button>
    )
};

export default AddToCalendarButton;