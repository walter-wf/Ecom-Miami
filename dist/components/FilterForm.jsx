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
const react_1 = __importDefault(require("react"));
const boundless_api_client_1 = require("boundless-api-client");
const react_2 = require("react");
const api_1 = require("../lib/api");
const PriceRange_1 = __importDefault(require("./filterForm/PriceRange"));
const debounce_1 = __importDefault(require("lodash/debounce"));
const omit_1 = __importDefault(require("lodash/omit"));
const isObjectLike_1 = __importDefault(require("lodash/isObjectLike"));
const pick_1 = __importDefault(require("lodash/pick"));
const MultipleSelectCharacteristic_1 = __importDefault(require("./filterForm/MultipleSelectCharacteristic"));
const TextCharacteristic_1 = __importDefault(require("./filterForm/TextCharacteristic"));
const BrandSelect_1 = __importDefault(require("./filterForm/BrandSelect"));
const Stock_1 = __importDefault(require("./filterForm/Stock"));
const isEqualWith_1 = __importDefault(require("lodash/isEqualWith"));
const category_1 = require("../lib/category");
const DEFAULT_DISPLAY_LIMIT = 3;
/**
 * @param filterFields - might be passed manually, e.g. pass:
 * [{type: 'price'}] to have filters by price only. In other words you don't necessarily need to fetch filters from the server side.
 *
 * @param queryParams
 * @param onSubmit
 * @constructor
 */
