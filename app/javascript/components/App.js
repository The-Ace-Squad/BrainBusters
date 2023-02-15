import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyPost from "./pages/MyPost"

const App = () => {

  return (
    <>
      <h1>BrainBusters App</h1>
      <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<PostIndex />} />
        <Route path="/posts/:id" element={<PostShow />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

