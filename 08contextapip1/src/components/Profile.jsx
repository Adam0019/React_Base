import React, { useContext } from "react";
import UserContex from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContex);
  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
