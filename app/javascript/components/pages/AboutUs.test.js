import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import AboutUs from "./AboutUs"
import { BrowserRouter } from "react-router-dom"

describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<AboutUs />, div)  
  })
  it("checks for a heading", () => {
    render (
        <BrowserRouter>
            <AboutUs />
        </BrowserRouter>
    )
    const heading = screen.getByRole('heading', {
        name: /about us/i
      })
      expect(heading).toBeInTheDocument()
  })
  it("checks for a subheading", () => {
    render (
        <BrowserRouter>
            <AboutUs />
        </BrowserRouter>
    )
    
    const subheading = screen.getByRole('heading', {
        name: /product manager: matthew munoz/i
      })
      expect(subheading).toBeInTheDocument()
  })
  it("checks for a description", () => {
    render (
        <BrowserRouter>
            <AboutUs />
        </BrowserRouter>
    )
    // screen.logTestingPlaygroundURL()
    const description = screen.getByText(
        /hey, i'm matthew munoz from san diego, california\. i'm a former high school teacher turned full\-stack developer\. when i'm not coding i enjoy playing video games, finding great restaurants, boxing, and spending time with my friends and family\./i
        )
        expect(description).toBeInTheDocument()
  })
})
