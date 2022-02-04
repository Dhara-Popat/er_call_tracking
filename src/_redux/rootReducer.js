import {combineReducers} from "redux";
import {CommonSlices} from "./common/slices";
import { empsSlice } from "./reducers/empReducer";

export const rootReducer = combineReducers({
    common: CommonSlices.reducer,
    emps: empsSlice.reducer
});
