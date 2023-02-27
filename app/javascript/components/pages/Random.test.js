import { render, screen } from "@testing-library/react"
import Random from "./Random"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockPosts from "../mockPosts"

describe("<Random/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Random />, div)
  })
  it("renders category cards", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Random posts={mockPosts} />
      </BrowserRouter>, div)
    mockPosts.forEach(post => {
      const heading = screen.getByRole('heading', {
        name: /random/i
      })
      expect(heading).toBeInTheDocument()
  })
  })
})