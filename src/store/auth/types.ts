import { User } from 'firebase'

export type FirebaseUser = User

export interface AuthState {
    user: null | FirebaseUser
}

export type AuthAction =
    | { type: "SET_USER", payload: FirebaseUser | null }
    | { type: "UNSET_USER" }