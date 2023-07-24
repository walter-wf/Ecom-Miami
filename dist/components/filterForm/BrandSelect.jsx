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
const Collapse_1 = __importDefault(require("react-bootstrap/Collapse"));
function BrandSelect({ field, onChange, values, displayLimit, idsPrefix }) {
    const { brand } = values;
    const [showMore, setShowMore] = (0, react_1.useState)(false);
    const [visibleBrands, setVisibleBrands] = (0, react_1.useState)([]);
    const [collapsedBrands, setCollapsedBrands] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const manufacturers = field.manufacturers;
        if (!manufacturers)
            return;
        const inStockBrands = manufacturers.filter(el => el.products_qty > 0);
        const outOfStockBrands = manufacturers.filter(el => !el.products_qty);
        const result = [...inStockBrands, ...outOfStockBrands];
        setVisibleBrands(result.slice(0, displayLimit));
        setCollapsedBrands(result.slice(displayLimit));
    }, [field.manufacturers, displayLimit]);
    const onInput = (manufacturerId, e) => {
        const value = brand.filter((el) => el !== manufacturerId);
        if (e.target.checked) {
            value.push(manufacturerId);
        }
        onChange({ brand: value });
    };
    const handleShowMore = (e) => {
        e.preventDefault();
        setShowMore(prev => !prev);
    };
    return (<div className={'mb-3'}>
			<label className='form-label'>Brand</label>
			<BrandCases manufacturers={visibleBrands} onInput={onInput} values={values} idsPrefix={idsPrefix}/>
			{collapsedBrands.length > 0 && <>
				<Collapse_1.default in={showMore}>
					<div> {/* Intentinal for smooth Collapse animation */}
						<div className='mt-1'>
							<BrandCases manufacturers={collapsedBrands} onInput={onInput} values={values} idsPrefix={idsPrefix}/>
						</div>
					</div>
				</Collapse_1.default>
				<div className='mt-1'>
					<a className='small' href='#' onClick={handleShowMore}>
						<>{showMore ? 'Show less' : 'Show all'}</>
					</a>
				</div>
			</>}
		</div>);
}
exports.default = BrandSelect;
const BrandCases = ({ manufacturers, onInput, values, idsPrefix }) => {
    return (<div className='d-flex gap-1 flex-wrap'>
			{manufacturers.map(({ manufacturer_id, title, products_qty }) => <div key={manufacturer_id}>
					<input className='btn-check' id={`${idsPrefix}brand_${manufacturer_id}`} type='checkbox' value={manufacturer_id} name={'brand[]'} onChange={onInput.bind(null, manufacturer_id)} checked={values.brand.includes(manufacturer_id)} disabled={products_qty === 0}/>
					<label className='btn btn-outline-secondary btn-sm' htmlFor={`${idsPrefix}brand_${manufacturer_id}`}>
						{title} ({products_qty})
					</label>
				</div>)}
		</div>);
};
//# sourceMappingURL=BrandSelect.jsx.map