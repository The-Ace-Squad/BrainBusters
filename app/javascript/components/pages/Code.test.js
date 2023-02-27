import { render, screen } from "@testing-library/react"
import Code from "./Code"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockPosts from "../mockPosts"

describe("<Code/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Code />, div)
  })
  it("renders category cards", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Code posts={mockPosts} />
      </BrowserRouter>, div)
    mockPosts.forEach(post => {
      const heading = screen.getByRole('heading', {
        name: /code/i
      })
      expect(heading).toBeInTheDocument()
  })
  })
})