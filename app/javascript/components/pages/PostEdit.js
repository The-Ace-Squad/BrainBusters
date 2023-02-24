import React, { useState } from "react"
import { Col, Form, FormGroup, Label, Input, Button, FormText } from "reactstrap"
import { useNavigate, useParams } from 'react-router-dom'

const PostEdit = ({ posts, updatePost }) => {

  const { id } = useParams()

  let currentPost = posts?.find((post) => post.id === +id)

  const [editPost, setEditPost] = useState({
    post_title: currentPost?.post_title,
    post_content: currentPost?.post_content,
    category_tag: currentPost?.category_tag,
    create_date: currentPost?.create_date,
    share_file: currentPost?.share_file
  })

  const handleChange = (e) => {
    setEditPost({...editPost, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    updatePost(editPost, currentPost.id)
    navigate("/mypost")
  }

  return (
    <>
        <h2 className="editpost-heading">Edit Post</h2>
        <Form className="editpost-form">
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
              placeholder={currentPost?.post_title}
              type="text"
              onChange = {handleChange}
              value = {editPost.post_title}
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
              placeholder={currentPost?.create_date}
              type="text"
              onChange = {handleChange}
              value = {editPost.create_date}
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
              placeholder={currentPost?.category_tag}
              onChange = {handleChange}
              value = {editPost.category_tag}
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
                placeholder={currentPost?.post_content}
                onChange = {handleChange}
                value = {editPost.post_content}
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
                placeholder={currentPost?.share_file}
                onChange = {handleChange}
                value = {editPost.share_file}
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
              <Button onClick = {handleSubmit} className = "submitupdate-button">
                Update Post
              </Button>
            </Col>
          </FormGroup>
        </Form>
    </>
  )
}

export default PostEdit
