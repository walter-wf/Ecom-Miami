"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const xhr_1 = __importDefault(require("./reducers/xhr"));
const cart_1 = __importDefault(require("./reducers/cart"));
const alert_1 = __importDefault(require("./reducers/alert"));
const app_1 = __importDefault(require("./reducers/app"));
const asideMenu_1 = __importDefault(require("./reducers/asideMenu"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        xhr: xhr_1.default,
        cart: cart_1.default,
        alert: alert_1.default,
        app: app_1.default,
        asideMenu: asideMenu_1.default,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['Promise'],
            ignoredActionPaths: ['payload'],
            ignoredPaths: ['xhr.promises'],
        },
    })
});
//# sourceMappingURL=store.js.map