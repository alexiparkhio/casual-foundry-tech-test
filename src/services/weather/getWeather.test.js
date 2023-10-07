import { Weather } from "../../types/Weather";
import { getWeatherResponse } from "../mocks";
import { getWeather } from "./getWeather";

describe("[getWeather]", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => {
      return { json: () => Promise.resolve(getWeatherResponse) };
    });
  });

  const expected = new Weather(getWeatherResponse);

  it("should return a Weather element on a successfull request", async () => {
    const response = await getWeather(50, 2, "metric", "Barcelona");

    expect(typeof response.temperature).toEqual("number");
    expect(typeof response.humidity).toEqual("number");
    expect(typeof response.wind.direction).toEqual("string");
    expect(typeof response.wind.speed).toEqual("number");

    expect(expected.humidity).toEqual(response.humidity);
    expect(expected.temperature).toEqual(response.temperature);
    expect(expected.wind).toEqual(response.wind);
  });
});
