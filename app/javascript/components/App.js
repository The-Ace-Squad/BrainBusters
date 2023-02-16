import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyPost from "./pages/MyPost"
import PostShow from "./pages/PostShow"
import PostIndex from "./pages/PostIndex"
import Home from "./pages/Home"
import PostEdit from "./pages/PostEdit"
import PostNew from "./pages/PostNew"
import NotFound from "./pages/NotFound"


const App = () => {

  return (
    <>
      <h1>BrainBusters App</h1>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/postindex" element={<PostIndex />} />
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

