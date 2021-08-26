import "./styles.css";
const FullProfile = (props) => {
  if (props.location.profile) {
    localStorage.setItem("profile", JSON.stringify(props.location.profile));
  } else {
    props.location.profile = JSON.parse(localStorage.getItem("profile"));
  }

  const { picture, name, login, email } = props.location.profile;

  return (
    <div className="full-profile">
      <div className="full-profile-card">
        <img
          src={picture.large}
          alt={`${name.title} ${name.first} ${name.last}`}
        />
        <p>
          username: <span>{login.username}</span>
        </p>
        <p>
          first name: <span>{name.first}</span>
        </p>
        <p>
          last name: <span>{name.last}</span>
        </p>
        <p>
          email: <span>{email}</span>
        </p>
      </div>

      <button onClick={() => props.history.push("/")}>Go Back</button>
    </div>
  );
};
export default FullProfile;
