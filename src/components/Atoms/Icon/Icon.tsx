import React from 'react';
import heroBackground from './svg/heroBackground';
import crossIcon from './svg/crossIcon';
import curlyShapes from './svg/curlyShapes';
import menuIcon from './svg/menuIcon';
import dotsIcon from './svg/dotsIcon';
import lineIcon from './svg/lineIcon';
import logo from './svg/logo';
import nameLogo from './svg/nameLogo';
import { CgShapeSquare } from 'react-icons/cg';
import { CgShapeRhombus } from 'react-icons/cg';
import { AiFillGithub, AiOutlineHome } from 'react-icons/ai';
import { BsLinkedin, BsFacebook, BsArrowRight, BsInstagram, BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlineWorkHistory, MdWorkHistory, MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import backgroundShapes from './svg/backgroundShapes';
import { TiContacts } from 'react-icons/ti';
import { VscFeedback } from 'react-icons/vsc';
import { GrView } from 'react-icons/gr';
import { IconType } from 'react-icons';

const iconsMap = {
	hero: heroBackground,
	arrow: BsArrowRight,
	cross: crossIcon,
	curlyShapes: curlyShapes,
	menu: menuIcon,
	dots: dotsIcon,
	line: lineIcon,
	logo,
	nameLogo,
	squreShape: CgShapeSquare,
	rotateShape: CgShapeRhombus,
	github: AiFillGithub,
	view: GrView,
	backgroundShapes,
	facebook: BsFacebook,
	insta: BsInstagram,
	linkedIn: BsLinkedin,
	email: MdOutlineEmail,
	contact: TiContacts,
	work: MdOutlineWorkHistory,
	home: AiOutlineHome,
	feedback: VscFeedback,
	story: MdWorkHistory,
	skills: BsPersonWorkspace,
	leftArrow: MdOutlineArrowLeft,
	rightArrow: MdOutlineArrowRight,
};

type IconName = keyof typeof iconsMap;

type IconProps<T extends IconName> = React.ComponentProps<(typeof iconsMap)[T]> & {
	name: T;
};

const Icon = <T extends IconName>({ name, ...props }: IconProps<T>) => {
	const IconComponent = iconsMap[name] as IconType;
	return <IconComponent {...props} />;
};

export default Icon;
