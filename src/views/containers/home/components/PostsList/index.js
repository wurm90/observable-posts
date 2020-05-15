import React from "react";
import { Segment, List, Loader, Message } from "semantic-ui-react";

export default function PostsList({ posts, loading, error }) {
  if (loading)
    return (
      <Loader inverted active>
        Loading...
      </Loader>
    );
  if (error) return <Message negative>{error}</Message>;
  return posts.length ? (
    <Segment inverted>
      <List inverted divided relaxed animated>
        {posts.map(({ id, title, created_by }) => (
          <List.Item key={id} style={{ cursor: "pointer" }}>
            <List.Header>{title}</List.Header>
            written by {created_by}
          </List.Item>
        ))}
      </List>
    </Segment>
  ) : null;
}
