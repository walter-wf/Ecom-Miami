"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boundless_api_client_1 = require("boundless-api-client");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faStar_1 = require("@fortawesome/free-solid-svg-icons/faStar");
const faFlag_1 = require("@fortawesome/free-solid-svg-icons/faFlag");
const faFire_1 = require("@fortawesome/free-solid-svg-icons/faFire");
const faCheck_1 = require("@fortawesome/free-solid-svg-icons/faCheck");
const faTag_1 = require("@fortawesome/free-solid-svg-icons/faTag");
const faHeart_1 = require("@fortawesome/free-solid-svg-icons/faHeart");
const clsx_1 = __importDefault(require("clsx"));
function ProductLabels({ labels, className }) {
    if (!labels.length)
        return null;
    return (<ul className={(0, clsx_1.default)('product__labels list-unstyled', className)}>
			{labels.map(({ label_id, title, color, text_color, icon }) => <li key={label_id} className={'product__label'} style={{ color: text_color, backgroundColor: color }}>
					<LabelIcon icon={icon}/> {title}
				</li>)}
		</ul>);
}
exports.default = ProductLabels;
const LabelIcon = ({ icon }) => {
    let faIcon;
    switch (icon) {
        case boundless_api_client_1.TLabelIcon.star:
            faIcon = faStar_1.faStar;
            break;
        case boundless_api_client_1.TLabelIcon.flag:
            faIcon = faFlag_1.faFlag;
            break;
        case boundless_api_client_1.TLabelIcon.fire:
            faIcon = faFire_1.faFire;
            break;
        case boundless_api_client_1.TLabelIcon.ok:
            faIcon = faCheck_1.faCheck;
            break;
        case boundless_api_client_1.TLabelIcon.tag:
            faIcon = faTag_1.faTag;
            break;
        case boundless_api_client_1.TLabelIcon.heart:
            faIcon = faHeart_1.faHeart;
            break;
    }
    if (!faIcon)
        return null;
    return <react_fontawesome_1.FontAwesomeIcon icon={faIcon}/>;
};
//# sourceMappingURL=Labels.jsx.map