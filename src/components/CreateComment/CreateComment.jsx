import React from "react";
import { useState } from "react";
import { createComment } from "../../actions/postsAction";
import {StyledCreateComment} from "./styles"



const CreateComment = ({id, showCommentModal, setShowCommentModal}) => {


    const [commentData, setCommentData] = useState({postId:id,body:''});
    const commentChangeHandler = (e) =>{
     
        setCommentData({...commentData, body:e.target.value});
    }

    const exitCommentModal = () =>{
        setShowCommentModal(!showCommentModal);
    }

    const commentCreateHandler = async(commentData) =>{
        await createComment(commentData)
        setShowCommentModal(!showCommentModal);
    }
    return(<StyledCreateComment>
        <h3>Create s comment for post</h3>
        <textarea value={commentData.body} onChange={(e)=>commentChangeHandler(e)}/>
        <button onClick={()=>commentCreateHandler(commentData)}>Create comment</button>
        <button onClick={()=>exitCommentModal()}>Cancel</button>
    </StyledCreateComment>);
};

export default CreateComment;