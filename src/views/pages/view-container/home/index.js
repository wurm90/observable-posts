import React from "react";
import { connect } from "react-redux";
import ViewContainer from "views/pages/view-container";
import { searchActions, searchSelectors } from "state/ducks/posts/search";
import { Divider, Header, Icon } from "semantic-ui-react";
import PostsSearch from "views/containers/home/components/PostsSearch";
import PostsList from "views/containers/home/components/PostsList";

class App extends React.PureComponent {
  render() {
    const { posts, searchPosts } = this.props;
    return (
      <ViewContainer>
        <Header as="h2" icon inverted textAlign="center">
          <Icon name="book" />
          Post Searcher
        </Header>
        <Divider />
        <PostsSearch onChange={searchPosts} />
        <PostsList posts={posts} />
      </ViewContainer>
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
