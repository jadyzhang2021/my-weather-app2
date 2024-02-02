import { format, parseISO } from "date-fns";
import classes from "./CityForcast.module.css";

const CityForcast = ({ day, maxTemp, minTemp, icon }) => {
  const parsedDate = parseISO(day);
  const formattedDate = format(parsedDate, "dd MMM");
  const dayOfWeek = format(parsedDate, "EEEE");
  const maxTemperature = Math.round(maxTemp);
  const minTemperature = Math.round(minTemp);

  return (
    <li className={classes.cityforcast}>
      <div className={classes.cityforcast_day}> {dayOfWeek}</div>
      <div> {formattedDate}</div>
      <img src={icon} alt="weather icon" className={classes.cityforcast_icon} />
      <div className={classes.tempRange}>
        {minTemperature}
        <span className={classes.tempRange_degree}>。</span>- {maxTemperature}
        <span className={classes.tempRange_degree}>。</span>
      </div>
    </li>
  );
};

export default CityForcast;
