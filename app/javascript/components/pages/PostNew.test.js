import { render } from "@testing-library/react"
import PostNew from "./PostNew"
import React from "react"

describe("<PostNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<PostNew />, div)
  })
})