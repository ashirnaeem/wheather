import { Card, List } from "antd";
import "antd/dist/antd.css";
import { dateBuilder } from "../../helpers";
import "./card.css";
const Cardarea = (props) => {
  const { weather } = props;
  const {
    dt_txt,
    main: { temp_max, temp_min },
  } = weather;
  // const pday = list;
  // let d = new Date();
  // // console.log(weather.dt_txt);
  // d = d.getDay();

  // console.log(dt_txt);
  // const checkDays = new Set();
  // const result = pday.filter((item) => {
  //   const day = new Date(item.pday).getDay();
  //   console.log(day);
  //   return !checkDays.has(day) && checkDays.add(day);
  // });
  // const Onetimeweather = () => {
  //   if (pday != dt_txt) {
  //     pday++;
  //   }
  // };
  // console.log(weather.weather[0].icon);
  return (
    <Card>
      {/* <p className="card-text">{dateBuilder(new Date())}</p> */}

      <p className="card-text">{dateBuilder(new Date(dt_txt))} </p>
      <img
        className="weather-card-image"
        src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}
      />

      <p className="temp-min-max">
        {Math.round(temp_min)}°{Math.round(temp_max)}°
      </p>
    </Card>
  );
};
export default Cardarea;
