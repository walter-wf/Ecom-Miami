"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
// values, onSelect, idCombinations
function VariantPickerCharacteristic({ characteristic, onSelectCase, value, idCombinations, variants }) {
    const onLabelClicked = (caseId, e) => {
        e.preventDefault();
        onSelectCase(characteristic.id, value[characteristic.id] === caseId ? null : caseId);
    };
    return (<div className={'variant-picker__characteristic'}>
			<div className={'variant-picker__title'}>{`${characteristic.title}:`}</div>
			<div className='variant-picker__cases'>
				{characteristic.cases.map(caseItem => {
            const id = `${characteristic.id}-case-${caseItem.id}`;
            const availableVariants = findAvailableVariants(variants, idCombinations, Object.assign(Object.assign({}, value), { [characteristic.id]: caseItem.id }));
            const inStockVariants = availableVariants.filter(({ in_stock }) => in_stock);
            return (<div key={caseItem.id} className={'variant-picker__case-item'}>
							<input autoComplete={'off'} className={'btn-check'} disabled={!availableVariants.length} name={`characteristic-${characteristic.id}`} onChange={() => { }} type={'radio'} checked={value[characteristic.id] === caseItem.id} value={caseItem.id} id={id}/>
							<label className={(0, clsx_1.default)('btn btn-outline-secondary', { 'out-of-stock': !inStockVariants.length })} htmlFor={id} onClick={onLabelClicked.bind(null, caseItem.id)}>
								{caseItem.title}
							</label>
						</div>);
        })}
			</div>
		</div>);
}
exports.default = VariantPickerCharacteristic;
const findAvailableVariants = (variants, idCombinations, value) => {
    const variantIds = [];
    for (const [variantId, combination] of Object.entries(idCombinations)) {
        if (isValueSuitsCombination(combination, value)) {
            variantIds.push(parseInt(variantId));
        }
    }
    return variants.filter(({ variant_id }) => variantIds.includes(variant_id));
};
const isValueSuitsCombination = (combination, value) => {
    for (const [characteristicId, caseId] of Object.entries(value)) {
        if (!(characteristicId in combination) || combination[characteristicId] != caseId) {
            return false;
        }
    }
    return true;
};
//# sourceMappingURL=Characteristic.jsx.map