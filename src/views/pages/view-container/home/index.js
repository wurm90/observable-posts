import React from "react";
import { connect } from "react-redux";
import ViewContainer from "views/pages/view-container";

import { listActions } from "state/ducks/users/list";
import { Divider, Header, Icon } from "semantic-ui-react";
import PostsSearch from "views/containers/home/components/PostsSearch";
import PostsList from "views/containers/home/components/PostsList";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.listUsers();
  }
  render() {
    return (
      <ViewContainer>
        <Header as="h2" icon inverted textAlign="center">
          <Icon name="book" />
          Post Searcher
        </Header>
        <Divider />
        <PostsSearch />
        <PostsList />
      </ViewContainer>
    );
  }
}

export default connect(null, {
  listUsers: listActions.listUsers,
})(App);
