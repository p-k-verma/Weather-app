import { useState } from "react";
import { useSelector } from "react-redux";

export default function Current() {
    const curretData = useSelector((state) => state.Wather.current);
    const [currentTemperature, setcurrentTemp] = useState(curretData.temp)
    const [coloractive, setcoloractive] = useState(true)

    function ctof() {
        setcurrentTemp ((state)=> (state * (9/5)) + 32)
        setcoloractive(false)
    }
    function ftoc(){
        setcurrentTemp(curretData.temp)
    }
  return (
    <div className="current">
        <img src={`http://openweathermap.org/img/wn/${curretData.weather[0].icon}@2x.png`} alt="" />
        <h1 className="maintemp">{Math.round(currentTemperature)}</h1>
        <div className="convert">
            <h4><span onClick={ftoc} className={coloractive ? "active" : "" }><sup>o </sup> C</span> | <span onClick={ctof} className={coloractive ? "" : "active" }><sup>o </sup> F</span></h4>
        </div>
        <div className="curr_detail">
            <h4>Pressure: {curretData.pressure}hPa</h4>
            <h4>Humidity: {curretData.humidity}%</h4>
            <h4>Wind: {Math.round(curretData.wind_speed * 3.6)} Km/h</h4>
        </div>
    </div>
  )
}
