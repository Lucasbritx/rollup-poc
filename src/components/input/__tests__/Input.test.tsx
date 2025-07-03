import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "../index";

describe("Input Component", () => {
  it("should render with the correct placeholder", () => {
    render(<Input placeholder="input" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "input");
  });

  it("should render with the correct label", () => {
    render(<Input label="input" />);
    expect(screen.getByText("input")).toBeInTheDocument();
  });

  it("should apply className correctly", () => {
    const testClass = "test-input-class";
    render(<Input className={testClass} />);
    expect(screen.getByRole("textbox")).toHaveClass(testClass);
  });

  it("should call onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "a" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should be accessible with proper textbox role", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
