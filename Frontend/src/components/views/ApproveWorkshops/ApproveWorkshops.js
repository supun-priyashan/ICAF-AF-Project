import React, { Component } from 'react'
import axios from 'axios'
import download from "downloadjs";

export class ApproveWorkshops extends Component {
    constructor(props){
        super(props)
        this.state={
            workshops:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/workshop').then((response) =>{
            console.log(response.data);
            let wr=[];

            response.data.workshops.map((item) => {
                if(!item.isApproved)
                    wr.push(item);
            })

            this.setState({
                workshops: wr
            })
        }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        axios.get('http://localhost:8080/workshop').then((response) =>{
            let wr=[];
            response.data.workshops.map((item) => {
                if(!item.isApproved)
                    wr.push(item);
            })

            this.setState({
                workshops: wr
            })
        }).catch(err => console.log(err))
    }

    async downloadFile(link){
        console.log(link);
        await axios.get(`http://localhost:8080/uploads/`+link)
            .then(response => {
                return download(response.data);
            }).catch(error => {
            console.log(error);
        })
    }

    approveWorkshop(id,approval){
        const submit = {
            id: id,
            approve: approval
        }

        axios.put('http://localhost:8080/workshop',submit).then(response => {
            if(response.data.success){
                alert("Success");
            }else{
                console.log(response.data.error);
            }
        })
    }

    render() {

        return (

            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Workshop Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Conductor</th>
                    <th scope="col">Proposal</th>
                    <th scope="col">Approval</th>
                </tr>
                </thead>
                <tbody>
                {this.state.workshops.length>0 && this.state.workshops.map((item,index) => (
                    <tr key={index}>
                        <td>{item.topic}</td>
                        <td>{item.description}</td>
                        <td>{item.presenters}</td>
                        <td><a onClick={() => this.downloadFile(item.proposal)}>{item.proposal}</a></td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>this.approveWorkshop(item._id,true)}>Approve</button>
                            <button class="btn btn-danger" onClick={()=>this.approveWorkshop(item._id,false)}>Decline</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

        );
    }
}

export default ApproveWorkshops;
