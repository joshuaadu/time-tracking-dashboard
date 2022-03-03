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
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </Card>
      <Card className={classes.period}>
        <ul>
          <li>
            <NavLink to="/">Daily</NavLink>
          </li>
          <li>
            <NavLink to="/">Weekly</NavLink>
          </li>
          <li>
            <NavLink to="/">Monthly</NavLink>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Profile;
