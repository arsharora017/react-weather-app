import { FaTemperatureHigh, FaWind } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

const WeatherToday = ({
  weather: {
    name,
    country,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    speed,
    visibility,
    sunrise,
    sunset,
  },
  units,
}) => {
  const weatherDetails = [
    {
      id: 1,
      Icon: FaTemperatureHigh,
      title: "High/Low",
      value: `${temp_max.toFixed()}°/${temp_min.toFixed()}°`,
    },
    { id: 2, Icon: WiHumidity, title: "Humidity", value: `${humidity}%` },
    {
      id: 3,
      Icon: FaWind,
      title: "Wind",
      value: `${
        units === "metric" ? (speed * 3.6).toFixed() : speed.toFixed()
      } ${units === "metric" ? "km/hr" : "miles/hr"}`,
    },
    {
      id: 4,
      Icon: MdOutlineVisibility,
      title: "Visibility",
      value: `${visibility / 1000} km`,
    },
    { id: 5, Icon: GiSunrise, title: "Sunrise", value: `${sunrise}` },
    { id: 6, Icon: GiSunset, title: "Sunset", value: `${sunset}` },
  ];

  return (
    <div className="border-white border mt-8 rounded-lg p-4 w-3/4">
      <div className="text-xl">
        Weather Today in <span>{`${name}, ${country}`}</span>
      </div>
      <div className="flex flex-col mt-4">
        <p>Feels Like</p>
        <p className="font-bold text-5xl">{`${feels_like.toFixed()}°`}</p>
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
