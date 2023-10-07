import { CitiesList } from "./components/cities/CitiesList/CitiesList";
import { GeoLocationProvider } from "./components/ctx/GeoLocationProvider";

function App() {
  return (
    <GeoLocationProvider>
      <div className="App" data-testid="App">
        <CitiesList />
      </div>
    </GeoLocationProvider>
  );
}

export default App;
