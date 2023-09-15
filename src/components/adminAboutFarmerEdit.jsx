import axios from 'axios';
import React, { Component } from 'react';
// import axios from 'axios';

class farmerEdit extends Component {
    state = {
        farmerList: [
            { "fId": 1, "title": "小農有機農場" },
            { "fId": 2, "title": "小農有機農場" },
            { "fId": 3, "title": "小農有機農場" },
            { "fId": 4, "title": "小農有機農場" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a  href='/admin/about' className='btn btn-success btn-lg' style={{position:'fixed', left: '20px', top: '110px'}}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>更新 小農資訊</b></h3>
                <hr />
            </header>
            <div className="row">
                    <div className="col-md-12">
                        <form method="post">
                            <input type="hidden" id="famerEditId"
                                name="famerEditId" value="1" />
                            <div className="form-group">
                                <label className="control-label" htmlFor="Name">小農名稱</label>
                                <input className="form-control" type="text"
                                    id="Name" name="Name" value={this.state.farmerList[0].fName} 
                                    onChange={ this.name_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <label className="control-label" htmlFor="Area">所在地區</label>
                                <input className="form-control" type="text"
                                    id="Area" name="Area" value={this.state.farmerList[0].fArea} 
                                    onChange={ this.area_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <label className="control-label" htmlFor="Veges">所在地區</label>
                                <textarea className="form-control" 
                                    id="Veges" name="Veges" value={this.state.farmerList[0].vegeType} 
                                    onChange={ this.vege_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <input type="button" value="更新" 
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

    async componentDidMount() {
        let url =  `http://localhost:2407/about/farmer/${this.props.match.params.id}`;
        let result = await axios.get(url);

        // let newState = { ...this.state };
        // newState.farmerList = result.data;
        let newState = { ...this.state };

        if (result.data !== this.state.farmerList) {
            newState.farmerList = result.data;
    
            console.log(newState.farmerList);
    
            this.setState(newState);
        }

        // console.log(newState.farmerList[0].fName);

        this.setState(newState);
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
        let url = "http://localhost:2407/about/farmer/edit";
        await axios.put(url, this.state.farmerList[0]);
        alert("OK");
        window.location = "/admin/about";
    }
}

export default farmerEdit;