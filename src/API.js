export const getProfiles = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
