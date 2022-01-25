import BackButton from './detailsView/BackButton';
import StatusIndicator from './StatusIndicator';
import UserAvatar from './UserAvatar';
import { useLocation } from 'react-router-dom';

const Appbar = () => {
    const location = useLocation();
    return <div className="flex text-gray-500 font-outfit justify-between">
        <div className="m-5">
            {location.pathname.match('^/details/') && <BackButton />}
            {location.pathname.match('^/$') && <StatusIndicator />}
        </div>
        <div className="m-5">
            <UserAvatar />
        </div>
    </div>;
};

export default Appbar;