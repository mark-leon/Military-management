import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "react-bootstrap";
import * as Yup from "yup";

const MilitaryForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Rquired"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Rquired"),
    id_no: Yup.number()
      .positive("Invalid Id number")
      .integer("Invalid Id number")
      .required("Rquired"),
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="id_no"
              type="number"
              className="form-control"
              placeholder="Enter Id"
            />
            <ErrorMessage
              name="id_no"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default MilitaryForm;
