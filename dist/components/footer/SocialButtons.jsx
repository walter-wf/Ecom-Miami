"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faFacebook_1 = require("@fortawesome/free-brands-svg-icons/faFacebook");
const faInstagram_1 = require("@fortawesome/free-brands-svg-icons/faInstagram");
const faTwitter_1 = require("@fortawesome/free-brands-svg-icons/faTwitter");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function SocialButtons() {
    return (<>
			<h3 className='page-footer__header'>Redes sociales</h3>
			<div className='page-footer__social-buttons'>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://fb.com'>
						<react_fontawesome_1.FontAwesomeIcon className='social-icon' icon={faFacebook_1.faFacebook}/>
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://instagram.com'>
						<react_fontawesome_1.FontAwesomeIcon className='social-icon' icon={faInstagram_1.faInstagram}/>
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://twitter.com'>
						<react_fontawesome_1.FontAwesomeIcon className='social-icon' icon={faTwitter_1.faTwitter}/>
					</a>
				</div>
			</div>
			<p className='page-footer__social-buttons company-info'>
				Todos los derechos reservados. Delta Development Software and Miami Home
			</p>
		</>);
}
exports.default = SocialButtons;
//# sourceMappingURL=SocialButtons.jsx.map