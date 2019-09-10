import React, { memo} from 'react';

function PanelFooter(props) {
    let classes = 'panel-footer ';
    if(props.classes) {
        classes += props.classes;
    }
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default memo(PanelFooter);