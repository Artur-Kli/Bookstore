import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'

export default () => {
  const store = createStore(rootReducer, applyMiddleware())
  return store
}

