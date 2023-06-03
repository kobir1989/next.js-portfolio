import React from 'react';
import styled from 'styled-components';

const StyledCardWrapper = styled.div``;
const Card = () => {
	return (
		<StyledCardWrapper>
			<div>{/* <img src={imageUrl} alt={projectName} /> */}</div>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{/* <h3>{projectName}</h3> */}
				{/* <div className={styles.card_links}>
					<Link to={link} target='_blank' rel='noopener noreferrer'>
						<Icon name='view' size='1.5rem' />
					</Link>
					<Link to={git} target='_blank' rel='noopener noreferrer'>
						<Icon name='github' size='1.5rem' />
					</Link>
				</div> */}
			</div>
		</StyledCardWrapper>
	);
};

export default Card;
