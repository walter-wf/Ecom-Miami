"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const imgs_1 = require("../../lib/imgs");
function ProductImage({ image, alt, maxSize = 800, preserveRatio = false }) {
    const { src, blurSrc, width, height } = (0, imgs_1.getProductImg)(image, maxSize, preserveRatio);
    return (<>
			{width && height
            ? <image_1.default src={src} width={width} height={height} placeholder='blur' blurDataURL={blurSrc} quality={100} alt={alt} priority/>
            : <img src={src} alt={alt} itemProp='image'/>}
		</>);
}
exports.default = ProductImage;
//# sourceMappingURL=ProductImage.jsx.map