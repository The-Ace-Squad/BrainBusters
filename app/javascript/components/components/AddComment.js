import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const AddComment = ({currentUser, currentPost}) => {

	const [newComment, setNewComment] = useState({
		content: "",
		post_id: currentPost.id, 
		user_id: currentUser.id,
		vote_count: 0
	})

	const handleChange = (e) => {
		setNewComment({...newComment, [e.target.name]: e>target.value})
	}

	const createComment = (newComment) => {
		fetch("/comments", {
			body: JSON.stringify(newComment),
			headers: {
			"Content-Type": "application/json"
			},
			method: "POST"
		})
			.then((response) => response.json())
			.then((payload) => readComments())
			.catch((errors) => console.log("Create comment errors:", errors))
			}

	const handleSubmit = () => {
		createComment(newComment)
	}

	
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
					<ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
		</div>
		)
	
}

export default AddComment