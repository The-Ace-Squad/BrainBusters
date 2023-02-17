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
        userEvent.click(screen.getByText("View All Posts"))
        expect(screen.getByText("View All Posts")).toBeInTheDocument()
        userEvent.click(screen.getByText("My Posts"))
        expect(screen.getByText("My Posts")).toBeInTheDocument()
        userEvent.click(screen.getByText("Create Post"))
        expect(screen.getByText("Create Post")).toBeInTheDocument()
        userEvent.click(screen.getByText("Sign Out"))
        expect(screen.getByText("Sign Out")).toBeInTheDocument()
    })
})
