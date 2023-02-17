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

  return (
    <>
      
      <BrowserRouter>
      < Header { ...props } />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/postindex" element={<PostIndex posts={posts}/>} />
        <Route path="/postshow/:id" element={<PostShow />} />
        <Route path="/postnew" element={<PostNew />} />
        <Route path="/postedit" element={<PostEdit />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

