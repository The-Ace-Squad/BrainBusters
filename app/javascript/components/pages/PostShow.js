import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import AddComment from "../components/AddComment"
import Comments from "../components/Comments"

const PostShow = ({ posts, current_user }) => {
  const { id } = useParams()
  const currentPost = posts?.find((post) => post.id === +id)
  
  return (
    
    <>
      {currentPost && (
          <div className="post-info">
            <div className="postshow-title">
              <h2>{currentPost.post_title}</h2>
            </div>
            <div className="postshow-cat">
              <h3>{currentPost.category_tag}</h3>
            </div>
            <div className="user-name">
              <p> Created By:{currentPost.username}</p>
            </div>
            <div className="postshow-content" >
              <p>{currentPost.post_content}</p>
            </div> 
            <AddComment currentUser={current_user} currentPost={currentPost}/>
            <Comments currentUser={current_user} currentPost={currentPost}/>
          </div> 
      )}
    
      </>  
  )  

}

export default PostShow
