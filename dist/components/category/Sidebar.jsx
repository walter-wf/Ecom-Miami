"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const imgs_1 = require("../../lib/imgs");
const urls_1 = require("../../lib/urls");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faChevronLeft_1 = require("@fortawesome/free-solid-svg-icons/faChevronLeft");
const react_1 = require("react");
function CategorySidebar({ category }) {
    const categoryMenu = (0, react_1.useMemo)(() => {
        var _a, _b;
        if ((_a = category.children) === null || _a === void 0 ? void 0 : _a.length) {
            return Array.from(category.children);
        }
        else if ((_b = category.siblings) === null || _b === void 0 ? void 0 : _b.length) {
            return category.siblings.filter(({ parent_id }) => category.parent_id === parent_id);
        }
        return [];
    }, [category.category_id]); //eslint-disable-line
    const parentsBreadCrumbs = (0, react_1.useMemo)(() => {
        var _a;
        if (category.parent_id && category.parents) {
            const parents = Array.from(category.parents).reverse();
            if (!((_a = category.children) === null || _a === void 0 ? void 0 : _a.length)) {
                parents.splice(-1, 1);
            }
            return parents;
        }
        return [];
    }, [category.category_id]); //eslint-disable-line
    if (!categoryMenu.length)
        return null;
    return (<nav className={(0, clsx_1.default)('category-sidebar', { 'with-breadcrumbs': parentsBreadCrumbs.length })}>
			{parentsBreadCrumbs.length > 0 &&
            <ul className={'category-sidebar__parents list-unstyled'}>
				{parentsBreadCrumbs.map((item) => (<li key={item.category_id}>
						{item.category_id === category.category_id
                        ? <strong>{item.title}</strong>
                        : <link_1.default href={(0, urls_1.getCategoryUrl)(item)}>
									<a><react_fontawesome_1.FontAwesomeIcon icon={faChevronLeft_1.faChevronLeft} size={'xs'}/> {item.title}</a>
							</link_1.default>}
					</li>))}
			</ul>}

			<ul className='category-sidebar__list list-unstyled' itemScope itemType='//schema.org/ItemList'>
				{categoryMenu.map((item, i) => {
            const categoryUrl = (0, urls_1.getCategoryUrl)(item);
            const image = item.image ? (0, imgs_1.getCategoryImg)(item.image) : null;
            return (<li className={(0, clsx_1.default)({ active: category.category_id === item.category_id })} key={item.category_id}>
							<div itemProp='itemListElement' itemScope itemType='//schema.org/ListItem'>
								{image &&
                    <link_1.default href={categoryUrl}>
									<a className={'img-link'}>
										<img src={image.src} alt={item.title} width={image.width} height={image.height}/>
									</a>
								</link_1.default>}
								<link_1.default href={categoryUrl}>
									<a className={'title'} itemProp='url'>
										<span itemProp='name'>{item.title}</span>
									</a>
								</link_1.default>
								<meta itemProp='position' content={String(i + 1)}/>
							</div>
						</li>);
        })}
			</ul>
		</nav>);
}
exports.default = CategorySidebar;
//# sourceMappingURL=Sidebar.jsx.map