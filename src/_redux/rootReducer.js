import {combineReducers} from "redux";
import {CommonSlices} from "./common/slices";

export const rootReducer = combineReducers({
    common: CommonSlices.reducer,
});
