import React, { useState, useEffect } from "react";
import axios from "axios";
import MilitaryForm from "./MilitaryForm";
import { useParams, useNavigate } from "react-router-dom";

// Editmilitary Component
const Editmilitary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    id_no: "",
  });

  const onSubmit = (militaryObject) => {
    axios
      .put(
        `http://localhost:5000/militaries/update-military/${id}`,
        militaryObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Military successfully updated");
          navigate("/military-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize military form
  useEffect(() => {
    axios
      .get(`http://localhost:5000/militaries/update-military/${id}`)
      .then((res) => {
        const { name, email, id_no } = res.data;
        setFormValues({ name, email, id_no });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(formValues);
  // console.log(enableReinitialize)
  // Return military form
  return (
    <MilitaryForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Military
    </MilitaryForm>
  );
};

// Export EditMilitary Component
export default Editmilitary;
