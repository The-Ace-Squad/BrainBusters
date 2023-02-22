import React from "react"
import { render, screen } from "@testing-library/react"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"


describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        )
    })
    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        )
        screen.logTestingPlaygroundURL()
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "brainbusterslogo.png")
        expect(logo).toHaveAttribute("alt", "BrainBusters Logo")

    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Sign In"))
        expect(screen.getByText("Sign In")).toBeInTheDocument()
        userEvent.click(screen.getByText("Sign Up"))
        expect(screen.getByText("Sign Up")).toBeInTheDocument()
    
    })
})
