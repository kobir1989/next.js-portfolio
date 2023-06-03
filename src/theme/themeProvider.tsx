'use client';

import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from '../../styles/GlobalStyles';

type Children = {
	children: React.ReactNode;
};
const ThemeProvider = ({ children }: Children) => {
	return (
		<Provider theme={theme}>
			<GlobalStyles />
			{children}
		</Provider>
	);
};

export default ThemeProvider;
