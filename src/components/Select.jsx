import React, { memo } from 'react';

function Select(props) {
    return (
        <select className={props.classess}>
            {
                props.options.map((item, index) => <option key={index} value={item.toLowerCase()}>{item}</option>)
            }
        </select>
    )
}

export default memo(Select);