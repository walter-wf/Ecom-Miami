"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("swiper/react");
const swiper_1 = require("swiper");
const SliderProductItem_1 = __importDefault(require("./productsSlider/SliderProductItem"));
const ProductItemLoader_1 = __importDefault(require("./productsSlider/ProductItemLoader"));
const clsx_1 = __importDefault(require("clsx"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faChevronLeft_1 = require("@fortawesome/free-solid-svg-icons/faChevronLeft");
const faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
function ProductsSlider({ products, loading, className, swiperProps }) {
    const swiper = (0, react_1.useRef)(null);
    return (<div className={(0, clsx_1.default)('products-slider', className || '')}>
			<react_2.Swiper breakpoints={{
            450: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        }} centerInsufficientSlides className='products-slider__swiper' grabCursor={true} modules={[swiper_1.Navigation, swiper_1.Scrollbar]} navigation={{
            prevEl: '.products-slider__prev',
            nextEl: '.products-slider__next'
        }} onSwiper={(instance) => swiper.current = instance} scrollbar={{ draggable: true }} slidesPerView={1} spaceBetween={20} {...(swiperProps || {})}>
				{loading
            ? [...Array(5)].map((_, i) => (<react_2.SwiperSlide className='products-slider__slide' key={i}>
							<ProductItemLoader_1.default />
						</react_2.SwiperSlide>))
            : products === null || products === void 0 ? void 0 : products.map((product) => <react_2.SwiperSlide className='products-slider__slide' key={product.product_id}>
							<SliderProductItem_1.default product={product} key={product.product_id}/>
						</react_2.SwiperSlide>)}
			</react_2.Swiper>
			<a href='#' className='products-slider__prev'><react_fontawesome_1.FontAwesomeIcon icon={faChevronLeft_1.faChevronLeft} size={'lg'}/></a>
			<a href='#' className='products-slider__next'><react_fontawesome_1.FontAwesomeIcon icon={faChevronRight_1.faChevronRight} size={'lg'}/></a>
		</div>);
}
exports.default = ProductsSlider;
//# sourceMappingURL=ProductsSlider.jsx.map