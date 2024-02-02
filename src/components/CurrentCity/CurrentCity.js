import classes from "./CurrentCity.module.css";
import CurrentDate from "./CurrentDate";

const CurrentCity = ({ weatherData }) => {
  const temperature = Math.round(weatherData.temperature);
  const minTemperature = Math.round(weatherData.minTemp);
  const maxTemperature = Math.round(weatherData.maxTemp);
  return (
    <div className={classes.container}>
      <div className={classes.currenttime}>
        <CurrentDate />
      </div>
      <div className={classes.current_city}>{weatherData.city} </div>
      <div className={classes.current_temp}>
        {temperature}
        <span className={classes.current_temp_c}> 。</span>
      </div>
      <div className={classes.current_tempRange}>
        {minTemperature} - {maxTemperature}
        <span className={classes.current_tempRange_c}>。</span>
      </div>
      <img
        className={classes.current_icon}
        src={weatherData.icon}
        alt="weather icon"
      />
    </div>
  );
};

export default CurrentCity;
