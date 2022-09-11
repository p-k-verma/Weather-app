import {AreaChart,XAxis,Tooltip,LabelList,Area,YAxis} from "recharts";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Chart() {
    const hourlyData = useSelector((state) => state.Wather.hourly);
    const [selector, setselector] = useState("temp")
    
    let check = hourlyData.map((e)=> {
        let date = new Date (e.dt * 1000)
        let fullTime = date.toLocaleTimeString('en-US')
        let time = fullTime.split(":")
       return {
                temp : Math.round(e.temp),
                dt : time[0] +":" + time[1] + fullTime.slice(-2),
                wind_speed : Math.round(e.wind_speed)
              }
    })

    
    function setWind(){
      setselector("wind_speed")
    }
    function setTemp(){
      setselector("temp")
    }

  return (
    <>    
        <h3 className="chartName"><span onClick={setTemp}>Temperature </span><span> | </span><span onClick={setWind}> Wind</span></h3>    
        <AreaChart
          data={check}
          width={window.screen.width - 18} height={150} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="dt" />
          <YAxis dataKey={selector} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={selector}
            // dataKey="uv"
            stroke="#000"
            fillOpacity={1}
            fill="url(#colorUv)"
          >
            <LabelList dataKey={selector} position="top" />
          </Area>
        </AreaChart>
    </>
  );
}
