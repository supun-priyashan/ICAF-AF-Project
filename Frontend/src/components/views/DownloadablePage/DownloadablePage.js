import React, { Component } from 'react'
import axios from 'axios'
import download from "downloadjs";
import {Typography, Divider } from "antd";

const { Title } = Typography;

class DownloadablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Downloads: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/download').then((response) =>{
        console.log(response.data);
        this.setState({
            Downloads: response.data.downloads
        })
    }).catch(err => console.log(err))
    }

    async downloadFile(link) {
        console.log(link);
        await axios.get(`http://localhost:8080/uploads/`+link)
            .then(response => {
                return download(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

render(){
    return(
        <div className="card text-center">
            <Title level={2}>
                Downloads
            </Title>
            <br/>
            <br/>
            <div className="card-body">
                {this.state.Downloads.length>0 && this.state.Downloads.map((item,index) => (
                    <div key={index}>
                        <Divider/>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <button className="btn btn-primary" onClick={() => this.downloadFile(item.url)}>Download</button>
                        <br/>
                        <br/>
                    </div>
                ))}
            </div>

        </div>

    );
}

}

export default DownloadablePage;
