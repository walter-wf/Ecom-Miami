"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const formatter_1 = require("../../lib/formatter");
const product_1 = require("../../lib/product");
function ProductPrice({ price, className = 'products__price' }) {
    const tplPrice = (0, product_1.getPriceForTpl)(price);
    if (tplPrice.price === null)
        return null;
    return (<div className={className}>
			{tplPrice.isFrom && <span className={'from'}>Desde:</span>}
			{tplPrice.oldPrice && <s className={'old'}>{(0, formatter_1.formatMoney)(tplPrice.oldPrice)}</s>}
			<span className={(0, clsx_1.default)('current', { 'has-old': tplPrice.oldPrice })}>
				{(0, formatter_1.formatMoney)(tplPrice.price)}
			</span>
		</div>);
}
exports.default = ProductPrice;
//# sourceMappingURL=ProductPrice.jsx.map