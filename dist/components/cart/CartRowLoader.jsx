"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_content_loader_1 = __importDefault(require("react-content-loader"));
function CartRowLoader({ bg }) {
    return (<div className='row mb-2 mx-1 py-3 rounded' style={{ backgroundColor: bg || '#fff' }}>
			<div className='col-md-4 d-flex mb-2 align-items-start '>
				<react_content_loader_1.default speed={2} width={230} height={60} viewBox='0 0 240 70' backgroundColor={bg ? '#d3d3d3' : '#f3f3f3'} foregroundColor={bg ? '#ababab' : '#ecebeb'}>
					<rect x='75' y='15' rx='3' ry='3' width='158' height='12'/>
					<rect x='75' y='35' rx='3' ry='3' width='100' height='12'/>
					<rect x='0' y='10' rx='3' ry='3' width='60' height='60'/>
				</react_content_loader_1.default>
			</div>
			<div className='col-md-2 text-start text-md-center mb-2 py-1 px-4 px-md-0'>
				<SmallLoader bg={bg}/>
			</div>
			<div className='col-md-2 text-start text-md-center mb-2 py-1 px-4 px-md-0'>
				<SmallLoader bg={bg}/>
			</div>
			<div className='col-md-2 text-start text-md-center mb-2 py-1 px-4 px-md-0'>
				<SmallLoader bg={bg}/>
			</div>
		</div>);
}
exports.default = CartRowLoader;
const SmallLoader = ({ bg }) => (<react_content_loader_1.default speed={2} width={60} height={20} viewBox='0 0 60 20' backgroundColor={bg ? '#d3d3d3' : '#f3f3f3'} foregroundColor={bg ? '#ababab' : '#ecebeb'}>
		<rect x='0' y='10' rx='3' ry='3' width='60' height='10'/>
	</react_content_loader_1.default>);
//# sourceMappingURL=CartRowLoader.jsx.map