'use client';
import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
	variant?: 'contained' | 'outlined' | 'iconButton';
	children: React.ReactNode;
	handleClick?: () => void;
}

const CustomButton = styled.button<ButtonProps>`
	cursor: pointer;
	border: unset;
	font-weight: 500;
	${({ variant, theme }) =>
		variant === 'contained' &&
		css`
			padding: 0.9rem 1.5rem;
			color: ${theme.colors.primary};
			font-size: 1rem;
			letter-spacing: 0.5px;
			max-width: 16rem;
			background-color: ${theme.colors.secondary};
			transition: all 0.3s ease-in-out;
			position: relative;
			z-index: 1;
			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				background-color: ${theme.colors.bright_purple};
				width: 100%;
				height: 100%;
				z-index: -1;
				transform: scaleX(0);
				transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
			}
			&:hover::before {
				transform: scaleX(1);
			}
			&:hover {
				color: ${theme.colors.white};
			}
		`};
	${({ variant, theme }) =>
		variant === 'outlined' &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			background-color: ${theme.colors.white};
			border: 1px solid ${theme.colors.primary};
			padding: 0.9rem 2.5rem;
			letter-spacing: 0.5px;
			font-size: 0.9rem;
			color: ${theme.colors.primary};
			transition: all 0.3s ease-in-out;
			position: relative;
			z-index: 1;
			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				background-color: ${theme.colors.primary};
				width: 100%;
				height: 100%;
				z-index: -1;
				transform: scaleX(0);
				transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
			}
			&:hover::before {
				transform: scaleX(1);
			}
			&:hover {
				color: ${theme.colors.white};
			}
		`}

	${({ theme, variant }) =>
		variant === 'iconButton' &&
		css`
			background: ${theme.colors.white};
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		`}
`;

const Button = ({ variant, children, handleClick }: ButtonProps) => {
	return (
		<CustomButton variant={variant} onClick={handleClick}>
			{children}
		</CustomButton>
	);
};

export default Button;
