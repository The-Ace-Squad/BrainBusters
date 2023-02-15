import { render } from "@testing-library/react"
import PostEdit from "./PostEdit"
import React from "react"

describe("<PostEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<PostEdit />, div)
  })
})