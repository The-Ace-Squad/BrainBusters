import { render } from "@testing-library/react"
import Notfound from "./Notfound"
import React from "react"

describe("<Notfound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Notfound />, div)
  })
})