import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../index';

describe('Button Component', () => {
  it('should render with the correct title', () => {
    render(<Button title="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should apply className correctly', () => {
    const testClass = 'test-button-class';
    render(<Button title="Click me" onClick={() => {}} className={testClass} />);
    expect(screen.getByRole('button')).toHaveClass(testClass);
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button title="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be accessible with proper button role', () => {
    render(<Button title="Click me" onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
