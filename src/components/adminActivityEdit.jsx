import axios from 'axios';
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class activityEdit extends Component {
    state = {
        activityList: [
            { 
            "actCat": "1", 
            "actImg": "", 
            "imgText": "" ,
            "actTitle": "", 
            "actid": "", 
            "acttime": "", 
            "adminImg": "" ,
            "imgType": "" 
        },
        ],
        imgPreview: [
            {"file": ""}
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
                        <div className="form-group mb-3">
                            <label className="control-label" htmlFor="Img">活動圖片 <small className='text-danger'>(上限100KB)</small></label>
                            <input className="form-control" type="file" accept="image/*"
                                id="imgFile" name="Img"
                                onChange={this.file_change} />
                            <img src={`data:image/png;base64,${this.state.imgPreview[0].file}`} 
                            alt="base64 img" style={{height: '200px'}} className='mt-3 mb-3' />
                        </div>
                        <div className="form-group mt-3">
                            <label >活動內容</label>
                        </div>
                        <CKEditor
                            editor={ClassicEditor}
                            data={this.state.activityList[0].actText}
                            onChange={this.content_change}
                            onBlur={this.content_change}
                            onFocus={this.content_change}
                        />

                        <div className="form-group mt-3">
                            <input type="button" value="更新"
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
            
            //圖片
            newState.imgPreview[0].file = result.data[0].adminImg;
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
                newState.activityList[0].actImg = reader.result;
                newState.activityList[0].adminImg = reader.result.split(',')[1];
                newState.imgPreview[0].file = reader.result.split(',')[1];
                newState.activityList[0].imgType = file.type;
                this.setState(newState);
            }
        }
    }

    ok_click = async () => {
        let url = "http://localhost:2407/activityboard/edit";
        await axios.put(url, this.state.activityList[0]);
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: '活動更新成功',
            showConfirmButton: false,
            timer: 3000
          })
        window.location = "/admin/activity";
    }
}

export default activityEdit;