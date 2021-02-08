import AsyncStorage from '@react-native-community/async-storage';
import { createStore, Store, compose, applyMiddleware } from 'redux';
import createDebugger from 'redux-flipper';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './models/rootReduces';
import rootSagas from './models/rootSaga';

export type RootStateType = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'app',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [];
let sagaMiddleware;

if (__DEV__) {
  const sagaMonitor = console.tron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const flipperMonitor = createDebugger();
  middlewares.push(sagaMiddleware);
  middlewares.push(flipperMonitor);
}

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store: Store<RootStateType, any> = createStore(
  persistedReducer,
  composer,
);
const persistor = persistStore(store);
sagaMiddleware && sagaMiddleware.run(rootSagas);

export default { persistor, store };
