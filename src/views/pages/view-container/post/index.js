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
import Writer from "views/containers/common/components/Writer";

class Post extends React.PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      selectPost,
    } = this.props;
    selectPost(id);
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
  goBack,
})(Post);
