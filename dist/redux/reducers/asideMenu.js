"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setIsOpened = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    isOpened: false
};
const asideMenuSlice = (0, toolkit_1.createSlice)({
    name: 'asideMenu',
    initialState,
    reducers: {
        setIsOpened(state, action) {
            state.isOpened = action.payload;
        }
    }
});
exports.setIsOpened = asideMenuSlice.actions.setIsOpened;
exports.default = asideMenuSlice.reducer;
//# sourceMappingURL=asideMenu.js.map