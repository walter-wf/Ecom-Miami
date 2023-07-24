"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductItem_1 = __importDefault(require("./productsList/ProductItem"));
const clsx_1 = __importDefault(require("clsx"));
function ProductsList({ products, query = {}, categoryId, className, itemClassName }) {
    return (<ul className={(0, clsx_1.default)('products list-unstyled', className)}>
			{products.map(product => (<ProductItem_1.default product={product} key={product.product_id} query={query} categoryId={categoryId} className={itemClassName}/>))}
		</ul>);
}
exports.default = ProductsList;
//# sourceMappingURL=ProductsList.jsx.map