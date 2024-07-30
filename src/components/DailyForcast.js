import React from "react";
import Card from "./Card";

const DailyForcast = ({ weatherDaily }) => {
  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="text-xl">Daily Forcast</div>
      {weatherDaily.map((dailyForcastData, index) => (
        <Card key={weatherDaily[index].title} forcastData={dailyForcastData} />
      ))}
    </div>
  );
};

export default DailyForcast;
