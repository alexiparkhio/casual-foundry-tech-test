import { Coordinates } from "../../types/Cities";

/**
 * getGeolocations retrieves the current user's geolocation and returns its latitude and longitude.
 * @returns {Promise<Coordinates>} The lat and lng from the user.
 */
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
