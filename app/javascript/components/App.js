import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyPost from "./pages/MyPost"
import PostShow from "./pages/PostShow"
import PostIndex from "./pages/PostIndex"
import Home from "./pages/Home"
import PostEdit from "./pages/PostEdit"
import PostNew from "./pages/PostNew"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import Assessments from "./pages/Assessments"
import Blockers from "./pages/Blockers"
import ClassNotes from "./pages/ClassNotes"
import Code from "./pages/Code"
import Random from "./pages/Random"


const App = (props) => {

  const [posts, setPosts]= useState([])

  useEffect(() => {
    readPost()
  }, [])

  const readPost = () => {
    fetch("/posts")
      .then((response) => response.json())
      .then((payload) => {
        setPosts(payload)
      })
      .catch((error) => console.log(error))
  }

  const createPost = (newPost) => {
    fetch("/posts", {
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readPost())
      .catch((errors) => console.log("Create post errors:", errors))
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
  

  const updatePost = (post, id) => {
    fetch(`/posts/${id}`, {
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => readPost())
    .catch((errors) => console.log("Post Update Errors:", errors))
  }

  const deletePost = (id) => {
    fetch(`/posts/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => readPost())
    .catch((errors) => console.log("Delete Post Errors:", errors))
  }

  return (
    <>
      
      <BrowserRouter>
      < Header { ...props } />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/postindex" element={<PostIndex posts={posts}/>} />
        <Route path="/code" element={<Code posts={posts}/>} />
        <Route path="/classnotes" element={<ClassNotes posts={posts}/>} />
        <Route path="/blockers" element={<Blockers posts={posts}/>} />
        <Route path="/assessments" element={<Assessments posts={posts}/>} />
        <Route path="/random" element={<Random posts={posts}/>} />
        <Route path="/postshow/:id" element={<PostShow  { ...props } posts={posts} />} />
        <Route path="/postnew" element={<PostNew createPost={createPost} currentUser={props.current_user}/>} />
        <Route path="/postedit/:id" element={<PostEdit posts={posts} updatePost={updatePost} />} />
        <Route path="/mypost" element={<MyPost posts={posts} currentUser={props.current_user} deletePost={deletePost}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

