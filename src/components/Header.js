import { LOGO } from "../utils/constants";
import HeaderCities from "./HeaderCities";
import { Inputs } from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";

const Header = (weather) => {
  return (
    <div className="flex flex-col border-b-2 border-white">
      <div className="grid grid-rows-1 grid-flow-col">
        <img src={LOGO} alt="weather icon" className="size-20 col-span-1" />
        <div className="col-span-11 content-center">
          <HeaderCities />
        </div>
      </div>
      <Inputs />
      <TimeAndLocation weather={weather} />
    </div>
  );
};

export default Header;
