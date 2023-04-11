import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import MilitaryTableRow from "./MilitaryTableRow";

const MilitaryList = () => {
  const [military, setMilitary] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/militaries")
      .then(({ data }) => {
        setMilitary(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(military);

  const DataTable = () => {
    return military.map((res, i) => {
      return <MilitaryTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Military Name</th>
            <th>Military Email</th>
            <th>ID No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default MilitaryList;
