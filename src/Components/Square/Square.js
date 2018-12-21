import React from 'react';

const square = props => {
    let className = 'square ' + props.name;

    if (props.state === 1) {
        className += ' ' + 'cross';
    }
    else if (props.state === 2) {
        className += ' ' + 'circle';
    }


    return (
        <div className={className} onClick={props.click}>
            <span className="m1"></span>
            <span className="m2"></span>
            <span className="m3"></span>
            <span className="m4"></span>
        </div>
    );
}

export default square;