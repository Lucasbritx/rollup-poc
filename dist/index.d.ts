import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
};
declare const Button: ({ title, ...props }: ButtonProps) => React.JSX.Element;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};
declare const Input: ({ label, ...props }: InputProps) => React.JSX.Element;

declare const Select: ({ options, value, onChange, className }: {
    options: any;
    value: any;
    onChange: any;
    className: any;
}) => React.JSX.Element;

declare const Textarea: ({ value, onChange, className, placeholder }: {
    value: any;
    onChange: any;
    className: any;
    placeholder: any;
}) => React.JSX.Element;

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
