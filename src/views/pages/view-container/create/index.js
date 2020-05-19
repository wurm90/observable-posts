import React from "react";
import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import { Button, Icon } from "semantic-ui-react";
import { Formik, Form, Field } from "formik";

import ViewContainer from "views/pages/view-container";
import {
  createPostSelectors,
  createPostActions,
} from "state/ducks/posts/create";

class Create extends React.PureComponent {
  handleSubmitForm = (values, { resetForm }) => {
    const { createPost } = this.props;
    createPost(values);
    resetForm();
  };
  render() {
    const { goBack, formSchema, loading } = this.props;
    return (
      <ViewContainer>
        <Button icon labelPosition="left" onClick={goBack}>
          <Icon name="left arrow" />
          Go Back
        </Button>
        <Formik
          initialValues={{ title: "", text: "", created_by: 1 }}
          validationSchema={formSchema}
          onSubmit={this.handleSubmitForm}
        >
          {({ errors, touched }) => (
            <Form className={`ui form inverted ${loading && "loading"}`}>
              <div
                className={`field ${errors.title && touched.title && "error"}`}
              >
                <label>Title</label>
                <Field name="title" />
                {errors.title && touched.title ? (
                  <b style={{ color: "#ddd" }}>{errors.title}</b>
                ) : null}
              </div>
              <div
                className={`field ${errors.text && touched.text && "error"}`}
              >
                <label>Text</label>
                <Field as="textarea" name="text" />
                {errors.text && touched.text ? (
                  <b style={{ color: "#ddd" }}>{errors.text}</b>
                ) : null}
              </div>
              <button className="ui button primary" type="submit">
                CREATE
              </button>
            </Form>
          )}
        </Formik>
      </ViewContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formSchema: createPostSelectors.getCreatePostSchema(),
    loading: createPostSelectors.getCreatedPostLoading(state),
  };
};

export default connect(mapStateToProps, {
  goBack,
  createPost: createPostActions.createPost,
})(Create);
