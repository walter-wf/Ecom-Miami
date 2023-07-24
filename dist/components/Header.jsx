"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {MouseEvent} from 'react';
// import Link from 'next/link';
// import HeaderCart from './cart/HeaderCart';
const ChooseVariantModal_1 = __importDefault(require("./header/ChooseVariantModal"));
// import logoImg from '../assets/logo.svg';
// import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {useAppDispatch} from '../hooks/redux';
// import {setIsOpened} from '../redux/reducers/asideMenu';
const MarsTopNav_1 = __importDefault(require("./header/MarsTopNav"));
const MarsLogoRow_1 = __importDefault(require("./header/MarsLogoRow"));
function Header() {
    return (<header className='page-header'>
			<MarsTopNav_1.default />
			<MarsLogoRow_1.default />
			{/*<div className='container'>*/}
			{/*	<div className='page-header__content'>*/}
			{/*		<div className='page-header__logo'>*/}
			{/*			<Link href='/'>*/}
			{/*				<a>*/}
			{/*					<img src={logoImg.src} width={logoImg.width} height={logoImg.height} alt={title} />*/}
			{/*				</a>*/}
			{/*			</Link>*/}
			{/*		</div>*/}
			{/*		<div className={'page-header__right-blocks'}>*/}
			{/*			<HeaderCart />*/}
			{/*			<button type={'button'}*/}
			{/*							className={'btn btn-outline-secondary page-header__hamburger'}*/}
			{/*							onClick={onHamburgerBtnClicked}*/}
			{/*			>*/}
			{/*				<FontAwesomeIcon icon={faBars} />*/}
			{/*			</button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			<ChooseVariantModal_1.default />
		</header>);
}
exports.default = Header;
//# sourceMappingURL=Header.jsx.map