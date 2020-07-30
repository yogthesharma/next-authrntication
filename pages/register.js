import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import Fire from "./configs/firebase";
import { useRouter } from "next/router";

const Register = () => {
  const initVals = {
    email: "",
    password: "",
  };
  const router = useRouter();

  const [values, setValues] = useState(initVals);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Fire.auth().createUserWithEmailAndPassword(
      values.email,
      values.password
    );
    router.push("/dash");
  };

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Register Page</h1>
        </Container>
      </Jumbotron>
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <br />
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <br />
            <Button type="submit">Register</Button>
          </Form>
          <br />
          <Link href="/login">
            <a>Login instead ....</a>
          </Link>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Register;
