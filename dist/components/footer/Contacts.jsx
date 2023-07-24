"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faWhatsapp_1 = require("@fortawesome/free-brands-svg-icons/faWhatsapp");
const faClock_1 = require("@fortawesome/free-solid-svg-icons/faClock");
const faMapMarkerAlt_1 = require("@fortawesome/free-solid-svg-icons/faMapMarkerAlt");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function FooterContacts() {
    return (<>
			<h3 className='page-footer__header'>Contacto</h3>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<react_fontawesome_1.FontAwesomeIcon icon={faWhatsapp_1.faWhatsapp}/>
				</span>
				<a className='link' href='tel:+590968265179'>+590968265179</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<react_fontawesome_1.FontAwesomeIcon icon={faMapMarkerAlt_1.faMapMarkerAlt}/>
				</span>
				<a className='link' href='#'>Guayaquil, Ecuador</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<react_fontawesome_1.FontAwesomeIcon icon={faClock_1.faClock}/>
				</span>
				10:00am &mdash; 18:00pm
			</p>
		</>);
}
exports.default = FooterContacts;
//# sourceMappingURL=Contacts.jsx.map