import React from "react";
import { Container } from "semantic-ui-react";

export default function ViewContainer(props) {
  return (
    <Container className="view-container">
      <div className="view-content">{props.children}</div>
    </Container>
  )
}