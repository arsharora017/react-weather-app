import { WiDayCloudy } from "react-icons/wi";

const CityWeatherContainer = () => {
  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="border-b-2">
        <p>Ottawa, Ontario</p>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <div>
          <p className="font-bold text-8xl">31°</p>
          <p className="text-lg">Partly Cloudy</p>
          <p className="text-lg">Day 31° | Night 20°</p>
        </div>
        <div className="">
          <WiDayCloudy size={150} />
        </div>
      </div>
    </div>
  );
};

export default CityWeatherContainer;
