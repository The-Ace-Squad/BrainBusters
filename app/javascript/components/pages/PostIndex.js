import React from "react"
import { Card , CardTitle, CardText, Button, CardGroup } from "reactstrap"
import { NavLink } from "react-router-dom"

const PostIndex = ({posts}) => {
  return (
    <main className="post-index-cards">
      <h2 className="index-post-head">All Posts</h2>
      {posts?.map((post, index)=>{
         const colors = ["#00A6DE", "#6EAE3C", "#DC8D2B", "#C90885", "#832688", "#C6A800"]; 
         const color = colors[index % colors.length]; 
        return (
           
            <CardGroup className="card-group" key = {index}>
              <Card className = "post-index-card" style={{backgroundColor: color}}>
                <CardTitle className="card-title" tag="h5">
                  {post.post_title}
                </CardTitle>
                <CardText className="post-text">
                  {post.category_tag}
                </CardText>
                <Button className=" view-post-button">
                  <NavLink to={`/postshow/${post.id}`} className="nav-link">
                    View Post
                  </NavLink>
                </Button>
              </Card>
            </CardGroup>
          
        )
      })}
    </main>
  )
}

export default PostIndex
