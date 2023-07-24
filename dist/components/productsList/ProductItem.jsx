"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const redux_1 = require("../../hooks/redux");
const cart_1 = require("../../redux/actions/cart");
const urls_1 = require("../../lib/urls");
const ProductImage_1 = __importDefault(require("./ProductImage"));
const ProductPrice_1 = __importDefault(require("./ProductPrice"));
const link_1 = __importDefault(require("next/link"));
const Labels_1 = __importDefault(require("../product/Labels"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faCartPlus_1 = require("@fortawesome/free-solid-svg-icons/faCartPlus");
const NoImage_1 = __importDefault(require("../NoImage"));
const imgs_1 = require("../../lib/imgs");
const image_1 = require("../../@types/image");
function ProductItem({ product, query, categoryId, className }) {
    var _a;
    const params = Object.assign({}, query);
    if (categoryId && categoryId !== ((_a = product.default_category) === null || _a === void 0 ? void 0 : _a.category_id)) {
        Object.assign(params, { category: categoryId });
    }
    const productUrl = (0, urls_1.getProductUrl)(product, params);
    return (<li className={(0, clsx_1.default)('products__item', {
            'in-stock': product.in_stock,
            'out-of-stock': !product.in_stock
        }, className)} data-id={product.product_id} itemScope itemType='//schema.org/Product'>
			<div className='products__item-wrapper'>
				<ProductImage product={product} productUrl={productUrl}/>
				<h4 className='products__title'>
					<link_1.default href={productUrl}>
						<a itemProp='url'>
							<span itemProp='name'>{product.title}</span>
						</a>
					</link_1.default>
				</h4>

				<div className={'products__offer-row'}>
					<div className='products__offer'>
						{product.price && <ProductPrice_1.default price={product.price}/>}
					</div>
					<Product2Cart product={product}/>
				</div>
			</div>
			<ProductSchemaOrgMarkup product={product}/>
		</li>);
}
exports.default = ProductItem;
function Product2Cart({ product }) {
    const dispatch = (0, redux_1.useAppDispatch)();
    const onAddToCart = () => dispatch((0, cart_1.addItem2Cart)(product.item_id, 1));
    return (<div className={(0, clsx_1.default)('products__to-cart', {
            'products__to-cart_in-stock': product.in_stock,
            'products__to-cart_out-stock': !product.in_stock,
        })}>
			{product.in_stock
            ? <button type={'button'} className='btn btn-to-cart products__to-cart-btn' onClick={onAddToCart}>
					<react_fontawesome_1.FontAwesomeIcon icon={faCartPlus_1.faCartPlus}/>
				</button>
            : <span className={'text-muted'}>Out of stock</span>}
		</div>);
}
function ProductImage({ product, productUrl }) {
    const img = product.images.find(({ is_default }) => is_default);
    return (<link_1.default href={productUrl}>
			<a className={'products__image'}>
				{img
            ? <ProductImage_1.default image={img} alt={img.alt || product.title}/>
            : <NoImage_1.default ratio={imgs_1.productImgRatio || image_1.TThumbRatio['1-1']}/>}
				<Labels_1.default labels={product.labels} className={'product__labels_small product__labels_column'}/>
			</a>
		</link_1.default>);
}
function ProductSchemaOrgMarkup({ product }) {
    var _a, _b, _c, _d;
    const schemaAvailability = product.in_stock ? '//schema.org/InStock' : '//schema.org/OutOfStock';
    return (<>
			<meta itemProp='productID' content={String(product.product_id)}/>
			<meta itemProp='brand' content={((_a = product.manufacturer) === null || _a === void 0 ? void 0 : _a.title) || ''}/>
			<meta itemProp='sku' content={product.sku || ''}/>
			{product.price &&
            (((_b = product.price) === null || _b === void 0 ? void 0 : _b.min)
                ?
                    <div itemProp='offers' itemScope itemType='//schema.org/AggregateOffer'>
						<meta itemProp='lowPrice' content={String(product.price.min)}/>
						<meta itemProp='highPrice' content={String(product.price.max)}/>
						<meta itemProp='priceCurrency' content={(_c = product.price.currency_alias) === null || _c === void 0 ? void 0 : _c.toUpperCase()}/>
						<link itemProp='availability' href={schemaAvailability}/>
					</div>
                :
                    <div itemProp='offers' itemScope itemType='//schema.org/Offer'>
						<meta itemProp='price' content={String(product.price.value)}/>
						<meta itemProp='priceCurrency' content={(_d = product.price.currency_alias) === null || _d === void 0 ? void 0 : _d.toUpperCase()}/>
						<link itemProp='availability' href={schemaAvailability}/>
					</div>)}
		</>);
}
//# sourceMappingURL=ProductItem.jsx.map