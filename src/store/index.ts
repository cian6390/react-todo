import { createStore } from 'redux'
import reducers from './reducers'

export * from './auth/actions'

export type RootState = ReturnType<typeof reducers>

const win = window as any

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers, /* preloadedState, */
    win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

export default store