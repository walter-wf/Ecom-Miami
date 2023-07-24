"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCart = void 0;
const redux_1 = require("./redux");
const react_1 = require("react");
const cart_1 = require("../redux/actions/cart");
function useCart() {
    const cart = (0, redux_1.useAppSelector)((state) => state.cart);
    const dispatch = (0, redux_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, cart_1.initCart)());
    }, []); //eslint-disable-line
    return {
        total: cart.total,
        id: cart.cartId,
        cartInited: cart.cartInited
    };
}
exports.useCart = useCart;
//# sourceMappingURL=cart.js.map