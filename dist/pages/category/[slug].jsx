"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importDefault(require("react"));
const router_1 = require("next/router");
const react_2 = require("react");
const redux_1 = require("../../hooks/redux");
const dynamic_1 = __importDefault(require("next/dynamic"));
const qs_1 = __importDefault(require("qs"));
const api_1 = require("../../lib/api");
const urls_1 = require("../../lib/urls");
const category_1 = require("../../lib/category");
const utils_1 = require("boundless-api-client/utils");
const meta_1 = require("../../lib/meta");
const menu_1 = require("../../lib/menu");
const breadcrumbs_1 = require("../../lib/breadcrumbs");
const Main_1 = __importDefault(require("../../layouts/Main"));
const Sidebar_1 = __importDefault(require("../../components/category/Sidebar"));
const FiltersModal_1 = __importDefault(require("../../components/category/FiltersModal"));
// Importa el componente FilterForm correctamente
const FilterForm_1 = __importDefault(require("../../components/FilterForm"));
const FilterForm = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('../../components/FilterForm'))), { ssr: false });
function CategoryPage({ data }) {
    const { category, mainMenu, footerMenu } = data;
    const router = (0, router_1.useRouter)();
    const [productsQuery, setProductsQuery] = (0, react_2.useState)(data.productsQuery);
    const [collection, setCollection] = (0, react_2.useState)(data.collection);
    const [showModal, setShowModal] = (0, react_2.useState)(false);
    const isRouteChanging = (0, redux_1.useAppSelector)((state) => state.app.isRouteChanging);
    const onCollectionChange = (newParams) => __awaiter(this, void 0, void 0, function* () {
        const { collection, filteredQuery } = yield fetchCollection(category.category_id, newParams);
        setShowModal(false);
        setCollection(collection);
        setProductsQuery(filteredQuery);
        changeUrl(router, filteredQuery);
    });
    (0, react_2.useEffect)(() => {
        if (isRouteChanging)
            setShowModal(false);
    }, [isRouteChanging]);
    (0, react_2.useEffect)(() => {
        setCollection(data.collection);
        setProductsQuery(data.productsQuery);
    }, [data]);
    const breadcrumbItems = (0, react_2.useMemo)(() => (0, breadcrumbs_1.makeBreadCrumbsFromCats)(category.parents, ({ category_id }) => ({ isActive: category_id === category.category_id })), [category.parents, category.category_id]);
    return (<Main_1.default footerMenu={footerMenu} mainMenu={mainMenu} metaData={(0, meta_1.getCategoryMetaData)(category)} title={category.seo.title}>
      <div className='container'>
        <div className='row'>
          <div className='category-sidebar__wrapper col-md-4 col-lg-3'>
            <Sidebar_1.default category={category}/>

            {/* Usa el componente MyFilterForm en lugar de FilterForm */}
            <FilterForm_1.default filterFields={category.filter.fields} queryParams={productsQuery} categoryId={category.category_id} onSearch={onCollectionChange} idsPrefix='desk_'/>
          </div>
          <div className='col-md-8 col-lg-9'>
            {/* Resto del código */}
          </div>
        </div>
      </div>
      <FiltersModal_1.default show={showModal} setShow={setShowModal}>
        <Sidebar_1.default category={category}/>
        {/* Usa MyFilterForm también aquí */}
        <FilterForm_1.default filterFields={category.filter.fields} queryParams={productsQuery} categoryId={category.category_id} onSearch={onCollectionChange} idsPrefix='mobile_'/>
      </FiltersModal_1.default>
    </Main_1.default>);
}
exports.default = CategoryPage;
const getServerSideProps = ({ req, params }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const url = new URL(`http://host${req.url}`);
    const queryString = url.search.replace(/^\?/, '');
    const query = qs_1.default.parse(queryString);
    const { slug } = params || {};
    let data = null;
    try {
        data = yield fetchData(slug, query);
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
    const redirectUrl = (0, urls_1.getCategoryItemUrl)(data.category);
    if (redirectUrl !== `/category/${slug}`) {
        return {
            redirect: {
                destination: `${redirectUrl}?${queryString}`,
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
exports.getServerSideProps = getServerSideProps;
const fetchData = (slug, params) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield api_1.apiClient.catalog.getCategoryItem(slug, {
        with_children: 1,
        with_parents: 1,
        with_siblings: 1,
        with_filter: 1
    });
    const { collection, filteredQuery: productsQuery } = yield fetchCollection(category.category_id, params);
    const categoryTree = yield api_1.apiClient.catalog.getCategoryTree({ menu: 'category' });
    const menus = (0, menu_1.makeAllMenus)({ categoryTree, activeCategoryId: category.category_id });
    const out = Object.assign({ category,
        collection,
        productsQuery }, menus);
    return out;
});
const fetchCollection = (categoryId, params) => __awaiter(void 0, void 0, void 0, function* () {
    const filteredQuery = (0, category_1.filterProductsQuery)(params);
    const collection = yield api_1.apiClient.catalog.getProducts(Object.assign(Object.assign({ category: [categoryId], sort: 'in_category,-in_stock,price' }, filteredQuery), { 'per-page': 12 }));
    return {
        filteredQuery,
        collection
    };
});
const changeUrl = (router, query) => {
    const baseUrl = router.asPath.split('?')[0];
    router.push(`${baseUrl}?${(0, utils_1.createGetStr)(query)}`, undefined, { shallow: true }); //shallow to skip SSR of the page
};
//# sourceMappingURL=%5Bslug%5D.jsx.map