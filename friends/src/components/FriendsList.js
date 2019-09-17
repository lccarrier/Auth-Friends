import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import Friend from "./Friend";
import { Link } from "react-router-dom";

const FriendsList = props => {
  const [friends, setFriends] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then(res => {
        setFriends(res.data);
        setLoading(false);
      })
      .catch(err => {
        localStorage.setItem("token", null);
        props.history.push("/");
        setLoading(false);
      });
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`friends/${id}`)
      .then(res => {
        setFriends(res.data);
      });
  };

  return (
    <div>
      {loading && "Finding your friends... Please hold..."}
      {friends && <button><Link to="/add">Add New Friend</Link></button>}
    <div className="card-group">
      {friends &&
        friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              friend={friend}
              history={props.history}
              handleDelete={handleDelete}
            />
          );
        })}
        </div>
    </div>
  );
};

export default FriendsList;