import axios from 'axios';
import React, { Component } from 'react';

class sgsNew extends Component {
    state = {
        sgsList: [
            { "date": "", "origin": "", "item": ""  },
        ],
        farmerList:[
            {"fId": "", "fName": "", "vegeType": ""},
        ],
        vgList:[
            {"vgId": "1", "vgName": ""},
            {"vgId": "2", "vgName": ""},
            {"vgId": "3", "vgName": ""},
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a  href='/admin/about' className='btn btn-success btn-lg' style={{position:'fixed', left: '20px', top: '110px'}}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>新增 SGS認證</b></h3>
                <hr />
            </header>
            <div className="row">
                    <div className="col-md-12">
                        <form method="post">
                            <input type="hidden" id="farmerNew"
                                name="farmerNew" value="1" />
                            <div className="form-group">
                                <label className="control-label" htmlFor="sDate">檢驗合格日期</label>
                                <input className="form-control" type="date"
                                    id="sDate" name="sDate"  
                                    onChange={ this.date_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <label className="control-label" htmlFor="Area">產地</label>
                                <input className="form-control" type="text"
                                    id="Area" name="Area" disabled value={ this.state.sgsList[0].origin }
                                    onChange={ this.area_change } /> 
                            </div>
                            <div className="form-group mt-3">
                                <label className="control-label" htmlFor="Farmers">產物</label>
                                <select name="Farmers" id="Farmers" className='form-select w-50' onChange={ this.farmer_change }>
                                    {
                                        this.state.farmerList.map((farmer) =>
                                        <option value={`${farmer.fId}-${farmer.fName}`} >{farmer.fName}</option>        
                                    )
                                    }
                                </select>
                                <select name="Veges" id="Veges" className='form-select w-50' onChange={ this.vege_change }>
                                    {
                                        this.state.vgList.map((vg) =>
                                        <option value={vg.vgName} >{vg.vgName}</option>        
                                    )
                                    }
                                </select>
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
    async componentDidMount() {
        var url =  `http://localhost:2407/about/farmers`;
        // console.log(url);
        var result = await axios.get(url);
        let newState = {...this.state};
        newState.farmerList = result.data;
        this.setState(newState);
    }

    date_change = (e) => {
        // console.log(e.target.value);
        let newState = { ...this.state }; // 設定新state
        newState.sgsList[0].date = e.target.value; // 新state裡的todoItem屬性值 = 請求到的資料內容
        this.setState(newState); // 將此state設定為新的資料
    }

    farmer_change = async (e) => {
        var vgfId = e.target.value.split('-')[0];
        var vgfarmer = e.target.value.split('-')[1].substring(0,2);

        let newState = { ...this.state }; 

        var url =  `http://localhost:2407/about/farmer/${vgfId}`;
        var result2 = await axios.get(url);
        
        newState.sgsList[0].farmer = vgfarmer + '-'; 
        newState.sgsList[0].origin = result2.data[0].fArea;

        var vgresults = result2.data[0].vegeType.split('、');
        for(var i = 0; i < vgresults.length; i++){
            newState.vgList[i] = {'vgName': `${vgresults[i]}`};
            this.setState(newState);
        }
    }

    vege_change = (e) => {
        // console.log(e.target.value);
        let newState = { ...this.state }; // 設定新state
        newState.sgsList[0].item = e.target.value; // 新state裡的todoItem屬性值 = 請求到的資料內容
        this.setState(newState); // 將此state設定為新的資料
        // console.log(newState);
    }

    ok_click = async () => {
        let url = "http://localhost:2407/about/sgs/new";
        await axios.put(url, this.state.sgsList[0]);
        alert("OK");
        window.location = "/admin/about";
    }
}

export default sgsNew;