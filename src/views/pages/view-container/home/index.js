import React from "react";
import ViewContainer from "views/pages/view-container";

import { Divider, Header, Icon } from "semantic-ui-react";
import PostsSearch from "views/containers/home/components/PostsSearch";
import PostsList from "views/containers/home/components/PostsList";

class App extends React.PureComponent {
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

export default App;
