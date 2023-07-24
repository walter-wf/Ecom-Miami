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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const common_1 = require("../@types/common");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const sortFields = [
    { id: 1, title: 'Default', order: false, alias: 'default' },
    { id: 2, title: 'By title', order: true, alias: 'title' },
    { id: 3, title: 'By price', order: true, alias: 'price' },
];
function SortButtons({ params, onSort, className }) {
    const activeField = getActiveSortField(params.sort);
    const [activeId, setActiveId] = (0, react_1.useState)(activeField.id);
    const [order, setOrder] = (0, react_1.useState)(activeField.order);
    (0, react_1.useEffect)(() => {
        const { id, order } = getActiveSortField(params.sort);
        setActiveId(id);
        setOrder(order);
    }, [params]);
    const onSortClick = (e, id) => {
        e.preventDefault();
        const newOrder = activeId === id ? getOppositeOrder(order) : common_1.TSortOrder.asc;
        setOrder(newOrder);
        setActiveId(id);
        const newAlias = sortFields.find(el => el.id === id).alias;
        const newSortQuery = `${newOrder}${newAlias === 'default' ? '' : newAlias}`;
        const newParams = Object.assign({}, params);
        if (newSortQuery) {
            Object.assign(newParams, { sort: newSortQuery });
        }
        else {
            delete newParams.sort;
        }
        delete newParams.page;
        onSort(newParams);
    };
    return (<div className={(0, clsx_1.default)('sort-buttons', className)}>
			<label className='small me-2'>Sort by:</label>
			<ul className='sort-buttons__list list-unstyled'>
				{sortFields.map(field => {
            const isActive = activeId === field.id;
            return (<li key={field.id} className={(0, clsx_1.default)('sort-buttons__element', isActive && 'active')}>
							{isActive && !field.order
                    ? <>{field.title}</>
                    : <a href='#' rel='nofollow' className='sort-buttons__link' onClick={(e) => onSortClick(e, field.id)}>
									{field.title}
									{field.order && isActive &&
                            <react_fontawesome_1.FontAwesomeIcon className='ms-1' icon={order === common_1.TSortOrder.asc ? free_solid_svg_icons_1.faSortAmountDownAlt : free_solid_svg_icons_1.faSortAmountDown}/>}
								</a>}
						</li>);
        })}
			</ul>
		</div>);
}
exports.default = SortButtons;
const getActiveSortField = (sort) => {
    const sortQuery = (sort || '').split(',')[0]; //gets only the first sort field from query
    const isDesc = sortQuery.startsWith('-');
    const order = isDesc ? common_1.TSortOrder.desc : common_1.TSortOrder.asc;
    const sortAlias = isDesc ? sortQuery.replace('-', '') : sortQuery;
    const activeId = (sortFields.find(el => el.alias === sortAlias) || sortFields.find(el => el.alias === 'default')).id;
    return {
        id: activeId,
        order,
    };
};
const getOppositeOrder = (order) => {
    return order === common_1.TSortOrder.asc ? common_1.TSortOrder.desc : common_1.TSortOrder.asc;
};
//# sourceMappingURL=SortButtons.jsx.map