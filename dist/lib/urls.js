"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanonicalCategoryUrl = exports.getCanonicalProductUrl = exports.getProductItemUrl = exports.getProductUrl = exports.getCategoryItemUrl = exports.getCategoryUrl = void 0;
const utils_1 = require("boundless-api-client/utils");
const CATEGORY_PREFIX = '/category';
const PRODUCTS_PREFIX = '/product';
const shopBaseUrl = process.env.BOUNDLESS_BASE_URL || '';
const getCategoryUrl = (category, params) => {
    const basePath = category.custom_link || `${CATEGORY_PREFIX}/${category.url_key || category.category_id}`;
    const queryStr = params && Object.keys(params).length ? `?${(0, utils_1.createGetStr)(params)}` : '';
    return `${basePath}${queryStr}`;
};
exports.getCategoryUrl = getCategoryUrl;
const getCategoryItemUrl = (category, params) => {
    var _a, _b;
    const baseUrl = ((_a = category.props) === null || _a === void 0 ? void 0 : _a.custom_link) || `${CATEGORY_PREFIX}/${((_b = category.text) === null || _b === void 0 ? void 0 : _b.url_key) || category.category_id}`;
    const queryStr = params && Object.keys(params).length ? `?${(0, utils_1.createGetStr)(params)}` : '';
    return `${baseUrl}${queryStr}`;
};
exports.getCategoryItemUrl = getCategoryItemUrl;
const getProductUrl = (product, params) => {
    const basePath = `${PRODUCTS_PREFIX}/${product.url_key || product.product_id}`;
    const queryStr = params && Object.keys(params).length ? `?${(0, utils_1.createGetStr)(params)}` : '';
    return `${basePath}${queryStr}`;
};
exports.getProductUrl = getProductUrl;
const getProductItemUrl = (product, params) => {
    var _a;
    const basePath = `${PRODUCTS_PREFIX}/${((_a = product.text) === null || _a === void 0 ? void 0 : _a.url_key) || product.product_id}`;
    const queryStr = params && Object.keys(params).length ? `?${(0, utils_1.createGetStr)(params)}` : '';
    return `${basePath}${queryStr}`;
};
exports.getProductItemUrl = getProductItemUrl;
const getCanonicalProductUrl = (product) => {
    return `${shopBaseUrl}${(0, exports.getProductItemUrl)(product)}`;
};
exports.getCanonicalProductUrl = getCanonicalProductUrl;
const getCanonicalCategoryUrl = (category) => {
    return `${shopBaseUrl}${(0, exports.getCategoryItemUrl)(category)}`;
};
exports.getCanonicalCategoryUrl = getCanonicalCategoryUrl;
//# sourceMappingURL=urls.js.map