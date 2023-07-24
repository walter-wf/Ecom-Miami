"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faWhatsapp_1 = require("@fortawesome/free-brands-svg-icons/faWhatsapp");
const faPhoneAlt_1 = require("@fortawesome/free-solid-svg-icons/faPhoneAlt");
const faShippingFast_1 = require("@fortawesome/free-solid-svg-icons/faShippingFast");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const link_1 = __importDefault(require("next/link"));
function MarsTopNav() {
    return (<nav className={'mars-top-nav'}>
			<div className={'container-xxl mars-top-nav__container'}>
				<div className={'mars-top-nav__contacts'}>
					<Contact href={'tel:+590968265179'} label={'+590968265179'} icon={<react_fontawesome_1.FontAwesomeIcon icon={faPhoneAlt_1.faPhoneAlt}/>}/>
					<Contact href={'https://api.whatsapp.com/send/?phone=593987309734&text&type=phone_number&app_absent=0'} label={'+590968265179'} icon={<react_fontawesome_1.FontAwesomeIcon icon={faWhatsapp_1.faWhatsapp}/>}/>
				</div>
				<div className={'mars-top-nav__note'}>
					<p>
						Lunes a sabado en los horarios de 10:00 a 19:00.  <react_fontawesome_1.FontAwesomeIcon icon={faShippingFast_1.faShippingFast} className={'text-theme-color ms-1'}/>
					</p>
				</div>
				<ul className={'mars-top-nav__menu list-unstyled'}>
					<li className={'mars-top-nav__menu-item'}>
						<link_1.default href={'/shipping'}>
							<a className='mars-top-nav__menu-link'>Envios</a>
						</link_1.default>
					</li>
					<li className={'mars-top-nav__menu-item'}>
						<link_1.default href={'/about'}>
							<a className='mars-top-nav__menu-link'>Sobre nosotros</a>
						</link_1.default>
					</li>
				</ul>
			</div>
		</nav>);
}
exports.default = MarsTopNav;
const Contact = ({ href, label, icon }) => {
    return (<div className={'mars-top-nav__contact'}>
			{icon &&
            <a className={'mars-top-nav__contact-icon'} href={href}>{icon}</a>}
			<a className={'mars-top-nav__contact-txt'} href={href}>
				{label}
			</a>
		</div>);
};
//# sourceMappingURL=MarsTopNav.jsx.map