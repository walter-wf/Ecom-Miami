"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const ProductImage_1 = __importDefault(require("./ProductImage"));
const imgs_1 = require("../../lib/imgs");
const NoImage_1 = __importDefault(require("../NoImage"));
const react_photoswipe_gallery_1 = require("react-photoswipe-gallery");
require("photoswipe/dist/photoswipe.css");
require("photoswipe/dist/default-skin/default-skin.css");
function ProductImagesWrapper({ product }) {
    return (<react_photoswipe_gallery_1.Gallery>
      <ProductImages product={product}/>
    </react_photoswipe_gallery_1.Gallery>);
}
exports.default = ProductImagesWrapper;
function ProductImages({ product }) {
    const [activeImg, setActiveImg] = (0, react_1.useState)(0);
    const images = product.images;
    const { open: openLighBox } = (0, react_photoswipe_gallery_1.useGallery)();
    const onImageClick = (index, e) => {
        e.preventDefault();
        openLighBox(index);
    };
    const images4Gallery = (0, react_1.useMemo)(() => (images || []).map(image => (0, imgs_1.getProductImg)(image.image, 1800, false)), [images]);
    if (!images || !images.length)
        return <NoImage_1.default ratio={imgs_1.productImgRatio || '1-1'}/>;
    return (<>
      <div className='product-gallery d-none d-md-flex'>
        <ul className='product-gallery__thumbs list-unstyled'>
          {images.map((image, i) => (<react_photoswipe_gallery_1.Item original={images4Gallery[i].src} width={images4Gallery[i].width} height={images4Gallery[i].height} id={image.image_id} key={image.image_id}>
              {({ ref }) => (<li ref={ref} className={(0, clsx_1.default)('product-gallery__thumb', { active: activeImg === i })} key={image.image_id} onMouseEnter={() => setActiveImg(i)} onClick={() => setActiveImg(i)}>
                  <a href='#' className='product-gallery__thumb-link' onClick={(e) => { e.preventDefault(); }}>
                    <ProductImage_1.default image={image.image} maxSize={100} alt={image.alt || product.text.title} preserveRatio={true}/>
                  </a>
                  <meta itemProp='image' content={(0, imgs_1.getMetaImgUrl)(image.image)}/>
                </li>)}
            </react_photoswipe_gallery_1.Item>))}
        </ul>
        <figure className='product-gallery__big-img'>
          <a href='#' onClick={onImageClick.bind(null, activeImg)}>
            <ProductImage_1.default image={images[activeImg].image} maxSize={800} alt={images[activeImg].alt || images[activeImg].description}/>
          </a>
          <meta itemProp='image' content={(0, imgs_1.getMetaImgUrl)(images[activeImg].image)}/>
          <figcaption>
            {images[activeImg].description}
          </figcaption>
        </figure>
      </div>

      <div className='d-block d-md-none'>
        {/* Remove the <ImagesSlider /> component from here */}
      </div>
    </>);
}
//# sourceMappingURL=Images.jsx.map