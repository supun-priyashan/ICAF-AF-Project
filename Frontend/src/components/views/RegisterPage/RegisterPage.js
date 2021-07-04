import React, {useState} from "react";
import {Radio } from "antd";
import ResearcherReg from "./Sections/ResearcherReg";
import PresenterReg from "./Sections/PresenterReg"
import AttendeeReg from "./Sections/AttendeeReg"

function RegisterPage(props) {

    const [regType,setRegType] = useState(0);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setRegType(e.target.value);
    };

    return (
        <div className="app">
            <h2>Sign Up</h2>
            <Radio.Group
                /*options={options}*/
                onChange={onChange}
                value={regType}
                optionType="button"
                defaultValue="0"
                /*buttonStyle="solid"*/
            >
                <Radio.Button value="0">Researcher</Radio.Button>
                <Radio.Button value="1">Presenter</Radio.Button>
                <Radio.Button value="2">Attendee</Radio.Button>
            </Radio.Group>

            { regType=="0"  ?
                <>
                    <ResearcherReg/>
                </>

                : null }
            { regType=="1"  ?
                <>
                    <PresenterReg/>
                </>

                : null }
            { regType=="2"  ?
                <>
                    <AttendeeReg/>
                </>

                : null }

        </div>
    );
};

export default RegisterPage
