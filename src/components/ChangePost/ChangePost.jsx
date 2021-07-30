import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledChangePost } from "./styles";
import { updatePost } from "../../actions/postsAction";

const ChangePost = ({id, title, body, showModal, setShowModal}) => {

    const dispatch = useDispatch();
    const {allPosts} = useSelector(state=>state.posts);
    const [postData, setPostData] = useState({
        title: title,
        body: body,
    });
    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostData({
            ...postData,
            [name]: value,
        });
      };

      const exitModal = () => {
          setShowModal(!showModal);
      }

      const saveChanges = (id,allPosts, postData) => {
        dispatch(updatePost(id,allPosts,postData ));
        exitModal();
    }
  return (
    <StyledChangePost>
    <h3>Changing Post №{id}</h3>
      <input name="title" value={postData.title} onChange={inputHandler} type="text" />
      <textarea name="body" value={postData.body} onChange={inputHandler} type="text" />
     <div>
        <button onClick={()=>{saveChanges(id,allPosts, postData)}}>Save changes</button>
        <button onClick={()=>{exitModal()}}>Cancel</button>
     </div>
    </StyledChangePost>
  );
};

export default ChangePost;
