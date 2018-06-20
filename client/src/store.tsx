import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import facility from 'ducks/facility'

const config = { key: 'root', storage }
const reducer = persistCombineReducers(config, { facility })

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    (window as any)['devToolsExtension'] ? (window as any)['devToolsExtension']() : (f: any) => f
  )
)

const persistor = persistStore(store)

export {
  store,
  persistor
}
