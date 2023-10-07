export type WeatherUnitsKey = "metric" | "imperial";
export type WeatherUnitsValue = "ºC" | "ºF";
export const WeatherUnits: Record<WeatherUnitsKey, WeatherUnitsValue> = {
  metric: "ºC",
  imperial: "ºF",
};
export const WeatherUnitsReversed: Record<WeatherUnitsValue, WeatherUnitsKey> =
  {
    ºC: "metric",
    ºF: "imperial",
  };
