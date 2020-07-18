import './Square.scss'
import React, { useState } from 'react'

export default function (props: { onClick: Function, symbol: null | string }) {

    const [placed, setPlace] = useState(false)

    function onClickHandler(e: React.MouseEvent) {
        setPlace(!placed)
        props.onClick()
    }

    return (
        <div onClick={onClickHandler} className="square">
            {props.symbol}
        </div>
    )
}