import React, { useState } from "react";
import axios from "axios";


function Postdata() {
  const Data = { fname: "", lastName: "" };
  const [userData, setUserData] = useState(Data);

  const handleSubmit = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value });
    console.log(setUserData);
  };
  const handelClick=(e)=>{
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/users",userData)
    .then((response)=>{
      setUserData(response)

    })
    

  }

  return (
    <div>
      <label>First Name</label>
      <br />
      <input
        type="text"
        name="fname"
        value={userData.fname}
        onChange={handleSubmit}
      />
      <br />
      <label>last Name</label>
      <br />
      <input
        type="text"
        name="lastName"
        value={userData.lastName}
        onChange={handleSubmit}
      />
      <br />
      <button onClick={handelClick}>submit</button>
    </div>
  );
}

export default Postdata;
