import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Adam0019").then((response) =>
  //     response.json().then((data) => {
  //       setData(data);
  //     })
  //   );
  // }, []);
  return (
    <div>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300} />{" "}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Adam0019");
  return response.json();
};
