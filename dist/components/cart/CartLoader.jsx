"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartRowLoader_1 = __importDefault(require("./CartRowLoader"));
function CartLoader() {
    return (<div className='pt-md-4'>
			{[...Array(3)].map((_, i) => (<CartRowLoader_1.default key={i} bg={i % 2 === 0 ? '#f9f9f9' : ''}/>))}
		</div>);
}
exports.default = CartLoader;
//# sourceMappingURL=CartLoader.jsx.map