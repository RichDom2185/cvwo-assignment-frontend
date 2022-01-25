import { MdPostAdd } from 'react-icons/md';
import { useNavigate } from 'react-router';

const NewTaskButton = () => {
    const handleClick : React.MouseEventHandler = (e) => {
        const dateString : string = (new Date()).toISOString().replace(/-|:|\.\d\d\d/g,"") ?? '';
        console.log(dateString);
    };

    function onClickHandler(uuid: string): React.MouseEventHandler<HTMLDivElement> {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();
        return () => {
            navigate(`/details/${uuid}`);
        };
    }

    return (
        <button className="transition bg-blue-50 hover:bg-blue-100 text-blue-600 font-outfit font-medium tracking-wide px-3 py-2 rounded space-x-3 flex items-center shadow-md hover:shadow shadow-blue-100 hover:shadow-blue-300" onClick={handleClick}>
            <MdPostAdd size={24} className='inline'/>
            <span>New Task</span>
        </button>
    )
};

export default NewTaskButton;