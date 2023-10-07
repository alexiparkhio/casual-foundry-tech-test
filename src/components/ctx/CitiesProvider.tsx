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

export const AVAILABLE_CONTINENTS = [
  "Europe",
  "North America",
  "South America",
  "Africa",
  "Asia",
];

interface CitiesContent {
  citiesClient: Cities;
  citiesList: City[];
  loading: boolean;
  selectedTemperatureUnit: WeatherUnitsKey;
  setSelectedTemperatureUnit: (units: WeatherUnitsKey) => void;
  nameQuery: string;
  setNameQuery: (query: string) => void;
  selectedContinent: string;
  setSelectedContinent: (continent: string) => void;
  selectedSorter: string;
  setSelectedSorter: (sorter: string) => void;
}

const CitiesContext = createContext<CitiesContent>({} as CitiesContent);

export const CitiesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [citiesClient, setCitiesClient] = useState<Cities>(new Cities([]));
  const [citiesList, setCitiesList] = useState<City[]>([]);
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] =
    useState<WeatherUnitsKey>("metric");
  const [nameQuery, setNameQuery] = useState<string>("");
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [selectedSorter, setSelectedSorter] = useState<string>("");

  useEffect(() => {
    setLoading(true);

    getAllCities()
      .then((citiesResponse: City[]) => {
        setCitiesClient(new Cities(citiesResponse));
        setCitiesList(citiesResponse);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCitiesList(citiesClient.sortCities());
  }, [nameQuery, selectedContinent, selectedTemperatureUnit, selectedSorter]);

  const value = {
    citiesClient,
    citiesList,
    loading,
    selectedTemperatureUnit,
    setSelectedTemperatureUnit,
    nameQuery,
    setNameQuery,
    selectedContinent,
    setSelectedContinent,
    selectedSorter,
    setSelectedSorter,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export const useCitiesContext = () => useContext(CitiesContext);
