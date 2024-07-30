import React from "react";

const HeaderCities = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "Sydney",
    },
    {
      id: 2,
      name: "Tokyo",
    },
    {
      id: 3,
      name: "Paris",
    },
    {
      id: 4,
      name: "Toronto",
    },
    {
      id: 5,
      name: "London",
    },
  ];
  return (
    <div className="flex items-center justify-around">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default HeaderCities;
