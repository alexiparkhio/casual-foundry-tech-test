import { Coordinates } from "../../types/Cities";

export const getGeolocation = (): Promise<Coordinates> =>
  new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (geolocation: GeolocationPosition) => {
          resolve({
            lat: geolocation.coords.latitude,
            lng: geolocation.coords.longitude,
          });
        }
      );
    } else {
      reject((e: any) => {
        throw new Error(e);
      });
    }
  });
