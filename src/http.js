const apikey = "79f4f5608a634c6593841332243001";

export async function fetchWeatherData(city) {
  const cityValue = city || "sydney";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${cityValue}&days=4&aqi=no&alerts=no`;

  const response = await fetch(url);
  const resdata = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return resdata;
}
