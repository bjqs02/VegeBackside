import axios from 'axios';
import React, { Component } from 'react';
// import axios from 'axios';

class farmerNew extends Component {
    state = {
        farmerList: [
            { "fName": "", "fArea": "", "vegeType": ""  },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a  href='/admin/about' className='btn btn-success btn-lg' style={{position:'fixed', left: '20px', top: '110px'}}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>新增 小農資訊</b></h3>
                <hr />
            </header>
            <div className="row">
                    <div className="col-md-12">
                        <form method="post">
                            <input type="hidden" id="farmerNew"
                                name="farmerNew" value="1" />
                            <div className="form-group">
                                <label className="control-label" htmlFor="Name">小農名稱</label>
                                <input className="form-control" type="text"
                                    id="Name" name="Name"  
                                    onChange={ this.name_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <label className="control-label" htmlFor="Area">所在地區</label>
                                <input className="form-control" type="text"
                                    id="Area" name="Area" 
                                    onChange={ this.area_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <label className="control-label" htmlFor="Veges">所在地區</label>
                                <textarea className="form-control" 
                                    id="Veges" name="Veges" 
                                    onChange={ this.vege_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <input type="button" value="新增" 
                                className="btn btn-success" 
                                onClick={this.ok_click} /> 
                                <a href="/admin/about" className="btn btn-primary ms-3">取消</a>
                            </div>
                        </form>
                    </div>
                </div>

        </div>
        );
    }


    name_change = (e) => {
        // console.log(e.target.value);
        let newState = { ...this.state }; // 設定新state
        newState.farmerList[0].fName = e.target.value; // 新state裡的todoItem屬性值 = 請求到的資料內容
        this.setState(newState); // 將此state設定為新的資料
    }

    area_change = (e) => {
        // console.log(e.target.value);
        let newState = { ...this.state }; // 設定新state
        newState.farmerList[0].fArea = e.target.value; // 新state裡的todoItem屬性值 = 請求到的資料內容
        this.setState(newState); // 將此state設定為新的資料
    }

    vege_change = (e) => {
        // console.log(e.target.value);
        let newState = { ...this.state }; // 設定新state
        newState.farmerList[0].vegeType = e.target.value; // 新state裡的todoItem屬性值 = 請求到的資料內容
        this.setState(newState); // 將此state設定為新的資料
    }

    ok_click = async () => {
        let url = "http://localhost:2407/about/farmer/new";
        await axios.put(url, this.state.farmerList[0]);
        alert("OK");
        window.location = "/admin/about";
    }
}

export default farmerNew;