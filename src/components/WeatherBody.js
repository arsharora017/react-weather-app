import Header from "./Header";
import MainContainer from "./MainContainer";

const WeatherBody = () => {
  return (
    <div className="flex flex-col w-[60%] m-auto">
      <Header />
      <MainContainer />
    </div>
  );
};

export default WeatherBody;
