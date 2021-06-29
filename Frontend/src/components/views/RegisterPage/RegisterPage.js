import React, {useState} from "react";
import {Radio } from "antd";
import { useDispatch } from "react-redux";
import ResearcherReg from "./Sections/ResearcherReg";

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
                    222222
                </>

                : null }
            { regType=="2"  ?
                <>
                    222222
                </>

                : null }

        </div>
    );
};

export default RegisterPage
