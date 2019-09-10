import React, { Component } from 'react';
import Panel from './../components/Panel';
import PanelHeading from './../components/PanelHeading';
import PanelBody from './../components/PanelBody';
import { demoDataForTable } from '../variables/general';

const TableBodyRow = ({row}) => {
    return (
        <tr>
            <td>{row.id}</td>
            <td>{row.firstname}</td>
            <td>{row.lastname}</td>
            <td>{row.username}</td>
        </tr>
    )
}

export default class Tables extends Component {
    render() {
        const headRow = (
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
        );
        return (
            <div class="main-content">
                <div class="container-fluid">
                    <h3 class="page-title">Tables</h3>
                    <div class="row">
                        <div class="col-md-6">
                            {/* <!-- BASIC TABLE --> */}
                            <Panel>
                                <PanelHeading heading="Basic Table" action="false" />
                                <PanelBody>
                                    <table className="table">
                                        <thead>
                                            {headRow}
                                        </thead>
                                        <tbody>
                                            {
                                                demoDataForTable.map(data => <TableBodyRow row={data} />)
                                            }
                                        </tbody>
                                    </table>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END BASIC TABLE --> */}
                        </div>
                        <div class="col-md-6">
                            {/* <!-- TABLE NO PADDING --> */}
                            <Panel>
                                <PanelHeading heading="Table Inside No Padding" action="false" />
                                <PanelBody classes="no-padding">
                                    <table className="table">
                                        <thead>
                                            {headRow}
                                        </thead>
                                        <tbody>
                                            {
                                                demoDataForTable.map(data => <TableBodyRow row={data} />)
                                            }
                                        </tbody>
                                    </table>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END TABLE NO PADDING --> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            {/* <!-- TABLE STRIPED --> */}
                            <Panel>
                                <PanelHeading heading="Striped Row" action="false" />
                                <PanelBody>
                                    <table className="table table-striped">
                                        <thead>
                                            {headRow}
                                        </thead>
                                        <tbody>
                                            {
                                                demoDataForTable.map(data => <TableBodyRow row={data} />)
                                            }
                                        </tbody>
                                    </table>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END TABLE STRIPED --> */}
                        </div>
                        <div class="col-md-6">
                            {/* <!-- TABLE HOVER --> */}
                            <Panel>
                                <PanelHeading heading="Hover Row" action="false" />
                                <PanelBody>
                                    <table className="table table-hover">
                                        <thead>
                                            {headRow}
                                        </thead>
                                        <tbody>
                                            {
                                                demoDataForTable.map(data => <TableBodyRow row={data} />)
                                            }
                                        </tbody>
                                    </table>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END TABLE HOVER --> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            {/* <!-- BORDERED TABLE --> */}
                            <Panel>
                                <PanelHeading heading="Bordered Table" action="false" />
                                <PanelBody>
                                    <table className="table table-bordered">
                                        <thead>
                                            {headRow}
                                        </thead>
                                        <tbody>
                                            {
                                                demoDataForTable.map(data => <TableBodyRow row={data} />)
                                            }
                                        </tbody>
                                    </table>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END BORDERED TABLE --> */}
                        </div>
                        <div class="col-md-6">
                            {/* <!-- CONDENSED TABLE --> */}
                            <Panel>
                                <PanelHeading heading="Condensed Table" action="false" />
                                <PanelBody>
                                    <table className="table table-condensed">
                                        <thead>
                                            {headRow}
                                        </thead>
                                        <tbody>
                                            {
                                                demoDataForTable.map(data => <TableBodyRow row={data} />)
                                            }
                                        </tbody>
                                    </table>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END CONDENSED TABLE --> */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}