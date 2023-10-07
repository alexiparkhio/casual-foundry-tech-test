import React, { useState } from "react";
import "./CityItem.scss";

/* Types */
import { City } from "../../../types/Cities";
import { WeatherUnits } from "../../../types/Weather";

/* Context */
import { useCitiesContext } from "../../ctx/CitiesProvider";

/* Components */
import { Title } from "../../shared/atoms/Title/Title";
import { CityCardContainer } from "../CityCardContainer/CityCardContainer";

interface CityItemProps {
  city: City;
}

/**
 * CityItem represents the square cell showing a city and its information.
 * @param {City} city All city related data.
 * @returns {React.FC<CityItemProps>} CityItem
 */
export const CityItem: React.FC<CityItemProps> = ({ city }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { selectedTemperatureUnit } = useCitiesContext();

  return (
    <CityCardContainer
      image={city.image}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="CityItem__title">
        <Title>{city.name}</Title>

        <span className="CityItem__country">{city.continent}</span>
      </div>

      {isClicked ? (
        <div className="CityItem__weather">
          <Title>
            {city.weatherByUnits[selectedTemperatureUnit].temperature}{" "}
            {WeatherUnits[selectedTemperatureUnit]}
          </Title>

          <span className="CityItem__weather-text">
            Humidity: {city.weatherByUnits[selectedTemperatureUnit].humidity}º
          </span>

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
