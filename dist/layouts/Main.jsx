"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamic_1 = __importDefault(require("next/dynamic"));
const head_1 = __importDefault(require("next/head"));
const Header_1 = __importDefault(require("../components/Header"));
const Footer_1 = __importDefault(require("../components/Footer"));
const Alert_1 = __importDefault(require("../components/Alert"));
const redux_1 = require("../hooks/redux");
const clsx_1 = __importDefault(require("clsx"));
const AsideMenu_1 = __importDefault(require("../components/AsideMenu")); // Importamos directamente el componente
const AsideBackdrop = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('../components/asideMenu/Backdrop'))), { ssr: false });
const HorizontalMenu_1 = __importDefault(require("../components/HorizontalMenu"));
const CallToOrder_1 = __importDefault(require("../components/header/CallToOrder"));
const shopBaseUrl = process.env.BOUNDLESS_BASE_URL || '';
function MainLayout({ children, title, metaData, mainMenu, footerMenu, noIndex }) {
    const { canonicalUrl, imgUrl, description } = metaData || {};
    const asideIsOpened = (0, redux_1.useAppSelector)((state) => state.asideMenu.isOpened);
    return (<>
      <head_1.default>
        <meta charSet='UTF-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
        {/* ... Resto del contenido de <Head> ... */}
      </head_1.default>
      <Alert_1.default />
      <div className={(0, clsx_1.default)('page-layout page-layout_main mars-full-theme', { 'page-layout_aside-opened': asideIsOpened })}>
        <CallToOrder_1.default />
        <Header_1.default />
        {mainMenu && <HorizontalMenu_1.default menuList={mainMenu}/>}
        <main className='page-layout__main'>
          {children}
        </main>
        <Footer_1.default menuList={footerMenu}/>
      </div>
      {mainMenu && <AsideMenu_1.default menuList={mainMenu}/>}
    </>);
}
exports.default = MainLayout;
//# sourceMappingURL=Main.jsx.map