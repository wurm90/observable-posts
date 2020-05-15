import React from "react";
import { connect } from "react-redux";
import { Grid, Input } from "semantic-ui-react";

import { searchActions } from "state/ducks/posts/search";

function PostsSearch(props) {
  const { searchPosts } = props;
  return (
    <Grid columns={3}>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8}>
        <Input
          icon="search"
          onChange={(e) => searchPosts(e.target.value)}
          fluid
          placeholder="Search..."
        />
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid>
  );
}

export default connect(null, {
  searchPosts: searchActions.searchPosts,
})(PostsSearch);
