import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
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

        if (!TitleValue || !DescriptionValue || isFilePicked) {
            return alert('fill all the fields first!')
        }

        const variables = {
            topic: TitleValue,
            description: DescriptionValue,
            link: selectedFile,
            author: props.user.userData._id,
            isApproved: false,
            isPaid: false
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Add Research Paper </Title>
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