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
const react_1 = require("react");
const CartItems_1 = __importDefault(require("../components/cart/CartItems"));
const redux_1 = require("../hooks/redux");
const Main_1 = __importDefault(require("../layouts/Main"));
const api_1 = require("../lib/api");
const cart_1 = require("../redux/reducers/cart");
const xhr_1 = require("../redux/reducers/xhr");
const cart_2 = require("../hooks/cart");
const menu_1 = require("../lib/menu");
const CartLoader_1 = __importDefault(require("../components/cart/CartLoader"));
const link_1 = __importDefault(require("next/link"));
const calculator_1 = require("../lib/calculator");
function CartPage({ mainMenu, footerMenu }) {
    const dispatch = (0, redux_1.useAppDispatch)();
    const { id: cartId, cartInited } = (0, cart_2.useCart)();
    const [items, setItems] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const getCartData = (cartId) => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        const promise = api_1.apiClient.cart.getCartItems(cartId)
            .then(({ cart, items }) => {
            setItems(items);
            dispatch((0, cart_1.setCartTotal)(cart.total));
        })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
        dispatch((0, xhr_1.addPromise)(promise));
    });
    const total = (0, react_1.useMemo)(() => (0, calculator_1.calcTotal)(items.map(el => ({
        qty: el.qty,
        price: (0, calculator_1.calcTotalPrice)(el.itemPrice.final_price, el.qty)
    }))), [items]);
    (0, react_1.useEffect)(() => {
        dispatch((0, cart_1.setCartTotal)({
            qty: total.qty,
            total: total.price
        }));
    }, [total]); //eslint-disable-line
    (0, react_1.useEffect)(() => {
        if (cartId)
            getCartData(cartId);
    }, [cartId]); //eslint-disable-line
    return (<Main_1.default mainMenu={mainMenu} footerMenu={footerMenu} noIndex>
			<div className='container'>
				<div className='cart-page row'>
					<div className='col-lg-8 offset-lg-2'>
						<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Carrito de compras</h1>
						<div className='cart-page__content'>
							{(loading || cartInited === cart_1.TCartInited.processing)
            ? <CartLoader_1.default />
            : items.length > 0
                ? <CartItems_1.default items={items} setItems={setItems} total={total}/>
                : <>
										<p className='cart-page__warning'>
											Tu carrito de compras esta vacio
										</p>
										<p className='cart-page__warning'>
											<link_1.default href='/'>
												<a className='btn btn-success'>¡Vamos a comprar!</a>
											</link_1.default>
										</p>
									</>}
						</div>
					</div>
				</div>
			</div>
		</Main_1.default>);
}
exports.default = CartPage;
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
//# sourceMappingURL=cart.jsx.map