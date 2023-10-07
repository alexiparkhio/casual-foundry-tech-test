import { Weather, WeatherFromAPI, WeatherUnitsKey } from "../../types/Weather";

/**
 * getWeather retrieves specific weather data from a public API and parses it.
 * @param {number} latitude A provided latitude.
 * @param {number} longitude A provided longitude.
 * @param {WeatherUnitsKey} units The units from which data will be displayed. Currently only 'metric' and 'imperial' are available.
 * @param {string} cityName The city's name in order to get its weather data.
 * @returns {Promise<Weather>} The weather data from a provided city.
 */
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
