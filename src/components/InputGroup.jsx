import React, { memo } from 'react';

function InputGroup(props) {
    const groupElement = props.addon ? (
        <span className="input-group-addon">
            {props.children}
        </span>
    ) : (
            <span className="input-group-btn">
                {props.children}
            </span>
        );
    return (
        <div className="input-group">
            {props.position === 'left' && groupElement}
            <input className={props.classess} placeholder={props.placeholder} type={props.type} defaultValue={props.value} />
            {props.position === 'right' && groupElement}
        </div>
    )
}

export default memo(InputGroup);