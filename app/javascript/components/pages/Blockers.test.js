import { render, screen } from "@testing-library/react"
import Blockers from "./Blockers"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockPosts from "../mockPosts"

describe("<Blockers/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Blockers />, div)
  })
  it("renders category cards", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Blockers posts={mockPosts} />
      </BrowserRouter>, div)
    mockPosts.forEach(post => {
      const heading = screen.getByRole('heading', {
        name: /blockers/i
      })
      expect(heading).toBeInTheDocument()
  })
  })
})