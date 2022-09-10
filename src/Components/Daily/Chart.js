import {AreaChart,XAxis,Tooltip,LabelList,ResponsiveContainer,Area,} from "recharts";
import { useSelector } from "react-redux";

export default function Chart() {
    const hourlyData = useSelector((state) => state.Wather.hourly);

    let check = hourlyData.map((e)=> {
        let date = new Date (e.dt * 1000)
        let ho = date.toLocaleTimeString('en-US')
       return {
                temp : Math.round(e.temp),
                dt : ho.slice(0,5) +' '+ ho.slice(-2),
              }
    })
    console.log("check",check);

  return (
    <>
      <ResponsiveContainer width={window.screen.width - 18} height={250} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        
        <AreaChart
          data={check}
        //   data={data}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="dt" />
          {/* <XAxis dataKey="name" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temp"
            // dataKey="uv"
            stroke="#000"
            fillOpacity={1}
            fill="url(#colorUv)"
          >
            <LabelList dataKey="temp" position="top" />
            {/* <LabelList dataKey="uv" position="top" /> */}
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
