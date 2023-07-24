"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faUndo_1 = require("@fortawesome/free-solid-svg-icons/faUndo");
const faCalendarAlt_1 = require("@fortawesome/free-solid-svg-icons/faCalendarAlt");
const faPhoneVolume_1 = require("@fortawesome/free-solid-svg-icons/faPhoneVolume");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const shippingInfo = [
    { id: 1, icon: faCalendarAlt_1.faCalendarAlt, text: 'Extended warranty for 30 days.' },
    { id: 2, icon: faUndo_1.faUndo, text: 'Changed your mind? No problem!' },
    { id: 3, icon: faPhoneVolume_1.faPhoneVolume, text: 'Customer support line' },
];
function ProductShipping() {
    return (<div className='product-page__shipping'>
			{shippingInfo.map(row => (<div className='product-page__shipping-row' key={row.id}>
					<span className='product-page__shipping-icon'>
						<react_fontawesome_1.FontAwesomeIcon icon={row.icon} size='2x'/>
					</span>
					{row.text}
				</div>))}
		</div>);
}
exports.default = ProductShipping;
//# sourceMappingURL=Shipping.jsx.map