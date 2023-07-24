"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const redux_1 = require("../../hooks/redux");
const cart_1 = require("../../redux/actions/cart");
const urls_1 = require("../../lib/urls");
const link_1 = __importDefault(require("next/link"));
const Labels_1 = __importDefault(require("../product/Labels"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faCartPlus_1 = require("@fortawesome/free-solid-svg-icons/faCartPlus");
const NoImage_1 = __importDefault(require("../NoImage"));
const imgs_1 = require("../../lib/imgs");
const image_1 = require("../../@types/image");
const ProductPrice_1 = __importDefault(require("../productsList/ProductPrice"));
const ProductImage_1 = __importDefault(require("../productsList/ProductImage"));
function SliderProductItem({ product }) {
    const productUrl = (0, urls_1.getProductUrl)(product);
    return (<div className={(0, clsx_1.default)('products-slider__product', { 'in-stock': product.in_stock, 'out-of-stock': !product.in_stock })} data-id={product.product_id}>
			<div className='products-slider__product-wrapper'>
				<ProductImage product={product} productUrl={productUrl}/>
				<h4 className='products-slider__product-title'>
					<link_1.default href={productUrl}>
						<a>{product.title}</a>
					</link_1.default>
				</h4>
				<div className='products-slider__product-offer'>
					{product.price && <ProductPrice_1.default price={product.price}/>}
				</div>
				<Product2Cart product={product}/>
			</div>
		</div>);
}
exports.default = SliderProductItem;
function Product2Cart({ product }) {
    const dispatch = (0, redux_1.useAppDispatch)();
    const onAddToCart = () => dispatch((0, cart_1.addItem2Cart)(product.item_id, 1));
    return (<div className='products-slider__to-cart'>
			{product.in_stock
            ? <button type='button' className='btn btn-action' onClick={onAddToCart}>
					<react_fontawesome_1.FontAwesomeIcon icon={faCartPlus_1.faCartPlus}/> Agregar a carrito
				</button>
            : <span className={'text-muted'}>Fuera de stock</span>}
		</div>);
}
function ProductImage({ product, productUrl }) {
    const img = product.images.find(({ is_default }) => is_default);
    return (<link_1.default href={productUrl}>
			<a className={'products-slider__product-image'}>
				{img
            ? <ProductImage_1.default image={img} alt={img.alt || product.title} maxSize={500}/>
            : <NoImage_1.default ratio={imgs_1.productImgRatio || image_1.TThumbRatio['1-1']}/>}
				<Labels_1.default labels={product.labels} className={'product__labels_small product__labels_column'}/>
			</a>
		</link_1.default>);
}
//# sourceMappingURL=SliderProductItem.jsx.map