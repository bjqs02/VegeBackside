import React, { Component } from 'react';
// import axios from 'axios';  

class adminIndex extends Component {
    state = {
        webList: [
            { "webId": 1, "title": "關於我們", "path":"about" },
            { "webId": 2, "title": "最新活動", "path":"activity" },
            { "webId": 3, "title": "蔬果專欄", "path":"blog" },
            { "webId": 4, "title": "常見QA", "path":"qna" },
        ],
        adminList: [
            { "listId": 1, "title": "會員資料管理", "path":"customer" },
            { "listId": 2, "title": "產品管理", "path":"product" },
            { "listId": 3, "title": "訂單管理", "path":"order" },
            { "listId": 4, "title": "訊息管理", "path":"message" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-50'>
            <h3 className='text-center p-3 rounded mt-5 sticky-top' style={{backgroundColor: '#ccdcac'}}><b>VEGE後台</b></h3>
            <hr />
            <table className='table table-borderless table-hover'>
                <thead>
                    <tr className='align-middle'>
                        <th>
                            網站頁面管理
                        </th>
                        <th className='text-center'>
                            進入頁面
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.webList.map((webItem) =>
                            <tr key={webItem.webId} className='align-middle'>
                                <td>
                                    {webItem.title}
                                </td>
                                <td className='text-center'>
                                    <a className='btn btn-success btn-sm' href={`/admin/${webItem.path}`}>進入</a>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
            <hr />
            <table className='table table-borderless table-hover'>
                <thead>
                    <tr className='align-middle'>
                        <th>
                            管理項目
                        </th>
                        <th className='text-center'>
                            進入頁面
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.adminList.map((adminItem) =>
                            <tr key={adminItem.listId} className='align-middle'>
                                <td>
                                    {adminItem.title}
                                </td>
                                <td className='text-center'>
                                    <a className='btn btn-success btn-sm' href={`/admin/${adminItem.path}`}>進入</a>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
        );
    }
}

export default adminIndex;