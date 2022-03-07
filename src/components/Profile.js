import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import profileImg from "../images/image-jeremy.png";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <Card className={classes.info}>
        <div className={classes.img}>
          <img src={profileImg} alt="Profile" />
        </div>
        <div className={classes.title}>
          <div>Report for</div>
          <div className={classes.name}>Jeremy Robson</div>
        </div>
      </Card>
      <Card className={classes.period}>
        <ul>
          <li>
            <NavLink
              to="/daily"
              activeClassName={classes.active}
              onClick={() => props.timeframe("daily")}
            >
              Daily
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weekly"
              activeClassName={classes.active}
              onClick={() => props.timeframe("weekly")}
            >
              Weekly
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/monthly"
              activeClassName={classes.active}
              onClick={() => props.timeframe("monthly")}
            >
              Monthly
            </NavLink>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Profile;
