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
const ProductsList_1 = __importDefault(require("../components/ProductsList"));
const Main_1 = __importDefault(require("../layouts/Main"));
const api_1 = require("../lib/api");
const menu_1 = require("../lib/menu");
const SwiperSlider_1 = __importDefault(require("../components/SwiperSlider"));
const mobile_slider_1_png_1 = __importDefault(require("../assets/mobile-slider-1.png"));
const mobile_slider_2_png_1 = __importDefault(require("../assets/mobile-slider-2.png"));
// import CoverTextInCenter from '../components/CoverTextInCenter';
// import bgImg from '../assets/cover-bg.jpeg';
// import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
const ProductsSliderByQuery_1 = __importDefault(require("../components/ProductsSliderByQuery"));
const TextWithIcons_1 = __importDefault(require("../components/TextWithIcons"));
const faBug_1 = require("@fortawesome/free-solid-svg-icons/faBug");
const faShieldAlt_1 = require("@fortawesome/free-solid-svg-icons/faShieldAlt");
const faSmile_1 = require("@fortawesome/free-solid-svg-icons/faSmile");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const Reviews_1 = __importDefault(require("../components/Reviews"));
const review_woman_1_jpg_1 = __importDefault(require("../assets/review-woman-1.jpg"));
const review_man_1_jpg_1 = __importDefault(require("../assets/review-man-1.jpg"));
const review_man_2_jpg_1 = __importDefault(require("../assets/review-man-2.jpg"));
function IndexPage({ products, mainMenu, footerMenu }) {
    return (<Main_1.default mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className='container-xxl'>
				<MainPageSlider />
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'></h1>
				<ProductsList_1.default products={products} className={'page-block'} itemClassName={'products__item_4-in-row'}/>
			</div>
			<TextWithIcons_1.default columns={[
            {
                icon: <react_fontawesome_1.FontAwesomeIcon icon={faBug_1.faBug} className={'text-with-icons__icon'}/>,
                title: 'Confianza y fiabilidad',
                comment: ''
            },
            {
                icon: <react_fontawesome_1.FontAwesomeIcon icon={faShieldAlt_1.faShieldAlt} className={'text-with-icons__icon'}/>,
                title: 'Tu compra esta protegida',
                comment: ''
            },
            {
                icon: <react_fontawesome_1.FontAwesomeIcon icon={faSmile_1.faSmile} className={'text-with-icons__icon'}/>,
                title: 'Se ve bien comprar en Miami Home',
                comment: ''
            },
        ]} fullWidth={true} className={'page-block'}/>
			<div className='container-xxl'>
				<ProductsSliderByQuery_1.default query={{ collection: ['main-page'], sort: 'in_collection' }} title={'Ofertas especiales:'} wrapperClassName='page-block'/>
				<div className={'page-block'}>
					<h2 className={'text-center mb-4'}>Nuestros clientes nos recomiendan</h2>
					<Reviews_1.default reviews={[
            {
                image: <img src={review_woman_1_jpg_1.default.src} className={'reviews__img'}/>,
                title: 'Amanda',
                jobTitle: 'CEO',
                comment: 'Me gusta trabajar con el equipo de mayoristas. Estamos agradecidos por su gran servicio!'
            },
            {
                image: <img src={review_man_1_jpg_1.default.src} className={'reviews__img'}/>,
                title: 'Jorge',
                jobTitle: 'Comprador frecuente',
                comment: 'Me gusta la calidad y el envío rápido.'
            },
            {
                image: <img src={review_man_2_jpg_1.default.src} className={'reviews__img'}/>,
                title: 'David',
                jobTitle: 'Fundador de una Startup',
                comment: 'Me gusta el trato y calidad que tienen con el cliente'
            },
        ]}/>
				</div>
			</div>
		</Main_1.default>);
}
exports.default = IndexPage;
const getServerSideProps = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoryTree = yield api_1.apiClient.catalog.getCategoryTree({ menu: 'category' });
    const { products } = yield api_1.apiClient.catalog.getProducts({ collection: ['main-page'], sort: 'in_collection' });
    const menus = (0, menu_1.makeAllMenus)({ categoryTree });
    return {
        props: Object.assign({ products }, menus)
    };
});
exports.getServerSideProps = getServerSideProps;
function MainPageSlider() {
    const slides = [
        {
            'img': mobile_slider_1_png_1.default.src,
            'link': '',
            'caption': '',
            'captionPosition': 'bottom',
            'useFilling': true,
            'fillingColor': '',
            'fillingOpacity': 0.40
        },
        {
            'img': mobile_slider_2_png_1.default.src,
            'link': '',
            'caption': '',
            'captionPosition': 'bottom',
            'useFilling': true,
            'fillingColor': '',
            'fillingOpacity': 0.4
        }
    ];
    return (<SwiperSlider_1.default showPrevNext 
    // pagination='progressbar'
    size={'large'} slides={slides} className={'mb-4'}/>);
}
//# sourceMappingURL=index.jsx.map