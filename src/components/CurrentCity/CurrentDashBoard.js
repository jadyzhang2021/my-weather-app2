/* eslint-disable react-hooks/exhaustive-deps */
import CurrentCity from "./CurrentCity";
import { useEffect, useState } from "react";
import classes from "./CurrentDashBoard.module.css";

import CurrentDetailDisplay from "./CurrentDetailDisplay";
import { fetchWeatherData } from "../../http";

const CurrentDashBoard = ({ inputValue }) => {
  const [weatherData, setWeatherData] = useState({});

  async function fetchData() {
    try {
      const resdata = await fetchWeatherData(inputValue);
      console.log({ resdata });
      setWeatherData({
        city: resdata.location.name,
        icon: resdata.current.condition.icon,
        temperature: resdata.current.temp_c,
        maxTemp: resdata.forecast.forecastday[0].day.maxtemp_c,
        minTemp: resdata.forecast.forecastday[0].day.mintemp_c,
        temperatureF: resdata.current.temp_f,
        windSpeed: resdata.current.wind_kph,
        humidity: resdata.current.humidity,
        feelslike: resdata.current.feelslike_f,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  // const storedDataFromLocalStorge = JSON.parse(localStorage.getItem("wearthData")) || [];
  // setStoredData(storedDataFromLocalStorge);

  // const currentStoreData = [...storedData, weatherData];
  // const newDataToStore = currentStoreData.slice(-4);
  // setStoredData(newDataToStore);

  localStorage.setItem("wearthData", JSON.stringify(weatherData));

  return (
    <div className={classes.currentDashBoard}>
      <CurrentCity weatherData={weatherData} />
      <CurrentDetailDisplay weatherData={weatherData} />
    </div>
  );
};

export default CurrentDashBoard;
