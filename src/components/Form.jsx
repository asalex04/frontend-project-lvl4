import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Button, Form, Row, Card,
} from 'react-bootstrap';

const Basic = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Nickname is required'),
      password: Yup.string()
        .min(6, 'Must be longer than 6 characters')
        .required('Required'),
    }),
  });
  return (
    <Form>
      <Row className="justify-content-center pt-5">
        <Card style={{ width: '20rem', background: 'grey' }}>
          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
              <Form.Text className="text-muted" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Form>
  );
};
export default Basic;
