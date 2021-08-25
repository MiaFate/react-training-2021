import "./styles.css";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { profile } = props;

  return (
    <div className="card">
      <div className="card-image">
        <Link to={{ pathname: "/FullProfile", profile: profile }}>
          <img
            src={profile.picture.thumbnail}
            alt={`${profile.name.first} ${profile.name.last}`}
            height="48px"
            width="48px"
          />
        </Link>
      </div>
      <div className="card-data">
      <p className="fullname">{`${profile.name.title} ${profile.name.first} ${profile.name.last}`}</p>
      <p>{profile.location.city}</p>
      <p>{profile.location.country}</p>
      </div>
    </div>
  );
};
export default Profile;
