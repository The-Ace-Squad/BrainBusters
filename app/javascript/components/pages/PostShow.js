import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import Comments from "../components/Comments"

const PostShow = ({ posts, current_user }) => {
  console.log(current_user)
  const { id } = useParams()
  const currentPost = posts?.find((post) => post.id === +id)

  return (
    
    <>
      {currentPost && (
          <div className="post-info">
            <div className="postshow-title">
              <h1>{currentPost.post_title}</h1>
            </div>
            <div className="postshow-cat">
              <h2>{currentPost.category_tag}</h2>
            </div>
            <div className="postshow-content" >
              <p>{currentPost.post_content}</p>
            </div> 
            <Comments currentUser={current_user} currentPost={currentPost}/>
          </div> 
      )}
    
      </>  
  )  

}

export default PostShow
