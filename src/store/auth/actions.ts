
import { FirebaseUser } from './types'

export function setUser(payload: FirebaseUser | null) {
    return {
        type: 'SET_USER',
        payload
    }
}

export function unsetUser() {
    return {
        type: 'UNSET_USER'
    }
}
