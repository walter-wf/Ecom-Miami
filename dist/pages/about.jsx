"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const api_1 = require("../lib/api");
const menu_1 = require("../lib/menu");
const Main_1 = __importDefault(require("../layouts/Main"));
function ShippingPage({ mainMenu, footerMenu }) {
    return (<Main_1.default mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Sobre nosotros Miami Home</h1>
				<div className='text-container'>
					<p>
					Nuestra historia comienza con nuestras propias necesidades. Cuando llegamos a Miami, nos dimos cuenta de que teníamos muy pocas opciones de calidad y productos prácticos. ¿La solución? Traer todo lo que queríamos. Poco a poco, comenzamos a notar que esta carencia era una oportunidad.

          Comenzamos trayendo solo unos pocos artículos, pero a medida que crecíamos, lo mismo hacía nuestra empresa. Hoy en día, Miami Home es el resultado de esta aventura. Estamos agradecidos por el apoyo y la confianza de nuestros clientes, ya que sin ellos, no seríamos la gran empresa que somos hoy.
					</p>
				</div>
			</div>
		</Main_1.default>);
}
exports.default = ShippingPage;
const getServerSideProps = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoryTree = yield api_1.apiClient.catalog.getCategoryTree({ menu: 'category' });
    const menus = (0, menu_1.makeAllMenus)({ categoryTree });
    return {
        props: Object.assign({}, menus)
    };
});
exports.getServerSideProps = getServerSideProps;
//# sourceMappingURL=about.jsx.map