import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Adam0019").then((response) =>
      response.json().then((data) => {
        setData(data);
      })
    );
  }, []);
  return (
    <div>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300} />{" "}
    </div>
  );
}

export default Github;