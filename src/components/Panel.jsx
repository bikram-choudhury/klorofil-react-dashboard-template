import React, { memo} from 'react';

function Panel(props) {
    let classes = 'panel ';
    if(props.classes) {
        classes += props.classes;
    }
    return (
        <div className={classes} ref={props.forwardRef}>
            {props.children}
        </div>
    )
}

export default memo(Panel);