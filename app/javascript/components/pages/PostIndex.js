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
                <CardTitle tag="h5">
                  {post.post_title}
                </CardTitle>
                <CardText>
                  {post.category_tag}
                </CardText>
                <Button>
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
