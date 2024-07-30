const Card = ({ forcastData }) => {
  return (
    <div className="border-b">
      <div className="grid grid-flow-row  mt-2">
        <div className="grid grid-cols-3 gap-16 p-2 w-full justify-items-center items-center">
          <div className="p-2 justify-self-start ml-5">{forcastData.title}</div>
          <div className="p-2">{`${forcastData.temp.toFixed()}°`}</div>
          <div className="">
            <img
              className="w-3/4"
              src={forcastData.icon}
              alt="weather condtion"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
