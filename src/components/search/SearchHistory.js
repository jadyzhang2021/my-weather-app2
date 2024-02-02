import classes from "./SearchHistory.module.css";

const SearchHistory = ({
  icon,
  city,
  maxTemp,
  minTemp,
  backgroundImage,
  backgroundColor,
}) => {
  console.log({ backgroundImage });
  // const dynamicBackgroundImage = require(`${backgroundImage}`);
  const dynamicBackgroundImage = require("../../Assets/" +
    `${backgroundImage}`);

  console.log({ dynamicBackgroundImage });

  return (
    <li
      className={classes.searchHistory}
      style={{
        backgroundImage: `${backgroundColor},url(${dynamicBackgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <img src={icon} alt="weather icon" className={classes.icon} />
      <div>{city}</div>
      <div className={classes.tempRange}>
        {minTemp} ~ {maxTemp}
      </div>
    </li>
  );
};

export default SearchHistory;
