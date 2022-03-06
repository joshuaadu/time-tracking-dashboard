import { useState } from "react";
import { Route } from "react-router-dom";
import Activity from "./components/Activity";
import Profile from "./components/Profile";
import Data from "./store/data";
import "./styles.css";

export default function App() {
  const [timeFrame, setTimeFrame] = useState("daily");
  const timeFrameHandler = (timeFrame) => {
    setTimeFrame(timeFrame);
  };

  return (
    <div className="App">
      <Profile timeframe={timeFrameHandler} />
      <Route path="/daily">
        {Data.map((item) => (
          <Activity
            title={item.title}
            data={item}
            key={item.title}
            timeFrame={timeFrame}
          />
        ))}
      </Route>
      <Route path="/weekly">
        {Data.map((item) => (
          <Activity
            title={item.title}
            data={item}
            key={item.title}
            timeFrame={timeFrame}
          />
        ))}
      </Route>
      <Route path="/monthly">
        {Data.map((item) => (
          <Activity
            title={item.title}
            data={item}
            key={item.title}
            timeFrame={timeFrame}
          />
        ))}
      </Route>
    </div>
  );
}
