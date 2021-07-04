import React, { Component } from 'react'
import axios from 'axios'
import download from "downloadjs";

export class ApproveResearches extends Component {
    constructor(props){
        super(props)
        this.state={
            researches:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/paper').then((response) =>{
            let wr=[];

            response.data.papers.map((item) => {
                if(!item.isApproved) {
                    const it = {
                        _id: item._id,
                        topic: item.topic,
                        author: item.author.name,
                        description: item.description,
                        link: item.link,
                    }
                    wr.push(it);
                }
            })

            console.log(wr)

            this.setState({
                researches: wr
            })
    }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        axios.get('http://localhost:8080/paper').then((response) =>{
            let wr=[];
            response.data.papers.map((item) => {
                if(!item.isApproved) {
                    const it = {
                        _id: item._id,
                        topic: item.topic,
                        author: item.author.name,
                        description: item.description,
                        link: item.link,
                    }
                    wr.push(it);
                }
            })
            this.setState({
                researches: wr
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

    approveResearches(id,approval){
        const submit = {
            id: id,
            approve: approval
        }

        console.log(submit);

        axios.put('http://localhost:8080/paper/approve',submit).then(response => {
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
                    <th scope="col">Paper Name</th>
                    <th scope="col">Researcher Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Research paper</th>
                    <th scope="col">Approval</th>
                </tr>
                </thead>
                <tbody>
                {this.state.researches.length>0 && this.state.researches.map((item,index) => (
                    <tr key={index}>
                        <td>{item.topic}</td>
                        <td>{item.author}</td>
                        <td>{item.description}</td>
                        <td><a onClick={() => this.downloadFile(item.link)}>{item.link}</a></td>
                        <td>
                            <button className="btn btn-primary" onClick={() => this.approveResearches(item._id,true)}>Approve</button>
                            <button class="btn btn-danger" onClick={() => this.approveResearches(item._id,false)}>Decline</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        );
    }
}

export default ApproveResearches;
