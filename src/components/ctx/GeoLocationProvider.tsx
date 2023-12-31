import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/* Services */
import { getGeolocation } from "../../services/geolocation/getGeolocation";

/* Types */
import { Coordinates } from "../../types/Cities";

interface GeoLocationContent {
  lat: number | null;
  lng: number | null;
  loading: boolean;
}

const GeoLocationContext = createContext<GeoLocationContent>(
  {} as GeoLocationContent
);

/**
 * GeoLocationProvider represents the context provider for all geolocation related states and data.
 * @returns {React.FC<PropsWithChildren>} GeoLocationProvider
 */
export const GeoLocationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getGeolocation()
      .then((coords: Coordinates) => {
        setLat(coords.lat);
        setLng(coords.lng);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const value = {
    lat,
    lng,
    loading,
  };

  return (
    <GeoLocationContext.Provider value={value}>
      {children}
    </GeoLocationContext.Provider>
  );
};

export const useGeoLocationContext = () => useContext(GeoLocationContext);
