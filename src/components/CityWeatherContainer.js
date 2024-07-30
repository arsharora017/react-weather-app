const CityWeatherContainer = ({
  weather: { name, country, description, temp_max, temp_min, temp, icon },
}) => {
  console.log();
  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="border-b-2">
        <p className="text-xl">{`${name}, ${country}`}</p>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <div>
          <p className="font-bold text-8xl">{`${temp.toFixed()}°`}</p>
          <p className="text-lg">{description}</p>
          <p className="text-lg">{`Day ${temp_max.toFixed()}° | Night ${temp_min.toFixed()}°`}</p>
        </div>
        <div className="w-1/4 flex justify-center">
          <img className="w-full" src={icon} alt="weather condition icon" />
        </div>
      </div>
    </div>
  );
};

export default CityWeatherContainer;
