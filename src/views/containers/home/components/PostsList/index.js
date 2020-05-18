import React from "react";
import { connect } from "react-redux";
import { Segment, List, Loader, Message } from "semantic-ui-react";
import { searchSelectors } from "state/ducks/posts/search";
import Writer from "./writer";

function PostsList(props) {
  const { posts, loading, error } = props;

  if (loading)
    return (
      <Loader inverted active>
        Loading...
      </Loader>
    );
  
  if (error) return <Message negative>{error}</Message>;
  
  return posts.items.length ? (
    <Segment inverted>
      <List inverted divided relaxed animated>
        {posts.items.map(({ id, title, created_by }) => (
          <List.Item key={id} style={{ cursor: "pointer" }}>
            <List.Header>{title}</List.Header>
            <Writer author={created_by} />
          </List.Item>
        ))}
      </List>
    </Segment>
  ) : null;
}

const mapStateToProps = (state) => {
  return {
    posts: searchSelectors.getPostsData(state),
    loading: searchSelectors.getPostsLoading(state),
    error: searchSelectors.getPostsError(state),
  };
};

export default connect(mapStateToProps)(PostsList);
