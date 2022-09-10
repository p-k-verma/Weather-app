import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import "swiper/css";

export default function Daily() {
  const DailyData = useSelector((state) => state.Wather.daily);

  function getDay(dt){
    let day = new Date(dt*1000);
    return day.toLocaleString("en-us", { weekday: "long" }).slice(0,3)
  }

  return (
    <div className="daily">
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
      >
        {DailyData.map((daily,index) => 
          <SwiperSlide key={`p_${index}`}>
            <div>
              <h2>{getDay(daily.dt)}</h2>
              <img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt="" />
              <h4>
                <span>{Math.round(daily.temp.max)}<sup>o</sup> </span>
                <span>{Math.round(daily.temp.min)}<sup>o</sup> </span>
              </h4>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
