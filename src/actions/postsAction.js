import axios from "axios";
import {
  allPostsUrl,
  postUrl,
  createPostUrl,
  deletePostUrl,
  updatePostUrl,
  createCommentUrl,
} from "../api/api";

export const getAllPosts = () => async (dispatch) => {
  const fetchPosts = await axios.get(allPostsUrl());
  console.log("Posts", fetchPosts);

  dispatch({
    type: "GET_POSTS",
    payload: {
      allPosts: fetchPosts.data,
    },
  });
};

export const getPost = (post_id) => async (dispatch) => {
  let isError = true;
  try {
    const fetchPost = await axios.get(postUrl(post_id));
    console.log("Post", fetchPost);
    isError = false;
    dispatch({
      type: "GET_POST",
      payload: {
        post: fetchPost.data,
        isError:isError
      },
    });
  } catch (err) {
    dispatch({
      type: "SEARCH_ERROR",
      payload: {
        isError: isError,
      },
    });
    console.log(err);
  }
};

export const createPost = async (post_data) => {
  console.log(post_data);
  try {
    await axios.post(createPostUrl(), post_data);
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (post_id, current_posts) => async (dispatch) => {
  try {
    await axios.delete(deletePostUrl(post_id));
    const remainedPosts = current_posts.filter((post) => post.id !== post_id);
    console.log("remainedPosts", remainedPosts);
    dispatch({
      type: "DELETE_POST",
      payload: {
        remainedPosts: remainedPosts,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost =
  (post_id, current_posts, updated_post) => async (dispatch) => {
    try {
      await axios.put(updatePostUrl(post_id), updated_post);
      const updatedPosts = current_posts.map((post) => {
        if (post.id === post_id) {
          post.title = updated_post.title;
          post.body = updated_post.body;
        }
        console.log(post);
        return post;
      });
      console.log("updatedPosts", updatedPosts);
      dispatch({
        type: "PUT_POST",
        payload: {
          updatedPosts: updatedPosts,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

export const createComment = async (comment_data) => {
  console.log(comment_data);
  try {
    await axios.post(createCommentUrl(), comment_data);
  } catch (err) {
    console.log(err);
  }
};
