import CityWeatherContainer from "./CityWeatherContainer";
import DailyForcast from "./DailyForcast";
import HourlyForcast from "./HourlyForcast";
import WeatherToday from "./WeatherToday";

const MainContainer = (weather) => {
  return (
    <div className="flex flex-col items-center mb-28">
      <CityWeatherContainer weather={weather} />
      <WeatherToday weather={weather} />
      <HourlyForcast weatherHourly={weather.weather.hourly} />
      <DailyForcast weatherDaily={weather.weather.daily} />
    </div>
  );
};

export default MainContainer;
