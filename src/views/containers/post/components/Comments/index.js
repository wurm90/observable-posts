import React from "react";
import { connect } from "react-redux";
import { Comment, Header } from 'semantic-ui-react'

import {
  listPostCommentsSelectors as commentsSelectors
} from "state/ducks/posts/comments";
import { listSelectors as userSelectors } from "state/ducks/users/list";

class Comments extends React.PureComponent {
  buildComments = () => {
    const {loading, comments, users } = this.props;
    if (loading)
      return <div>Loading...</div>
    else {
      return comments.items.map(item => {
        const user = users.find(data => data.id === item.comment_by);
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

const mapStateToProps = (state) => {
  const { loading, ...rest } = commentsSelectors.getPostComments(state);
  return {
    loading: loading || userSelectors.getUserListLoading(state),
    users: userSelectors.getUserListData(state),
    ...rest
  };
};

export default connect(mapStateToProps)(Comments);