"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const xmlbuilder_1 = __importDefault(require("xmlbuilder"));
const api_1 = require("../lib/api");
const urls_1 = require("../lib/urls");
function SiteMapXml() {
    return null;
}
exports.default = SiteMapXml;
const getServerSideProps = ({ res }) => __awaiter(void 0, void 0, void 0, function* () {
    const xmlRoot = xmlbuilder_1.default.begin().ele('urlset', {
        'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        // 'xmlns:xhtml': 'http://www.w3.org/1999/xhtml'
    });
    //products
    const { pagination, products } = yield api_1.apiClient.catalog.getProducts({ 'per-page': 100 });
    if (pagination.pageCount > 1) {
        for (let page = 2; page <= pagination.pageCount; page++) {
            const { products: newProducts } = yield api_1.apiClient.catalog.getProducts({ 'per-page': 100, page });
            products.push(...newProducts);
        }
    }
    const productPaths = products.map(product => (product.url_key || String(product.product_id)));
    for (const productPath of productPaths) {
        appendUrl(xmlRoot, productPath, '/product');
    }
    //categories
    const categories = yield api_1.apiClient.catalog.getFlatCategories();
    for (const category of categories) {
        if (!category.custom_link)
            appendUrl(xmlRoot, (0, urls_1.getCategoryUrl)(category));
    }
    xmlRoot.end({ pretty: true });
    res.setHeader('Content-Type', 'text/xml');
    res.write(`<?xml version="1.0"?>${xmlRoot.toString()}`);
    res.end();
    return {
        props: {}
    };
});
exports.getServerSideProps = getServerSideProps;
function appendUrl(xmlParent, url, folder = '') {
    const xmlUrl = xmlParent.ele('url');
    const baseUrl = process.env.BOUNDLESS_BASE_URL || '';
    const fullUrl = `${baseUrl}${folder ? `${folder}/` : ''}${url}`;
    xmlUrl.ele('loc', fullUrl);
    // xmlUrl.ele('xhtml:link', {rel: 'alternate'}, fullUrl);
    xmlUrl.ele('changefreq', 'monthly');
    xmlUrl.ele('priority', '0.5');
}
//# sourceMappingURL=sitemap.xml.js.map