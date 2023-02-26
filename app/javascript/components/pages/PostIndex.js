import React from "react"
import { Card , CardTitle, CardText, Button, CardGroup } from "reactstrap"
import { NavLink } from "react-router-dom"

const PostIndex = ({posts}) => {
  // const colors = ["#00A6DE", "#6EAE3C", "#DC8D2B", "#C90885", "#832688", "#C6A800"]; 
  // const color = colors[index % colors.length]; 
  return (
    <main className="post-index-cards">
      <h2 className="index-post-head">Post Categories</h2>
            <CardGroup className="card-group">
              <Card style = {{backgroundColor:"#00A6DE"}} className = "post-index-card">
                <CardTitle className="card-title" tag="h5">
                  Assessments
                </CardTitle>
                <CardText className="post-text">
                All notes pertaining to assessments
                </CardText>
                <Button className=" view-post-button">
                  <NavLink to="/assessments" className="nav-link">
                    View Assessment Posts
                  </NavLink>
                </Button>
              </Card>
              <Card style = {{backgroundColor:"#6EAE3C"}} className = "post-index-card">
                <CardTitle className="card-title" tag="h5">
                  Blockers
                </CardTitle>
                <CardText className="post-text">
                Stuck on something? Check out posts on blockers here
                </CardText>
                <Button className=" view-post-button">
                  <NavLink to="/blockers" className="nav-link">
                    View Blockers Posts
                  </NavLink>
                </Button>
              </Card>
              <Card style = {{backgroundColor:"#DC8D2B"}} className = "post-index-card">
                <CardTitle className="card-title" tag="h5">
                  Class Notes
                </CardTitle>
                <CardText className="post-text">
                Everything on class notes here
                </CardText>
                <Button className=" view-post-button">
                  <NavLink to="/classnotes" className="nav-link">
                    View Class Notes Posts
                  </NavLink>
                </Button>
              </Card>
              <Card style = {{backgroundColor:"#C90885"}} className = "post-index-card">
                <CardTitle className="card-title" tag="h5">
                  Code
                </CardTitle>
                <CardText className="post-text">
                Have questions on coding? View here
                </CardText>
                <Button className=" view-post-button">
                  <NavLink to="/code" className="nav-link">
                    View Code Posts
                  </NavLink>
                </Button>
              </Card>
              <Card style = {{backgroundColor:"#832688"}} className = "post-index-card">
                <CardTitle className="card-title" tag="h5">
                  Random
                </CardTitle>
                <CardText className="post-text">
                Everything Else Here
                </CardText>
                <Button className=" view-post-button">
                  <NavLink to="/random" className="nav-link">
                    View Random Posts
                  </NavLink>
                </Button>
              </Card>
            </CardGroup>
      

           
          
    </main>
  )
}

export default PostIndex
