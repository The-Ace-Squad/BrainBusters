import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import Comments from "../components/Comments"

const PostShow = ({ posts, currentUser }) => {
  const { id } = useParams()
  const currentPost = posts?.find((post) => post.id === +id)

  const [comments, setComments]= useState([])

  useEffect(() => {
    readComments()
  }, [])
  
  const readComments = () => {
    fetch("/comments")
      .then((response) => response.json())
      .then((payload) => {
        setComments(payload)
      })
      .catch((error) => console.log(error))
  }
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
            <Comments/>
          </div> 
      )}
    
      </>  
  )  

}

export default PostShow
