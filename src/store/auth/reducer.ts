import { AuthState, AuthAction } from './types'

export const authInitialState: AuthState = { user: null }

export function reducer(state: AuthState = authInitialState, action: AuthAction): AuthState {
    console.log(`Run reducer ${action.type}`)
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "UNSET_USER":
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default reducer