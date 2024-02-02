import { useEffect, useState } from "react";
import { fetchWeatherData } from "../../http";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";
import classes from "./SearchDashBoard.module.css";
import backgroundImage from "../../Assets/backgrounImage";

const SearchDashBoard = ({ setInputValue }) => {
  const [inputCity, setInputCity] = useState("Sydney");
  const [storedData, setStoredData] = useState([]);
  const [searchHistoryData, setSearchHistoryData] = useState({});

  async function fetchData() {
    console.log({ inputCity });
    try {
      const resdata = await fetchWeatherData(inputCity);

      setSearchHistoryData({
        city: resdata.location.name,
        maxTemp: resdata.forecast.forecastday[0].day.maxtemp_c,
        minTemp: resdata.forecast.forecastday[0].day.mintemp_c,
        icon: resdata.current.condition.icon,
      });
    } catch (error) {
      console.log({ error });
    }
  }
  console.log({ searchHistoryData });

  useEffect(() => {
    fetchData();
    const storedLocalStorage = JSON.parse(localStorage.getItem("cityValue"));
    setStoredData(storedLocalStorage);
  }, [inputCity]);

  const onSubmitkHandler = () => {
    setInputValue(inputCity);
    const currentStoredData = [...storedData, searchHistoryData];
    const newDataToStore = currentStoredData.slice(-4);
    setStoredData(newDataToStore);
    localStorage.setItem("cityValue", JSON.stringify(newDataToStore));
  };

  const updatedStoreData = storedData.map((item, index) => {
    return {
      ...item,
      image: backgroundImage[index].image.src,
      color: backgroundImage[index].image.color,
    };
  });

  console.log({ storedData });
  console.log({ updatedStoreData });

  return (
    <div>
      <SearchBar
        inputCity={inputCity}
        setInputCity={setInputCity}
        onSubmitkHandler={onSubmitkHandler}
      />
      <ul className={classes.searchHistorybox}>
        {updatedStoreData.map((storeData) => (
          <SearchHistory
            icon={storeData.icon}
            city={storeData.city}
            backgroundImage={storeData.image}
            backgroundColor={storeData.color}
            maxTemp={storeData.maxTemp}
            minTemp={storeData.minTemp}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchDashBoard;
