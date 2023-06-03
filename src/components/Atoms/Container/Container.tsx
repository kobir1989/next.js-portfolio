import React from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps {
	background?: string;
	children: React.ReactNode;
}

const StyledContainer = styled.section<ContainerProps>`
	max-width: 1400px;
	${({ background }) =>
		background &&
		css`
			background-color: ${background};
		`}
`;

const Container = ({ children, background }: ContainerProps) => {
	return <StyledContainer background={background}>{children}</StyledContainer>;
};

export default Container;
