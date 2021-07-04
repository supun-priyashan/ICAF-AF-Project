import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Axios from 'axios';
const { Title } = Typography;
const { TextArea } = Input;
function ConferenceEditPage(props) {
    const [TitleValue, setTitleValue] = useState("");
    const [VenueValue, setVenueValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [StartDateValue, setStartDateValue] = useState("");
    const [EndDateValue, setEndDateValue] = useState("");
    const [MailValue, setMailValue] = useState("");

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }
    const onVenueChange = (event) => {
        setVenueValue(event.currentTarget.value)
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }
    const onStartDateChange = (event) => {
        setStartDateValue(event.currentTarget.value)
    }
    const onEndDateChange = (event) => {
        setEndDateValue(event.currentTarget.value)
    }
    const onMailChange = (event) => {
        setMailValue(event.currentTarget.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!TitleValue || !DescriptionValue || !VenueValue || !StartDateValue || !EndDateValue || !MailValue) {
            return alert('fill all the fields first!')
        }
        const variables = {
            conferenceName: TitleValue,
            conferenceDescription: DescriptionValue,
            venue: VenueValue,
            startDate: StartDateValue,
            endDate: EndDateValue,
            mail: MailValue
        }
        console.log(variables);
        Axios.post('http://localhost:8080/conference', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Conference Successfully Edited')
                    props.history.push('/')
                } else {
                    alert('Failed to edit Conference')
                }
            })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>  Edit conference details </Title>
            </div>
            <Form onSubmit={onSubmit} >

                <br />
                <label>Conference Name</label>
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
                <label>Venue</label>
                <Input
                    onChange={onVenueChange}
                    value={VenueValue}
                />
                <br />
                <br />
                <label>Start Date</label>
                <Input
                    type="date"
                    onChange={onStartDateChange}
                    value={StartDateValue}
                />
                <br />
                <br />
                <label>End Date</label>
                <Input
                    type="date"
                    onChange={onEndDateChange}
                    value={EndDateValue}
                />
                <br />
                <br />
                <label>Mail</label>
                <Input
                    onChange={onMailChange}
                    value={MailValue}
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
export default ConferenceEditPage;
