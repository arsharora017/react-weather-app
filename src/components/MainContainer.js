import CityWeatherContainer from "./CityWeatherContainer";
import DailyForcast from "./DailyForcast";
import HourlyForcast from "./HourlyForcast";
import WeatherToday from "./WeatherToday";

const MainContainer = () => {
  return (
    <div className="flex flex-col items-center mb-28">
      <CityWeatherContainer />
      <WeatherToday />
      <HourlyForcast />
      <DailyForcast />
    </div>
  );
};

export default MainContainer;
