'use client';

import React from 'react';
import styled, { css } from 'styled-components';

interface TypographyProps {
	variant: 'title' | 'sectionTitle' | 'subTitle' | 'bodyText';
	color?: string;
	sx?: object;
	children: React.ReactNode;
}

const Title = styled.h1<TypographyProps>`
	${({ theme, color, sx }) =>
		theme &&
		css`
			font-size: 7vw;
			font-weight: 900;
			letter-spacing: 0.4px;
			line-height: 1;
			color: ${color};
			${{ ...sx }}
			@media screen and (min-width: ${theme.breakPoints.md}px) {
				font-size: 5vw;
			}
		`}
`;

const SectionTitle = styled.h2<TypographyProps>`
	${({ theme, color, sx }) =>
		theme &&
		css`
			font-weight: 900;
			font-size: 5vw;
			letter-spacing: 0.4px;
			color: ${color};
			${{ ...sx }}
			@media screen and (min-width: ${theme.breakPoints.md}px) {
				font-size: 3vw;
			}
		`}
`;

const SubTitle = styled.h3<TypographyProps>`
	${({ theme, color, sx }) =>
		theme &&
		css`
			font-weight: 500;
			font-size: 3vw;
			color: ${color};
			${{ ...sx }}
			letter-spacing: 0.2px;
			@media screen and (min-width: ${theme.breakPoints.md}px) {
				font-size: 1.3vw;
			}
		`}
`;

const BodyText = styled.p<TypographyProps>`
	${({ theme, color, sx }) =>
		theme &&
		css`
			font-weight: 500;
			font-size: 0.8rem;
			letter-spacing: 0.2px;
			color: ${color};
			line-height: 1.6;
			${{ ...sx }}
			@media screen and (min-width: ${theme.breakPoints.md}px) {
				font-size: 0.9rem;
			}
		`}
`;

const Typography = ({ variant, children, color, sx }: TypographyProps) => {
	switch (variant) {
		case 'title':
			return (
				<Title variant={variant} color={color} sx={sx}>
					{children}
				</Title>
			);
		case 'sectionTitle':
			return (
				<SectionTitle variant={variant} color={color} sx={sx}>
					{children}
				</SectionTitle>
			);
		case 'subTitle':
			return (
				<SubTitle variant={variant} color={color} sx={sx}>
					{children}
				</SubTitle>
			);
		case 'bodyText':
			return (
				<BodyText variant={variant} color={color} sx={sx}>
					{children}
				</BodyText>
			);

		default:
			return null;
	}
};

export default Typography;
