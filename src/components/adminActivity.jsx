import React, { Component } from 'react';
import axios from 'axios';


class adminActivity extends Component {
    state = {
        activityList: [
            { "aId": 1, "title": "小農有機農場" },
            { "aId": 2, "title": "小農有機農場" },
            { "aId": 3, "title": "小農有機農場" },
            { "aId": 4, "title": "小農有機農場" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a  href='/' className='btn btn-success btn-lg' style={{position:'fixed', left: '20px', top: '110px'}}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white'}}>
                <h3 className='text-center pt-5'><b>最新活動 管理後台</b></h3>
                <hr />
            </header>
            <h4 className='text-center p-2 rounded' style={{backgroundColor: '#ccdcac'}}><b>活動列表</b></h4>
            <div className='container overflow-auto' style={{height: '500px'}}>
                <table className='table'>
                    <thead>
                        <tr className='align-middle'>
                            <th style={{width: '110px'}}>發布日期</th>
                            <th style={{width: '110px'}}>活動分類</th>
                            <th>活動標題</th>
                            <th style={{width: '70px'}}>&nbsp;</th>
                            <th style={{width: '70px'}} className='text-center'><a className='btn btn-success btn-sm' href={`/admin/activity/new`}>新增</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.activityList.map((act, index) =>
                                <tr key={index} className='align-middle'>
                                    <td>
                                        {act.acttime}
                                    </td>
                                    <td>
                                        {act.actCat === 1? "限時活動" : "佈告欄"}
                                    </td>
                                    <td>
                                        {act.actTitle}
                                    </td>
                                    <td className='text-center'>
                                        <a className='btn btn-warning btn-sm' href={`/admin/activity/edit/${act.actid}`}>更新</a>
                                    </td>
                                    <td className='text-center'>
                                        <a className='btn btn-danger btn-sm' href={`/admin/activity/delete/${act.actid}`}>刪除</a>
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
        let result = await axios.get('http://localhost:2407/activityboard/all');
        
        let newState = { ...this.state };
        newState.activityList = result.data;
        
        
        this.setState(newState);
        console.log(this.state);
    }
}

export default adminActivity;