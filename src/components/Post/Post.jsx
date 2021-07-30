import React from "react";
import { deletePost } from "../../actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ChangePost from "../ChangePost";
import CreateComment from "../CreateComment/CreateComment";
import { StyledPost } from "./styles";

const Post = ({
  id,
  title,
  body,
  comments,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.posts);

  const deletePostHandler = (id, allPosts) => {
    dispatch(deletePost(id, allPosts));
  };

  const changePostHandler = () => {
    setShowModal(!showModal);
  };

  const createCommentHandler = () => {
    setShowCommentModal(!showCommentModal);
  };

  return (
    <StyledPost>
      <h2>{title}</h2>
      <p>{body}</p>
      {comments && comments.length !== 0 ? (
        <p>Commments: {comments.map((comment) => comment.body)}</p>
      ) : (
        ""
      )}
      {showModal && (
        <ChangePost
          id={id}
          title={title}
          body={body}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {showCommentModal && (
        <CreateComment
          id={id}
          showCommentModal={showCommentModal}
          setShowCommentModal={setShowCommentModal}
        />
      )}
      <button onClick={() => changePostHandler()}>Change</button>
      <button onClick={() => deletePostHandler(id, allPosts)}>Delete</button>
      <button
        onClick={() => {
          createCommentHandler();
        }}
      >
        Create comment
      </button>
    </StyledPost>
  );
};

export default Post;
