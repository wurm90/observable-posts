import React from "react";
import { Segment, List } from "semantic-ui-react";

export default function PostsList({ posts }) {
  return posts.length ? (
    <Segment inverted>
      <List inverted divided relaxed animated>
        {posts.map(({ title, created_by }) => (
          <List.Item style={{ cursor: "pointer" }}>
            <List.Header>{title}</List.Header>
            writed by {created_by}
          </List.Item>
        ))}
      </List>
    </Segment>
  ) : null;
}
