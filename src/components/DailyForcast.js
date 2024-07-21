import React from "react";
import { dailyForcastDummyData } from "../utils/constants";
import Card from "./Card";

const DailyForcast = () => {
  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="text-xl">Daily Forcast</div>
      {dailyForcastDummyData.map((dailyForcastData) => (
        <Card key={dailyForcastData.id} forcastData={dailyForcastData} />
      ))}
    </div>
  );
};

export default DailyForcast;
