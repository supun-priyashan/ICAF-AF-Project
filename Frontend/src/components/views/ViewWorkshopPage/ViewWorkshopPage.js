import React,  {useEffect, useState, Fragment} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {Typography, Divider } from "antd";
import {DownloadOutlined} from '@ant-design/icons';

const { Title, Text } = Typography;

function ViewWorkshopPage(props){

    const[workshops,setWorkshops] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/workshop')
            .then(response => {
                console.log(response.data);
                setWorkshops(response.data.workshops);
            })
            .catch(error => {
                console.log(error);
            })
    },[])


    return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Workshops </Title>
            </div>
            {workshops.length > 0 && workshops.map((item,index) => (
                <Fragment key={index}>
                    <Divider/>
                    <Title level={4}>
                        {item.topic}
                    </Title>
                    <p>
                        {item.description}
                    </p>
                    <p>
                        {item.presenters.name}
                    </p>
                    <br/>

                </Fragment>
            ))}

        </div>
    )
}

export default withRouter(ViewWorkshopPage);
