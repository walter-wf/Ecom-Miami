"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProductsQuery = exports.filterKeys = void 0;
exports.filterKeys = ['brand', 'price_min', 'price_max', 'props', 'in_stock'];
const filterProductsQuery = (query, allowedKeys = null) => {
    if (allowedKeys === null) {
        allowedKeys = ['sort', 'page', 'per-page', ...exports.filterKeys];
    }
    const outQuery = {};
    for (const [key, value] of Object.entries(query)) {
        if (!allowedKeys.includes(key))
            continue;
        Object.assign(outQuery, { [key]: value });
    }
    return outQuery;
};
exports.filterProductsQuery = filterProductsQuery;
//# sourceMappingURL=category.js.map