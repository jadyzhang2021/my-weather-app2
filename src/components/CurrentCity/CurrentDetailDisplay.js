import CurrentDetail from "./CurrentDetail";
import HumidityIcon from "../../Assets/HumidityIcon";
import PMIcon from "../../Assets/PMIcon";
import SomatosensoreIcon from "../../Assets/SomatosensoreIcon";
import WindSpeed from "../../Assets/WindSpeed";

import classes from "./CurrentDetailDisplay.module.css";

const CurrentDetailDisplay = ({ weatherData }) => {
  const weatherFeelslike = Math.round(weatherData.feelslike);
  const weatherTemperatureF = Math.round(weatherData.temperatureF);
  const weatherWindspeed = Math.round(weatherData.windSpeed);

  const humidity = <HumidityIcon />;
  const PMicon = <PMIcon />;
  const somatosensore = <SomatosensoreIcon />;
  const windspeed = <WindSpeed />;

  return (
    <div className={classes.currentDashBoard_display}>
      <CurrentDetail
        icon={humidity}
        weathrDetail={weatherData.humidity}
        unit="%"
      />
      <CurrentDetail icon={PMicon} weathrDetail={weatherFeelslike} unit="ug" />
      <CurrentDetail
        icon={somatosensore}
        weathrDetail={weatherTemperatureF}
        unit="F"
      />
      <CurrentDetail
        icon={windspeed}
        weathrDetail={weatherWindspeed}
        unit="%"
      />
    </div>
  );
};

export default CurrentDetailDisplay;
