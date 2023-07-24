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
const react_1 = require("react");
const redux_1 = require("../../hooks/redux");
const api_1 = require("../../lib/api");
const xhr_1 = require("../../redux/reducers/xhr");
const debounce_1 = __importDefault(require("lodash/debounce"));
const CartRow_1 = __importDefault(require("./CartRow"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faShoppingCart_1 = require("@fortawesome/free-solid-svg-icons/faShoppingCart");
const router_1 = require("next/router");
function CartItems({ items, setItems, total }) {
    const dispatch = (0, redux_1.useAppDispatch)();
    const submits = (0, react_1.useRef)([]);
    const mounted = (0, react_1.useRef)(false);
    const cartId = (0, redux_1.useAppSelector)((state) => state.cart.cartId);
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const router = (0, router_1.useRouter)();
    const checkBgSubmits = () => {
        const size = submits.current.length;
        if (!size || !mounted.current)
            return;
        setSubmitting(true);
        Promise.allSettled(submits.current)
            .then(() => {
            if (submits.current.length === size) {
                setSubmitting(false);
                submits.current = [];
            }
        });
    };
    const rmItem = (itemId) => {
        if (!cartId)
            return;
        if (!confirm('Esta seguro?'))
            return;
        setSubmitting(true);
        const promise = api_1.apiClient.cart.removeFromCart(cartId, [itemId])
            .then(() => checkBgSubmits());
        submits.current.push(promise);
        dispatch((0, xhr_1.addPromise)(promise));
        setItems(prevItems => prevItems.filter(el => el.item_id !== itemId));
    };
    const submitQty = (itemId, newQty) => __awaiter(this, void 0, void 0, function* () {
        if (!cartId)
            return;
        const promise = api_1.apiClient.cart.setCartItemsQty(cartId, [{
                item_id: itemId,
                qty: newQty
            }])
            .then(() => checkBgSubmits());
        submits.current.push(promise);
    });
    const debouncedSubmitQty = (0, react_1.useMemo)(() => (0, debounce_1.default)((itemId, qty) => submitQty(itemId, qty), 700, { leading: true }), []); // eslint-disable-line
    const onQtyChange = (itemId, newQty) => {
        setSubmitting(true);
        debouncedSubmitQty(itemId, newQty);
        setItems(prevFiltered => {
            const out = [...prevFiltered];
            const index = out.findIndex(el => el.item_id === itemId);
            if (index >= 0) {
                out[index].qty = newQty;
            }
            return out;
        });
    };
    (0, react_1.useEffect)(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);
    return (<>
			<div className='cart-items'>
				<div className='cart-items__thead row'>
					<div className='cart-items__thead-cell col-md-4'></div>
					<div className='cart-items__thead-cell col-md-2'>Precio</div>
					<div className='cart-items__thead-cell col-md-2'>Cantidad</div>
					<div className='cart-items__thead-cell col-md-2'>Total</div>
					<div className='cart-items__thead-cell col-md-2'></div>
				</div>
				{items.map(item => (<CartRow_1.default item={item} rmItem={() => rmItem(item.item_id)} key={item.item_id} onQtyChange={(qty) => onQtyChange(item.item_id, qty)}/>))}
				<div className='cart-items__total-row row'>
					<div className='cart-items__total-cell cart-items__total-cell_title col-md-6'>Total Pedido:</div>
					<div className='cart-items__total-cell col-md-2'>
						<span className='cart-items__label'>Cantidad: </span>
						{total.qty}
					</div>
					<div className='cart-items__total-cell col-md-2'>
						<span className='cart-items__label'>Precio: </span>
						{total.price}
					</div>
				</div>
			</div>
			<div className='cart-items__actions'>
				<button className='btn btn-action btn-lg btn-anim' disabled={submitting} onClick={() => router.push('/checkout')}>
					Finalizar compra <react_fontawesome_1.FontAwesomeIcon icon={faShoppingCart_1.faShoppingCart}/>
				</button>
			</div>
		</>);
}
exports.default = CartItems;
//# sourceMappingURL=CartItems.jsx.map