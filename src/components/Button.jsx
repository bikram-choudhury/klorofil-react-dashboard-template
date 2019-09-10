import React, { memo } from 'react';

function Button(props) {
    return (
        <button type={props.type} className={props.classess} disabled={props.disabled}>{props.children} {props.text}</button>
    );
}

export default memo(Button);