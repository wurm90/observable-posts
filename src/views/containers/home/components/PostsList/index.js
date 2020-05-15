import React from "react";
import { Segment, List, Loader } from "semantic-ui-react";

export default function PostsList({ posts }) {
  if (posts.loading) return <Loader inverted content="Loading..." />
  return posts.items.length ? (
    <Segment inverted>
      <List inverted divided relaxed animated>
        {posts.items.map(({ id, title, created_by }) => (
          <List.Item key={id} style={{ cursor: "pointer" }}>
            <List.Header>{title}</List.Header>
            written by {created_by}
          </List.Item>
        ))}
      </List>
    </Segment>
  ) : null;
}
