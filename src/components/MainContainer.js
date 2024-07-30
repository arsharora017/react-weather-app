import CityWeatherContainer from "./CityWeatherContainer";
import DailyForcast from "./DailyForcast";
import HourlyForcast from "./HourlyForcast";
import WeatherToday from "./WeatherToday";

const MainContainer = ({ weather, units }) => {
  return (
    <div className="flex flex-col items-center mb-28">
      <CityWeatherContainer weather={weather} />
      <WeatherToday weather={weather} units={units} />
      <HourlyForcast weatherHourly={weather.hourly} />
      <DailyForcast weatherDaily={weather.daily} />
    </div>
  );
};

export default MainContainer;
