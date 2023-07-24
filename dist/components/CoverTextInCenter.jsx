"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function CoverTextInCenter({ img, imgPortrait, shadow, content, link, showChevronDown, fixed = true }) {
    const imageUrl = `url(${img})`;
    const portraitUrl = `url(${imgPortrait})`;
    const isGlobalLink = Boolean(link && /^http/.test(link));
    const linkProps = isGlobalLink ? { target: '_blank' } : {};
    const scrollDown = (e) => {
        e.preventDefault();
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    };
    return (<div className='cover-text-center'>
			<div className={(0, clsx_1.default)('cover-text-center__wrapper', fixed && 'cover-text-center__wrapper_fixed')}>
				<div className='cover-text-center__bg-img' style={{ backgroundImage: imageUrl }}/>
				<div className='cover-text-center__bg-img cover-text-center__bg-img_portrait' style={{ backgroundImage: portraitUrl }}/>
				{shadow && <div className='cover-text-center__shadow' style={shadow}/>}
				<div className='cover-text-center__content'>
					{link
            ? <link_1.default href={link}>
							<a className='cover-text-center__content-container container' {...linkProps}>
								<CoverContent {...content}/>
							</a>
						</link_1.default>
            : <div className='cover-text-center__content-container container'>
							<CoverContent {...content}/>
						</div>}
				</div>
				{showChevronDown && <a href='#' className='cover-text-center__down' onClick={scrollDown}>
					<react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faChevronDown}/>
				</a>}
			</div>
		</div>);
}
exports.default = CoverTextInCenter;
function CoverContent({ intro, head, subHead }) {
    return (<>
			{intro && <div className='cover-text-center__content-intro' dangerouslySetInnerHTML={{ __html: intro }}/>}
			{head && <div className='cover-text-center__content-head' dangerouslySetInnerHTML={{ __html: head }}/>}
			{subHead && <div className='cover-text-center__content-sub-header' dangerouslySetInnerHTML={{ __html: subHead }}/>}
		</>);
}
//# sourceMappingURL=CoverTextInCenter.jsx.map