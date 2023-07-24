"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TextCharacteristic({ field, onChange, values, idsPrefix }) {
    const characteristic = field.characteristic;
    const id = `${idsPrefix}filter_prop_${characteristic.characteristic_id}`;
    const onInput = (e) => {
        onChange({ props: { [characteristic.characteristic_id]: e.target.value } });
    };
    return (<div className={'mb-3'}>
			<label htmlFor={id} className='form-label'>
				{characteristic.title}
			</label>
			<input type='text' className='form-control' id={id} value={values.props[characteristic.characteristic_id]} onChange={onInput}/>
		</div>);
}
exports.default = TextCharacteristic;
//# sourceMappingURL=TextCharacteristic.jsx.map