import React from "react";
import "./FiltersAndSortersContainer.scss";

/* Types */
import { ContinentFilterer, NameFilterer } from "../../../types/Filterers";
import { DistanceSorter, NameSorter } from "../../../types/Sorters";
import { WeatherUnitsReversed } from "../../../types/Weather";

/* Context */
import {
  AVAILABLE_CONTINENTS,
  useCitiesContext,
} from "../../ctx/CitiesProvider";
import { useGeoLocationContext } from "../../ctx/GeoLocationProvider";

/* Components */
import { DropdownInput } from "../../shared/atoms/DropdownInput/DropdownInput";
import { Input } from "../../shared/atoms/Input/Input";
import { Tag } from "../../shared/atoms/Tag/Tag";

/**
 * FiltersAndSortersContainer represents the container of all filters needed to sort and filter the cities list.
 * @returns {React.FC} FiltersAndSortersContainer
 */
export const FiltersAndSortersContainer: React.FC = () => {
  const {
    selectedTemperatureUnit,
    setSelectedTemperatureUnit,
    citiesClient,
    nameQuery,
    setNameQuery,
    selectedContinent,
    setSelectedContinent,
    selectedSorter,
    setSelectedSorter,
  } = useCitiesContext();
  const { lat, lng } = useGeoLocationContext();

  return (
    <div className="FiltersAndSortersContainer">
      <div className="FiltersAndSortersContainer__column">
        <Input
          label="Search"
          value={nameQuery}
          placeholder="Type to search"
          onChange={(query) => {
            citiesClient.addFilterer(new NameFilterer(query));
            setNameQuery(query);
          }}
        />
      </div>

      <div className="FiltersAndSortersContainer__column">
        <DropdownInput
          label="Continent"
          value={selectedContinent}
          onSelect={(continent) => {
            citiesClient.addFilterer(new ContinentFilterer(continent));
            setSelectedContinent(continent);
          }}
          data={AVAILABLE_CONTINENTS}
        />
      </div>

      <div className="FiltersAndSortersContainer__column">
        <Tag>Sort by</Tag>
        <span>
          <span
            className={`FiltersAndSortersContainer__option ${
              selectedSorter === "NAME" ? "selected" : ""
            }`}
            onClick={() => {
              citiesClient.addSorter(new NameSorter());
              setSelectedSorter("NAME");
            }}
          >
            Name
          </span>{" "}
          |
          <span
            className={`FiltersAndSortersContainer__option ${
              selectedSorter === "DISTANCE" ? "selected" : ""
            }`}
            onClick={() => {
              citiesClient.addSorter(new DistanceSorter(lat!, lng!));
              setSelectedSorter("DISTANCE");
            }}
          >
            Distance
          </span>
        </span>
      </div>

      <div className="FiltersAndSortersContainer__column">
        <Tag>Units</Tag>
        <span>
          <span
            className={`FiltersAndSortersContainer__option ${
              selectedTemperatureUnit === WeatherUnitsReversed.ºC
                ? "selected"
                : ""
            }`}
            onClick={() => setSelectedTemperatureUnit(WeatherUnitsReversed.ºC)}
          >
            ºC
          </span>{" "}
          |
          <span
            className={`FiltersAndSortersContainer__option ${
              selectedTemperatureUnit === WeatherUnitsReversed.ºF
                ? "selected"
                : ""
            }`}
            onClick={() => setSelectedTemperatureUnit(WeatherUnitsReversed.ºF)}
          >
            ºF
          </span>
        </span>
      </div>
    </div>
  );
};
