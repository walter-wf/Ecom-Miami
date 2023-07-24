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
const react_1 = __importStar(require("react"));
const nprogress_1 = __importDefault(require("nprogress"));
const redux_1 = require("../hooks/redux");
const xhr_1 = require("../redux/reducers/xhr");
function LoadingLine() {
    const dispatch = (0, redux_1.useAppDispatch)();
    const promises = (0, redux_1.useAppSelector)((state) => state.xhr.promises);
    const isRouting = (0, redux_1.useAppSelector)((state) => state.app.isRouteChanging);
    (0, react_1.useEffect)(() => {
        if (isRouting)
            nprogress_1.default.start();
        else
            nprogress_1.default.done();
    }, [isRouting]);
    (0, react_1.useEffect)(() => {
        checkBgPromises();
    });
    function checkBgPromises() {
        const size = promises.length;
        if (!size)
            return;
        nprogress_1.default.start();
        Promise.allSettled(promises)
            .then(() => {
            if (promises.length === size) {
                nprogress_1.default.done();
                dispatch((0, xhr_1.cleanPromises)());
            }
        });
    }
    return <div />;
}
exports.default = LoadingLine;
//# sourceMappingURL=LoadingLine.jsx.map