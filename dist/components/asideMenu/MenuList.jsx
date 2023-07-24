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
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importStar(require("react"));
const redux_1 = require("../../hooks/redux");
function AsideMenuList({ menuList }) {
    const isRouting = (0, redux_1.useAppSelector)((state) => state.app.isRouteChanging);
    const [opened, setOpened] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (isRouting)
            return;
        const index = menuList.findIndex(el => el.isActive);
        if (index !== -1)
            setOpened([index]);
    }, [isRouting]); //eslint-disable-line
    const toggleOpen = (index) => {
        setOpened(prev => {
            if (prev.includes(index))
                return prev.filter(el => el !== index);
            return [...prev, index];
        });
    };
    return (<nav>
			<ul className='aside-menu__list list-unstyled' itemScope itemType='//schema.org/ItemList'>
				{menuList.map((item, i) => {
            const hasChildren = item.children && item.children.length > 0;
            const collapsibleProps = { onClick: () => toggleOpen(i) };
            const open = hasChildren && opened.includes(i);
            return (<li className={(0, clsx_1.default)('aside-menu__root-element', {
                    active: item.isActive,
                    'has-children': hasChildren,
                    open
                })} key={item.title + i} {...(hasChildren ? collapsibleProps : {})}>
							<div itemProp='itemListElement' itemScope itemType='//schema.org/ListItem'>
								<ListElement item={item} position={i} open={open}/>
							</div>
							{hasChildren && <ChildList children={item.children}/>}
						</li>);
        })}
			</ul>
		</nav>);
}
exports.default = AsideMenuList;
function ChildList({ children }) {
    return <ul className='aside-menu__child-list list-unstyled'>
		{children.map((childItem, j) => <li key={childItem.title + j} className={(0, clsx_1.default)({ active: childItem.isActive })}>
				<ListElement item={childItem}/>
			</li>)}
	</ul>;
}
function ListElement({ item, position, open }) {
    const image = item.img || null;
    const hasChildren = item.children && item.children.length > 0;
    const isRootElem = position !== undefined;
    const rootProps = { onClick: (e) => e.preventDefault() };
    const imageElem = image
        ? <img src={image.src} className='me-2' alt={item.title} width={image.width} height={image.height}/>
        : null;
    if (item.url && (isRootElem || !item.isActive))
        return (<>
			<link_1.default href={item.url}>
				<a className={(0, clsx_1.default)('aside-menu__element is-link', isRootElem ? 'is-root' : 'is-child', { active: item.isActive })} {...(isRootElem ? rootProps : {})}>
					<span>
						{image && <span className='img-link'>{imageElem}</span>}
						<span {...(isRootElem ? { itemProp: 'name' } : {})}>
							{item.title}
						</span>
					</span>
					{isRootElem && hasChildren && <react_fontawesome_1.FontAwesomeIcon className='ms-2' icon={open ? free_solid_svg_icons_1.faCaretDown : free_solid_svg_icons_1.faCaretRight}/>}
				</a>
			</link_1.default>
			{isRootElem && <meta itemProp='position' content={String(position + 1)}/>}
			{!isRootElem && hasChildren && <ChildList children={item.children}/>}
		</>);
    return (<>
			<div className={(0, clsx_1.default)('aside-menu__element', isRootElem ? 'is-root' : 'is-child', { active: item.isActive })}>
				<span>
					{image && imageElem}
					{item.title}
				</span>
				{isRootElem && hasChildren && <react_fontawesome_1.FontAwesomeIcon className='ms-2' icon={open ? free_solid_svg_icons_1.faCaretDown : free_solid_svg_icons_1.faCaretRight}/>}
			</div>
			{!isRootElem && hasChildren && <ChildList children={item.children}/>}
		</>);
}
//# sourceMappingURL=MenuList.jsx.map