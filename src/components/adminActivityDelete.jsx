import axios from 'axios';
import React, { Component } from 'react';

class activityDelete extends Component {
    state = {
        activityList: [
            { "aTitle": "", "aType": "", "aImg": "", "aContent": "" },
        ]
    }
    render() {
        
        return (<div className='container ms-auto me-auto w-75'>
            <a href='/admin/activity' className='btn btn-success btn-lg' style={{ position: 'fixed', left: '20px', top: '110px' }}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>刪除 活動</b></h3>
                <hr />
            </header>
            <div>
                <dl className="row">
                    <dt className="col-sm-3">
                        發布日期
                    </dt>
                    <dd className="col-sm-9" id="articleTime">
                        {this.state.activityList[0].acttime}
                    </dd>
                    <dt className="col-sm-3">
                        活動分類
                    </dt>
                    <dd className="col-sm-9" id='category'>
                        {this.state.activityList[0].actCat === 1? '限時活動':'佈告欄'}
                    </dd>
                    <dt className="col-sm-3">
                        活動名稱
                    </dt>
                    <dd className="col-sm-9" id='aricleTitle'>
                        {this.state.activityList[0].actTitle}
                    </dd>
                    <dt className="col-sm-3">
                        活動內容
                    </dt>
                    <dd className="col-sm-9" id='content'>
                        {this.state.activityList[0].actText}
                    </dd>
                </dl>
                <hr />
                <h3>確定要刪除這筆資料嗎?</h3>

                <form method="post">
                    <input type="hidden" id="sgsId" name="sgsId" value="1" />
                    <input id="deleteButton" type="button" value="確定" className="btn btn-danger"
                        onClick={this.ok_click} />
                    <a href="/admin/activity" className="btn btn-primary ms-3">取消</a>
                </form>
            </div>

        </div>
        );

    }

    async componentDidMount() {
        let url = `http://localhost:2407/activityboard/${this.props.match.params.id}`;
        let result = await axios.get(url);

        let newState = { ...this.state };

        if (result.data !== this.state.activityList) {
            newState.activityList = result.data;
            this.setState(newState);
            document.getElementById('content').innerHTML = this.state.activityList[0].actText;
        }

    }


    ok_click = async () => {
        let url = `http://localhost:2407/activityboard/delete/${this.props.match.params.id}`;
        await axios.delete(url, this.state.activityList[0]);
        alert("OK");
        window.location = "/admin/activity";
    }
}

export default activityDelete;