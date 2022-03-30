import React from "react";

function LogOut({ navigate, setUser }) {
  const handleClick = (e) => {
    fetch(`/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((r) => r.json())
      .then((data) => {
        setUser(null);
        navigate("/");
      });
  };

  return (
    <div className="goodbye">
      <h1 align="center">LogOut</h1>
      <div align="center" className="eatme-logout">
        <img src={require("../images/eatme_logout.png")} alt="goodbye photo" />
      </div>
      <div align="center" className="logout">
        <button onClick={(e) => handleClick()}>LogOut</button>
      </div>
    </div>
  );
}

export default LogOut;
