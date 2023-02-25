import React, { useState, useEffect } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Navigate, useNavigate } from "react-router-dom";



const AddComment = ({currentUser, currentPost}) => {

	const [newComment, setNewComment] = useState({
		content: "",
		post_id: currentPost.id,
		user_id: currentUser.id,
		vote_count: 0
	})

	const [modalToggle, setModalToggle] = useState(false)

	const createComment = (newComment) => {
		fetch("/comments", {
			body: JSON.stringify(newComment),
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST"
		})
		.then((response) => response.json())
		.then((payload) => console.log())
		.catch((errors) => console.log("Create comment errors:", errors))
	}

	const navigate = useNavigate()

	const handleSubmit = () => {
		createComment(newComment)
		navigate(`/postshow/${id}`)
		toggle()
	}
	
	const toggle = () => {
		setModalToggle(!modalToggle)
	}
	
	const handleChange = (e) => {
		setNewComment({...newComment, [e.target.name]: e.target.value})
	}
		return (
			<div>
				<Button color="danger" onClick={toggle}>Add Comment</Button>
				<Modal isOpen={modalToggle} className="Modal">
					<ModalHeader toggle={toggle}>Add Comment</ModalHeader>
					<ModalBody>
					<Input
						id="content"
						name="content"
						type="text"
						onChange = {handleChange}
						value = {newComment.content}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={handleSubmit}>Submit Comment</Button>{' '}
						<Button color="secondary" onClick={toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
		</div>
		)
	
}

export default AddComment