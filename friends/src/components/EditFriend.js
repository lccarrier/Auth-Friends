import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";

const EditFriend = props => {
  const [display, setDisplay] = useState(false);
  const [friend, setFriend] = useState({
    id: null,
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
      id: Date.now()
    });
  };
  const handleSubmit = e => {
    const id = props.match.params.id;
    e.preventDefault();
    if (friend.name = "" && friend.age !== "" && friend.email !== "") {
      axiosWithAuth()
        .put(`friends/${id}`, friend)
        .then(res => {
          props.history.push("/friends");
        });
    }
  };

  useEffect(() => {
    const id = props.match.params.id;
    axiosWithAuth()
      .get(`friends/${id}`)
      .then(res => {
        console.log(res);
        setDisplay(true);
        setFriend({
          ...res.data
        });
      })
      .catch(err => {
        localStorage.setItem("token", null);
        props.history.push("/");
      });
  }, []);

  return (
    <div>
      {display && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={friend.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={friend.age}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={friend.email}
            onChange={handleChange}
          />
          <button>Edit friend!!</button>
        </form>
      )}
    </div>
  );
};

export default EditFriend;