import React from "react";
import { Grid, Input } from "semantic-ui-react";

export default function PostsSearch({ onChange }) {
  return (
    <Grid columns={3}>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8}>
        <Input
          icon="search"
          onChange={e => onChange(e.target.value)}
          fluid
          placeholder="Search..."
        />
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid>
  );
}
