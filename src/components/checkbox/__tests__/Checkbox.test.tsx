import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "../index";

describe("Checkbox Component", () => {
  it("should render with the correct label", () => {
    render(<Checkbox label="Checkbox" />);
    expect(screen.getByText("Checkbox")).toBeInTheDocument();
  });

  it("should apply className correctly", () => {
    const testClass = "test-checkbox-class";
    render(<Checkbox label="Click me" className={testClass} />);
    expect(screen.getByRole("checkbox")).toHaveClass(testClass);
  });

  it("should apply label className correctly", () => {
    const testLabelClass = "test-label-checkbox-class";
    render(<Checkbox label="Checkbox" labelClassName={testLabelClass} />);
    expect(screen.getByText("Checkbox")).toHaveClass(testLabelClass);
  });

  it("should call onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Checkbox" onChange={handleChange} />);

    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should be accessible with proper checkbox role", () => {
    render(<Checkbox label="Checkbox" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
