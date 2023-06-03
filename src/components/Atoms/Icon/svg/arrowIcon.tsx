import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg width={40} height={40} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
		<path d='M20 12H4m16 0-6 6m6-6-6-6' stroke='#000' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
	</svg>
);

export default SvgComponent;
