import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllCities } from "../../services/cities/getAllCities";
import { Cities, City } from "../../types/Cities";
import { WeatherUnitsKey } from "../../types/Weather";

interface CitiesContent {
  cities: Cities;
  loading: boolean;
  selectedTemperatureUnit: WeatherUnitsKey;
  setSelectedTemperatureUnit: (units: WeatherUnitsKey) => void;
}

const CitiesContext = createContext<CitiesContent>({} as CitiesContent);

export const CitiesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cities, setCities] = useState<Cities>(new Cities([]));
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] =
    useState<WeatherUnitsKey>("metric");

  useEffect(() => {
    setLoading(true);

    getAllCities()
      .then((citiesList: City[]) => {
        setCities(new Cities(citiesList));
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const value = {
    cities,
    loading,
    selectedTemperatureUnit,
    setSelectedTemperatureUnit,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export const useCitiesContext = () => useContext(CitiesContext);
