const FullProfile = (props) => {
  const profile = props.location.profile;
  return (
    <div className="full-profile">
      <img src={profile.picture.large} alt={profile.name.first} />
      <p>{profile.login.username}</p>

      <p>{profile.name.first}</p>
      <p>{profile.name.last}</p>
      <p>{profile.email}</p>
    </div>
  );
};
export default FullProfile;
