import { render, screen } from "@testing-library/react"
import Assessments from "./Assessments"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockPosts from "../mockPosts"

describe("<Assessments/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Assessments />, div)
  })
  it("renders category cards", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Assessments posts={mockPosts} />
      </BrowserRouter>, div)
    mockPosts.forEach(post => {
      const heading = screen.getByRole('heading', {
        name: /assessments/i
      })
      expect(heading).toBeInTheDocument()
  })
  })
})