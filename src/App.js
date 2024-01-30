import { Input } from "./components/Input/Input";
import { Weather } from "./components/Weather/Weather";
import { useFetchWeather } from "./useFetchWeather";
import { useLocalStorage } from "./useLocalStorageLocation";

export function App() {
  const [location, setLocation] = useLocalStorage("", "location");
  const { isLoading, displayLocation, weather } = useFetchWeather(location);

  function onSetLocation(e) {
    setLocation((l) => e.target.value);
  }
  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <Input location={location} onChangeLocation={onSetLocation} />
      {isLoading && <p className="loader">Loading...</p>}
      {weather?.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>
  );
}
