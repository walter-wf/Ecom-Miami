"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrencySymbol = exports.formatMoney = void 0;
const currency_js_1 = __importDefault(require("currency.js"));
function formatMoney(amount) {
    if (!amount)
        return '';
    return new currency_js_1.default(amount).format();
}
exports.formatMoney = formatMoney;
function getCurrencySymbol() {
    return new currency_js_1.default(0, { pattern: '!' }).format();
}
exports.getCurrencySymbol = getCurrencySymbol;
//# sourceMappingURL=formatter.js.map