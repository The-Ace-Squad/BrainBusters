import React from "react"
import { useParams } from "react-router-dom"

const PostShow = ({ posts, comments, currentUser }) => {
  const { id } = useParams()
  const currentPost = posts?.find((post) => post.id === +id)
  console.log(id)
  console.log("currentpost", currentPost)
  console.log("comments", comments)
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
          </div> 
      )}
    
      </>  
  )  

}

export default PostShow
