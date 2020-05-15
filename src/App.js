import React from "react";
import { connect } from "react-redux";
import { searchActions, searchSelectors } from "state/ducks/posts/search";
import { Container, Divider, Header, Icon } from "semantic-ui-react";
import PostsSearch from "components/PostsSearch";
import PostsList from "components/PostsList";

class App extends React.PureComponent {
  render() {
    const { posts, searchPosts } = this.props;
    return (
      <Container className="app">
        <Header as="h2" icon inverted textAlign="center">
          <Icon name="book" />
          Post Searcher
        </Header>
        <Divider />
        <PostsSearch onChange={searchPosts} />
        <PostsList posts={posts.items} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: searchSelectors.getPostsData(state),
  };
};

export default connect(mapStateToProps, {
  searchPosts: searchActions.searchPosts,
})(App);
