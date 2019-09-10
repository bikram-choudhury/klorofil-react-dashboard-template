import React, { Component } from 'react';

export default class Trypography extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="container-fluid">
                    <h3 className="page-title">Typography</h3>
                    <div className="panel panel-headline">
                        <div className="panel-body">
                            <h1>Dashboard Heading 1</h1>
                            <h2>Dashboard Heading 2</h2>
                            <h3>Dashboard Heading 3</h3>
                            <h4>Dashboard Heading 4</h4>
                            <h5>Dashboard Heading 5</h5>
                            <h6>Dashboard Heading 6</h6>
                            <hr />
                            <p>Appropriately benchmark web-enabled bandwidth and functionalized leadership skills. Conveniently syndicate global opportunities without interactive methods of empowerment. Collaboratively conceptualize user-centric e-tailers for visionary methodologies. Dramatically myocardinate. Phosfluorescently disintermediate unique resources whereas reliable mindshare. Competently optimize client-focused infrastructures vis-a-vis e-business human capital. Uniquely formulate sustainable benefits whereas functional results. Energistically myocardinate bleeding-edge e-business.</p>
                            <hr />
                            <p className="text-muted"><code>.text-muted</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p className="text-primary"><code>.text-primary</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p className="text-success"><code>.text-success</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p className="text-info"><code>.text-info</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p className="text-warning"><code>.text-warning</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p className="text-danger"><code>.text-danger</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <hr />
                            <p>Make a paragraph stand out by adding <code>.lead</code></p>
                            <p className="lead">Objectively re-engineer maintainable total linkage after proactive intellectual capital. Dynamically evolve best-of-breed e-services for user-centric customer.</p>
                            <hr />
                            <div className="well">
                                <p className="text-left"><code>.text-left</code> Left aligned text.</p>
                                <p className="text-center"><code>.text-center</code> Center aligned text.</p>
                                <p className="text-right"><code>.text-right</code> Right aligned text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}