import React, { memo } from 'react';

function PanelBody(props) {
    let classes = 'panel-body ';
    if (props.classes) {
        classes += props.classes;
    }
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default memo(PanelBody);