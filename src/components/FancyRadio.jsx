import React, { memo } from 'react';

function FancyRadio(props) {
    return (
        <label className="fancy-radio">
            <input name={props.name} defaultValue={props.value.toLowerCase()} type="radio" />
            <span><i></i>{props.value}</span>
        </label>
    )
}

export default memo(FancyRadio);