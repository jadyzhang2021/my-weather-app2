import { useState, useEffect } from "react";
import { fetchWeatherData } from "../../http";
import CityForcast from "./CityForcast";
import classes from "./ForcastDashBoard.module.css";

const ForcastDashBoard = ({ inputValue }) => {
  const [farecastData, setFarcastData] = useState([]);

  async function fetchData() {
    try {
      const resdata = await fetchWeatherData(inputValue);

      const forecastDayDetail = resdata.forecast.forecastday.map(
        (forecastData) => {
          return {
            date: forecastData.date,
            maxTemp: forecastData.day.maxtemp_c,
            minTemp: forecastData.day.mintemp_c,
            icon: forecastData.day.condition.icon,
            id: farecastData.date_epoch,
          };
        }
      );

      setFarcastData(forecastDayDetail);
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  return (
    <div className={classes.forcastContainer}>
      <ul className={classes.forcastDetail}>
        {farecastData.map((data) => (
          <CityForcast
            key={data.id}
            day={data.date}
            maxTemp={data.maxTemp}
            minTemp={data.minTemp}
            icon={data.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default ForcastDashBoard;
