import Header from '../navigation/Header';
import MainBody from '../MainBody';

const MainPage = () => {
    return (
        <div className="flex justify-between items-start">
            <Header />
            <MainBody />
        </div>
    );
};

export default MainPage;