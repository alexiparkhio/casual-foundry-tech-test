export type WeatherUnitsKey = "metric" | "imperial";
export type WeatherUnitsValue = "ºC" | "ºF";
export const WEATHER_UNITS_AVAILABLE: WeatherUnitsKey[] = [
  "imperial",
  "metric",
];
export const WeatherUnits: Record<WeatherUnitsKey, WeatherUnitsValue> = {
  metric: "ºC",
  imperial: "ºF",
};
export const WeatherUnitsReversed: Record<WeatherUnitsValue, WeatherUnitsKey> =
  {
    ºC: "metric",
    ºF: "imperial",
  };

const MAX_DEGREES = 360;
export interface WeatherFromAPI {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

export interface IWeather {}

export class Weather implements IWeather {
  public wind: WeatherWind;
  public humidity: number;
  public temperature: number;

  constructor(weatherFromAPI: WeatherFromAPI) {
    this.wind = {
      speed: weatherFromAPI.wind.speed,
      direction: this.getWindDirection(weatherFromAPI.wind.deg),
    };
    this.humidity = weatherFromAPI.main.humidity;
    this.temperature = weatherFromAPI.main.temp;
  }
  private getWindDirection(angle: number): CompassDirection {
    const directions: CompassDirection[] = [
      "N",
      "NE",
      "E",
      "SE",
      "S",
      "SW",
      "W",
      "NW",
    ];
    const index =
      Math.round(
        ((angle %= MAX_DEGREES) < 0 ? angle + MAX_DEGREES : angle) / 45
      ) % directions.length;

    return directions[index];
  }
}

export interface WeatherWind {
  speed: number;
  direction: CompassDirection;
}

export type CompassDirection =
  | "N"
  | "NE"
  | "E"
  | "SE"
  | "S"
  | "SW"
  | "W"
  | "NW";
