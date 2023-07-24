"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceForTpl = void 0;
const getPriceForTpl = (price) => {
    if (!price) {
        return { price: null };
    }
    return {
        price: price.min ? price.min : price.value,
        oldPrice: price.old_min ? price.old_min : price.old,
        isFrom: (price.min && price.max && price.min != price.max) ? true : false
    };
};
exports.getPriceForTpl = getPriceForTpl;
//# sourceMappingURL=product.js.map