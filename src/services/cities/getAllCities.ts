import citiesList from "../../db/data.json";
import { City, CityFromAPI } from "../../types/Cities";
import {
  WEATHER_UNITS_AVAILABLE,
  Weather,
  WeatherUnitsKey,
} from "../../types/Weather";
import { getWeather } from "../weather/getWeather";

export const getAllCities = async (): Promise<City[]> => {
  const parsedCities: City[] = [];
  const cities: CityFromAPI[] = citiesList;

  // A normal for loop is used instead of other iterator methods (e.g. Array.prototype.forEach) in order to trigger async requests in parallel
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const weatherByUnits = await getWeatherByUnitsByCity(city);

    parsedCities[i] = new City(
      city,
      weatherByUnits as Record<WeatherUnitsKey, Weather>
    );
  }

  return parsedCities;
};

//
const getWeatherByUnitsByCity = async (
  city: CityFromAPI | City
): Promise<Record<WeatherUnitsKey, Weather>> => {
  const weatherByUnits = {};
  // A normal for loop is used instead of other iterator methods (e.g. Array.prototype.forEach) in order to trigger async requests in parallel
  for (let i = 0; i < WEATHER_UNITS_AVAILABLE.length; i++) {
    const weather = await getWeather(
      city.coords.lat,
      city.coords.lng,
      WEATHER_UNITS_AVAILABLE[i],
      city.name
    );

    (weatherByUnits as Record<WeatherUnitsKey, Weather>)[
      WEATHER_UNITS_AVAILABLE[i]
    ] = weather;
  }
  return weatherByUnits as Record<WeatherUnitsKey, Weather>;
};
