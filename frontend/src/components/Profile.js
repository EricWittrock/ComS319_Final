import React, { useEffect, useState } from "react";
function Profile(emailCallback) {
  const [email, setEmail] = useState(window.globalVars.account._email);
  return (
    <div
      className="text-white"
      style={{ paddingLeft: "2%", paddingBottom: "2%" }}
    >
      <div
        className="profileTitle"
        width="100%"
        style={{ paddingTop: "2%", paddingBottom: "30px" }}
      >
        <h1>Profile</h1>
      </div>
      <div className="profileText">
        <h3 style={{ marginBottom: "15px" }}>
          Delete Account{" "}
          <span
            style={{
              color: "lightgray",
              textDecoration: "underline",
              fontSize: "0.9em",
            }}
          >
            {email}
          </span>
          ?
        </h3>
        <button className="btn btn-danger btn-lg">Delete</button>
      </div>
    </div>
  );
}
export default Profile;
