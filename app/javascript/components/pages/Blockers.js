import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText, NavLink } from "reactstrap"
import { useNavigate } from "react-router-dom"

const Blockers = ({ posts }) => {
    const blockers = posts?.filter((post) => {
        return post.category_tag === "Blockers"
    })
  return (
    <>
      <h2 className="mypost-heading">Blockers Posts</h2>
      <main className="mypost-cards">
        {blockers?.map((post, index) =>{
          const colors = ["#00A6DE", "#6EAE3C", "#DC8D2B", "#C90885", "#832688", "#C6A800"]; 
          const color = colors[index % colors.length]; 
          return (
            <Card className="mypost-card" 
              style={{
              width: '18rem',
              backgroundColor: color
              }}
              key = {index}
            >
              <CardBody className = "card-body">
                <CardTitle tag="h5" className="mypost-cardtitle">
                  <a className = "post-link" href={`/postshow/${post.id}`}>
                  {post.post_title} 
                  </a>
                </CardTitle>
              <CardSubtitle
                className="mypost-subheading"
                tag="h6"
              >
              {post.category_tag}
              </CardSubtitle>
              </CardBody>
              <CardBody>
                <Button href={`/postshow/${post.id}`} className = "edit-button">
                    View Post
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </main>
    </>
  )
}

export default Blockers