"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("swiper/react");
const swiper_1 = require("swiper");
const clsx_1 = __importDefault(require("clsx"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faChevronLeft_1 = require("@fortawesome/free-solid-svg-icons/faChevronLeft");
const faChevronRight_1 = require("@fortawesome/free-solid-svg-icons/faChevronRight");
const SwiperSliderSlide_1 = __importDefault(require("./swiperSlider/SwiperSliderSlide"));
function SwiperSlider({ className, slideClassName, showPrevNext, swiperProps, roundCorners, size, pagination, slides }) {
    return (<div className={(0, clsx_1.default)('swiper-slider', roundCorners && 'swiper-slider_rounded', size && `swiper-slider_size-${size}`, className || '')}>
			<react_1.Swiper className='swiper-slider__swiper' grabCursor={true} modules={[swiper_1.Navigation, swiper_1.Scrollbar, swiper_1.Pagination]} navigation={showPrevNext
            ? {
                prevEl: '.swiper-slider__prev',
                nextEl: '.swiper-slider__next'
            }
            : false} pagination={pagination
            ? {
                clickable: true,
                type: pagination
            } : false} watchOverflow={true} {...(swiperProps || {})}>
				{slides.map((slide, i) => <react_1.SwiperSlide className={(0, clsx_1.default)('swiper-slider__slide', slideClassName || '')} key={i}>
						<SwiperSliderSlide_1.default {...slide}/>
					</react_1.SwiperSlide>)}
			</react_1.Swiper>
			{showPrevNext && <>
				<a href='#' className='swiper-slider__prev'><react_fontawesome_1.FontAwesomeIcon icon={faChevronLeft_1.faChevronLeft}/></a>
				<a href='#' className='swiper-slider__next'><react_fontawesome_1.FontAwesomeIcon icon={faChevronRight_1.faChevronRight}/></a>
			</>}
		</div>);
}
exports.default = SwiperSlider;
//# sourceMappingURL=SwiperSlider.jsx.map