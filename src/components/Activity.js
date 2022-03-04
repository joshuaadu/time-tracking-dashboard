import useIcon from "../hooks/useIcon";
import Card from "../UI/Card";
import classes from "./Activity.module.css";
const Activity = (props) => {
  const iconName = props.title.toLowerCase().replace(" ", "-");
  const icon = useIcon(iconName);
  return (
    <div className={classes.activity}>
      <Card className={`${classes["background-card"]} ${classes[iconName]}`}>
        <img className={classes.img} src={icon} alt={`${props.title} icon`} />
      </Card>
      <Card className={classes["details-card"]}></Card>
    </div>
  );
};

export default Activity;
