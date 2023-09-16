import axios from 'axios';
import React, { Component } from 'react';
// import axios from 'axios';

class sgsDelete extends Component {
    state = {
        sgsList: [
            { "fId": 1, "title": "小農有機農場" },
        ]
    }
    render() {
        return (<div className='container ms-auto me-auto w-75'>
            <a  href='/admin/about' className='btn btn-success btn-lg' style={{position:'fixed', left: '20px', top: '110px'}}>←</a>
            <header style={{ position: 'sticky', top: '0px', background: 'white' }}>
                <h3 className='text-center pt-5'><b>刪除 小農資訊</b></h3>
                <hr />
            </header>
            <div className="container">
                <div>
                    <dl className="row">
                        <dt className="col-sm-3">
                            檢驗合格日期
                        </dt>
                        <dd className="col-sm-9" id="Name">
                            {this.state.sgsList[0].date}
                        </dd>
                        <dt className="col-sm-3">
                            產地
                        </dt>
                        <dd className="col-sm-9" id='Area'>
                        {this.state.sgsList[0].origin}
                        </dd>
                        <dt className="col-sm-3">
                            小農-產物
                        </dt>
                        <dd className="col-sm-9" id='Area'>
                        {this.state.sgsList[0].item}
                        </dd>
                    </dl>
                    <hr />
                    <h3>確定要刪除這筆資料嗎?</h3>

                    <form method="post">
                        <input type="hidden" id="sgsId" name="sgsId" value="1" />
                        <input id="deleteButton" type="button" value="確定" className="btn btn-danger" 
                        onClick={this.ok_click}/> 
                        <a href="/admin/about" className="btn btn-primary ms-3">取消</a>
                    </form>
                </div>
            </div>

        </div>
        );
    }

    async componentDidMount() {
        let url =  `http://localhost:2407/about/sgsone/${this.props.match.params.id}`;
        let result = await axios.get(url);

        let newState = { ...this.state };

        if (result.data !== this.state.sgsList) {
            newState.sgsList = result.data;
    
            console.log(newState.sgsList);
    
            this.setState(newState);
        }

        // console.log(newState.farmerList[0].fName);

        this.setState(newState);
    }

    
    ok_click = async () => {
        let url = `http://localhost:2407/about/sgs/delete/${this.props.match.params.id}`;
        await axios.delete(url);
        alert("OK");
        window.location = "/admin/about";
    }
}

export default sgsDelete;