import { render, screen } from "@testing-library/react"
import ClassNotes from "./ClassNotes"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockPosts from "../mockPosts"

describe("<ClassNotes/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ClassNotes />, div)
  })
  it("renders category cards", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ClassNotes posts={mockPosts} />
      </BrowserRouter>, div)
    mockPosts.forEach(post => {
      const heading = screen.getByRole('heading', {
        name: /class notes/i
      })
      expect(heading).toBeInTheDocument()
  })
  })
})