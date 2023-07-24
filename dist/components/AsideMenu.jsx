"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const redux_1 = require("../hooks/redux");
const body_scroll_lock_1 = require("body-scroll-lock");
const react_1 = require("react");
const asideMenu_1 = require("../redux/reducers/asideMenu");
const HeaderCart_1 = __importDefault(require("./cart/HeaderCart"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const MenuList_1 = __importDefault(require("./asideMenu/MenuList"));
const vanilla_1 = require("@use-gesture/vanilla");
const AsideMenu = ({ menuList }) => {
    const rootEl = (0, react_1.useRef)(null);
    const isOpened = (0, redux_1.useAppSelector)((state) => state.asideMenu.isOpened);
    const isRouteChanging = (0, redux_1.useAppSelector)((state) => state.app.isRouteChanging);
    const dispatch = (0, redux_1.useAppDispatch)();
    const gesture = (0, react_1.useRef)(null);
    const closeIfOpened = () => {
        if (isOpened) {
            dispatch((0, asideMenu_1.setIsOpened)(false));
        }
    };
    const onEscPressed = (e) => {
        if (e.defaultPrevented || !isOpened) {
            return;
        }
        if (e.key !== undefined && e.key === 'Escape') {
            closeIfOpened();
        }
        else if (e.keyCode !== undefined && e.keyCode === 27) {
            closeIfOpened();
        }
    };
    const enableSwipe = () => {
        const body = document.querySelector('body');
        if (body) {
            body.style.touchAction = 'none';
            gesture.current = new vanilla_1.DragGesture(body, ({ last, movement }) => {
                if (last && movement[0] > 100) {
                    closeIfOpened();
                }
            });
        }
    };
    const disableSwipe = () => {
        const body = document.querySelector('body');
        if (gesture.current)
            gesture.current.destroy();
        gesture.current = null;
        if (body) {
            body.style.touchAction = 'auto';
        }
    };
    (0, react_1.useEffect)(() => {
        if (isRouteChanging)
            closeIfOpened();
    }, [isRouteChanging]);
    (0, react_1.useEffect)(() => {
        if (isOpened) {
            if (rootEl.current) {
                (0, body_scroll_lock_1.disableBodyScroll)(rootEl.current);
            }
            enableSwipe();
            window.addEventListener('resize', closeIfOpened);
            window.addEventListener('keydown', onEscPressed);
        }
        else {
            if (rootEl.current) {
                (0, body_scroll_lock_1.enableBodyScroll)(rootEl.current);
            }
            disableSwipe();
            window.removeEventListener('resize', closeIfOpened);
            window.removeEventListener('keydown', onEscPressed);
        }
        return () => {
            (0, body_scroll_lock_1.clearAllBodyScrollLocks)();
            window.removeEventListener('resize', closeIfOpened);
            window.removeEventListener('keydown', onEscPressed);
            disableSwipe();
        };
    }, [isOpened]);
    return (<aside className={(0, clsx_1.default)('aside-menu', { 'aside-menu_visible': isOpened })} ref={rootEl}>
      <div className='aside-menu__header'>
        <HeaderCart_1.default className={'cart-header cart-header_horizontal'}/>
        <button className='btn' onClick={closeIfOpened}>
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faTimes}/>
        </button>
      </div>
      {menuList && <MenuList_1.default menuList={menuList}/>}
    </aside>);
};
exports.default = AsideMenu;
//# sourceMappingURL=AsideMenu.jsx.map