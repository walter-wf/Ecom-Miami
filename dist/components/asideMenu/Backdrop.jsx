"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("../../hooks/redux");
const clsx_1 = __importDefault(require("clsx"));
const asideMenu_1 = require("../../redux/reducers/asideMenu");
function AsideBackdrop() {
    const asideIsOpened = (0, redux_1.useAppSelector)((state) => state.asideMenu.isOpened);
    const dispatch = (0, redux_1.useAppDispatch)();
    const onClicked = () => dispatch((0, asideMenu_1.setIsOpened)(false));
    return (<div className={(0, clsx_1.default)('aside-backdrop', { 'aside-backdrop_visible': asideIsOpened })} onClick={onClicked}/>);
}
exports.default = AsideBackdrop;
//# sourceMappingURL=Backdrop.jsx.map