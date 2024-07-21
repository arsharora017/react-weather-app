import { FaMoon, FaTemperatureHigh, FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";

export const LOGO =
  "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png";

export const cities = [
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

export const weatherDetails = [
  { id: 1, Icon: FaTemperatureHigh, title: "High/Low", value: "26°/19°" },
  { id: 2, Icon: WiHumidity, title: "Humidity", value: "84%" },
  { id: 3, Icon: FaWind, title: "FaWind", value: "11 km/hr" },
  { id: 4, Icon: MdOutlineVisibility, title: "Visibility", value: "Unlimited" },
  { id: 5, Icon: TbUvIndex, title: "UV INdex", value: "4 of 11" },
  { id: 6, Icon: FaMoon, title: "Moon Phase", value: "Waxing Gibbous" },
];

export const hourlyForcastDummyData = [
  {
    id: 1,
    dayOrTime: "Now",
    temp: "24°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 2,
    dayOrTime: "19:00",
    temp: "24°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 3,
    dayOrTime: "20:00",
    temp: "24°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 4,
    dayOrTime: "21:00",
    temp: "24°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 5,
    dayOrTime: "22:00",
    temp: "24°",
    weather: "cloud",
    precipitation: "0%",
  },
];

export const dailyForcastDummyData = [
  {
    id: 1,
    dayOrTime: "Today",
    temp: "24°/28°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 2,
    dayOrTime: "Sunday",
    temp: "24°/28°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 3,
    dayOrTime: "Monday",
    temp: "24°/28°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 4,
    dayOrTime: "Tuesday",
    temp: "24°/28°",
    weather: "cloud",
    precipitation: "0%",
  },
  {
    id: 5,
    dayOrTime: "Wednesday",
    temp: "24°/28°",
    weather: "cloud",
    precipitation: "0%",
  },
];
