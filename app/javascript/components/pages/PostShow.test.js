import { render } from "@testing-library/react"
import PostShow from "./PostShow"
import React from "react"

describe("<PostShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<PostShow />, div)
  })
})