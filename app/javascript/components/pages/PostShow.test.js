import { render, screen } from "@testing-library/react"
import PostShow from "./PostShow"
import React from "react"
import "@testing-library/jest-dom"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockPosts from "../mockPosts"
import mockUsers from "../mockUsers"
import mockComments from "../mockComments"

const renderShow = () => {
  render(
  <MemoryRouter initialEntries={["/postshow/1"]}>
    <Routes>

    <Route path="/postshow/:id" element={<PostShow posts={mockPosts} current_user= {mockUsers} comments = {mockComments}/>} />

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
    renderShow()
    const title = screen.getByText(/Week two assessment problem three code challenge/i)
    expect(title).toBeInTheDocument()
  })
  it("renders content", () => {
    renderShow()
    const cont = screen.getByText(/Please share answer for problem three on week two assessment/i)
    expect(cont).toBeInTheDocument()
  })
})