'use client';

import React from 'react';
import styled, { css } from 'styled-components';

interface BoxProps {
	children: React.ReactNode;
	sx?: object;
}

const StyledBox = styled.div<BoxProps>`
	${({ sx }) =>
		sx &&
		css`
			${{ ...sx }}
		`}
`;

const Box = ({ children, sx }: BoxProps) => {
	return <StyledBox sx={sx}>{children}</StyledBox>;
};

export default Box;
