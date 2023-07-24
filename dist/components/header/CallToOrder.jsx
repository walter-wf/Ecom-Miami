"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const redux_1 = require("../../hooks/redux");
const calculator_1 = require("../../lib/calculator");
const cart_1 = require("../../redux/reducers/cart");
const ProductImage_1 = __importDefault(require("../productsList/ProductImage"));
const NoImage_1 = __importDefault(require("../NoImage"));
const image_1 = require("../../@types/image");
const faCheck_1 = require("@fortawesome/free-solid-svg-icons/faCheck");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const formatter_1 = require("../../lib/formatter");
const react_1 = require("react");
function CallToOrder() {
    const dispatch = (0, redux_1.useAppDispatch)();
    const show = (0, redux_1.useAppSelector)((state) => state.cart.showCall2Order);
    const [hiding, setHiding] = (0, react_1.useState)(false);
    const { item, qty } = (0, redux_1.useAppSelector)((state) => state.cart.call2OrderData);
    const hide = () => {
        setHiding(true);
        setTimeout(() => {
            setHiding(false);
            dispatch((0, cart_1.hideCall2Order)());
        }, 300);
    };
    (0, react_1.useEffect)(() => {
        if (show) {
            document.body.addEventListener('click', hide);
        }
        else {
            document.body.removeEventListener('click', hide);
        }
        return () => {
            document.body.removeEventListener('click', hide);
        };
    }, [show]); //eslint-disable-line
    return (<div className={(0, clsx_1.default)('call-to-order__wrapper', { 'd-none': !show })}>
			<div className='container call-to-order__container'>
				<div className={(0, clsx_1.default)('call-to-order', { opened: show, hiding: hiding })} onClick={(e) => e.stopPropagation()}>
					<h5 className={'call-to-order__header mb-3'}>
						Productos agregados al carrito
						<button className='btn-close btn-sm' onClick={hide}/>
					</h5>
					{item &&
            <>
							<div className='call-to-order__item mb-3'>
								<div className='call-to-order__img-wrapper'>
									{item.image
                    ? <ProductImage_1.default image={item.image} alt={item.product.title} maxSize={100}/>
                    : <NoImage_1.default ratio={image_1.TThumbRatio['1-1']}/>}
								</div>
								<div className={'desc'}>
									<div>{item.product.title}</div>
									{item.variant && <div className={'text-muted variant mt-1'}>{item.variant.title}</div>}
								</div>
							</div>
							{item.prices.length > 0 &&
                    <div className='mb-3'>
									{`${(0, formatter_1.formatMoney)(item.prices[0].value)} x ${qty} = ${(0, calculator_1.calcTotalPrice)(item.prices[0].value, qty)}`}
								</div>}
						</>}
					<div className='text-end'>
						<link_1.default href='/cart'>
							<a className='btn btn-action btn-anim'>
								<react_fontawesome_1.FontAwesomeIcon icon={faCheck_1.faCheck}/> Realizar un pedido
							</a>
						</link_1.default>
					</div>
				</div>
			</div>
		</div>);
}
exports.default = CallToOrder;
//# sourceMappingURL=CallToOrder.jsx.map