import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ClickCounter from "../components/click-counter"

test("increment counter", async () => {
  render(<ClickCounter />)

  expect(screen.getByRole("heading")).toHaveTextContent("0")

  fireEvent.click(screen.getByText("Increment"))

  expect(screen.getByRole("heading")).toHaveTextContent("1")
})

test("decrement counter", async () => {
  render(<ClickCounter />)

  expect(screen.getByRole("heading")).toHaveTextContent("0")

  fireEvent.click(screen.getByText("Decrement"))

  expect(screen.getByRole("heading")).toHaveTextContent("0")
})
