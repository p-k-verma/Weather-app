import "./App.css";
import { useEffect } from "react";
import { weatherapi } from "./https/Https";
import { useDispatch } from "react-redux";
import { weatherActions } from "./Store/WeatherDataSlice";
import Daily from "./Components/Daily/Daily";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const response = weatherapi("metric");
    response.then((res) => dispatch(weatherActions.addData(res)));
  }, [dispatch]);

  return(
    <div className="App">
      <Daily/>
    </div>
  );
}

export default App;
