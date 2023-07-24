"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const redux_1 = require("../../hooks/redux");
const cart_1 = require("../../redux/actions/cart");
const product_1 = require("../../lib/product");
const formatter_1 = require("../../lib/formatter");
const currency_js_1 = __importDefault(require("currency.js"));
const faPlus_1 = require("@fortawesome/free-solid-svg-icons/faPlus");
const faMinus_1 = require("@fortawesome/free-solid-svg-icons/faMinus");
const faCartPlus_1 = require("@fortawesome/free-solid-svg-icons/faCartPlus");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function ProductPriceAndBuy({ product, selectedVariant, setError, onAddedToCart }) {
    const dispatch = (0, redux_1.useAppDispatch)();
    const [qty, setQty] = (0, react_1.useState)(1);
    const { price, benefit, isInStock } = (0, react_1.useMemo)(() => {
        let price, benefit = null;
        if (selectedVariant) {
            price = { price: selectedVariant.price, oldPrice: selectedVariant.price_old };
        }
        else {
            price = (0, product_1.getPriceForTpl)(product.price);
        }
        if (price.price && price.oldPrice) {
            benefit = new currency_js_1.default(price.oldPrice).subtract(price.price).toJSON();
        }
        const isInStock = selectedVariant ? selectedVariant.in_stock : product.in_stock;
        return { price, benefit, isInStock };
    }, [product, selectedVariant]);
    const onBuyBtnClicked = (e) => {
        e.preventDefault();
        if (product.has_variants && !selectedVariant) {
            setError('Please, choose a variant.');
            return;
        }
        const itemId = selectedVariant ? selectedVariant.item_id : product.item_id;
        dispatch((0, cart_1.addItem2Cart)(itemId, qty));
        if (onAddedToCart) {
            onAddedToCart(itemId, qty);
        }
    };
    return (<div className='price-and-buy'>
			{price.price && <p className={'price-and-buy__price'}>
				{price.isFrom && <span className={'price-and-buy__from'}>From:</span>}
				<span className={(0, clsx_1.default)('price-and-buy__current', { 'has-old': price.oldPrice })}>{(0, formatter_1.formatMoney)(price.price)}</span>
				{price.oldPrice && <span className={'price-and-buy__old'}>{(0, formatter_1.formatMoney)(price.oldPrice)}</span>}
			</p>}
			{benefit && <p className={'price-and-buy__benefit'}>
				<label className={'price-and-buy__benefit-label'}>You save:</label>
				<span className={'price-and-buy__benefit-value'}>{(0, formatter_1.formatMoney)(benefit)}</span>
			</p>}
			{(!product.has_variants || selectedVariant) && <>
				<p className={(0, clsx_1.default)('price-and-buy__stock', { 'in': isInStock, 'out': !isInStock })}>
					{isInStock && 'In stock'}
					{!isInStock && 'Out of stock'}
				</p>
				{(product.sku || (selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.sku)) && <p>
					SKU: <span className='text-muted'>{(selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.sku) || product.sku}</span>
				</p>}
			</>}
			{isInStock !== false && <div className={'price-and-buy__2-cart'}>
				<PriceAndBuyQty qty={qty} setQty={setQty}/>
				<div className={'price-and-buy__btns'}>
					<button type={'button'} className={'btn btn-action btn-anim btn-lg'} onClick={onBuyBtnClicked}>
						<react_fontawesome_1.FontAwesomeIcon icon={faCartPlus_1.faCartPlus}/> Buy
					</button>
				</div>
			</div>}
		</div>);
}
exports.default = ProductPriceAndBuy;
const PriceAndBuyQty = ({ qty, setQty }) => {
    const onChange = (e) => setQty(parseInt(e.target.value) || 1);
    const onBtnClicked = (diff, e) => {
        e.preventDefault();
        let newQty = qty + diff;
        if (newQty < 1) {
            newQty = 1;
        }
        setQty(newQty);
    };
    return (<div className={'price-and-buy__qty input-group'}>
			<button type={'button'} className={'btn btn-outline-secondary text-center'} onClick={onBtnClicked.bind(null, -1)}>
				<react_fontawesome_1.FontAwesomeIcon icon={faMinus_1.faMinus}/>
			</button>
			<input type={'number'} className={'form-control'} value={qty} min={1} onChange={onChange}/>
			<button type={'button'} className={'btn btn-outline-secondary text-center'} onClick={onBtnClicked.bind(null, 1)}>
				<react_fontawesome_1.FontAwesomeIcon icon={faPlus_1.faPlus}/>
			</button>
		</div>);
};
//# sourceMappingURL=PriceAndBuy.jsx.map