import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MilitaryTableRow = (props) => {
  const { _id, name, email, id_no } = props.obj;
  console.log(email);

  const deleteMilitary = () => {
    axios
      .delete("http://localhost:5000/militaries/delete-military/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Military successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{id_no}</td>
      <td>
        <Link className="edit-link" to={"/edit-military/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteMilitary} size="sm" variant="danger">
          Delete Military
        </Button>
      </td>
    </tr>
  );
};

export default MilitaryTableRow;
