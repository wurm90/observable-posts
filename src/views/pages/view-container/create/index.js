import React from "react";
import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import { Button, Icon } from "semantic-ui-react";

import ViewContainer from "views/pages/view-container";

class Create extends React.PureComponent {
  render() {
    const { goBack } = this.props;
  return (<ViewContainer>
    <Button icon labelPosition="left" onClick={goBack}>
          <Icon name="left arrow" />
          Go Back
        </Button>
    <h2>CREATE</h2></ViewContainer>
);
  }
}

export default connect(null, { goBack})(Create);