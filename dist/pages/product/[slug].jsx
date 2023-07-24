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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
const react_1 = require("react");
const Main_1 = __importDefault(require("../../layouts/Main"));
const api_1 = require("../../lib/api");
const router_1 = require("next/router");
const BreadCrumbs_1 = __importDefault(require("../../components/BreadCrumbs"));
const Images_1 = __importDefault(require("../../components/product/Images"));
const qs_1 = __importDefault(require("qs"));
const MetaSchemaOrg_1 = __importDefault(require("../../components/product/MetaSchemaOrg"));
const meta_1 = require("../../lib/meta");
const Labels_1 = __importDefault(require("../../components/product/Labels"));
const VariantAndBuy_1 = __importDefault(require("../../components/product/VariantAndBuy"));
const Characteristics_1 = __importDefault(require("../../components/product/Characteristics"));
const menu_1 = require("../../lib/menu");
const breadcrumbs_1 = require("../../lib/breadcrumbs");
const Shipping_1 = __importDefault(require("../../components/product/Shipping"));
const ProductsSliderByQuery_1 = __importDefault(require("../../components/ProductsSliderByQuery"));
function ProductPage({ data: { product, categoryParents, mainMenu, footerMenu } }) {
    const [resolvedParents, setResolvedParents] = (0, react_1.useState)(categoryParents);
    const router = (0, router_1.useRouter)();
    const query = (0, react_1.useMemo)(() => qs_1.default.parse(router.asPath.split('?')[1] || ''), [router.asPath]);
    const { category } = query, restQuery = __rest(query, ["category"]);
    const similarQuery = (0, react_1.useMemo)(() => ({ cross_sell_category: 'similar', cross_sell_product: product.product_id }), [product]);
    const relatedQuery = (0, react_1.useMemo)(() => ({ cross_sell_category: 'related', cross_sell_product: product.product_id }), [product]);
    const fetchParents = (categoryId) => __awaiter(this, void 0, void 0, function* () { return setResolvedParents(yield api_1.apiClient.catalog.getCategoryParents(categoryId)); });
    (0, react_1.useEffect)(() => {
        const categoryId = category ? parseInt(category) : null;
        if (!categoryId)
            return;
        const notDefaultCat = product.categoryRels.some(cat => (cat.is_default !== true && cat.category_id === categoryId));
        if (notDefaultCat) {
            fetchParents(categoryId);
        }
    }, [category, product]);
    const breadcrumbItems = (0, react_1.useMemo)(() => {
        return (0, breadcrumbs_1.makeBreadCrumbsFromCats)(resolvedParents || [], ({ category_id }) => {
            if ((resolvedParents === null || resolvedParents === void 0 ? void 0 : resolvedParents.length) && category_id === resolvedParents[0].category_id) {
                return {
                    queryParams: restQuery
                };
            }
            return {};
        });
    }, [resolvedParents, query]); //eslint-disable-line
    return (<Main_1.default footerMenu={footerMenu} mainMenu={mainMenu} metaData={(0, meta_1.getProductMetaData)(product)} title={product.seo.title}>
			<div className={'container'}>
				<BreadCrumbs_1.default items={breadcrumbItems}/>
				<div className='product-page' itemScope itemType='//schema.org/Product'>
					<div className='row'>
						<div className='col-md-7'>
							<h1 className='product-page__header mb-4' itemProp='nombre'>
								{product.text.title}
							</h1>
							<Labels_1.default labels={product.labels} className={'mb-3'}/>
							<Images_1.default product={product}/>
						</div>
						<div className='col-md-5'>
							<VariantAndBuy_1.default product={product}/>
							<hr className='product-page__hr'/>
							<Characteristics_1.default characteristics={product.nonVariantCharacteristics} manufacturer={product.manufacturer} size={product.props.size}/>
							<hr className='product-page__hr'/>
							<Shipping_1.default />
						</div>
					</div>
					{product.text.description && <article itemProp='descripcion' className={'product-page__description'} dangerouslySetInnerHTML={{ __html: product === null || product === void 0 ? void 0 : product.text.description }}/>}
					<MetaSchemaOrg_1.default product={product} parents={resolvedParents}/>
				</div>
				<ProductsSliderByQuery_1.default query={similarQuery} title='Similar products' wrapperClassName='page-block'/>
				<ProductsSliderByQuery_1.default query={relatedQuery} title='Frequently Bought Together' wrapperClassName='page-block'/>
			</div>
		</Main_1.default>);
}
exports.default = ProductPage;
const getStaticPaths = () => __awaiter(void 0, void 0, void 0, function* () {
    const { pagination, products } = yield api_1.apiClient.catalog.getProducts({ 'per-page': 100 });
    if (pagination.pageCount > 1) {
        for (let page = 2; page <= pagination.pageCount; page++) {
            const { products: newProducts } = yield api_1.apiClient.catalog.getProducts({ 'per-page': 100, page });
            products.push(...newProducts);
        }
    }
    const paths = products.map(product => ({
        params: {
            slug: product.url_key || String(product.product_id)
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    };
});
exports.getStaticPaths = getStaticPaths;
const getStaticProps = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { slug } = params || {};
    let data = null;
    try {
        data = yield fetchData(slug);
    }
    catch (error) {
        if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
            return {
                notFound: true
            };
        }
        else {
            throw error;
        }
    }
    if (((_b = data === null || data === void 0 ? void 0 : data.product) === null || _b === void 0 ? void 0 : _b.text.url_key) && ((_c = data === null || data === void 0 ? void 0 : data.product) === null || _c === void 0 ? void 0 : _c.text.url_key) !== slug) {
        return {
            redirect: {
                destination: `/product/${(_d = data === null || data === void 0 ? void 0 : data.product) === null || _d === void 0 ? void 0 : _d.text.url_key}`,
                permanent: true,
            }
        };
    }
    return {
        props: {
            data
        }
    };
});
exports.getStaticProps = getStaticProps;
const fetchData = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const product = yield api_1.apiClient.catalog.getProduct(slug);
    const categoryId = (_e = product.categoryRels.find(cat => cat.is_default === true)) === null || _e === void 0 ? void 0 : _e.category_id;
    let categoryParents = null;
    if (categoryId) {
        categoryParents = yield api_1.apiClient.catalog.getCategoryParents(categoryId);
    }
    const categoryTree = yield api_1.apiClient.catalog.getCategoryTree({ menu: 'category' });
    const menus = (0, menu_1.makeAllMenus)({ categoryTree });
    return Object.assign({ product,
        categoryParents }, menus);
});
//# sourceMappingURL=%5Bslug%5D.jsx.map