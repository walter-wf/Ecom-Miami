"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CharacteristicItem_1 = __importDefault(require("./characteristics/CharacteristicItem"));
const Manufacturer_1 = __importDefault(require("./characteristics/Manufacturer"));
const SizeAndWeight_1 = __importDefault(require("./characteristics/SizeAndWeight"));
function ProductCharacteristics({ characteristics, manufacturer, size }) {
    if (!characteristics.length)
        return null;
    return (<div className='product-attrs'>
			{characteristics.map(characteristic => {
            var _a;
            return (<react_1.default.Fragment key={characteristic.id}>
					{characteristic.is_folder
                    ? <div className='product-attrs__group'>
							<h3 className='product-attrs__group-header'>{characteristic.title}</h3>
							{(_a = characteristic.children) === null || _a === void 0 ? void 0 : _a.map(child => (<CharacteristicItem_1.default characteristic={child} key={child.id}/>))}
						</div>
                    : <CharacteristicItem_1.default characteristic={characteristic}/>}
				</react_1.default.Fragment>);
        })}
			{manufacturer && <Manufacturer_1.default manufacturer={manufacturer}/>}
			{size && <SizeAndWeight_1.default size={size}/>}
		</div>);
}
exports.default = ProductCharacteristics;
//# sourceMappingURL=Characteristics.jsx.map