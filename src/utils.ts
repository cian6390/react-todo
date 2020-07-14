import React from 'react'

export function cloneDeep<T extends any>(source: T): T {
    return JSON.parse(JSON.stringify(source))
}


export function prevent<T extends React.BaseSyntheticEvent>(e: T): T {
    e.preventDefault()
    return e
}