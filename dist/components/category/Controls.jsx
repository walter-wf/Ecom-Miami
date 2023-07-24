"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SortButtons_1 = __importDefault(require("../SortButtons"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faSlidersH_1 = require("@fortawesome/free-solid-svg-icons/faSlidersH");
function CaregoryControls({ params, onSort, onMobileShow }) {
    return (<div className='category-controls'>
			<div className='category-controls__mobile'>
				<button className='btn btn-outline-secondary category-controls__toggle-filters' onClick={onMobileShow}>
					<react_fontawesome_1.FontAwesomeIcon className='me-2' icon={faSlidersH_1.faSlidersH}/>
					Filtros
				</button>
			</div>
			<SortButtons_1.default params={params} onSort={onSort} className='category-controls__sort'/>
		</div>);
}
exports.default = CaregoryControls;
//# sourceMappingURL=Controls.jsx.map