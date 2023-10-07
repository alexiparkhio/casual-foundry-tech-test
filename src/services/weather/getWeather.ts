import { Weather, WeatherFromAPI, WeatherUnitsKey } from "../../types/Weather";

export const getWeather = async (
  latitude: number,
  longitude: number,
  units: WeatherUnitsKey,
  cityName?: string
): Promise<Weather> => {
  const response = await fetch(
    `${process.env.REACT_APP_WEATHER_API_URL}?${
      cityName ? `q=${cityName}&` : ""
    }lat=${latitude}&lon=${longitude}&appid=${
      process.env.REACT_APP_WEATHER_API_KEY
    }&units=${units}`
  );
  const weatherFromAPI: WeatherFromAPI = await response.json();

  return new Weather(weatherFromAPI);
};
