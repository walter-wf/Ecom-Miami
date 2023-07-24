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
exports.addItem2Cart = exports.getCartByCookieOrRetrieve = exports.initCart = void 0;
const cart_1 = require("../reducers/cart");
const js_cookie_1 = __importDefault(require("js-cookie"));
const api_1 = require("../../lib/api");
const xhr_1 = require("../reducers/xhr");
const alert_1 = require("../reducers/alert");
const initCart = () => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartInited } = getState().cart;
    if ([cart_1.TCartInited.yes, cart_1.TCartInited.processing].includes(cartInited)) {
        return;
    }
    dispatch((0, cart_1.setInitStatus)(cart_1.TCartInited.processing));
    try {
        const cartInfo = yield (0, exports.getCartByCookieOrRetrieve)();
        js_cookie_1.default.set('boundless_cart_id', cartInfo.id, { expires: 365, sameSite: 'None', secure: true });
        dispatch((0, cart_1.setCartInited)(cartInfo));
    }
    catch (err) {
        console.error(err);
        dispatch((0, cart_1.setInitStatus)(cart_1.TCartInited.no));
    }
});
exports.initCart = initCart;
const getCartByCookieOrRetrieve = () => __awaiter(void 0, void 0, void 0, function* () {
    const cartId = js_cookie_1.default.get('boundless_cart_id');
    if (cartId) {
        try {
            return yield api_1.apiClient.cart.getCartInfo(cartId);
        }
        catch (e) {
            //
        }
    }
    return yield api_1.apiClient.cart.retrieveCart();
});
exports.getCartByCookieOrRetrieve = getCartByCookieOrRetrieve;
const addItem2Cart = (itemId, qty = 1, callToOrder = true) => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = getState().cart.cartId;
        if (!cartId) {
            dispatch((0, alert_1.showErrorAlert)('Error cargando la orden de compra'));
            return;
        }
        dispatch((0, cart_1.setCartSubmitting)(true));
        const promise = api_1.apiClient.cart.addItemToCart(cartId, itemId, qty).then(({ product, actionRequired, cartTotal, added }) => {
            dispatch((0, cart_1.setCartSubmitting)(false));
            if (actionRequired === 'chooseVariant' && product) {
                dispatch((0, cart_1.showVariantModal)({ product }));
            }
            else if (cartTotal) {
                dispatch((0, cart_1.setCartTotal)(cartTotal));
                if (callToOrder && added)
                    dispatch((0, cart_1.showCall2Order)(added));
            }
        });
        dispatch((0, xhr_1.addPromise)(promise));
    }
    catch (err) {
        console.error(err);
    }
});
exports.addItem2Cart = addItem2Cart;
//# sourceMappingURL=cart.js.map