"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartImg = exports.getManufacturerImg = exports.getCategoryImg = exports.getMetaImgUrl = exports.getProductImg = exports.getProductsListImg = exports.productImgRatio = void 0;
const image_1 = require("../@types/image");
const api_1 = require("./api");
//fixed aspect ratio for product images
exports.productImgRatio = process.env.BOUNDLESS_PRODUCTS_IMAGE_PROPORTION || null;
function getProductsListImg(image, maxSize) {
    const { width, height, path: imgLocalPath } = image;
    const thumb = api_1.apiClient.makeThumb({ imgLocalPath, maxSize });
    if (exports.productImgRatio) {
        thumb
            .setRatio(exports.productImgRatio)
            .setPad(true);
    }
    if (!width || !height) {
        return { src: thumb.getSrc() };
    }
    thumb.setOriginalSize(width, height);
    const imgAttrs = thumb.getAttrs();
    thumb
        .setGrayscale(true)
        .setBlur(2);
    return Object.assign(Object.assign({}, imgAttrs), { blurSrc: thumb.getSrc() });
}
exports.getProductsListImg = getProductsListImg;
function getProductImg(image, maxSize, preserveRatio = false) {
    const { width, height, path: imgLocalPath } = image;
    if (height && width) {
        const thumb = api_1.apiClient.makeThumb({
            imgLocalPath,
            maxSize,
            originalWidth: width,
            originalHeight: height
        });
        if (exports.productImgRatio && preserveRatio)
            thumb.setRatio(exports.productImgRatio);
        const attrs = thumb.getAttrs();
        thumb.setGrayscale(true);
        thumb.setBlur(2);
        return Object.assign(Object.assign({}, attrs), { blurSrc: thumb.getSrc() });
    }
    return {
        src: api_1.apiClient.makeThumb({
            imgLocalPath,
            maxSize
        }).getSrc()
    };
}
exports.getProductImg = getProductImg;
function getMetaImgUrl(image) {
    const thumb = api_1.apiClient.makeThumb({
        imgLocalPath: image.path,
        maxSize: 400
    });
    thumb.setRatio(image_1.TThumbRatio['1-1']);
    thumb.setPad(true);
    return thumb.getSrc();
}
exports.getMetaImgUrl = getMetaImgUrl;
function getCategoryImg(image, maxSize = 21) {
    const { width, height, path: imgLocalPath } = image;
    const thumb = api_1.apiClient.makeThumb({
        imgLocalPath,
        maxSize
    });
    if (width && height) {
        thumb.setOriginalSize(width, height);
        return thumb.getAttrs();
    }
    return { src: thumb.getSrc() };
}
exports.getCategoryImg = getCategoryImg;
function getManufacturerImg(image, maxSize = 200) {
    const { width, height, path: imgLocalPath } = image;
    const thumb = api_1.apiClient.makeThumb({
        imgLocalPath,
        maxSize
    });
    if (width && height) {
        thumb.setOriginalSize(width, height);
        return thumb.getAttrs();
    }
    return { src: thumb.getSrc() };
}
exports.getManufacturerImg = getManufacturerImg;
function getCartImg(imgLocalPath, maxSize = 60) {
    return api_1.apiClient.makeThumb({
        imgLocalPath,
        maxSize
    }).getSrc();
}
exports.getCartImg = getCartImg;
//# sourceMappingURL=imgs.js.map