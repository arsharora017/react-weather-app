import { BiCurrentLocation, BiSearch } from "react-icons/bi";

export const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-2/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search City"
          className="text-gray-500 text-xl font-light p-w w-full shadow-xl capitalize focus:outline-none p-1 rounded-lg"
        />
        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
        />

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °F
          </button>
        </div>
      </div>
    </div>
  );
};
