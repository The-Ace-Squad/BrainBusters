import React from "react"
import { render, screen } from "@testing-library/react"
import MyPost from "./MyPost"
import { BrowserRouter } from "react-router-dom"

describe("<MyPost />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MyPost />, div)
  })
  it("it has my posts", () => {
    render(
      <BrowserRouter>
        <MyPost/>
      </BrowserRouter>
    )
    expect(screen.getByText(/posts/i)).toBeInTheDocument()
  })
})