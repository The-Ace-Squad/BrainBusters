import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Form, FormGroup, Label, Col, Input, Button, FormText} from "reactstrap"

const PostNew = ({createPost, currentUser}) => {
  const navigate = useNavigate()
  const [newPost, setNewPost] = useState({
    user_id: currentUser.id,
    post_title: "",
    post_content: "",
    category_tag: "",
    create_date: "",
    share_file: "",
  })

  const handleChange = (e) => {
    setNewPost({...newPost, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createPost(newPost)
    navigate("/postindex")
  }
  return (
    <>
        <h2 className="create-heading">Create New Post</h2>
        <Form className="create-form">
        <FormGroup row>
          <Label
            for="post_title"
            sm={2}
          >
            Post Title
          </Label>
          <Col sm={10}>
            <Input
              id="post_title"
              name="post_title"
              placeholder="Type Post Title Here"
              type="text"
              onChange = {handleChange}
              value = {newPost.post_title}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            for="create_date"
            sm={2}
          >
            Date
          </Label>
          <Col sm={10}>
            <Input
              id="create_date"
              name="create_date"
              placeholder="DD-MM-YYYY"
              type="text"
              onChange = {handleChange}
              value = {newPost.create_date}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label
          for="category_tag"
          sm={2}
        >
          Select
        </Label>
          <Col sm={10}>
            <Input
              id="category_tag"
              name="category_tag"
              type="select"
              onChange = {handleChange}
              value = {newPost.category_tag}
            >
              <option>
                Code
              </option>
              <option>
                Blockers
              </option>
              <option>
                Class Notes
              </option>
              <option>
                Assessments
              </option>
              <option>
                Random
              </option>
            </Input>
          </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="post_content"
              sm={2}
            >
              Post Content
            </Label>
            <Col sm={10}>
              <Input
                id="post_content"
                name="post_content"
                type="textarea"
                onChange = {handleChange}
                value = {newPost.post_content}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="share_file"
              sm={2}
            >
              File
            </Label>
            <Col sm={10}>
              <Input
                id="share_file"
                name="share_file"
                type="file"
                onChange = {handleChange}
                value = {newPost.share_file}
              />
              <FormText>
                Choose file to share
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup
            check
            row
          >
            <Col
              sm={{
                offset: 2,
                size: 10
              }}
            >
              <Button onClick = {handleSubmit} className = "submit-button">
                Submit Post
              </Button>
            </Col>
          </FormGroup>
        </Form>
    </>
  )
}

export default PostNew
