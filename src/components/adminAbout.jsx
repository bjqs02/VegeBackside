import React, { Component } from 'react';
// import axios from 'axios';  

class adminAbout extends Component {
    state = {
        farmerList: [
            { "fId": 1, "title": "小農有機農場" },
            { "fId": 2, "title": "小農有機農場" },
            { "fId": 3, "title": "小農有機農場" },
            { "fId": 4, "title": "小農有機農場" },
        ],
        adminList: [
            { "listId": 1, "title": "會員資料管理", "path": "customer" },
            { "listId": 2, "title": "產品管理", "path": "product" },
            { "listId": 3, "title": "訂單管理", "path": "order" },
            { "listId": 4, "title": "訊息管理", "path": "message" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <header>
                <h3 className='text-center mt-5'>關於我們 管理後台</h3>
                <hr />
                <div className='text-center'>
                    <h4 href="#" className='btn btn-lg btn-outline-success' style={{ display: 'inline-block' }}>小農</h4>
                    <h4 href="#" className='btn btn-lg btn-outline-success ms-5' style={{ display: 'inline-block' }}>SGS</h4>
                </div>
            </header>
            <table className='table'>
                <thead>
                    <tr className='align-middle'>
                        <th>小農</th>
                        <th className='text-center'>更新</th>
                        <th className='text-center'>刪除</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.farmerList.map((farmer) =>
                            <tr className='align-middle'>
                                <td>
                                    {farmer.title}
                                </td>
                                <td className='text-center'>
                                    <a className='btn btn-warning btn-sm' href={`/admin/farmer/update/${farmer.fId}`}>更新</a>
                                </td>
                                <td className='text-center'>
                                    <a className='btn btn-danger btn-sm' href={`/admin/farmer/delete/${farmer.fId}`}>刪除</a>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
            <hr />


        </div>
        );
    }
}

export default adminAbout;