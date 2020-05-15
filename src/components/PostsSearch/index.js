import React from "react";
import { Grid, Input } from "semantic-ui-react";

export default function PostsSearch({ onChange }) {
  return (
    <Grid columns={3}>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8}>
        <Input
          icon="search"
          onChange={onChange}
          fluid
          placeholder="Search..."
        />
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid>
  );
}
