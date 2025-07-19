import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from '../index';

describe('Select Component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  it('should render with all options', () => {
    render(<Select options={mockOptions} value="" onChange={() => {}} className="" />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('should display the selected value', () => {
    render(<Select options={mockOptions} value="option2" onChange={() => {}} className="" />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue('option2');
  });

  it('should apply className correctly', () => {
    const testClass = 'test-select-class';
    render(<Select options={mockOptions} value="" onChange={() => {}} className={testClass} />);
    
    expect(screen.getByRole('combobox')).toHaveClass(testClass);
  });

  it('should call onChange handler when option is selected', () => {
    const handleChange = jest.fn();
    render(<Select options={mockOptions} value="" onChange={handleChange} className="" />);
    
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'option1' } });
    expect(handleChange).toHaveBeenCalledWith('option1');
  });

  it('should be accessible with proper combobox role', () => {
    render(<Select options={mockOptions} value="" onChange={() => {}} className="" />);
    
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render correct number of options', () => {
    render(<Select options={mockOptions} value="" onChange={() => {}} className="" />);
    
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
  });

  it('should handle empty options array', () => {
    render(<Select options={[]} value="" onChange={() => {}} className="" />);
    
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });
});
