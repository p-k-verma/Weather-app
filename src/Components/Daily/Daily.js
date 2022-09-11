import { React, useState } from "react";
import Chart from './Chart'
import { weatherapi } from "../../https/Https";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../Store/WeatherDataSlice";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const dispatch = useDispatch();
  const DailyData = useSelector((state) => state.Wather.daily);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
  };

  function getDay(dt) {
    let day = new Date(dt * 1000);
    return day.toLocaleString("en-us", { weekday: "long" }).slice(0, 3);
  }

  function ctof() {
    const response = weatherapi("imperial");
    response.then((res) => dispatch(weatherActions.addData(res)));
  }
  function ftoc() {
    const response = weatherapi("metric");
    response.then((res) => dispatch(weatherActions.addData(res)));
  }

  return (
    <>
      <div className="main">
        <Slider
          {...settings}
          asNavFor={nav2} ref={el => setNav1(el)}
        >
          {DailyData.map((arr, index) => {
            return (
              <div key={`_p${index}`}>
                <div className="submain">
                  <img
                    src={`http://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png`}
                    alt="weather_icon"
                  />
                  <h1>
                    {Math.round(arr.temp.max)}
                    <sup>o</sup>
                  </h1>
                  <div className="sign">
                    <h4>
                      <span onClick={ftoc}>
                        <sup>o </sup> C
                      </span>{" "}
                      |{" "}
                      <span onClick={ctof}>
                        <sup>o </sup> F
                      </span>
                    </h4>
                  </div>
                  <div className="single">
                    <h4>Pressure: {arr.pressure}hPa</h4>
                    <h4>Humidity: {arr.humidity}%</h4>
                    <h4>Wind: {Math.round(arr.wind_speed * 3.6)} Km/h</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <Chart/>


      <div className="mainbelow">
        <Slider
          {...settings1}
          asNavFor={nav1} ref={el => setNav2(el)}
        >
          {DailyData.map((arr, index) => {
            return (
              <div key={`_222${index}`}>
                <div className="wrap">
                  <h2>{getDay(arr.dt)}</h2>
                  <img
                    src={`http://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png`}
                    alt="weather_icon"
                  />
                  <h4>
                    <span>
                      {Math.round(arr.temp.max)}
                      <sup>o</sup>{" "}
                    </span>
                    <span>
                      {Math.round(arr.temp.min)}
                      <sup>o</sup>{" "}
                    </span>
                  </h4>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
