import { useGeoLocationContext } from "../../ctx/GeoLocationProvider";

export const CitiesList = () => {
  const { loading } = useGeoLocationContext();

  return <>{loading ? <span>Loading...</span> : <span>Bomboclaat</span>}</>;
};
