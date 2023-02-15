import { render } from "@testing-library/react"
import PostIndex from "./PostIndex"
import React from "react"

describe("<PostIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<PostIndex />, div)
  })
})