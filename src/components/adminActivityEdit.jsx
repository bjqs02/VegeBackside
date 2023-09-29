import axios from 'axios';
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class activityEdit extends Component {
    state = {
        activityList: [
            { "aTitle": "", "aType": "", "aImg": "", "aContent": "" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a href='/admin/activity' className='btn btn-success btn-lg' style={{ position: 'fixed', left: '20px', top: '110px' }}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>更新 活動</b></h3>
                <hr />
            </header>
            <div className="row">
                <div className="col-md-12">
                    <form method="post">
                        <input type="hidden" id="activityNew"
                            name="activityNew" value="1" />
                        <div className="form-group mb-3">
                            <label className="control-label" htmlFor="actTime">發布日期</label>
                            <input className="form-control" type="text"
                                id="actTime" name="actTime" disabled
                                value={this.state.activityList[0].acttime} />
                        </div>
                        <div className="form-group mt-3 mb-3">
                            <label className="control-label" htmlFor="Veges">活動分類</label>
                            <select className='form-select'
                                name="activityType" id="activityType"
                                onChange={this.type_change} onFocus={this.type_change}
                                defaultValue={'limitedActivity'}>
                                <option value="limitedActivity">限時活動</option>
                                <option value="noticeActivity">佈告欄</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label" htmlFor="Name">活動標題</label>
                            <input className="form-control" type="text"
                                id="Name" name="Name"
                                onChange={this.name_change} 
                                value={this.state.activityList[0].actTitle}/>
                        </div>
                        <div className="form-group mt-3">
                            <label className="control-label" htmlFor="Area">活動內容</label>
                        </div>
                        <CKEditor
                            editor={ClassicEditor}
                            data={this.state.activityList[0].actText}
                            onChange={this.content_change}
                            onBlur={this.content_change}
                            onFocus={this.content_change}
                        />

                        <div className="form-group mt-3">
                            <input type="button" value="新增"
                                className="btn btn-success"
                                onClick={this.ok_click} />
                            <a href="/admin/activity" className="btn btn-primary ms-3">取消</a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        );
    }

    async componentDidMount() {
        let url = `http://localhost:2407/activityboard/${this.props.match.params.id}`;
        let result = await axios.get(url);

        // let newState = { ...this.state };
        // newState.farmerList = result.data;
        let newState = { ...this.state };

        if (result.data !== this.state.activityList) {
            newState.activityList = result.data;
            newState.activityList[0].actImg = '';
            this.setState(newState);
            document.querySelector('select').value = this.state.activityList[0].actCat === 1 ? 'limitedActivity' : 'noticeActivity';
        }
        // this.setState(newState);
        // console.log(this.state.activityList[0].actCat);

    }


    type_change = (e) => {
        var newType = e.target.value;
        let newState = { ...this.state }
        newState.activityList[0].actCat = newType === 'limitedActivity' ? '1' : '2';
        this.setState(newState);
        console.log(this.state.activityList[0]);
    }

    name_change = (e) => {
        let newState = { ...this.state }; // 設定新state
        newState.activityList[0].actTitle = e.target.value; // 新state裡的todoItem屬性值 = 請求到的資料內容
        this.setState(newState); // 將此state設定為新的資料
        console.log(this.state.activityList[0]);
    }

    content_change = (event, editor) => {
        console.log('Blur.', editor.getData());
        let newState = { ...this.state };
        newState.activityList[0].actText = editor.getData();
        this.setState(newState);
        console.log(this.state.activityList[0]);
    }

    file_change = (e) => {
        console.log(e.target.files);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            let newState = {...this.state};
            newState.activityList[0].actImg = reader.result;
            this.setState(newState);
            console.log(this.state.activityList[0]);
        }
    }

    ok_click = async () => {
        let url = "http://localhost:2407/activityboard/edit";
        await axios.put(url, this.state.activityList[0]);
        alert("OK");
        window.location = "/admin/activity";
    }
}

export default activityEdit;