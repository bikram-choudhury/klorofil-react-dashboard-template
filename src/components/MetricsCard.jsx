import React, { memo } from 'react';

function MetricsCard({data, ...rest}) {
    return (
        <div className="metric">
            <span className="icon"><i className={`fa fa-${data.icon}`}></i></span>
            <p>
                <span className="number">{data.metrics}</span>
                <span className="title">{data.title}</span>
            </p>
        </div>
    );
}

export default memo(MetricsCard);