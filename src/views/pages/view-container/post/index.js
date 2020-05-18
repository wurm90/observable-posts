import React from "react";
import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import {
  Header,
  Segment,
  Divider,
  Loader,
  Button,
  Icon,
} from "semantic-ui-react";

import ViewContainer from "views/pages/view-container";
import {
  selectPostActions,
  selectPostSelectors,
} from "state/ducks/posts/selected";
import {
  listPostCommentsActions
} from "state/ducks/posts/comments";
import Writer from "views/containers/common/components/Writer";
import Comments from "views/containers/post/components/Comments";

class Post extends React.PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      selectPost,
      listComments
    } = this.props;
    selectPost(id);
    listComments(id);
  }
  render() {
    const { loading, post, goBack } = this.props;
    if (loading)
      return (
        <Loader inverted active>
          Loading...
        </Loader>
      );
    return (
      <ViewContainer>
        <Button icon labelPosition="left" onClick={goBack}>
          <Icon name="left arrow" />
          Go Back
        </Button>
        <Header inverted as="h2" attached="top">
          {post.title}
        </Header>
        <Segment clearing inverted attached>
          {post.text}
          <Divider />
          <Header as="h5" floated="right">
            <Writer author={post.created_by} />
          </Header>
        </Segment>
        <Comments />
      </ViewContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  post: selectPostSelectors.getSelectedPostData(state),
  loading: selectPostSelectors.getSelectedPostLoading(state),
  error: selectPostSelectors.getSelectedPostError(state),
});

export default connect(mapStateToProps, {
  selectPost: selectPostActions.selectPost,
  listComments: listPostCommentsActions.listComments,
  goBack,
})(Post);
