"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imgs_1 = require("../../../lib/imgs");
function Manufacturer({ manufacturer }) {
    var _a, _b;
    const image = ((_a = manufacturer.image) === null || _a === void 0 ? void 0 : _a.path) ? (0, imgs_1.getManufacturerImg)(manufacturer.image) : null;
    const title = ((_b = manufacturer.text) === null || _b === void 0 ? void 0 : _b.title) || '';
    return (<>
			<dl className='product-attrs__item product-attrs__item_brand'>
				<dt className='product-attrs__item-name-wrapper'>
					<span className='product-attrs__item-name'>Brand</span>
				</dt>
				<dd className='product-attrs__item-value'>
					{image && <img className='product-attrs__brand-img' alt={title} src={image.src}/>}
					{title}
				</dd>
			</dl>
			<div itemProp='brand' itemScope itemType='//schema.org/Brand'>
				<meta itemProp='name' content={title}/>
			</div>
		</>);
}
exports.default = Manufacturer;
//# sourceMappingURL=Manufacturer.jsx.map