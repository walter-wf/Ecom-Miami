"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const HeaderCart_1 = __importDefault(require("../cart/HeaderCart"));
const redux_1 = require("../../hooks/redux");
const asideMenu_1 = require("../../redux/reducers/asideMenu");
const logojpeg_jpeg_1 = __importDefault(require("../../assets/logojpeg.jpeg"));
const clsx_1 = __importDefault(require("clsx"));
const faShoppingCart_1 = require("@fortawesome/free-solid-svg-icons/faShoppingCart");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function MarsLogoRow() {
    const dispatch = (0, redux_1.useAppDispatch)();
    const asideIsOpened = (0, redux_1.useAppSelector)((state) => state.asideMenu.isOpened);
    const onHamburgerBtnClicked = (e) => {
        e.preventDefault();
        dispatch((0, asideMenu_1.setIsOpened)(true));
    };
    return (<section className={'mars-logo-row'}>
			<div className={'container-xxl mars-logo-row__container'}>
				<div className={'mars-logo-row__logo-wrapper'}>
					<link_1.default href={'/'}>
						<a className={'mars-logo-row__logo'}>
							<span></span>
							<img src={logojpeg_jpeg_1.default.src} alt={'Brand Shop'}/>
						</a>
					</link_1.default>
				</div>
				<div className={'mars-logo-row__welcome'}>
					Bienvenido a nuestra tienda. ¡Estamos trabajando para ti!
				</div>
				<div className={'mars-logo-row__at-right'}>
					<HeaderCart_1.default icon={<span className={'mars-logo-row__cart-icon'}><react_fontawesome_1.FontAwesomeIcon icon={faShoppingCart_1.faShoppingCart}/></span>}/>
					<button type={'button'} className={'hamburger-btn mars-logo-row__hamburger'} onClick={onHamburgerBtnClicked}>
						<span className={(0, clsx_1.default)('hamburger-btn__bar', { 'first-opened': asideIsOpened })}/>
						<span className={(0, clsx_1.default)('hamburger-btn__bar', { 'middle-opened': asideIsOpened })}/>
						<span className={(0, clsx_1.default)('hamburger-btn__bar', { 'last-opened': asideIsOpened })}/>
					</button>
				</div>
			</div>
		</section>);
}
exports.default = MarsLogoRow;
//# sourceMappingURL=MarsLogoRow.jsx.map