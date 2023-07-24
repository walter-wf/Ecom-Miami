"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const redux_1 = require("../hooks/redux");
const api_1 = require("../lib/api");
const xhr_1 = require("../redux/reducers/xhr");
const ProductsSlider_1 = __importDefault(require("./ProductsSlider"));
function ProductsSliderByQuery({ query, title, className, wrapperClassName }) {
    const dispatch = (0, redux_1.useAppDispatch)();
    const [products, setProducts] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setLoading(true);
        const promise = api_1.apiClient.catalog.getProducts(query)
            .then(({ products }) => setProducts(products))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
        dispatch((0, xhr_1.addPromise)(promise));
    }, [query]); //eslint-disable-line
    if (products && !loading && !products.length)
        return null;
    return <div className={wrapperClassName || ''}>
		{title && <h2 className='products-slider__by-query-title'>{title}</h2>}
		<ProductsSlider_1.default className={className} loading={loading} products={products}/>
	</div>;
}
exports.default = ProductsSliderByQuery;
//# sourceMappingURL=ProductsSliderByQuery.jsx.map