function FilterForm({ filterFields, queryParams, categoryId, onSearch, idsPrefix }) {
    const [hasChanged, setHasChanged] = (0, react_2.useState)(false);
    const [values, setValues] = (0, react_2.useState)({});
    const [ranges, setRanges] = (0, react_2.useState)([]);
    const [isFetching, setIsFetching] = (0, react_2.useState)(false);
    const [preSearchResult, setPreSearchResult] = (0, react_2.useState)(null);
    const [initedForCategory, setInitedForCategory] = (0, react_2.useState)(null);
    const getData = () => {
        const sanitizedQuery = sanitizeIncomingQuery(queryParams);
        setIsFetching(true);
        setInitedForCategory(categoryId);
        fetchRanges(filterFields, Object.assign({ category: [categoryId] }, sanitizedQuery)).then(({ ranges }) => {
            setValues(Object.assign(Object.assign({}, sanitizedQuery), makeInitialValues(ranges, sanitizedQuery)));
            setRanges(ranges);
            setIsFetching(false);
        }).catch(console.error);
    };
    (0, react_2.useEffect)(() => {
        const clearedQueryParams = filterEmptyValues((0, category_1.filterProductsQuery)(queryParams, category_1.filterKeys));
        const clearedValues = filterEmptyValues(values);
        if (isFilterQueryChanged(clearedQueryParams, clearedValues) || initedForCategory !== categoryId) {
            getData();
        }
    }, [queryParams, categoryId]); // eslint-disable-line
    // eslint-disable-next-line
    const reCalcRanges = (0, react_2.useCallback)((0, debounce_1.default)((values) => {
        setIsFetching(true);
        fetchRanges(filterFields, Object.assign({ category: [categoryId] }, values)).then(({ ranges, totalProducts }) => {
            setRanges(ranges);
            setPreSearchResult(totalProducts);
            setIsFetching(false);
        }).catch(console.error);
    }, 600), [categoryId]);
    const onChange = (value) => {
        const newValues = 'props' in value
            ? Object.assign(Object.assign({}, values), { props: Object.assign({}, values.props, value.props) }) : Object.assign(Object.assign({}, values), value);
        setValues(newValues);
        reCalcRanges(newValues);
        setHasChanged(true);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const filteredValues = filterEmptyValues(values);
        onSearch((0, omit_1.default)(filteredValues, ['page']));
        setHasChanged(false);
    };
    const onClear = (e) => {
        e.preventDefault();
        const clearedValues = (0, omit_1.default)(values, ['page', ...category_1.filterKeys]);
        onSearch(clearedValues);
        setValues(Object.assign(Object.assign({}, clearedValues), makeInitialValues(ranges, clearedValues)));
        setIsFetching(true);
        fetchRanges(filterFields, clearedValues).then(({ ranges }) => {
            setRanges(ranges);
            setHasChanged(false);
            setIsFetching(false);
        }).catch(console.error);
    };
    if (!ranges.length) {
        if (isFetching)
            return <div>Loading...</div>;
        return null;
    }
    return (<form className={'category-filters px-1'} onSubmit={onSubmit}>
			{ranges.map((filterField, i) => {
            switch (filterField.type) {
                case boundless_api_client_1.TFilterFieldType.price:
                    return <PriceRange_1.default field={filterField} onChange={onChange} values={values} key={i} idsPrefix={idsPrefix}/>;
                case boundless_api_client_1.TFilterFieldType.brand:
                    return <BrandSelect_1.default field={filterField} onChange={onChange} values={values} displayLimit={DEFAULT_DISPLAY_LIMIT} key={i} idsPrefix={idsPrefix}/>;
                case boundless_api_client_1.TFilterFieldType.availability:
                    return <Stock_1.default field={filterField} onChange={onChange} values={values} key={i} idsPrefix={idsPrefix}/>;
                case boundless_api_client_1.TFilterFieldType.characteristic: {
                    if (isMultiCaseType(filterField.characteristic.type)) {
                        return <MultipleSelectCharacteristic_1.default field={filterField} onChange={onChange} values={values} displayLimit={DEFAULT_DISPLAY_LIMIT} key={i} idsPrefix={idsPrefix}/>;
                    }
                    else {
                        return <TextCharacteristic_1.default field={filterField} onChange={onChange} values={values} key={i} idsPrefix={idsPrefix}/>;
                    }
                }
            }
        })}
			<div className='category-filters__actions'>
				<div className='btn-group' role='group'>
					<button type='button' className='btn btn-secondary' onClick={onClear} disabled={isFetching}>Clear</button>
					<button type='submit' className='btn btn-action' disabled={!hasChanged || isFetching}>{getSubmitLabel(hasChanged, isFetching, preSearchResult)}</button>
				</div>
			</div>
		</form>);
}
exports.default = FilterForm;
const fetchRanges = (filterFields, values) => __awaiter(void 0, void 0, void 0, function* () {
    const filter_fields = filterFields.map(({ type, characteristic_id }) => ({ type, characteristic_id }));
    const data = yield api_1.apiClient.catalog.getFilterFieldsRanges({ filter_fields, values });
    return data;
});
const getSubmitLabel = (hasChanged, isFetching, preSearchResult) => {
    if (hasChanged) {
        if (isFetching)
            return 'Calculating...';
        if (preSearchResult !== null)
            return `Show (${preSearchResult})`;
    }
    return 'Search';
};
const makeInitialValues = (filterFields, query) => {
    const out = {};
    for (const filterField of filterFields) {
        switch (filterField.type) {
            case boundless_api_client_1.TFilterFieldType.price:
                Object.assign(out, { price_min: '', price_max: '' }, (0, pick_1.default)(query, ['price_min', 'price_max']));
                break;
            case boundless_api_client_1.TFilterFieldType.brand:
                Object.assign(out, { brand: (query.brand || []).map((el) => Number(el)) });
                break;
            case boundless_api_client_1.TFilterFieldType.availability:
                Object.assign(out, { in_stock: query.in_stock || '' });
                break;
            case boundless_api_client_1.TFilterFieldType.characteristic: {
                const props = ((0, isObjectLike_1.default)(query.props) && !Array.isArray(query.props)) ? query.props : {};
                if (!('props' in out)) {
                    out.props = {};
                }
                if (isMultiCaseType(filterField.characteristic.type)) {
                    out.props[filterField.characteristic_id] = (filterField.characteristic_id in props && Array.isArray(props[filterField.characteristic_id]))
                        ? props[filterField.characteristic_id]
                        : [];
                }
                else {
                    out.props[filterField.characteristic_id] = (filterField.characteristic_id in props)
                        ? String(props[filterField.characteristic_id])
                        : '';
                }
                break;
            }
        }
    }
    return out;
};
const filterEmptyValues = (values) => {
    const outValues = {};
    for (const [key, val] of Object.entries(values)) {
        if (key == 'props') {
            const props = filterEmptyValues(val);
            if (Object.keys(props).length) {
                outValues[key] = props;
            }
        }
        else {
            if (Array.isArray(val)) {
                if (val.length) {
                    outValues[key] = val;
                }
            }
            else if (val !== '') {
                outValues[key] = val;
            }
        }
    }
    return outValues;
};
const sanitizeIncomingQuery = (queryParams) => {
    const sanitizedQuery = {};
    for (const [key, val] of Object.entries(queryParams)) {
        if (key === 'props') {
            if ((0, isObjectLike_1.default)(val) && !Array.isArray(val)) {
                sanitizedQuery[key] = val;
            }
        }
        else {
            sanitizedQuery[key] = val;
        }
    }
    return sanitizedQuery;
};
const isFilterQueryChanged = (prevQuery, newQuery) => {
    const compare = (val1, val2) => String(val1) === String(val2);
    for (const key of category_1.filterKeys) {
        if (!(key in prevQuery) && !(key in newQuery))
            continue;
        if (['props', 'brand'].includes(key)) {
            if (!(0, isEqualWith_1.default)(prevQuery[key], newQuery[key], compare))
                return true;
        }
        else {
            if (String(prevQuery[key]) !== String(newQuery[key])) {
                return true;
            }
        }
    }
    return false;
};
const isMultiCaseType = (type) => [boundless_api_client_1.TCharacteristicType.radio, boundless_api_client_1.TCharacteristicType.select, boundless_api_client_1.TCharacteristicType.checkbox].includes(type);
//# sourceMappingURL=FilterForm.jsx.map