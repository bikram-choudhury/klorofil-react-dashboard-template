import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

function ListContainer({ data, ...rest }) {
    return (
        <React.Fragment>
            {data.checkbox && (
                <label className="control-inline fancy-checkbox">
                    <input type="checkbox" /><span></span>
                </label>
            )}

            <p>
                <span className="title">{data.title}</span>
                <span className="short-description">{data.description}</span>
                <span className="date">{data.date}</span>
            </p>
            <div className="controls">
                <NavLink to="#"><i className="icon-software icon-software-pencil"></i></NavLink>
                <NavLink to="#"><i className="icon-arrows icon-arrows-circle-remove"></i></NavLink>
            </div>
        </React.Fragment>
    );
}

export default memo(ListContainer);