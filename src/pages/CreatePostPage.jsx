import React from "react";
import { useState } from "react";
import { createPost } from "../actions/postsAction";
import { CreatePost } from "./styles";

const CreatePostPage = () => {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const createPostHandler = (postData) => {
    createPost(postData);
    setPostData({ title: "", body: "" });
  };

  return (
    <CreatePost>
      <h2>Create new post</h2>
      <div>
        <h3>Enter a title for a post</h3>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={inputHandler}
        />
      </div>
      <div>
        <h3>Enter text for yor post </h3>
        <textarea
          type="text"
          name="body"
          value={postData.body}
          onChange={inputHandler}
        />
      </div>
      <button onClick={() => createPostHandler(postData)}>Create</button>
    </CreatePost>
  );
};

export default CreatePostPage;
