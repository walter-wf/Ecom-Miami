"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetAlert = exports.hideAlert = exports.showSuccessAlert = exports.showErrorAlert = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    show: false,
    type: 'danger',
    text: 'Something went wrong'
};
const alertSlice = (0, toolkit_1.createSlice)({
    name: 'alert',
    initialState,
    reducers: {
        showErrorAlert(state, action) {
            state.show = true;
            state.type = 'danger';
            state.text = action.payload;
        },
        showSuccessAlert(state, action) {
            state.show = true;
            state.type = 'success';
            state.text = action.payload;
        },
        hideAlert(state) {
            state.show = false;
        },
        resetAlert() {
            return initialState;
        }
    }
});
_a = alertSlice.actions, exports.showErrorAlert = _a.showErrorAlert, exports.showSuccessAlert = _a.showSuccessAlert, exports.hideAlert = _a.hideAlert, exports.resetAlert = _a.resetAlert;
exports.default = alertSlice.reducer;
//# sourceMappingURL=alert.js.map