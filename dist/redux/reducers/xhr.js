"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanPromises = exports.addPromise = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const xhrSlice = (0, toolkit_1.createSlice)({
    name: 'xhr',
    initialState: {
        promises: []
    },
    reducers: {
        addPromise(state, action) {
            state.promises.push(action.payload);
        },
        cleanPromises(state) {
            state.promises = [];
        }
    }
});
_a = xhrSlice.actions, exports.addPromise = _a.addPromise, exports.cleanPromises = _a.cleanPromises;
exports.default = xhrSlice.reducer;
//# sourceMappingURL=xhr.js.map