import classes from "./SearchBar.module.css";

const SearchBar = ({ onSubmitkHandler, inputCity, setInputCity }) => {
  return (
    <div className={classes.searchbar}>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => {
          setInputCity(e.target.value);
        }}
      ></input>
      <button onClick={onSubmitkHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
