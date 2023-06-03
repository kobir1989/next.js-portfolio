'use client';
import React from 'react';
import styled, { css } from 'styled-components';

interface StackProps {
	children: React.ReactNode;
	direction: 'row' | 'column';
	justifyContent?: 'flex-start' | 'flex-end' | 'center';
	alignItems?: 'flex-start' | 'flex-end' | 'center';
	gap?: string;
	flexWrap?: 'flex-wrap';
}

const StyledStack = styled.div<StackProps>`
	display: flex;
	${({ direction }) =>
		direction === 'row' &&
		css`
			flex-direction: row;
		`}
	${({ direction }) =>
		direction === 'column' &&
		css`
			flex-direction: column;
		`}
    ${({ justifyContent }) =>
		justifyContent === 'flex-start' &&
		css`
			justify-content: flex-start;
		`}
    ${({ justifyContent }) =>
		justifyContent === 'center' &&
		css`
			justify-content: center;
		`}
    ${({ justifyContent }) =>
		justifyContent === 'flex-end' &&
		css`
			justify-content: flex-end;
		`}
    ${({ alignItems }) =>
		alignItems === 'flex-start' &&
		css`
			align-items: flex-start;
		`}
    ${({ alignItems }) =>
		alignItems === 'flex-end' &&
		css`
			align-items: flex-end;
		`}
    ${({ alignItems }) =>
		alignItems === 'center' &&
		css`
			align-items: center;
		`}
    ${({ gap }) =>
		gap &&
		css`
			gap: ${gap};
		`}
    ${({ flexWrap }) =>
		flexWrap === 'flex-wrap' &&
		css`
			flex: flex-wrap;
		`}
`;

// This component is inspired by the MUI Stack Component and provides similar functionality for creating flexible layouts using flexbox.
const StackContainer = ({ children, direction = 'column', gap, flexWrap, justifyContent, alignItems }: StackProps) => {
	return (
		<StyledStack direction={direction} alignItems={alignItems} justifyContent={justifyContent} gap={gap} flexWrap={flexWrap}>
			{children}
		</StyledStack>
	);
};

export default StackContainer;
