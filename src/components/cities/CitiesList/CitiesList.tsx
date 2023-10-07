import React from "react";
import "./CitiesList.scss";

/* Types */
import { City } from "../../../types/Cities";

/* Context */
import { useCitiesContext } from "../../ctx/CitiesProvider";

/* Components */
import { LoadingDisplayer } from "../../shared/loading/LoadingDisplayer";
import { CityItem } from "../CityItem/CityItem";

/**
 * CitiesList represents the iterable component that will print all available CityItem components.
 * @returns {React.FC} CitiesList
 */
export const CitiesList: React.FC = () => {
  const { loading, citiesList } = useCitiesContext();

  return (
    <>
      {loading ? (
        <LoadingDisplayer />
      ) : (
        <div className="CitiesList">
          {citiesList.map((city: City, index: number) => (
            <CityItem city={city} key={city.name + index} />
          ))}

          {citiesList.length === 0 && <span>No results found</span>}
        </div>
      )}
    </>
  );
};
