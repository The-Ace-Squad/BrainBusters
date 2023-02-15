import React from "react"
import { render } from "@testing-library/react"
import MyPost from "./MyPost"

describe("<MyPost />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MyPost />, div)
  })
})