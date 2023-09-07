// import { createStore } from "redux";
// import { shoesReducer } from "./reducer/shoesReducer";

// const store = createStore(
//   shoesReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { createStore, combineReducers } from "redux";
import { shoesReducer } from "./reducer/shoesReducer";

const rootReducer = combineReducers({
  shoesReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
