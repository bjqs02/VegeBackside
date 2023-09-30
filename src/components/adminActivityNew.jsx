import axios from 'axios';
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class activityNew extends Component {
    state = {
        activityList: [
            { "aTitle": "", "aType": 1, "aImg": "", "adminImg": "","aContent": "" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a href='/admin/activity' className='btn btn-success btn-lg' style={{ position: 'fixed', left: '20px', top: '110px' }}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>新增 活動</b></h3>
                <hr />
            </header>
            <div className="row">
                <div className="col-md-12">
                    <form method="post">
                        <input type="hidden" id="activityNew"
                            name="activityNew" value="1" />
                        <div className="form-group mt-3 mb-3">
                            <label className="control-label" htmlFor="Veges">活動分類</label>
                            <select className='form-select' name="activityType" id="activityType" onChange={this.type_change} onFocus={this.type_change}>
                                <option value="limitedActivity">限時活動</option>
                                <option value="noticeActivity">佈告欄</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label" htmlFor="Name">活動標題</label>
                            <input className="form-control" type="text"
                                id="Name" name="Name"
                                onChange={this.name_change} />
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="Img">活動圖片 <small className='text-danger'>(上限100KB)</small></label>
                            <input className="form-control" type="file" accept="image/*"
                                id="imgFile" name="Img"
                                onChange={this.file_change} />
                        </div>
                        <div className="form-group mt-3">
                            <label className="control-label" htmlFor="Area">活動內容</label>
                        </div>
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>活動內容填寫在此.......</p>"
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

    type_change = (e) => {
        var newType = e.target.value;
        let newState = {...this.state}
        newState.activityList[0].aType =  newType === 'limitedActivity'? '1' : '2';
        this.setState(newState);
        console.log(this.state.activityList[0]);
    }

    name_change = (e) => {
        let newState = { ...this.state }; // 設定新state
        newState.activityList[0].aTitle = e.target.value; // 新state裡的todoItem屬性值 = 請求到的資料內容
        this.setState(newState); // 將此state設定為新的資料
        console.log(this.state.activityList[0]);
    }

    content_change = (event, editor) => {
        console.log('Blur.', editor.getData());
        let newState = {...this.state};
        newState.activityList[0].aContent = editor.getData();
        this.setState(newState);
        console.log(this.state.activityList[0]);
    }

    file_change = (e) => {
        const file = e.target.files[0];
        const maxSize = 100000; // 100KB
        if (file.size > maxSize) {
            MySwal.fire({
                position: 'center',
                icon: 'error',
                title: '檔案過大請上傳小一點...',
                showConfirmButton: false,
                timer: 3000
              })
        } else {
            console.log(file.type);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let newState = {...this.state};
                newState.activityList[0].aImg = reader.result;
                newState.activityList[0].adminImg = reader.result.split(',')[1];
                this.setState(newState);
            }
        }
    }

    ok_click = async () => {
        let url = "http://localhost:2407/activityboard/new";
        let data = this.state.activityList[0];
        console.log(data);
        await axios.put(url, data);
        // alert("OK");
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: '活動新增成功',
            showConfirmButton: false,
            timer: 3000
          })
        window.location = "/admin/activity";
    }
}

export default activityNew;