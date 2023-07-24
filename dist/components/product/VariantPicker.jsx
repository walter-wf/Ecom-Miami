"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Characteristic_1 = __importDefault(require("./variantPicker/Characteristic"));
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const clsx_1 = __importDefault(require("clsx"));
function ProductVariantPicker({ extendedVariants, onChange }) {
    const { characteristics, list, combinations, idCombinations } = extendedVariants;
    const [value, setValue] = (0, react_1.useState)({});
    const onSelectCase = (characteristicId, caseId) => {
        const newValue = Object.assign({}, value);
        if (caseId === null) {
            delete newValue[characteristicId];
        }
        else {
            newValue[characteristicId] = caseId;
        }
        setValue(newValue);
        let variant;
        const variantId = findVariantIdByCombinations(newValue, combinations);
        if (variantId) {
            variant = list.find(({ variant_id }) => String(variant_id) == variantId);
        }
        if (onChange) {
            onChange(newValue, variant);
        }
    };
    return (<div className={(0, clsx_1.default)('variant-picker')}>
			{characteristics.map(characteristic => (<Characteristic_1.default characteristic={characteristic} key={characteristic.id} onSelectCase={onSelectCase} value={value} idCombinations={idCombinations} variants={list}/>))}
		</div>);
}
exports.default = ProductVariantPicker;
const findVariantIdByCombinations = (value, combinations) => {
    const requiredCombinations = Object.entries(value).map(([characteristicId, caseId]) => `${characteristicId}-${caseId}`);
    //eslint-disable-next-line
    const result = Object.entries(combinations).find(([variantId, variantCombination]) => (0, isEqual_1.default)(requiredCombinations, variantCombination));
    return result ? result[0] : null;
};
//# sourceMappingURL=VariantPicker.jsx.map