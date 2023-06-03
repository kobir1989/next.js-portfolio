import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg width={props.width || 40} height={props.height || 40} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
		<path fillRule='evenodd' clipRule='evenodd' d='M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Zm3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm6 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z' fill={props.color} />
	</svg>
);

export default SvgComponent;
