import { render, screen } from "@testing-library/react"
import PostNew from "./PostNew"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import mockUsers from "../mockUsers"


describe("<PostNew />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <PostNew currentUser={mockUsers} />
      </BrowserRouter>
    )
  })
  it("can see the title of the page", () => {
    render(
      <BrowserRouter>
        <PostNew currentUser={mockUsers}/>
      </BrowserRouter>
    )
    const title = screen.getByText("Create", {exact: false})
    expect(title.textContent).toEqual("Create New Post")
  })
  it("has a submit button", () => {
    render(
      <BrowserRouter>
        <PostNew currentUser={mockUsers}/>
      </BrowserRouter>
    )
    const button = screen.getByRole("button", {
      name: /submit post/i
    })
    expect(button).toBeInTheDocument()
  })
})

