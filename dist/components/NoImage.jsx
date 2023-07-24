"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
function NoImage({ ratio, className }) {
    return (<div className={(0, clsx_1.default)(`no-image r-${ratio}`, className)}>
			<div className={'no-image__bg'}></div>
		</div>);
}
exports.default = NoImage;
//# sourceMappingURL=NoImage.jsx.map