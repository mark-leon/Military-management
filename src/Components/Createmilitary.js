import React, { useState, useEffect } from "react";
import axios from 'axios';
import MilitaryForm from "./MilitaryForm";
  
// Createmilitary Component
const Createmilitary = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', Id_no: '' })
  // onSubmit handler
  const onSubmit = militaryObject => {
    axios.post(
'http://localhost:4000/militaries/create-military', 
    militaryObject)
      .then(res => {
        if (res.status === 200)
          alert('military successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return military form
  return(
    <MilitaryForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create military
    </MilitaryForm>
  )
}
  
// Export Createmilitary Component
export default Createmilitary