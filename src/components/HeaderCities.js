import React from "react";
import { cities } from "../utils/constants";

const HeaderCities = () => {
  return (
    <div className="flex items-center justify-around">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default HeaderCities;
