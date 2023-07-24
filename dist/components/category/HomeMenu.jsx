"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const imgs_1 = require("../../lib/imgs");
const urls_1 = require("../../lib/urls");
function CategoryHomeMenu({ categoryTree }) {
    return (<ul className='category-menu__list list-unstyled list-group'>
			{categoryTree && categoryTree.map(category => {
            const showChildren = 'children' in category && category.children && category.children.length > 0;
            const image = category.image ? (0, imgs_1.getCategoryImg)(category.image) : null;
            return (<li className={(0, clsx_1.default)('category-menu__item list-group-item', showChildren && 'has-children')} key={category.category_id}>
						{image && <img src={image.src} width={image.width} height={image.height} alt={category.title || ''} className='me-2'/>}
						<link_1.default href={(0, urls_1.getCategoryUrl)(category)}>{category.title}</link_1.default>
						{showChildren &&
                    <ul className='category-menu__child-list'>
								{category.children && category.children.map(child => {
                            const subImg = child.image ? (0, imgs_1.getCategoryImg)(child.image) : null;
                            return (<li key={child.category_id}>
											{subImg && <img src={subImg.src} width={subImg.width} height={subImg.height} alt={child.title || ''} className='me-2'/>}
											<link_1.default href={(0, urls_1.getCategoryUrl)(child)}>{child.title}</link_1.default>
										</li>);
                        })}
							</ul>}
					</li>);
        })}
		</ul>);
}
exports.default = CategoryHomeMenu;
//# sourceMappingURL=HomeMenu.jsx.map