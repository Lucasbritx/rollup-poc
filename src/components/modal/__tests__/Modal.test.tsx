import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "../index";

describe("Input Component", () => {
  it("should render properly", () => {
    render(
      <Modal isOpen>
        <input type="text" placeholder="input" />
      </Modal>
    );
    expect(screen.getByRole("textbox")).toBeVisible();
  });
/* 
  it("should render with the correct label", () => {
    render(<Modal label="input" />);
    expect(screen.getByText("input")).toBeInTheDocument();
  });

  it("should apply className correctly", () => {
    const testClass = "test-input-class";
    render(<Modal className={testClass} />);
    expect(screen.getByRole("textbox")).toHaveClass(testClass);
  });

  it("should call onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<Modal onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "a" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should be accessible with proper textbox role", () => {
    render(<Modal />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  }); */
});
