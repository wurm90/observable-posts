import React from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

import { listActions } from "state/ducks/users/list";

class ViewContainer extends React.PureComponent {
  render() {
    return (
      <Container className="view-container">
        <div className="view-content">{this.props.children}</div>
      </Container>
    );
  }
}

export default connect(null, {
  listUsers: listActions.listUsers,
})(ViewContainer);
