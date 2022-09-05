import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/index'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
)

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const configureStore = preloadedState =>
  createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware()),
  )

const store = configureStore()
const persistor = persistStore(store)

export { store, persistor }
