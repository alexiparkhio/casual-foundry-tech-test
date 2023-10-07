import { City } from "../../../types/Cities";
import "./CitiesList.scss";

import { useCitiesContext } from "../../ctx/CitiesProvider";
import { LoadingDisplayer } from "../../shared/loading/LoadingDisplayer";
import { CityItem } from "../CityItem/CityItem";

export const CitiesList = () => {
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
