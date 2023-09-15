import React, { Component } from 'react';
import axios from 'axios';

class adminAbout extends Component {
    state = {
        farmerList: [
            { "fId": 1, "title": "小農有機農場" },
            { "fId": 2, "title": "小農有機農場" },
            { "fId": 3, "title": "小農有機農場" },
            { "fId": 4, "title": "小農有機農場" },
        ],
        sgsList: [
            { "listId": 1, "title": "會員資料管理", "path": "customer" },
            { "listId": 2, "title": "產品管理", "path": "product" },
            { "listId": 3, "title": "訂單管理", "path": "order" },
            { "listId": 4, "title": "訊息管理", "path": "message" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a  href='/' className='btn btn-success btn-lg' style={{position:'fixed', left: '20px', top: '110px'}}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>關於我們 管理後台</b></h3>
                <hr />
            </header>
            <h4 className='text-center p-2 rounded' style={{backgroundColor: '#ccdcac'}}><b>小農</b></h4>
            <div className='container overflow-auto' style={{height: '300px'}}>
                <table className='table'>
                    <thead className='sticky-top'>
                        <tr className='align-middle'>
                            <th>小農ID</th>
                            <th>小農名稱</th>
                            <th>&nbsp;</th>
                            <th className='text-center'><a className='btn btn-success btn-sm' href={`/admin/farmer/new`}>新增</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.farmerList.map((farmer) =>
                                <tr className='align-middle'>
                                    <td>
                                        {farmer.fId}
                                    </td>
                                    <td>
                                        {farmer.fName}
                                    </td>
                                    <td className='text-center'>
                                        <a className='btn btn-warning btn-sm' href={`/admin/farmer/edit/${farmer.fId}`}>更新</a>
                                    </td>
                                    <td className='text-center'>
                                        <a className='btn btn-danger btn-sm' href={`/admin/farmer/delete/${farmer.fId}`}>刪除</a>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            <hr />
            <h4 className='text-center p-2 rounded' style={{backgroundColor: '#ccdcac'}}><b>SGS</b></h4>
            <div className='container overflow-auto' style={{height: '300px'}}>
                <table className='table'>
                    <thead className='sticky-top'>
                        <tr className='align-middle'>
                            <th>日期</th>
                            <th>項目</th>
                            <th>&nbsp;</th>
                            <th className='text-center'><a className='btn btn-success btn-sm' href={`/admin/sgs/new`}>新增</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.sgsList.map((sgs) =>
                                <tr className='align-middle'>
                                    <td>
                                        {sgs.date}
                                    </td>
                                    <td>
                                        {sgs.item}
                                    </td>
                                    <td className='text-center'>
                                        <a className='btn btn-warning btn-sm' href={`/admin/sgs/edit/${sgs.sgsId}`}>更新</a>
                                    </td>
                                    <td className='text-center'>
                                        <a className='btn btn-danger btn-sm' href={`/admin/sgs/delete/${sgs.sgsId}`}>刪除</a>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
        );
    }

    async componentDidMount() {
        let result1 = await axios.get('http://localhost:2407/about/farmers');
        
        let newState = { ...this.state };
        newState.farmerList = result1.data;
        
        let result2 = await axios.get('http://localhost:2407/about/sgs');
        newState.sgsList = result2.data;

        this.setState(newState);
    }
}

export default adminAbout;