"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LENGTH_MEASURE_UNIT = 'cm.';
const WEIGHT_MEASURE_UNIT = 'kg.';
function SizeAndWeight({ size }) {
    const { weight, width, length, height } = size;
    const hasDimensions = length || width || height;
    return (<>
			{hasDimensions && <dl className='product-attrs__item'>
				<dt className='product-attrs__item-name-wrapper'>
					<span className='product-attrs__item-name'>Tamaño (L x W x H)</span>
				</dt>
				<dd className='product-attrs__item-value'>
					{`${length || ''} x ${width || ''} x ${height || ''} ${LENGTH_MEASURE_UNIT}`}
				</dd>
			</dl>}
			{width && <div itemProp='width' itemScope itemType='//schema.org/QuantitativeValue'>
				<meta itemProp='value' content={String(width)}/>
				<meta itemProp='unitText' content={LENGTH_MEASURE_UNIT}/>
			</div>}
			{height && <div itemProp='height' itemScope itemType='//schema.org/QuantitativeValue'>
				<meta itemProp='value' content={String(height)}/>
				<meta itemProp='unitText' content={LENGTH_MEASURE_UNIT}/>
			</div>}
			{length && <div itemProp='length' itemScope itemType='//schema.org/QuantitativeValue'>
				<meta itemProp='value' content={String(length)}/>
				<meta itemProp='unitText' content={LENGTH_MEASURE_UNIT}/>
			</div>}

			{weight && <>
				<dl className='product-attrs__item'>
					<dt className='product-attrs__item-name-wrapper'>
						<span className='product-attrs__item-name'>Peso</span>
					</dt>
					<dd className='product-attrs__item-value'>
						{`${weight} ${WEIGHT_MEASURE_UNIT}`}
					</dd>
				</dl>
				<div itemProp='weight' itemScope itemType='//schema.org/QuantitativeValue'>
					<meta itemProp='value' content={String(weight)}/>
					<meta itemProp='unitText' content={WEIGHT_MEASURE_UNIT}/>
				</div>
			</>}
		</>);
}
exports.default = SizeAndWeight;
//# sourceMappingURL=SizeAndWeight.jsx.map