"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
function SwiperSliderSlide({ img, link, caption, captionPosition, useFilling, fillingColor, fillingOpacity }) {
    const isGlobalLink = Boolean(link && /^http/.test(link));
    const linkProps = isGlobalLink ? { target: '_blank' } : {};
    return (<>
			<div className='swiper-slider__bg-img' style={{ backgroundImage: `url(${img})` }}/>
			{useFilling && <div className='swiper-slider__shadow' style={{ backgroundColor: fillingColor, opacity: fillingOpacity }}/>}
			{link
            ? <link_1.default href={link}>
					<a className={(0, clsx_1.default)('swiper-slider__content', captionPosition && `swiper-slider__content_${captionPosition}`)} {...linkProps}>
						{caption && <div className='swiper-slider__caption' dangerouslySetInnerHTML={{ __html: caption }}></div>}
					</a>
				</link_1.default>
            : <div className={(0, clsx_1.default)('swiper-slider__content', captionPosition && `swiper-slider__content_${captionPosition}`)}>
					{caption && <div className='swiper-slider__caption' dangerouslySetInnerHTML={{ __html: caption }}></div>}
				</div>}
		</>);
}
exports.default = SwiperSliderSlide;
//# sourceMappingURL=SwiperSliderSlide.jsx.map