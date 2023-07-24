"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCartInited = exports.setInitStatus = exports.setCartSubmitting = exports.hideCall2Order = exports.showCall2Order = exports.hideVariantModal = exports.showVariantModal = exports.setCartTotal = exports.cartSlice = exports.TCartInited = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
var TCartInited;
(function (TCartInited) {
    TCartInited[TCartInited["no"] = 0] = "no";
    TCartInited[TCartInited["processing"] = 1] = "processing";
    TCartInited[TCartInited["yes"] = 2] = "yes";
})(TCartInited || (exports.TCartInited = TCartInited = {}));
const initialState = {
    cartId: null,
    total: null,
    showVariantModal: false,
    variantModalData: {},
    showCall2Order: false,
    call2OrderData: {},
    submitting: false,
    cartInited: TCartInited.no
};
exports.cartSlice = (0, toolkit_1.createSlice)({
    name: 'cart',
    initialState,
    reducers: {
        setCartTotal: (state, action) => {
            state.total = action.payload;
        },
        showVariantModal: (state, action) => {
            state.showVariantModal = true;
            state.variantModalData = action.payload;
        },
        hideVariantModal: (state) => {
            state.showVariantModal = false;
            state.variantModalData = {};
        },
        showCall2Order: (state, action) => {
            state.showCall2Order = true;
            state.call2OrderData = action.payload;
        },
        hideCall2Order: (state) => {
            state.showCall2Order = false;
            state.call2OrderData = {};
        },
        setCartSubmitting: (state, action) => {
            state.submitting = action.payload;
        },
        setInitStatus: (state, action) => {
            state.cartInited = action.payload;
        },
        setCartInited: (state, action) => {
            state.cartId = action.payload.id;
            state.total = action.payload.total;
            state.cartInited = TCartInited.yes;
        }
    },
});
_a = exports.cartSlice.actions, exports.setCartTotal = _a.setCartTotal, exports.showVariantModal = _a.showVariantModal, exports.hideVariantModal = _a.hideVariantModal, exports.showCall2Order = _a.showCall2Order, exports.hideCall2Order = _a.hideCall2Order, exports.setCartSubmitting = _a.setCartSubmitting, exports.setInitStatus = _a.setInitStatus, exports.setCartInited = _a.setCartInited;
exports.default = exports.cartSlice.reducer;
//# sourceMappingURL=cart.js.map