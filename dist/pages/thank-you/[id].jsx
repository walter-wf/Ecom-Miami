"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const router_1 = require("next/router");
const boundless_checkout_react_1 = require("boundless-checkout-react");
const api_1 = require("../../lib/api");
const Main_1 = __importDefault(require("../../layouts/Main"));
const menu_1 = require("../../lib/menu");
const react_1 = require("react");
function ThankYouPage({ mainMenu, footerMenu }) {
    const router = (0, router_1.useRouter)();
    const checkoutStarter = (0, react_1.useRef)();
    const checkoutRef = (0, react_1.useCallback)((node) => {
        if (node && router.query.id) {
            checkoutStarter.current = (0, boundless_checkout_react_1.startOrderInfo)(node, {
                orderId: router.query.id,
                api: api_1.apiClient,
                onError: (error) => console.error('order info error:', error)
            });
        }
    }, [router.query.id]);
    if (!router.query.id) {
        return null;
    }
    return (<Main_1.default title={'Gracias por su compra!'} mainMenu={mainMenu} footerMenu={footerMenu} noIndex>
			<div className={'container'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Gracias por su compra!</h1>
				<div ref={checkoutRef}/>
			</div>
		</Main_1.default>);
}
exports.default = ThankYouPage;
const getServerSideProps = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoryTree = yield api_1.apiClient.catalog.getCategoryTree({ menu: 'category' });
    const { mainMenu, footerMenu } = (0, menu_1.makeAllMenus)({ categoryTree });
    return {
        props: {
            mainMenu,
            footerMenu
        }
    };
});
exports.getServerSideProps = getServerSideProps;
//# sourceMappingURL=%5Bid%5D.jsx.map