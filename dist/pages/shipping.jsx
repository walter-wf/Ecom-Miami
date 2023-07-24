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
const Main_1 = __importDefault(require("../layouts/Main"));
const api_1 = require("../lib/api");
const menu_1 = require("../lib/menu");
function ShippingPage({ mainMenu, footerMenu }) {
    return (<Main_1.default mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Envios</h1>
				<div className='text-container'>
					{/* <p>
            <a href={'https://google.com'} target={'_blank'}>Lorem ipsum</a> dolor sit amet <b>consectetur</b> adipiscing elit facilisis
            justo sodales, pharetra ut efficitur netus
            suscipit sapien euismod viverra consequat duis diam, rutrum vitae auctor a dui cursus ante odio ornare.
            <strong>Vivamus a dictum</strong> litora imperdiet elit ridiculus cursus venenatis primis, porttitor vel lectus dapibus
            tristique quis conubia congue enim, <u>tempor donec</u> cubilia consequat integer <i>ornare felis euismod</i>. Eros enim
            cras molestie ante varius malesuada cubilia vivamus dui montes ad, sed consectetur praesent vulputate purus
            risus <em>tempus</em> posuere semper justo, metus parturient tincidunt suspendisse in tempor magna fermentum mollis conubia.
            Elementum consequat duis platea a et, feugiat quis nostra iaculis ex gravida, pulvinar lorem commodo vitae.
            Primis rutrum eleifend dui sociosqu ante conubia, faucibus turpis cras magnis pretium tortor, vitae euismod
            ullamcorper lacinia feugiat semper, ornare sed vulputate venenatis consequat. Magnis pretium rhoncus est ante
            auctor gravida diam maecenas porttitor, elementum himenaeos egestas tellus magna aliquet ornare.
        </p>
        <h1>What is Lorem Ipsum? (h1)</h1>
        <p>
            Facilisi mollis aliquam eget platea felis luctus, mi montes suspendisse volutpat libero dolor a, hac faucibus lectus id amet. Imperdiet sit dapibus nibh parturient adipiscing tellus, ridiculus habitasse aliquet semper eu duis, consequat sociosqu lacinia eros venenatis. Ut augue sed inceptos ante ex feugiat, vitae mollis purus vivamus. Vulputate semper elementum integer conubia himenaeos quisque velit diam, auctor euismod pretium morbi netus pulvinar nec praesent sit, sollicitudin nisl tempor dolor aliquam consequat sagittis.
        </p>
        <h2>What is Lorem Ipsum? (h2)</h2>
        <p>
            Facilisi mollis aliquam eget platea felis luctus, mi montes suspendisse volutpat libero dolor a, hac faucibus lectus id amet. Imperdiet sit dapibus nibh parturient adipiscing tellus, ridiculus habitasse aliquet semper eu duis, consequat sociosqu lacinia eros venenatis. Ut augue sed inceptos ante ex feugiat, vitae mollis purus vivamus. Vulputate semper elementum integer conubia himenaeos quisque velit diam, auctor euismod pretium morbi netus pulvinar nec praesent sit, sollicitudin nisl tempor dolor aliquam consequat sagittis.
        </p>
        <h3>What is Lorem Ipsum? (h3)</h3>
        <p>
            Ex sollicitudin porttitor at a commodo eros cubilia rhoncus sapien montes, mattis mus risus auctor ridiculus etiam aliquam odio duis placerat laoreet, neque quisque imperdiet torquent lacinia dignissim volutpat posuere ut. Parturient maecenas quis etiam et class duis dui laoreet maximus lectus, montes himenaeos varius platea bibendum metus hac dignissim habitasse, elementum dis potenti pulvinar congue dolor malesuada placerat mattis. Felis ad ultrices in pulvinar litora eleifend vestibulum per, cursus iaculis lectus hendrerit urna nisl facilisi, vivamus adipiscing faucibus nulla dignissim hac quis. Cubilia adipiscing augue gravida torquent duis mi non platea, sit conubia vestibulum sem mus nec suspendisse, inceptos amet sodales netus aenean imperdiet ut. Magna iaculis interdum in sed quisque nibh vitae justo netus dolor nunc nec a elementum, consectetur mattis sapien amet tempus per est ante dictum lectus dui fusce.
        </p>
        <h4>What is Lorem Ipsum? (h4)</h4>
        <p>
            Ex sollicitudin porttitor at a commodo eros cubilia rhoncus sapien montes, mattis mus risus auctor ridiculus etiam aliquam odio duis placerat laoreet, neque quisque imperdiet torquent lacinia dignissim volutpat posuere ut. Parturient maecenas quis etiam et class duis dui laoreet maximus lectus, montes himenaeos varius platea bibendum metus hac dignissim habitasse, elementum dis potenti pulvinar congue dolor malesuada placerat mattis. Felis ad ultrices in pulvinar litora eleifend vestibulum per, cursus iaculis lectus hendrerit urna nisl facilisi, vivamus adipiscing faucibus nulla dignissim hac quis. Cubilia adipiscing augue gravida torquent duis mi non platea, sit conubia vestibulum sem mus nec suspendisse, inceptos amet sodales netus aenean imperdiet ut. Magna iaculis interdum in sed quisque nibh vitae justo netus dolor nunc nec a elementum, consectetur mattis sapien amet tempus per est ante dictum lectus dui fusce.
        </p>
        <h5>What is Lorem Ipsum? (h5)</h5>
        <p>
            Ex sollicitudin porttitor at a commodo eros cubilia rhoncus sapien montes, mattis mus risus auctor ridiculus etiam aliquam odio duis placerat laoreet, neque quisque imperdiet torquent lacinia dignissim volutpat posuere ut. Parturient maecenas quis etiam et class duis dui laoreet maximus lectus, montes himenaeos varius platea bibendum metus hac dignissim habitasse, elementum dis potenti pulvinar congue dolor malesuada placerat mattis. Felis ad ultrices in pulvinar litora eleifend vestibulum per, cursus iaculis lectus hendrerit urna nisl facilisi, vivamus adipiscing faucibus nulla dignissim hac quis. Cubilia adipiscing augue gravida torquent duis mi non platea, sit conubia vestibulum sem mus nec suspendisse, inceptos amet sodales netus aenean imperdiet ut. Magna iaculis interdum in sed quisque nibh vitae justo netus dolor nunc nec a elementum, consectetur mattis sapien amet tempus per est ante dictum lectus dui fusce.
        </p>
        <h6>What is Lorem Ipsum? (h6)</h6>
        <p>
            Ex sollicitudin porttitor at a commodo eros cubilia rhoncus sapien montes, mattis mus risus auctor ridiculus etiam aliquam odio duis placerat laoreet, neque quisque imperdiet torquent lacinia dignissim volutpat posuere ut. Parturient maecenas quis etiam et class duis dui laoreet maximus lectus, montes himenaeos varius platea bibendum metus hac dignissim habitasse, elementum dis potenti pulvinar congue dolor malesuada placerat mattis. Felis ad ultrices in pulvinar litora eleifend vestibulum per, cursus iaculis lectus hendrerit urna nisl facilisi, vivamus adipiscing faucibus nulla dignissim hac quis. Cubilia adipiscing augue gravida torquent duis mi non platea, sit conubia vestibulum sem mus nec suspendisse, inceptos amet sodales netus aenean imperdiet ut. Magna iaculis interdum in sed quisque nibh vitae justo netus dolor nunc nec a elementum, consectetur mattis sapien amet tempus per est ante dictum lectus dui fusce.
        </p> */}
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
//# sourceMappingURL=shipping.jsx.map