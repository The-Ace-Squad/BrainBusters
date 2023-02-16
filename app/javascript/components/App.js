import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyPost from "./pages/MyPost"
import PostShow from "./pages/PostShow"
import PostIndex from "./pages/PostIndex"
import Home from "./pages/Home"
import PostEdit from "./pages/PostEdit"
import PostNew from "./pages/PostNew"
import NotFound from "./pages/NotFound"


const App = (props) => {

  const [posts, setPosts]= useState([])

  const readPost = () => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((payload) => {
        setPosts(payload)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h1>BrainBusters App</h1>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/postindex" element={<PostIndex posts={posts}/>} />
        <Route path="/postshow/:id" element={<PostShow />} />
        <Route path="/postnew" element={<PostNew />} />
        <Route path="/postedit" element={<PostEdit />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

