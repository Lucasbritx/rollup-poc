import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Radio } from "../index";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const handleChange = jest.fn();

describe("Radio Component", () => {
  it("should render with the correct options", () => {
    render(<Radio onChange={handleChange} options={options} />);
    options.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it("should apply className correctly", () => {
    const testClass = "test-input-class";
    render(
      <Radio onChange={handleChange} options={options} className={testClass} />
    );
    const radioGroup = screen.getAllByRole("radio")[0].closest("div");
    expect(radioGroup).toHaveClass(testClass);
  });

  it("should call onChange handler correctly when clicked", () => {
    const handleChange = jest.fn();
    render(<Radio onChange={handleChange} options={options} />);
    const option2Radio = screen.getByLabelText("Option 2");
    fireEvent.click(option2Radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "option2" }),
      })
    );
  });

  it("should be accessible with proper radio role", () => {
    render(<Radio onChange={handleChange} options={options} />);
    expect(screen.getAllByRole("radio")).toHaveLength(3);
    options.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });
});
