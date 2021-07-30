import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../actions/postsAction";
import { StyledPostsList } from "./styles";

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { allPosts } = useSelector((state) => state.posts);

  return (
    <StyledPostsList>
      {allPosts.map((post) => (
        <Post
      
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </StyledPostsList>
  );
};

export default PostsList;
