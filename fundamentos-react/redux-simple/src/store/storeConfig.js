import { createStore, combineReducers } from "redux";
import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
  numeros: numerosReducer,
  nombres: function (state, action) {//not needed
    console.log(state, "", action);
    return ["Ana", "Bia", "Carlos"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
