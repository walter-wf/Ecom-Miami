"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrice = exports.calcFinalPrice = exports.calcTotal = void 0;
const currency_js_1 = __importDefault(require("currency.js"));
const calcTotal = (items) => {
    let totalQty = 0;
    let totalPrice = (0, currency_js_1.default)(0);
    for (const { qty, price } of items) {
        totalQty += qty;
        totalPrice = (0, currency_js_1.default)(totalPrice).add(price);
    }
    return {
        qty: totalQty,
        price: totalPrice.format()
    };
};
exports.calcTotal = calcTotal;
const calcFinalPrice = (basicPrice, discountAmount = null, discountPercent = null) => {
    let finalPrice = (0, currency_js_1.default)(basicPrice);
    if (discountPercent) {
        const multiply = (0, currency_js_1.default)(1).subtract((0, currency_js_1.default)(discountPercent, { fromCents: true }));
        finalPrice = finalPrice.multiply(multiply);
    }
    if (discountAmount) {
        finalPrice = finalPrice.subtract(discountAmount);
    }
    return finalPrice;
};
exports.calcFinalPrice = calcFinalPrice;
const calcTotalPrice = (finalPrice, qty) => {
    return (0, currency_js_1.default)(finalPrice).multiply(qty * 1).format();
};
exports.calcTotalPrice = calcTotalPrice;
//# sourceMappingURL=calculator.js.map