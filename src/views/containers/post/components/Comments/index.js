import React from "react";
import { connect } from "react-redux";
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'

import {
  listPostCommentsSelectors
} from "state/ducks/posts/comments";
import { listSelectors } from "state/ducks/users/list";

class Comments extends React.PureComponent {
  buildComments = () => {
    const {loading, comments, users } = this.props;
    if (loading)
      return <div>Loading...</div>
    else {
      return comments.items.map(item => {
        const user = users.items.find(data => data.id === item.comment_by);
        return (<Comment className="post-comment" key={item.id}>
          <Comment.Avatar src={user.avatar} />
          <Comment.Content>
            <Comment.Author as='a'>{user.name}</Comment.Author>
            <Comment.Text>{item.comment}</Comment.Text>
          </Comment.Content>
        </Comment>)
      })
    }
  }
  render() {
    return (
        <Comment.Group>
          <Header as='h3' inverted dividing>
            Comments
          </Header>
          {this.buildComments()}
      </Comment.Group>
    )
  }
};

const mapStateToProps = (state) => ({
  comments: listPostCommentsSelectors.getPostCommentsData(state),
  users: listSelectors.getListData(state),
  loading:
    listPostCommentsSelectors.getPostCommentsLoading(state) ||
    listSelectors.getListLoading(state),
  error: listPostCommentsSelectors.getPostCommentsError(state),
});

export default connect(mapStateToProps)(Comments);