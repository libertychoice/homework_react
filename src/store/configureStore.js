import { createStore, applyMiddleware } from 'redux'
import rootReduser from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReduser,initialState)


    return store
}