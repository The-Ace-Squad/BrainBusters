import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"


const Comments = ({currentUser, currentPost}) => {
  const [comments, setComments]= useState([])
  
  useEffect(() => {
    readComments()
  }, [comments])
  
  const readComments = () => {
    fetch("/comments")
      .then((response) => response.json())
      .then((payload) => {
        setComments(payload)
      })
      .catch((error) => console.log(error))
  }
  
  return(
    <main className="post-index-cards">
      <h1>Comments:</h1>
      {comments.map((comment, index) =>{
        return (
          comment.post_id == currentPost.id &&
          <Card 
            style={{
            width: '18rem'
            }}
            key = {index}
          >
            <CardBody>
              <CardTitle tag="h5">
                {comment.content} 
              </CardTitle>s
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            {currentUser.username}
            </CardSubtitle>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}
export default Comments