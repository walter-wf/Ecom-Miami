"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rc_slider_1 = require("rc-slider");
const formatter_1 = require("../../lib/formatter");
require("rc-slider/assets/index.css");
const Range = (0, rc_slider_1.createSliderWithTooltip)(rc_slider_1.Range);
function PriceRangeField({ field, onChange, values, idsPrefix }) {
    var _a, _b, _c;
    const onInput = (e) => onChange({ [e.target.name]: e.target.value });
    const minValue = ((_a = field.range) === null || _a === void 0 ? void 0 : _a.min) ? parseFloat(field.range.min) : 0;
    const maxValue = ((_b = field.range) === null || _b === void 0 ? void 0 : _b.max) ? parseFloat((_c = field.range) === null || _c === void 0 ? void 0 : _c.max) : 0;
    const onRangeChange = ([min, max]) => {
        onChange({
            'price_min': min !== minValue ? min : '',
            'price_max': max !== maxValue ? max : ''
        });
    };
    return (<>
			<label className='form-label'>Precio ({(0, formatter_1.getCurrencySymbol)()})</label>
			<Range allowCross={false} className='range-slider mb-2' max={maxValue} min={minValue} onChange={onRangeChange} step={0.01} tipFormatter={formatter_1.formatMoney} value={[values.price_min || minValue, values.price_max || maxValue]}/>
			<div className={'row'}>
				<div className={'col mb-3 d-flex gap-2 justify-content-center'}>
					<label htmlFor={`${idsPrefix}filter_price_min`} className='text-muted'><small>De</small></label>
					<input type='number' className='form-control form-control-sm' id={`${idsPrefix}filter_price_min`} min={minValue} placeholder={String(minValue || '')} name={'price_min'} step={0.01} onChange={onInput} value={values.price_min}/>
				</div>
				<div className={'col mb-3 d-flex gap-2 justify-content-center'}>
					<label htmlFor={`${idsPrefix}filter_price_max`} className='text-muted'><small>A</small></label>
					<input type='number' className='form-control form-control-sm' id={`${idsPrefix}filter_price_max`} max={maxValue} placeholder={String(maxValue || '')} name={'price_max'} step={0.01} onChange={onInput} value={values.price_max}/>
				</div>
			</div>
		</>);
}
exports.default = PriceRangeField;
//# sourceMappingURL=PriceRange.jsx.map