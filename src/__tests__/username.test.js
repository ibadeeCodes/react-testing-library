import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Username from "../components/username"

test("check username", async () => {
  let username = "John Doe"
  render(<Username username={username} />)

  expect(screen.getByRole("heading")).toHaveTextContent(`Hi ${username}`)
})
