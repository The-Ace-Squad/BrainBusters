import { render, screen } from "@testing-library/react"
import PostIndex from "./PostIndex"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockPosts from "../mockPosts"



describe("<PostIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <PostIndex />
      </BrowserRouter>, div)
  })
  screen.logTestingPlaygroundURL()
  it("has a heading", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <PostIndex posts={mockPosts} />
      </BrowserRouter>, div)
    mockPosts.forEach(post => {
      const postTitle = screen.getByText("Post Categories")
      expect(postTitle).toBeInTheDocument()
  })
})
  
})