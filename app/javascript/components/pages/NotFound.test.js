import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"
import React from "react"
import { BrowserRouter } from "react-router-dom"


describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<NotFound />, div)
  })
  it("renders a 404 image", () => {
    const div = document.createElement("div")
    render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>,
        div
    )
    screen.logTestingPlaygroundURL()
    const image = screen.getByRole('img', {
      name: /404 not found/i
    })
    expect(image).toBeInTheDocument
  })
})