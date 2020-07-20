import React from "react";
import RefList from './RefList'

export default function Home() {
    const refs = [
        {
            text: 'React',
            url: 'https://reactjs.org/'
        }, {
            text: 'REACT ROUTER',
            url: 'https://reactrouter.com/'
        }, {
            text: 'Redux with React',
            url: 'https://redux.js.org/basics/usage-with-react'
        }, {
            text: 'clsx - A tiny (228B) utility for constructing className strings conditionally.',
            url: 'https://github.com/lukeed/clsx'
        }, {
            text: 'immerjs\'use-immer - A hook to use immer as a React hook to manipulate state.',
            url: 'https://github.com/immerjs/use-immer'
        }, {
            text: 'rxjs-hooks',
            url: 'https://github.com/LeetCode-OpenSource/rxjs-hooks'
        }, {
            text: 'react-i18next',
            url: 'https://react.i18next.com/',
        }, {
            text: 'redux-observable',
            url: 'https://redux-observable.js.org/'
        }, {
            text: 'redux-Saga',
            url: 'https://redux-saga.js.org/'
        }
    ]
    return (
        <RefList items={refs} />
    )
}