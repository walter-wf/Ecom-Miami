"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const imgs_1 = require("../../lib/imgs");
function ProductListImage({ image, alt, maxSize = 300 }) {
    const { src, blurSrc, width, height } = (0, imgs_1.getProductsListImg)(image, maxSize);
    return (<div className={'img text-center'}>
			{width && height
            ? <image_1.default src={src} width={width} height={height} placeholder='blur' blurDataURL={blurSrc} quality={100} itemProp='image' alt={alt}/>
            : <img src={src} alt={alt} itemProp='image'/>}
		</div>);
}
exports.default = ProductListImage;
//# sourceMappingURL=ProductImage.jsx.map