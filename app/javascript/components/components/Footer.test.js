import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from "@testing-library/user-event"
import Footer from './Footer'

describe("<Footer />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>,
            div
        )
    })
    it("it has a copyright", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>,
        )
        const footer = screen.getByText(/2023 Ace Squad/i)
        expect(footer).toBeInTheDocument()
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Matthew Munoz"))
        expect(screen.getByText("Matthew Munoz")).toBeInTheDocument()
        userEvent.click(screen.getByText("Natally Quintero"))
        expect(screen.getByText("Natally Quintero")).toBeInTheDocument()
        userEvent.click(screen.getByText("Romeo Yutig"))
        expect(screen.getByText("Romeo Yutig")).toBeInTheDocument()
        userEvent.click(screen.getByText("Aileen Whitney"))
        expect(screen.getByText("Aileen Whitney")).toBeInTheDocument()
        userEvent.click(screen.getByText("LEARN Academy"))
        expect(screen.getByText("LEARN Academy")).toBeInTheDocument()
    })
})