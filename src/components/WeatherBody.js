// import { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
// import getFormattedWeatherData from "./weatherService";
import useWeatherData from "../utils/useWeatherData";

const WeatherBody = () => {
  const weatherData = useWeatherData();

  return (
    <div className="flex flex-col w-[60%] m-auto">
      <Header weather={weatherData} />
      {weatherData && <MainContainer weather={weatherData} />}
    </div>
  );
};

export default WeatherBody;
