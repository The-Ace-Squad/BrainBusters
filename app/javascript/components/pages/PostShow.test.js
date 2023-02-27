import { render, screen } from "@testing-library/react"
import PostShow from "./PostShow"
import React from "react"
import "@testing-library/jest-dom"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockPosts from "../mockPosts"
import mockUsers from "../mockUsers"
import mockComments from "../mockComments"
import Comments from "../components/Comments"
import AddComment from "../components/AddComment"

const renderShow = () => {
  render(
  <MemoryRouter initialEntries={["/postshow/1"]}>
    <Routes>
    <Route path="postshow/:id" element={<PostShow posts={mockPosts} currentUser= {mockUsers} comments = {mockComments}/>} />
    </Routes>
  </MemoryRouter>
  )
}
describe("<PostShow />", () => {
  it("renders without crashing", () => {
    
    const div = document.createElement("div")
    render(<PostShow />, div)
  })
  it("renders title", () => {
    screen.logTestingPlaygroundURL()
    renderShow()
    const title = screen.getByText(/Week two assessment problem three code challenge/i)
    expect(title).toBeInTheDocument()
  })
  it("renders content", () => {
    screen.logTestingPlaygroundURL()
    renderShow()
    const cont = screen.getByText(/Please share answer for problem three on week two assessment/i)
    expect(cont).toBeInTheDocument()
  })
})