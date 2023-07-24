"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
function VerticalMenu({ menuList }) {
    return (<nav className='vertical-menu'>
			<ul className='vertical-menu__list list-unstyled mb-0' itemScope itemType='//schema.org/ItemList'>
				{menuList.map((item, i) => {
            const hasChildren = item.children && item.children.length > 0;
            return (<li className={(0, clsx_1.default)({
                    active: item.isActive,
                    'has-children': hasChildren,
                    'open': hasChildren && item.isActive
                })} key={item.title + i}>
							<div itemProp='itemListElement' itemScope itemType='//schema.org/ListItem'>
								<ListElement item={item} position={i}/>
							</div>
							{item.children && item.children.length > 0 &&
                    <ul className='vertical-menu__child-list list-unstyled'>
									{item.children.map((childItem, j) => <li key={childItem.title + j} className={(0, clsx_1.default)({ active: childItem.isActive })}>
											<ListElement item={childItem}/>
										</li>)}
								</ul>}
						</li>);
        })}
			</ul>
		</nav>);
}
exports.default = VerticalMenu;
function ListElement({ item, position }) {
    const image = item.img || null;
    const isRootElem = position !== undefined;
    const imageElem = image
        ? <img src={image.src} className='me-2' alt={item.title} width={image.width} height={image.height}/>
        : null;
    return (<>
			{image && <>
				{item.url && !item.isActive ?
                <link_1.default href={item.url}>
						<a className={(0, clsx_1.default)('vertical-menu__link img-link', isRootElem ? 'is-root' : 'is-child')}>
							{imageElem}
						</a>
					</link_1.default>
                : imageElem}
			</>}
			{item.url && !item.isActive
            ? <>
					<link_1.default href={item.url}>
						<a className={(0, clsx_1.default)('vertical-menu__link title', isRootElem ? 'is-root' : 'is-child')} itemProp='url'>
							{isRootElem
                    ? <span itemProp='name'>{item.title}</span>
                    : item.title}
						</a>
					</link_1.default>
					{isRootElem && <meta itemProp='position' content={String(position + 1)}/>}
				</>
            : <span className={(0, clsx_1.default)('vertical-menu__text-title', isRootElem ? 'is-root' : 'is-child')}>
					{item.title}
				</span>}
		</>);
}
//# sourceMappingURL=VerticalMenu.jsx.map