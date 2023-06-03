'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type NextImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	fill?: boolean;
	style?: object;
};

const NextImage = ({ src, alt, ...props }: NextImageProps) => {
	const [imageSrc, setImageSrc] = useState(src);

	return <Image src={imageSrc} blurDataURL='/assets/placeholder.jpg' alt={alt} onError={() => setImageSrc('/assets/placeholder.jpg')} {...props} />;
};

export default NextImage;
