import { CitiesList } from "./components/cities/CitiesList/CitiesList";
import { FiltersAndSortersContainer } from "./components/cities/FiltersAndSortersContainer/FiltersAndSortersContainer";
import { CitiesProvider } from "./components/ctx/CitiesProvider";
import { useGeoLocationContext } from "./components/ctx/GeoLocationProvider";
import { LoadingDisplayer } from "./components/shared/loading/LoadingDisplayer";

function App() {
  const { loading } = useGeoLocationContext();

  return (
    <div className="App" data-testid="App">
      {loading ? (
        <LoadingDisplayer />
      ) : (
        <CitiesProvider>
          <FiltersAndSortersContainer />
          <CitiesList />
        </CitiesProvider>
      )}
    </div>
  );
}

export default App;
