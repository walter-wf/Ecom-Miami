"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const router_1 = require("next/router");
const redux_1 = require("../hooks/redux");
const cart_1 = require("../redux/reducers/cart");
const app_1 = require("../redux/reducers/app");
function RouterListener() {
    const router = (0, router_1.useRouter)();
    const dispatch = (0, redux_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        const handleStart = () => {
            dispatch((0, cart_1.hideCall2Order)());
            dispatch((0, app_1.startRouting)());
        };
        const handleComplete = () => dispatch((0, app_1.endRouting)());
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router.events]); //eslint-disable-line
    return null;
}
exports.default = RouterListener;
//# sourceMappingURL=RouterListener.jsx.map