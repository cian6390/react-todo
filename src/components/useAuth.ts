import { useReducer } from 'react'
import { User } from 'firebase'
import { firebaseApp } from "../services/firebase";

export type FirebaseUser = User

export interface AuthState {
    user: null | FirebaseUser
}

export type AuthAction =
    | { type: "LOGIN", payload: FirebaseUser }
    | { type: "CHANGE", payload: null | FirebaseUser }
    | { type: "LOGOUT" }

function reducer(state: AuthState, action: AuthAction): AuthState {
    console.log(`Run reducer ${action.type}`)
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                user: null
            }
        case "CHANGE":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default function useAuth(user: null | FirebaseUser = null) {

    const initialState = { user }

    const [state, dispatch] = useReducer(reducer, initialState)

    async function logout() {
        await firebaseApp.auth().signOut();
        dispatch({ type: "LOGOUT" })
    }

    async function login(email: string, password: string) {
        const response = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
        dispatch({ type: "LOGIN", payload: response.user! })
        return response.user
    }

    function check() {
        firebaseApp.auth().onAuthStateChanged(user => {
            dispatch({ type: "CHANGE", payload: user})
        })
    }

    return { state, dispatch, login, logout, check }
}