import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
};
declare const Button: ({ title, ...props }: ButtonProps) => React.JSX.Element;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};
declare const Input: ({ label, ...props }: InputProps) => React.JSX.Element;

interface SelectOption {
    value: string;
    label: string;
}
type SelectProps = {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
};
declare const Select: ({ options, value, onChange, className }: SelectProps) => React.JSX.Element;

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
declare const Textarea: ({ value, onChange, className, placeholder }: TextareaProps) => React.JSX.Element;

interface RadioOption {
    value: string;
    label: string;
}
type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
    options: RadioOption[];
};
declare const Radio: ({ options, value, onChange, className }: RadioProps) => React.JSX.Element;

type ModalProps = {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
};
declare const Modal: ({ isOpen, onClose, children, }: ModalProps) => React.JSX.Element | null;

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    labelClassName?: string;
};
declare const Checkbox: ({ labelClassName, label, ...props }: CheckboxProps) => React.JSX.Element;

export { Button, Checkbox, Input, Modal, Radio, Select, Textarea };
