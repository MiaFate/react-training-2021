import "./styles.css";
import { Link } from "react-router-dom";
import FullProfile from "../FullProfile";

const Profile = (props) => {
  const { profile, index } = props;
  
  //console.log(profile);
  return (
    <div className="card">
      
        <Link to={{pathname:"/FullProfile", profile:profile}}>
        <img
            src={profile.picture.thumbnail}
            alt={`${profile.name.first} ${profile.name.last}`}
            
          />
        </Link>
          
        
        <p>{`${profile.name.title} ${profile.name.first} ${profile.name.last}`}</p>
        <p>{profile.location.city}</p>
        <p>{profile.location.country}</p>
        
    </div>
  );
};
export default Profile;
