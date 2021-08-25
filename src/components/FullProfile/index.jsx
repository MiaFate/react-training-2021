const FullProfile = (props) => {
  if (props.location.profile) {
    localStorage.setItem("profile", JSON.stringify(props.location.profile));
  } else {
    props.location.profile = JSON.parse(localStorage.getItem("profile"));
  }

  const { picture, name, login, email } = props.location.profile;

  return (
    <div className="full-profile">
      <img src={picture.large} alt={name.first} />
      <p>{login.username}</p>
      <p>{name.first}</p>
      <p>{name.last}</p>
      <p>{email}</p>
    </div>
  );
};
export default FullProfile;
