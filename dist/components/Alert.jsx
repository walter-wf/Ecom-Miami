"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Toast_1 = __importDefault(require("react-bootstrap/Toast"));
const ToastContainer_1 = __importDefault(require("react-bootstrap/ToastContainer"));
const redux_1 = require("../hooks/redux");
const alert_1 = require("../redux/reducers/alert");
function AlertWidget() {
    const dispatch = (0, redux_1.useAppDispatch)();
    const { show, text, type } = (0, redux_1.useAppSelector)((state) => state.alert);
    const onClose = () => {
        dispatch((0, alert_1.hideAlert)());
    };
    return (<ToastContainer_1.default position={'top-end'} className='mt-3 me-3'>
			<Toast_1.default className={'border-0'} onClose={onClose} show={show} delay={3000} autohide bg={type}>
				<Toast_1.default.Body>
					<div className='d-flex'>
						<div className='alert-text'>
							{text}
						</div>
						<button className='btn-close btn-sm btn-close-white me-2 m-auto' onClick={onClose}/>
					</div>
				</Toast_1.default.Body>
			</Toast_1.default>
		</ToastContainer_1.default>);
}
exports.default = AlertWidget;
//# sourceMappingURL=Alert.jsx.map