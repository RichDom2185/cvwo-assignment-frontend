import Header from '../navigation/Header';
import Body from '../Body';

const MainPage = () => {
    return (
        <div className="flex justify-between items-start">
            <Header />
            <Body />
          </div>
    );
};

export default MainPage;