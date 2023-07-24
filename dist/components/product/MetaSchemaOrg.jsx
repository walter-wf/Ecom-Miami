"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urls_1 = require("../../lib/urls");
function MetaSchemaOrg({ product, parents }) {
    var _a;
    return (<>
			<meta itemProp='productID' content={String(product === null || product === void 0 ? void 0 : product.product_id)}/>
			{(product === null || product === void 0 ? void 0 : product.sku) && <meta itemProp='sku' content={product.sku}/>}
			{parents && <meta itemProp='category' content={[...parents].reverse().map(parent => parent.title).join('/')}/>}

			{product.has_variants
            ? (_a = product.extendedVariants) === null || _a === void 0 ? void 0 : _a.list.map(variant => (<div itemProp='offers' itemScope itemType='//schema.org/Offer' key={variant.variant_id}>
						{variant.price && <meta itemProp='price' content={String(variant.price)}/>}
						<meta itemProp='priceCurrency' content='USD'/>
						{variant.sku && <meta itemProp='sku' content={variant.sku}/>}
						{variant.title && <meta itemProp='name' content={variant.title}/>}
						<link itemProp='availability' href={variant.in_stock ? '//schema.org/InStock' : '//schema.org/OutOfStock'}/>
						<link itemProp='url' href={(0, urls_1.getProductItemUrl)(product)}/>
					</div>))
            : <div itemProp='offers' itemScope itemType='//schema.org/Offer'>
					<meta itemProp='price' content={String(product.price)}/>
					<meta itemProp='priceCurrency' content='USD'/>
					<link itemProp='availability' href={product.in_stock ? '//schema.org/InStock' : '//schema.org/OutOfStock'}/>
					<link itemProp='url' href={(0, urls_1.getProductItemUrl)(product)}/>
				</div>}
		</>);
}
exports.default = MetaSchemaOrg;
//# sourceMappingURL=MetaSchemaOrg.jsx.map