import React from "react";
import { axiosWithAuth } from "./AxiosAuth";

const Friend = props => {
  const handleEdit = e => {
    e.preventDefault();
    props.history.push(`/edit/${props.friend.id}`);
  };
  return (
      <div>
      <div>
        <h1>{props.friend.name}</h1>
        <h2>{props.friend.age} years old</h2>
        <p>
          Email: {props.friend.email}
        </p>
      </div>
      <div>
        <div className='ui two buttons'>
          <button basic color='green' onClick={e => handleEdit(e)}>
            Edit
          </button>
          <button basic color='red' onClick={e => props.handleDelete(e, props.friend.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;