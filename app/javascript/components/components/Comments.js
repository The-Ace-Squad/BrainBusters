import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardGroup } from "reactstrap"


const Comments = ({currentPost}) => {
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

    <>
      <h3 className="comments-heading">Comments</h3>
        <main className="comments-cards">
          {comments.map((comment, index) =>{
            const colors = ["#00A6DE", "#6EAE3C", "#DC8D2B", "#C90885", "#832688", "#C6A800"]; 
            const color = colors[index % colors.length]; 
            return (
              comment.post_id == currentPost.id &&
              <CardGroup className="comment-cardgroup">
                  <Card className="comment-card" style={{backgroundColor: color}}
                    key = {index}>
                    <CardBody className="comment-cardbody">
                        <CardTitle tag="h5">
                          {comment.content} 
                        </CardTitle>
                      <CardSubtitle>
                        {comment.username}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
              </CardGroup>
            )
          })}
        </main>
    </>

  )
}
export default Comments