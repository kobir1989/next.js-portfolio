'use client';
import Box from '@/components/Atoms/Box/Box';
import Icon from '@/components/Atoms/Icon/Icon';
import NextImage from '@/components/Atoms/NextImage/NextImage';
import StackContainer from '@/components/Atoms/Stack/StackContainer';
import Typography from '@/components/Atoms/Typography/Typography';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

type CardProps = {
	projectName: string;
	link: string;
	git: string;
};

const StyledCardWrapper = styled.div`
	${({ theme }) =>
		theme &&
		css`
			width: 100%;
			transition: all 0.2s ease-in;
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: ${theme.colors.white};
		`}
`;
const Card = ({ projectName, link, git }: CardProps) => {
	return (
		<StyledCardWrapper>
			<Box sx={{ width: '100%', heigth: '40%' }}>
				<NextImage src='/assets/placeholder.jpg' alt='placeholder' width={300} height={150} style={{ width: '100%', height: '100%' }} />
			</Box>
			<StackContainer direction='column' gap='2rem' justifyContent='space-between' sx={{ padding: '1rem 1rem 1.5rem 1rem', background: '##F5F4FC' }}>
				<Typography variant='subTitle'>{projectName}</Typography>
				<StackContainer direction='row' justifyContent='space-between'>
					<Link href={link} target='_blank' rel='noopener noreferrer'>
						<Icon name='view' size='1.5rem' />
					</Link>
					<Link href={git} target='_blank' rel='noopener noreferrer'>
						<Icon name='github' size='1.5rem' />
					</Link>
				</StackContainer>
			</StackContainer>
		</StyledCardWrapper>
	);
};

export default Card;
