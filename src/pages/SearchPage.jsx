import React from "react";
import { getPost } from "../actions/postsAction";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { SearchPost } from "./styles";
const SearchPage = () => {
  const dispatch = useDispatch();
  const [postId, setPostId] = useState("");

  const { post } = useSelector((state) => state.posts);
  const { isError } = useSelector((state) => state.posts);

  const getPostHandler = (postId) => {
    dispatch(getPost(postId));
    console.log("postId", postId);
    console.log("error", isError);
  };

  const postInputHandler = (e) => {
    setPostId(e.target.value);
  };

  return (
    <SearchPost>
      <h2>Searching</h2>
      <h3>Enter id of the post</h3>
      <input type="text" value={postId} onChange={postInputHandler} />
      <button onClick={() => getPostHandler(postId)}>Search</button>
      {post.length !== 0 && !isError ? (
        <Post
          id={post.id}
          name={post.name}
          title={post.title}
          body={post.body}
          comments={post.comments}
        />
      ) : (
        ""
      )}
      {isError && <div>There is no post with such id</div>}
    </SearchPost>
  );
};

export default SearchPage;
