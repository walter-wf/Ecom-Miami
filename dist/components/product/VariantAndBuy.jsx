"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const VariantPicker_1 = __importDefault(require("./VariantPicker"));
const PriceAndBuy_1 = __importDefault(require("./PriceAndBuy"));
const clsx_1 = __importDefault(require("clsx"));
const react_transition_group_1 = require("react-transition-group");
function ProductVariantAndBuy({ product, onAddedToCart }) {
    const [selectedVariant, setSelectedVariant] = (0, react_1.useState)();
    const [error, setError] = (0, react_1.useState)(null);
    const [showAnimation, setShowAnimation] = (0, react_1.useState)(false);
    const triggerError = (error) => {
        setShowAnimation(Boolean(error));
        setError(error);
    };
    const onCaseChange = (value, variant) => {
        setSelectedVariant(variant ? variant : null);
        setError(null);
    };
    return (<div className={'variant-and-buy'}>
			{product.has_variants &&
            <div className={(0, clsx_1.default)('variant-and-buy__variants', { 'has-error': error })}>
					<react_transition_group_1.CSSTransition in={showAnimation} timeout={1000} onEntered={() => setShowAnimation(false)} classNames={{
                    enterActive: 'animate__animated animate__shakeX',
                }}>
						<VariantPicker_1.default extendedVariants={product.extendedVariants} onChange={onCaseChange}/>
					</react_transition_group_1.CSSTransition>
					{error && <div className={'variant-and-buy__error'}>{error}</div>}
					<hr className='variant-and-buy__hr'/>
				</div>}
			<PriceAndBuy_1.default product={product} selectedVariant={selectedVariant} setError={triggerError} onAddedToCart={onAddedToCart}/>
		</div>);
}
exports.default = ProductVariantAndBuy;
//# sourceMappingURL=VariantAndBuy.jsx.map