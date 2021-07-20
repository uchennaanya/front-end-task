import React from 'react'


const Table = () => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Open_Issue</th>
                        <th>Home Page URL/ Stargazers_Count</th>
                        <th></th>
                        <th>Fork</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            <span style={{
                                border: '1px solid green',
                                borderRadius: '100%'
                            }} className="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span>
                        </td>
                        <td>
                            Martins Anya
                        </td>
                        <td>
                            Abia <br />
                            <span className="span">48 Igwebike St.</span>
                        </td>
                        <td>
                            No issue
                        </td>
                        <td>
                            <li>
                                20 unique entries <br />
                                <span className="span" >Homogenous</span>
                            </li>
                        </td>
                        <td>

                        </td>
                        <td colSpan="2">
                            <span className="iconify" data-icon="codicon:arrow-small-right" data-inline="false"></span>
                            Low risk
                            <span className="iconify" data-icon="ph:dots-three-outline-vertical-fill" data-inline="false"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table