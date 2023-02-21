import React from "react"
import { Row, Col, Card , CardTitle, CardText, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const PostIndex = ({posts}) => {
  return (
    <main className="post-index-cards">
      <h2>All Posts</h2>
      {posts?.map((post, index)=>{
        return (
          <Row key = {index}>
            <Col sm="6">
              <Card>
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
            </Col>
          </Row>
        )
      })}
    </main>
  )
}

export default PostIndex
