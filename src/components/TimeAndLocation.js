const TimeAndLocation = ({ weather }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        {!weather ? (
          "Loading..."
        ) : (
          <p className="text-xl font-extralight">
            {weather.formattedLocalTime}
          </p>
        )}
        {/* <p className="text-xl font-extralight">{formattedLocalTime}</p> */}
      </div>
    </div>
  );
};

export default TimeAndLocation;
