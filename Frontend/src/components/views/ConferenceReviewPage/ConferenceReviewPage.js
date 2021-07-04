import React, { Component } from 'react'
import axios from 'axios'

export class ConferenceReviewPage extends Component {
    constructor(props){
        super(props)
        this.state={
            conference:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/conference').then((response) =>{
            this.setState({
                conference: response.data.conference
            })
        }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        axios.get('http://localhost:8080/conference').then((response) =>{
            this.setState({
                conference: response.data.conference
            })
        }).catch(err => console.log(err))
    }

    approveConferences(id,approval){
        const submit = {
            id: id,
            approve: approval
        }

        console.log(submit);

        axios.put('http://localhost:8080/conference',submit).then(response => {
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
                    <th scope="col">Conference Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">venue</th>
                    <th scope="col">startDate</th>
                    <th scope="col">endDate</th>
                </tr>
                </thead>
                <tbody>
                {this.state.conference.length>0 && this.state.conference.map((item,index) => (
                    <tr key={index}>
                        <td>{item.conferenceName}</td>
                        <td>{item.conferenceDescription}</td>
                        <td>{item.venue}</td>
                        <td>{item.startDate}</td>
                        <td>{item.endDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => this.approveConferences(item._id,true)}>Approve</button>
                            <button class="btn btn-danger" onClick={() => this.approveConferences(item._id,false)}>Decline</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        );
    }
}

export default ConferenceReviewPage;
