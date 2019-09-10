import React, { memo } from 'react';

function Alert(props) {
    let classess = `alert alert-${props.type}`;
    if (props.dismissible) {
        classess += " alert-dismissible"
    }
    return (
        <div className={classess} role="alert">
            {
                props.dismissible && (
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                )
            }
            { props.children }
		</div>
    );
}

export default memo(Alert);