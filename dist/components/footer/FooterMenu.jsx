"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
function FooterMenu({ menuList }) {
    return (<>
			<h3 className='page-footer__header'>Mas popular</h3>
			<ul className='page-footer-menu list-unstyled' itemScope itemType='//schema.org/ItemList'>
				{menuList.map((item, i) => (<li className={(0, clsx_1.default)('page-footer-menu__list-element', {
                active: item.isActive,
            })} key={item.title + i}>
						<div itemProp='itemListElement' itemScope itemType='//schema.org/ListItem'>
							<ListElement item={item} position={i}/>
						</div>
					</li>))}
			</ul>
		</>);
}
exports.default = FooterMenu;
function ListElement({ item, position }) {
    if (item.url)
        return (<>
			<link_1.default href={item.url}>
				<a className={(0, clsx_1.default)('page-footer-menu__element is-link', { active: item.isActive })}>
					<span className='title' itemProp='name'>
						{item.title}
					</span>
				</a>
			</link_1.default>
			<meta itemProp='position' content={String(position + 1)}/>
		</>);
    return (<div className={(0, clsx_1.default)('page-footer-menu__element', { active: item.isActive })}>
			<span className='page-footer-menu__text-title'>
				{item.title}
			</span>
		</div>);
}
//# sourceMappingURL=FooterMenu.jsx.map