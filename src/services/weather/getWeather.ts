import { WeatherUnitsKey } from "../../types/Weather";

export const getWeather = async (
  latitude: number,
  longitude: number,
  units: WeatherUnitsKey
) => {
  const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?
lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`);
  const data = await api_call.json();
};
