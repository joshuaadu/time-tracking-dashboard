import useIcon from "../hooks/useIcon";
import Card from "../UI/Card";
import classes from "./Activity.module.css";
import ellipsis from "../images/icon-ellipsis.svg";
import usePeriod from "../hooks/usePeriod";
const Activity = (props) => {
  const { title, timeframes } = props.data;
  const { current, previous } = usePeriod(
    props.timeFrame,
    timeframes[props.timeFrame]
  );
  const iconName = title.toLowerCase().replace(" ", "-");
  const icon = useIcon(iconName);

  const backgroundCard = (
    <Card className={`${classes["background-card"]} ${classes[iconName]}`}>
      <img className={classes.img} src={icon} alt={`${props.title} icon`} />
    </Card>
  );
  const frontCard = (
    <Card className={classes["details-card"]}>
      <div className={classes["details-top"]}>
        <div className={classes.title}>{title}</div>
        <img src={ellipsis} className={classes.ellipsis} alt="ellipsis" />
      </div>
      <div className={classes["details-bottom"]}>
        <div className={classes["current-period"]}>{current}</div>
        <div className={classes["previous-period"]}>{previous}</div>
      </div>
    </Card>
  );

  return (
    <div className={classes.activity}>
      {backgroundCard}
      {frontCard}
    </div>
  );
};

export default Activity;
