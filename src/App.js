import "./App.css";
import SearchBar from "./components/searchBar/searchBar";
import InputField from "./components/inputField/inputField";
import SearchButton from "./components/searchButton/searchButton";
import Card from "./components/card/card";
import { useState } from "react";
import { dateBuilder } from "./helpers";
const api = {
  key: "c73aa228bfba692462f96e89080aa39a",
  base: "http://api.openweathermap.org/data/2.5/forecast?",
};
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  // const [temp, setUpdateTemp] = useState({ c: 0, f: 0 });
  // console.log(query);
  const { city = {}, list = [] } = weather;
  // const [day1,day2,day3,day4,day5]=list;
  const { name: cityName, id: cityId, country } = city;
  // const { name: countryName, id: countryId } = country;
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          // setQuery("");
          console.log(result);
          // console.log(search);
          // console.log(weather);
        });
    }
  };

  // console.log(list);

  const checkDays = new Set();
  const result = weather?.list?.filter((item) => {
    const day = new Date(item.dt_txt).getDay();
    // console.log(day);
    return !checkDays.has(day) && checkDays.add(day);
  });

  // weather.list.push(res);
  // const Ftemp = (ev) =>
  //   setUpdateTemp({
  //     c: ev.target.weather.list[0].main.temp,
  //     f: ((+ev.target.weather.list[0].main.temp * 9) / 5 + 32).toFixed(2),
  //   });
  // const days = ["Sunday", "Monday", "Tuesday"];
  // console.log(weather);
  // const [city, name, country] = weather;
  const {
    main: { pressure, humidity, temp },
    wind: { speed },
  } = list[0] ?? { main: {}, wind: {} };
  // const { icon } = weather ?? {};

  // const {
  //   main: { pressure, humidity, temp },
  //   wind: { speed },
  // } = undefined  { main: {}, wind: {} };

  return (
    <>
      <div className="wheatherApp">
        <SearchBar />
        <InputField query={query} setQuery={setQuery} search={search} />
        <SearchButton search={search} />
      </div>
      {cityId && (
        <div>
          <div className="location-box">
            <div className="location">
              {cityName},{country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            {/* <div className="weather">{weather.list[0].weather[0].main}</div> */}
            <div className="single-day-temp">
              <img
                className="weather-image"
                src={` http://openweathermap.org/img/wn/${weather?.list[0]?.weather[0]?.icon}@2x.png`}
              />
              <h2>{Math.round(temp)}</h2>
              {/* <h2>{Math.round(setUpdateTemp)}</h2> */}
              <h6>
                <span>°C</span>|<span>°F</span>
              </h6>
              {/* <h5>
                pressure:{weather.list[0].main.pressure}hPa <br /> humidity:
                {weather.list[0].main.humidity}% <br /> Wind Speed:
                {weather.list[0].wind.speed}m/s
              </h5> */}
              <h5>
                pressure:{pressure}hPa <br /> humidity:
                {humidity}% <br /> Wind Speed:
                {speed}m/s
              </h5>
            </div>
          </div>
          <div className="card-display">
            {/* {weather.list.push(result)} */}
            {result.map(
              (oneDayWeather, index) =>
                index < 5 && <Card weather={oneDayWeather} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default App;
