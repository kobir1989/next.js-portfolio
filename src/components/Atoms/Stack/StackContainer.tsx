'use client';
import React from 'react';
import styled, { css } from 'styled-components';

interface StackProps {
	children: React.ReactNode;
	direction?: 'row' | 'column';
	justifyContent?: 'space-between' | 'space-around' | 'center';
	alignItems?: 'flex-start' | 'flex-end' | 'center';
	gap?: string;
	flexWrap?: 'flex-wrap';
	sx?: object;
}

const StyledStack = styled.div<StackProps>`
	display: flex;

	${({ direction, sx }) =>
		direction === 'row' &&
		css`
			flex-direction: row;
			${{ ...sx }}
		`}
	${({ direction, sx }) =>
		direction === 'column' &&
		css`
			flex-direction: column;
			${{ ...sx }}
		`}
    ${({ justifyContent }) =>
		justifyContent === 'space-around' &&
		css`
			justify-content: space-around;
		`}
    ${({ justifyContent }) =>
		justifyContent === 'center' &&
		css`
			justify-content: center;
		`}
    ${({ justifyContent }) =>
		justifyContent === 'space-between' &&
		css`
			justify-content: space-between;
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

// This component is kind of similar to the MUI Stack Component and provides similar functionality for creating flexible layouts using flexbox.
const StackContainer = ({ sx, children, direction = 'column', gap, flexWrap, justifyContent, alignItems }: StackProps) => {
	return (
		<StyledStack direction={direction} alignItems={alignItems} justifyContent={justifyContent} gap={gap} flexWrap={flexWrap} sx={sx}>
			{children}
		</StyledStack>
	);
};

export default StackContainer;
