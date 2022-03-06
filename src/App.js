import { useState } from "react";
import Activity from "./components/Activity";
import Profile from "./components/Profile";
import Data from "./store/data";
import "./styles.css";

export default function App() {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const data = ["play", "worK", "Study", "exercise", "Self-care"];
  return (
    <div className="App">
      <Profile />
      {Data.map((item) => (
        <Activity
          title={item.title}
          data={item}
          key={item.title}
          timeFrame={timeFrame}
        />
      ))}
    </div>
  );
}
