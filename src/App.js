import Activity from "./components/Activity";
import Profile from "./components/Profile";
import "./styles.css";

export default function App() {
  const data = ["play", "worK", "Study", "exercise", "Self-care"];
  return (
    <div className="App">
      <Profile />
      {data.map((item) => (
        <Activity title={item} key={item} />
      ))}
    </div>
  );
}
