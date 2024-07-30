import React from "react";
import Card from "./Card";

const HourlyForcast = ({ weatherHourly }) => {
  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="text-xl">3 Hour Step Forecast</div>
      {weatherHourly.map((dailyForcastData, index) => (
        <Card key={weatherHourly[index].title} forcastData={dailyForcastData} />
      ))}
    </div>
  );
};

export default HourlyForcast;
