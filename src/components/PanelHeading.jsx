import React, { memo } from 'react';

function PanelHeading(props) {
    let iconRef = null
    return (
        <div className="panel-heading">
            <h3 className="panel-title">{props.heading}</h3>
            {
                props.subheading && (<p className="panel-subtitle" dangerouslySetInnerHTML={createMarkup(props.subheading)}></p>)
            }
            {
                !(props.action && props.action === 'false') && (
                    <div className="right">
                        <button
                            type="button"
                            className="btn-toggle-collapse"
                            onClick={() => props.togglePanel && props.togglePanel(iconRef)}>
                            <i className="lnr lnr-chevron-up" ref={icon => iconRef = icon}></i>
                        </button>
                        <button
                            type="button"
                            className="btn-remove"
                            onClick={() => props.closePanel && props.closePanel()}>
                            <i className="lnr lnr-cross"></i>
                        </button>
                    </div>
                )
            }


        </div>
    )
}
function createMarkup(content) {
    return {
        __html: content
    }
}

export default memo(PanelHeading);