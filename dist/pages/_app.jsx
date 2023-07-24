"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const store_1 = require("../redux/store");
require("nprogress/nprogress.css");
require("../styles/styles.scss");
require("swiper/scss");
require("swiper/scss/navigation");
require("swiper/scss/pagination");
require("swiper/scss/scrollbar");
require("animate.css");
require("@fontsource/fira-sans/900.css");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
require("boundless-checkout-react/dist/index.css");
require("@fortawesome/fontawesome-free/css/svg-with-js.css");
const RouterListener_1 = __importDefault(require("../components/RouterListener"));
const LoadingLine_1 = __importDefault(require("../components/LoadingLine"));
function MyApp({ Component, pageProps }) {
    const PageComponent = Component; // Convert Component to a functional component
    return (<react_redux_1.Provider store={store_1.store}>
      <RouterListener_1.default />
      <LoadingLine_1.default />
      <PageComponent {...pageProps}/>
    </react_redux_1.Provider>);
}
exports.default = MyApp;
//# sourceMappingURL=_app.jsx.map