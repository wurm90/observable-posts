import React from "react";
import { connect } from "react-redux";
import { Loader, Header, Icon } from "semantic-ui-react";
import { listSelectors as userSelectors } from "state/ducks/users/list";

function Writer({ user, loading, error }) {
  let writtenBy = null;
  if (error) {
    writtenBy = (
      <Header as="h6">
        <Icon name="warning" />
        <Header.Content>{error}</Header.Content>
      </Header>
    );
  } else if (loading) writtenBy = <Loader inverted active size="tiny" />;
  else {
    writtenBy = user ? user.name : null;
  }

  return (
    <div className="writer-container">
      written by <b>{writtenBy}</b>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  user: userSelectors.getUserById(state, props),
  loading: userSelectors.getUserListLoading(state),
  error: userSelectors.getUserListError(state),
});

export default connect(mapStateToProps)(Writer);
