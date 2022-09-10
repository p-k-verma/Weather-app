import "./App.css";
import { useEffect } from "react";
import { weatherapi } from "./https/Https";
import { useDispatch } from "react-redux";
import { weatherActions } from "./Store/WeatherDataSlice";
import Daily from "./Components/Daily/Daily";
import Chart from "./Components/Daily/Chart";
import Current from "./Components/Current/Current";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const response = weatherapi();
    response.then((res) => dispatch(weatherActions.addData(res)));
    response.catch((error)=> console.log(error))
  }, [dispatch]);

  return(
    <div className="App">
      <Current/>
      <Chart/>
      <Daily/>
    </div>
  );
}

export default App;
