import Card from "../UI/Card";
import classes from "./Activity.module.css";
const Activity = (props) => {
  return (
    <div className={classes.activity}>
      <Card className={`${classes["background-card"]} ${classes.play}`}></Card>
      <Card className={classes["details-card"]}></Card>
    </div>
  );
};

export default Activity;
