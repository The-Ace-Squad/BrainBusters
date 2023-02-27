import { render, screen } from "@testing-library/react"
import PostEdit from "./PostEdit"
import React from "react"
import { BrowserRouter } from "react-router-dom"

describe("<PostEdit />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <PostEdit />
      </BrowserRouter>
    )
  })
  it("can see the title of the page", () => {
    render(
      <BrowserRouter>
        <PostEdit />
      </BrowserRouter>
    )
    const element = screen.getByText("Edit Post")
    expect(element).toBeInTheDocument()
  })
  it("has a submit button", () => {
    render(
      <BrowserRouter>
        <PostEdit />
      </BrowserRouter>
    )
    const button = screen.getByRole('button', {
      name: /Update Post/i
    })
    expect(button).toBeInTheDocument()
  })
})