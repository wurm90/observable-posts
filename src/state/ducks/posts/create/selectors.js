import * as Yup from "yup";

const getCreatePostSchema = () =>
  Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").required("Required"),
    text: Yup.string().min(2, "Too Short!").required("Required"),
  });

const getCreatedPostError = (state) => state.posts.create.error;
const getCreatedPostLoading = (state) => state.posts.create.loading;

export { getCreatePostSchema, getCreatedPostError, getCreatedPostLoading };
