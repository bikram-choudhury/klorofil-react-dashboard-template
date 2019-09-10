import React, { memo } from 'react';

function FancyCheckbox(props) {
    return (
        <label className="fancy-checkbox">
            <input type="checkbox" />
            <span>{props.value}</span>
        </label>
    )
}

export default memo(FancyCheckbox);