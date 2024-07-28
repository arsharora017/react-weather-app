import React from "react";
import Card from "./Card";
import { hourlyForcastDummyData } from "../utils/constants";

const HourlyForcast = ({ weatherHourly }) => {
  console.log(weatherHourly);
  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="text-xl">3 Hour Step Forecast</div>
      {hourlyForcastDummyData.map((dailyForcastData) => (
        <Card key={dailyForcastData.id} forcastData={dailyForcastData} />
      ))}
    </div>
  );
};

export default HourlyForcast;
