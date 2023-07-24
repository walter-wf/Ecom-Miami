"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faArrowLeft_1 = require("@fortawesome/free-solid-svg-icons/faArrowLeft");
function FiltersModal({ show, setShow, children }) {
    const onBackClick = (e) => {
        e.preventDefault();
        setShow(false);
    };
    return (<Modal_1.default show={show} onHide={() => setShow(false)}>
			<Modal_1.default.Header>
				<Modal_1.default.Title><a href={'#'} className='close-filter' onClick={onBackClick}>
					<react_fontawesome_1.FontAwesomeIcon className='me-2' icon={faArrowLeft_1.faArrowLeft}/>
					Volver a productos
				</a></Modal_1.default.Title>
			</Modal_1.default.Header>
			<Modal_1.default.Body>
				{children}
			</Modal_1.default.Body>
		</Modal_1.default>);
}
exports.default = FiltersModal;
//# sourceMappingURL=FiltersModal.jsx.map