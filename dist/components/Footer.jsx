"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FooterMenu_1 = __importDefault(require("./footer/FooterMenu"));
const SocialButtons_1 = __importDefault(require("./footer/SocialButtons"));
const Contacts_1 = __importDefault(require("./footer/Contacts"));
const About_1 = __importDefault(require("./footer/About"));
function Footer({ menuList, companyTitle }) {
    return (<footer className='page-footer'>
			<div className='container'>
				<div className='row'>
					<div className='page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-1 order-md-3 order-4'>
						<About_1.default companyTitle={companyTitle}/>
					</div>
					<div className='page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-2 order-md-1 order-1'>
						<FooterMenu_1.default menuList={menuList}/>
					</div>
					<div className='page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-3 order-md-2 order-2'>
						<Contacts_1.default />
					</div>
					<div className='page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-4 order-md-4 order-3'>
						<SocialButtons_1.default />
					</div>
				</div>
			</div>
		</footer>);
}
exports.default = Footer;
//# sourceMappingURL=Footer.jsx.map