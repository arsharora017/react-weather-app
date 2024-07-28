const Card = ({ forcastData }) => {
  //console.log(forcastData);
  return (
    <div className="border-b">
      <div className="grid grid-flow-row  mt-2">
        <div className="grid grid-cols-4 gap-16 p-2 w-full justify-items-center items-center">
          <div className="p-2 justify-self-start ml-5">
            {forcastData.dayOrTime}
          </div>
          <div className="p-2">{forcastData.temp}</div>
          <div className="">
            <img
              className="w-3/4"
              src={forcastData.weather}
              alt="weather condtion"
            />
          </div>
          {/* <div className="p-2">{forcastData.precipitation}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
