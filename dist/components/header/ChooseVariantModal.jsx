"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
const redux_1 = require("../../hooks/redux");
const cart_1 = require("../../redux/reducers/cart");
const VariantAndBuy_1 = __importDefault(require("../product/VariantAndBuy"));
const ProductImage_1 = __importDefault(require("../productsList/ProductImage"));
const NoImage_1 = __importDefault(require("../NoImage"));
const image_1 = require("../../@types/image");
function ChooseVariantModal() {
    const dispatch = (0, redux_1.useAppDispatch)();
    const show = (0, redux_1.useAppSelector)((state) => state.cart.showVariantModal);
    const { product } = (0, redux_1.useAppSelector)((state) => state.cart.variantModalData);
    const onHide = () => dispatch((0, cart_1.hideVariantModal)());
    const image = product ? product.images.find(({ is_default }) => is_default) : undefined;
    return (<Modal_1.default show={show} onHide={onHide}>
			<Modal_1.default.Header closeButton>
				<Modal_1.default.Title>Please, choose a variant:</Modal_1.default.Title>
			</Modal_1.default.Header>
			<Modal_1.default.Body>
				{product && <>
					<div className={'d-flex mb-3'}>
						<div className={'me-2'} style={{ width: '60px' }}>
							{image
                ? <ProductImage_1.default image={image.image} maxSize={60}/>
                : <NoImage_1.default ratio={image_1.TThumbRatio['1-1']} className={'bg-xs'}/>}
						</div>
						<h6>{product.text.title}</h6>
					</div>
					<VariantAndBuy_1.default product={product} onAddedToCart={onHide}/>
				</>}
			</Modal_1.default.Body>
		</Modal_1.default>);
}
exports.default = ChooseVariantModal;
//# sourceMappingURL=ChooseVariantModal.jsx.map