"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoverTextInCenter_1 = __importDefault(require("../../components/CoverTextInCenter"));
const cover_bg_jpeg_1 = __importDefault(require("../../assets/cover-bg.jpeg"));
const cover_bg_portrait_jpg_1 = __importDefault(require("../../assets/cover-bg-portrait.jpg"));
function CoverPage() {
    return (<>
			<CoverTextInCenter_1.default showChevronDown img={cover_bg_jpeg_1.default.src} imgPortrait={cover_bg_portrait_jpg_1.default.src} content={{
            intro: 'Intro',
            head: 'Main header',
            subHead: 'subheader'
        }} shadow={{
            opacity: 0.5,
            backgroundColor: '#000'
        }} link={'http://google.com'}/>
			<div className='text-center' style={{ minHeight: 200 }}></div>
		</>);
}
exports.default = CoverPage;
//# sourceMappingURL=cover.jsx.map