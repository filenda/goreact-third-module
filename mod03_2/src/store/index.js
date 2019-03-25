import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

import reducers from "./reducers";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

// const tronMiddleware =
//   process.env.NODE_ENV === "development"
//     ? console.tron.createEnhancer
//     : () => {};

middlewares.push(sagaMiddleware);
// middlewares.push(tronMiddleware);

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
