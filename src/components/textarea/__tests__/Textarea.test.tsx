import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Textarea } from '../index';

describe('Textarea Component', () => {
  it('should render with initial value', () => {
    const testValue = 'Initial text content';
    render(<Textarea value={testValue} onChange={() => {}} className="" placeholder="" />);
    
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });

  it('should display placeholder when value is empty', () => {
    const testPlaceholder = 'Enter your text here';
    render(<Textarea value="" onChange={() => {}} className="" placeholder={testPlaceholder} />);
    
    expect(screen.getByPlaceholderText(testPlaceholder)).toBeInTheDocument();
  });

  it('should apply className correctly', () => {
    const testClass = 'test-textarea-class';
    render(<Textarea value="" onChange={() => {}} className={testClass} placeholder="" />);
    
    expect(screen.getByRole('textbox')).toHaveClass(testClass);
  });

  it('should call onChange handler when text is typed', () => {
    const handleChange = jest.fn();
    render(<Textarea value="" onChange={handleChange} className="" placeholder="" />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New text' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should be accessible with proper textbox role', () => {
    render(<Textarea value="" onChange={() => {}} className="" placeholder="" />);
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should handle multiline text content', () => {
    const multilineText = 'Line 1\nLine 2\nLine 3';
    render(<Textarea value={multilineText} onChange={() => {}} className="" placeholder="" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue(multilineText);
  });

  it('should update value when controlled', () => {
    const { rerender } = render(<Textarea value="Initial" onChange={() => {}} className="" placeholder="" />);
    
    expect(screen.getByDisplayValue('Initial')).toBeInTheDocument();
    
    rerender(<Textarea value="Updated" onChange={() => {}} className="" placeholder="" />);
    expect(screen.getByDisplayValue('Updated')).toBeInTheDocument();
  });
});
