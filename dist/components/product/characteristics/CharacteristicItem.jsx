"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CharacteristicItem({ characteristic }) {
    var _a, _b;
    return (<>
			<dl className='product-attrs__item'>
				<dt className='product-attrs__item-name-wrapper'>
					<span className='product-attrs__item-name'>
						{characteristic.title}
					</span>
				</dt>
				<dd className='product-attrs__item-value'>
					{characteristic.value && <div>{characteristic.value}</div>}
					{(_a = characteristic.cases) === null || _a === void 0 ? void 0 : _a.map(caseItem => (<div key={caseItem.id}>{caseItem.title}</div>))}
				</dd>
			</dl>
			<div itemProp='additionalProperty' itemScope itemType='//schema.org/PropertyValue'>
				<meta itemProp='name' content={characteristic.title}/>
				<meta itemProp='value' content={characteristic.value || ((_b = characteristic.cases) === null || _b === void 0 ? void 0 : _b.map(el => el.title).join(', '))}/>
			</div>
		</>);
}
exports.default = CharacteristicItem;
//# sourceMappingURL=CharacteristicItem.jsx.map