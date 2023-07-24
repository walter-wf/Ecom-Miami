"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAllMenus = exports.makeMenuByCategoryTree = void 0;
const urls_1 = require("./urls");
const imgs_1 = require("./imgs");
const makeMenuByCategoryTree = ({ categoryTree, isActiveClb }) => {
    const menu = categoryTree.map(category => {
        const item = {
            title: category.title,
            url: (0, urls_1.getCategoryUrl)(category),
        };
        if (isActiveClb) {
            item.isActive = isActiveClb(category);
        }
        if (category.children) {
            item.children = (0, exports.makeMenuByCategoryTree)({ categoryTree: category.children, isActiveClb });
            if (item.children.some(el => el.isActive)) {
                item.isActive = true;
            }
        }
        if (category.image) {
            item.img = (0, imgs_1.getCategoryImg)(category.image, 21);
        }
        return item;
    });
    return menu;
};
exports.makeMenuByCategoryTree = makeMenuByCategoryTree;
const makeAllMenus = ({ categoryTree, activeCategoryId }) => {
    const mainMenu = (0, exports.makeMenuByCategoryTree)({
        categoryTree,
        isActiveClb: (category) => Boolean(activeCategoryId && activeCategoryId == category.category_id)
    });
    const footerMenu = (0, exports.makeMenuByCategoryTree)({ categoryTree: categoryTree.filter(({ level }) => level === 0) });
    return {
        mainMenu,
        footerMenu
    };
};
exports.makeAllMenus = makeAllMenus;
//# sourceMappingURL=menu.js.map