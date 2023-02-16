import { render, screen } from "@testing-library/react"
import PostIndex from "./PostIndex"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockPosts from "../mockPosts"


describe("<PostIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<PostIndex />, div)
  })
  it("renders cards", () => {
    const div = document.createElement("div")
      render(
      <BrowserRouter>
      <PostIndex posts ={mockPosts} />
      </BrowserRouter> , div)
      mockPosts.forEach(post => {
        screen.logTestingPlaygroundURL()
        // const postTitle =screen.getByText(post.post_title)
        // expect(postTitle).toBeInTheDocument()
      }) 
      
  })
})