import React from "react";
import { connect } from "react-redux";
import { Loader, Header, Icon } from "semantic-ui-react";
import { listSelectors } from "state/ducks/users/list";

function Writer(props) {
  const { author, list, loading, error } = props;
  let writtenBy = null;
  if (error) {
    writtenBy = (
      <Header as="h6">
        <Icon name="warning" />
        <Header.Content>{error}</Header.Content>
      </Header>
    );
  } else if (loading) writtenBy = <Loader inverted active size="tiny" />;
  else if (list.items.length > 0) {
    let aName = list.items.find((item) => item.id === author);
    writtenBy = aName ? aName.name : null;
  }
  return (
    <div className="writer-container">
      written by <b>{writtenBy}</b>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: listSelectors.getListData(state),
    loading: listSelectors.getListLoading(state),
    error: listSelectors.getListError(state),
  };
};

export default connect(mapStateToProps)(Writer);
