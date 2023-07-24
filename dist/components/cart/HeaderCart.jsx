"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../../lib/formatter");
const link_1 = __importDefault(require("next/link"));
const cart_1 = require("../../hooks/cart");
const clsx_1 = __importDefault(require("clsx"));
function HeaderCart({ className, icon }) {
    var _a;
    const { total } = (0, cart_1.useCart)();
    const isEmpty = !total || !total.qty;
    const isDoubleQty = ((total === null || total === void 0 ? void 0 : total.qty) && (total === null || total === void 0 ? void 0 : total.qty) > 9) ? true : false;
    return (<link_1.default href={'/cart'}>
			<a className={(0, clsx_1.default)('cart-header', {
            'cart-header_empty': isEmpty,
            'cart-header_active': !isEmpty
        }, className)}>
				{icon ? icon : <span className={'cart-header__icon'}/>}
				<b className={(0, clsx_1.default)('cart-header__qty', {
            'cart-header__qty_double': isDoubleQty
        })}>{(_a = total === null || total === void 0 ? void 0 : total.qty) !== null && _a !== void 0 ? _a : 0}</b>
				<div className={'cart-header__total'}>{(0, formatter_1.formatMoney)((total === null || total === void 0 ? void 0 : total.total) || 0)}</div>
			</a>
		</link_1.default>);
}
exports.default = HeaderCart;
//# sourceMappingURL=HeaderCart.jsx.map