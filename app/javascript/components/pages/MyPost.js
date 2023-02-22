import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText, NavLink } from "reactstrap"


const MyPost = ({ posts, currentUser, deletePost }) => {
    const userPosts = posts?.filter((post) => {
        return post.user_id === currentUser.id
    })
  return (
    <main className="post-index-cards">
      <h1>My Posts:</h1>
      {userPosts?.map((post, index) =>{
        return (
          <Card 
            style={{
            width: '18rem'
            }}
            key = {index}
          >
            <CardBody>
              <CardTitle tag="h5">
                {post.post_title} 
              </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            {post.category_tag}
            </CardSubtitle>
            </CardBody>
            <img
              alt={`Picture of ${post.post_title}`}
              src={post.share_file}
              width="100%"
            />
            <CardBody>
              <Button>
                <NavLink to={`/postedit/${post.id}`}>
                  Edit Post
                </NavLink>
              </Button>
              <Button onClick = {() => {deletePost(post.id)}}>
                Delete Post
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default MyPost