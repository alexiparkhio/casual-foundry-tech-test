import { City } from "../../../types/Cities";
import "./CitiesList.scss";

import { useCitiesContext } from "../../ctx/CitiesProvider";
import { LoadingDisplayer } from "../../shared/loading/LoadingDisplayer";
import { CityItem } from "../CityItem/CityItem";

export const CitiesList = () => {
  const { loading, cities } = useCitiesContext();

  return (
    <>
      {loading ? (
        <LoadingDisplayer />
      ) : (
        <div className="CitiesList">
          {cities.cities.map((city: City, index: number) => (
            <CityItem city={city} key={city.name + index} />
          ))}
        </div>
      )}
    </>
  );
};
