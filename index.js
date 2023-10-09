// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    // console.log(userData);
    const modifiedUserData = userData.map((user) => ({
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Address: user.address.street,
      Phone: user.phone,
      Website: user.website,
      Company: user.company.name,
    }));
    // console.log(modifiedUserData);
    const filteredUserData = modifiedUserData.filter((user) =>
      user.Email.endsWith(".biz")
    );
    // return userData;
    // return modifiedUserData;
    return filteredUserData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
