// import { useEffect, useState } from "react";
// import getFormattedWeatherData from "../components/weatherService";

// const useWeatherData = () => {
//   const [query, setQuery] = useState({ q: "Toronto" });
//   const [units, setUnits] = useState("metric");
//   const [weather, setWeather] = useState(null);

//   const getWeather = async () => {
//     await getFormattedWeatherData({ ...query, units }).then((data) => {
//       setWeather(data);
//     });
//   };

//   useEffect(() => {
//     getWeather();
//   }, [query, units]);

//   return weather;
// };

// export default useWeatherData;
