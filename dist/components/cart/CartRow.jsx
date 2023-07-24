"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const formatter_1 = require("../../lib/formatter");
const imgs_1 = require("../../lib/imgs");
const urls_1 = require("../../lib/urls");
const NoImage_1 = __importDefault(require("../NoImage"));
const image_1 = require("../../@types/image");
function CartRow({ item, rmItem, onQtyChange }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const imgPath = (_b = (_a = item.vwItem) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.path;
    const productUrl = (0, urls_1.getProductUrl)(item.vwItem.product);
    const imgElement = imgPath
        ? <img src={(0, imgs_1.getCartImg)(imgPath)} alt={(_d = (_c = item.vwItem) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.title}/>
        : <NoImage_1.default ratio={image_1.TThumbRatio['1-1']} className={'bg-xs'}/>;
    return (<div className='cart-item row'>
			<div className='cart-item__description-col col-md-4'>
				<link_1.default href={productUrl}>
					<a className='cart-item__img-link'>
						{imgElement}
					</a>
				</link_1.default>
				<div className='cart-item__title'>
					<div>
						<link_1.default href={productUrl}>
							{((_f = (_e = item.vwItem) === null || _e === void 0 ? void 0 : _e.product) === null || _f === void 0 ? void 0 : _f.title) || ''}
						</link_1.default>
					</div>
					{item.vwItem.type === 'variant' && <div className='text-muted'>{((_h = (_g = item.vwItem) === null || _g === void 0 ? void 0 : _g.variant) === null || _h === void 0 ? void 0 : _h.title) || ''}</div>}
				</div>
			</div>
			<div className='cart-item__col col-md-2'>
				<span className='cart-items__label'><strong>Precio: </strong></span>
				{(0, formatter_1.formatMoney)(item.itemPrice.final_price)}
			</div>
			<div className='cart-item__col cart-item__col_qty col-md-2'>
				<span className='cart-items__label'><strong>Cantidad: </strong></span>
				<div className='cart-item__qty-input input-group input-group-sm'>
					<button className='btn btn-outline-secondary text-center' type='button' style={{ width: 25 }} disabled={item.qty < 2} onClick={() => onQtyChange(item.qty - 1)}><>&ndash;</></button>
					<input type='number' className='form-control form-control-sm text-center' name={`qty[${item.item_id}]`} value={item.qty} min={1} onChange={(e) => onQtyChange(Number(e.target.value) || 0)}/>
					<button className='btn btn-outline-secondary text-center' type='button' style={{ width: 25 }} onClick={() => onQtyChange(item.qty + 1)}>+</button>
				</div>
			</div>
			<div className='cart-item__col col-md-2'>
				<span className='cart-items__label'><strong>Total: </strong></span>
				{(0, formatter_1.formatMoney)(parseInt(item.itemPrice.final_price || '') * item.qty)}</div>
			<div className='cart-item__col cart-item__col_rm col-md-2'>
				<button className='btn btn-sm btn-outline-secondary' onClick={rmItem}>
					Remover
				</button>
			</div>
		</div>);
}
exports.default = CartRow;
//# sourceMappingURL=CartRow.jsx.map