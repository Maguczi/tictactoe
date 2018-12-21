import React, { useState } from 'react';
import './Game.scss'
import Square from '../Components/Square/Square.js'

const game = () => {
    const [type, setType] = useState(2);
    const [state00, setState00] = useState(0);
    const [state01, setState01] = useState(0);
    const [state02, setState02] = useState(0);
    const [state10, setState10] = useState(0);
    const [state11, setState11] = useState(0);
    const [state12, setState12] = useState(0);
    const [state20, setState20] = useState(0);
    const [state21, setState21] = useState(0);
    const [state22, setState22] = useState(0);

    const setTypeHandler = () => {
        if (type === 1) {
            setType(2);
        } else {
            setType(1);
        }
    }

    return (
        <div className="game">
            <div className="line horizontal-line horizontal-line-1"></div>
            <div className="line horizontal-line horizontal-line-2"></div>

            <div className="line vertical-line vertical-line-1"></div>
            <div className="line vertical-line vertical-line-2"></div>

            <Square name="b00" state={state00} click={() => {setTypeHandler(); setState00(type)}} />
            <Square name="b01" state={state01} click={() => {setTypeHandler(); setState01(type)}} />
            <Square name="b02" state={state02} click={() => {setTypeHandler(); setState02(type)}} />

            <Square name="b10" state={state10} click={() => {setTypeHandler(); setState10(type)}} />
            <Square name="b11" state={state11} click={() => {setTypeHandler(); setState11(type)}} />
            <Square name="b12" state={state12} click={() => {setTypeHandler(); setState12(type)}} />

            <Square name="b20" state={state20} click={() => {setTypeHandler(); setState20(type)}} />
            <Square name="b21" state={state21} click={() => {setTypeHandler(); setState21(type)}} />
            <Square name="b22" state={state22} click={() => {setTypeHandler(); setState22(type)}} />
        </div>
    );
}

export default game;