"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryMetaData = exports.getProductMetaData = void 0;
const imgs_1 = require("./imgs");
const urls_1 = require("./urls");
const getProductMetaData = (product) => {
    var _a;
    return {
        canonicalUrl: (0, urls_1.getCanonicalProductUrl)(product),
        imgUrl: ((_a = product.images) === null || _a === void 0 ? void 0 : _a.length) ? (0, imgs_1.getMetaImgUrl)(product.images[0].image) : null,
        description: product.seo.metaDesc
    };
};
exports.getProductMetaData = getProductMetaData;
const getCategoryMetaData = (category) => {
    if (!category)
        return {};
    return {
        canonicalUrl: (0, urls_1.getCanonicalCategoryUrl)(category),
        imgUrl: category.image ? (0, imgs_1.getMetaImgUrl)(category.image) : null,
        description: category.seo.metaDesc
    };
};
exports.getCategoryMetaData = getCategoryMetaData;
//# sourceMappingURL=meta.js.map