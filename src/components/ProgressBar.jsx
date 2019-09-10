import React, { memo, Fragment } from 'react';

function ProgressBar({ data, classess, innerclass, message, sronly, ...rest }) {
    let progressStatus;
    if (data.percent <= 30) {
        progressStatus = 'danger';
    } else if (data.percent > 30 && data.percent <= 50) {
        progressStatus = 'warning';
    } else if (data.percent > 50 && data.percent <= 70) {
        progressStatus = 'info';
    } else {
        progressStatus = 'success';
    }

    return (
        <Fragment>
            {data.subject && (<p>{data.subject} <span className="label-percent">{data.percent}%</span></p>)}
            <div className={`progress ${classess}`}>
                <div className={`progress-bar progress-bar-${progressStatus} ${innerclass}`} role="progressbar" aria-valuenow={data.percent} aria-valuemin="0" aria-valuemax="100" style={{ width: data.percent + "%" }}>
                    {
                        sronly ? (
                            <span className="sr-only">
                                {data.percent === 100 ? 'Success' : `${data.percent}% (${progressStatus})`} {message}
                            </span>
                        ) : data.percent+'%'
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default memo(ProgressBar);