import React from "react"
import { Row, Col, Card , CardTitle, CardText, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const PostIndex = () => {

  return (
    <>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">
              Title
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              See More
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">
              Title
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              See More
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PostIndex
