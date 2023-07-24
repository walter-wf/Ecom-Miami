"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBreadCrumbsFromCats = void 0;
const urls_1 = require("./urls");
const makeBreadCrumbsFromCats = (categories, onItem) => {
    return [...categories].reverse().map(category => {
        const { isActive, queryParams } = onItem ? onItem(category) : {};
        const url = (0, urls_1.getCategoryUrl)(category, queryParams || {});
        return ({
            title: category.title,
            url,
            isActive: Boolean(isActive)
        });
    });
};
exports.makeBreadCrumbsFromCats = makeBreadCrumbsFromCats;
//# sourceMappingURL=breadcrumbs.js.map