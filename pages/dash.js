import React, { useContext, useEffect } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import Fire from "./configs/firebase";
import { useRouter } from "next/router";
import { UserContext } from "./_app";

const Dash = () => {
  // getting the value from context
  const { user } = useContext(UserContext);
  const router = useRouter();
  const logout = async () => {
    await Fire.auth().signOut();
    router.push("/login");
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Dash Page</h1>
        </Container>
      </Jumbotron>
      <div className="container">
        <p>This is user dashboard.</p>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
};

export default Dash;
