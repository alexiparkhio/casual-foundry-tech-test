import React, { useState } from "react";
import { City } from "../../../types/Cities";
import { WeatherUnits } from "../../../types/Weather";
import { useCitiesContext } from "../../ctx/CitiesProvider";
import { Title } from "../../shared/atoms/Title/Title";
import { CityCardContainer } from "../CityCardContainer/CityCardContainer";
import "./CityItem.scss";

interface CityItemProps {
  city: City;
}

export const CityItem: React.FC<CityItemProps> = ({ city }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { selectedTemperatureUnit } = useCitiesContext();

  return (
    <CityCardContainer
      image={city.image}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
    >
      <div className="CityItem__title">
        <Title>{city.name}</Title>
        <span className="CityItem__country">{city.continent}</span>
      </div>
      {isHovered ? (
        <div className="CityItem__weather">
          <Title>
            {city.weatherByUnits[selectedTemperatureUnit].temperature}{" "}
            {WeatherUnits[selectedTemperatureUnit]}
          </Title>
          <span className="CityItem__weather-text">
            Humidity: {city.weatherByUnits[selectedTemperatureUnit].humidity}º
          </span>
          {/* <span className="CityItem__weather-text">UVI: {uvi}%</span> */}
          <span className="CityItem__weather-text">
            Wind: {city.weatherByUnits[selectedTemperatureUnit].wind.direction}{" "}
            {city.weatherByUnits[selectedTemperatureUnit].wind.speed}kmh
          </span>
        </div>
      ) : (
        <span className="CityItem__description">{city.description}</span>
      )}
    </CityCardContainer>
  );
};
