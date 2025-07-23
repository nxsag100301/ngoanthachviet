import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { injectStore } from '@/utils/authorizeAxios'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '@/saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false
    }).concat(sagaMiddleware),
  devTools: true
})

sagaMiddleware.run(rootSaga)

injectStore(store)

export default store
