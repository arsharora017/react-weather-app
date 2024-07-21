import { weatherDetails } from "../utils/constants";

const WeatherToday = () => {
  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="text-xl">
        Weather Today in <span>Ottawa, Ontario</span>
      </div>
      <div className="flex flex-col mt-4">
        <p>Feels Like</p>
        <p className="font-bold text-5xl">25°</p>
      </div>

      <div className="flex flex-col justify-between mt-4 h-32 flex-wrap ">
        {weatherDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row  justify-between mx-2 py-2">
            <div className="flex flex-row items-center">
              <Icon size={18} />
              <p className="pl-1">{title}</p>
            </div>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherToday;
