import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Divider, Header, Icon, Button } from "semantic-ui-react";

import ViewContainer from "views/pages/view-container";
import PostsSearch from "views/containers/home/components/PostsSearch";
import PostsList from "views/containers/home/components/PostsList";

class Home extends React.PureComponent {
  render() {
    const { push } = this.props;
    return (
      <ViewContainer>
        <Header as="h2" icon inverted textAlign="center">
          <Icon name="book" />
          Post Searcher
        </Header>
        <Divider />
        <Button.Group floated="right">
          <Button onClick={() => push("/create")}>Create Post</Button>
        </Button.Group>
        <PostsSearch />
        <PostsList />
      </ViewContainer>
    );
  }
}

export default connect(null, { push })(Home);
