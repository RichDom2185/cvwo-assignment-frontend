import MainBody from "../MainBody";
import Header from "../navigation/Header";

const MainPage: React.FC = () => {
  return (
    <div className="flex justify-between items-start">
      <Header />
      <MainBody />
    </div>
  );
};

export default MainPage;
