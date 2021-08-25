import Profile from "../Profile";
import "./styles.css";

const Master = (props) => {
  const { profiles } = props;
  return (
    <div className="master-content">
      {profiles.map((profile, index) => {
        return <Profile key={index} profile={profile} index={index} />;
      })}
    </div>
  );
};

export default Master;
