"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("../../hooks/cart");
const boundless_checkout_react_1 = require("boundless-checkout-react");
const router_1 = require("next/router");
const api_1 = require("../../lib/api");
const cart_2 = require("../../redux/reducers/cart");
const Loader_1 = __importDefault(require("../../components/Loader"));
const logo_svg_1 = __importDefault(require("../../assets/logo.svg"));
const head_1 = __importDefault(require("next/head"));
const react_1 = require("react");
function CheckoutPage() {
    const { id: cartId, cartInited } = (0, cart_1.useCart)();
    const router = (0, router_1.useRouter)();
    const checkoutStarter = (0, react_1.useRef)();
    const checkoutRef = (0, react_1.useCallback)((node) => {
        if (node && cartInited === cart_2.TCartInited.yes && cartId) {
            checkoutStarter.current = (0, boundless_checkout_react_1.startCheckout)(node, {
                api: api_1.apiClient,
                cartId,
                onHide: (element) => {
                    if (element === 'backToCart')
                        router.push('/cart');
                    else if (element === 'logo')
                        router.push('/');
                    else
                        console.log('unknown element: ', element);
                },
                onThankYouPage: (data) => window.location.assign(`/thank-you/${data.orderId}`),
                basename: '/checkout',
                logoSrc: logo_svg_1.default.src,
            });
        }
    }, [cartInited, cartId]); //eslint-disable-line
    (0, react_1.useEffect)(() => {
        return () => {
            if (checkoutStarter.current) {
                checkoutStarter.current.destroy();
            }
        };
    }, []);
    if (cartInited !== cart_2.TCartInited.yes) {
        return <Loader_1.default />;
    }
    return (<>
			<head_1.default>
				<meta name='robots' content='noindex'/>
			</head_1.default>
			<div>
				<div ref={checkoutRef}></div>
			</div>
		</>);
}
exports.default = CheckoutPage;
//# sourceMappingURL=%5B%5B...slug%5D%5D.jsx.map