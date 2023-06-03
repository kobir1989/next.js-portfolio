import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg width={40} height={40} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
		<path d='M19 5 5 19M5 5l14 14' stroke={props.color} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
	</svg>
);

export default SvgComponent;
