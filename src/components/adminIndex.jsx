import React, { Component } from 'react';
// import axios from 'axios';  

class adminIndex extends Component {
    state = {}
    render() {
        return (<div className='container-sm ms-auto me-auto mt-5'>
            <h3>VEGE 後台</h3>
            <hr />
            <table className='table'>
                <tr>
                    <td>
                        關於我們管理
                    </td>
                    <td>
                        <button className='btn btn-sm btn-warning'>進入</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        產品管理
                    </td>
                    <td>
                        <button className='btn btn-sm btn-warning'>進入</button>
                    </td>
                </tr>
                <tr>
                    <td>
                    訂單管理
                    </td>
                    <td>
                        <button className='btn btn-sm btn-warning'>進入</button>
                    </td>
                </tr>
                <tr>
                    <td>
                    會員資料管理
                    </td>
                    <td>
                        <button className='btn btn-sm btn-warning'>進入</button>
                    </td>
                </tr>
            </table>

        </div>
        );
    }
}

export default adminIndex;