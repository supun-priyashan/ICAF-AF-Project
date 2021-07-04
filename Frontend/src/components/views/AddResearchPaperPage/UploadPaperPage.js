import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

function UploadPaperPage(props) {

    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const fileChangeHandler = (event) => {

        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);

    };

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!TitleValue || !DescriptionValue || !isFilePicked) {
            return alert('fill all the fields first!')
        }

        const variables = {
            topic: TitleValue,
            description: DescriptionValue,
            link: selectedFile.name,
            author: localStorage.getItem('userid'),
            isApproved: false,
            isPaid: false
        }

        const formData = new FormData();
        formData.append('file',selectedFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        Axios.post('http://localhost:8080/paper', variables)
            .then(response => {
                Axios.post("http://localhost:8080/paper/uploadFile",formData,config)
                    .then(() => {
                        if (response.data.success) {
                            alert('Paper Successfully Uploaded')
                            props.history.push('/')
                        } else {
                            alert('Failed to upload Paper')
                        }

                    }).catch((error) => {
                    alert(error.message);
                });

            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Call for papers </Title>
            </div>

            <Form onSubmit={onSubmit} >

                <label>Add Research Paper</label>
                <Input
                    type={"file"}
                    name="file"
                    onChange={fileChangeHandler}
                />
                <br />
                <br />
                <label>Paper Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadPaperPage;
