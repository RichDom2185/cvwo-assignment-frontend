import Header from '../navigation/Header';
import Body from '../Body';

const Main = () => {
    return (
        <div className="flex justify-between items-start">
            <Header />
            <Body />
          </div>
    );
};

export default Main;