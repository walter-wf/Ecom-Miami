"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.endRouting = exports.startRouting = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const appSlice = (0, toolkit_1.createSlice)({
    name: 'app',
    initialState: {
        isRouteChanging: false,
    },
    reducers: {
        startRouting(state) {
            state.isRouteChanging = true;
        },
        endRouting(state) {
            state.isRouteChanging = false;
        }
    }
});
_a = appSlice.actions, exports.startRouting = _a.startRouting, exports.endRouting = _a.endRouting;
exports.default = appSlice.reducer;
//# sourceMappingURL=app.js.map