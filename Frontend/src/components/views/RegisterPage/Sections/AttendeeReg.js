import React, {useState} from "react";
import { Formik } from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';
import { withRouter } from 'react-router';
import axios from "axios";

import {
    Form,
    Input,
    Button,
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const options = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Dr', label: 'Dr' },
    { value: 'Prof', label: 'Prof' }
]

function AttendeeReg(props) {
    const [title,setTitle] = useState('');

    return (

        <Formik
            initialValues={{
                title: '',
                email: '',
                userName: '',
                name: '',
                password: '',
                confirmPassword: '',
                contactno: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required('Name is required'),
                userName: Yup.string()
                    .required('Last Name is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
                contactno: Yup.string()
                    .required('Contact number is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                    let dataToSubmit = {
                        email: values.email,
                        password: values.password,
                        name: values.name,
                        title: title.value,
                        username: values.userName,
                        contactNumber: values.contactno,
                        isAttendee: true,
                        isPaid: false
                    };

                    console.log(dataToSubmit);

                    axios.post('http://localhost:8080/user/', dataToSubmit)
                        .then(response =>
                        {
                            if( response.data.success){
                                console.log(props);
                                props.history.push("/login");
                                alert('success');
                            }else{
                                alert("Error while registering user");
                            }
                        }).
                    catch(err => {
                        console.log(err);
                    });

                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div className="container">
                        <br/>
                        {/*<h2>Researcher Sign up</h2>*/}
                        <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

                            <Form.Item required label="Title">
                                <Select
                                    id="title"
                                    options = {options}
                                    hasValue
                                    setValue={values.title}
                                    onBlur={handleBlur}
                                    className = "basic-multi-select"
                                    onChange={setTitle}
                                    className={
                                        errors.title && touched.title ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.title && touched.title && (
                                    <div className="input-feedback">{errors.title}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Name">
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.name && touched.name ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Username">
                                <Input
                                    id="userName"
                                    placeholder="Enter your Username"
                                    type="text"
                                    value={values.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.userName && touched.userName ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.userName && touched.userName && (
                                    <div className="input-feedback">{errors.userName}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                                <Input
                                    id="email"
                                    placeholder="Enter your Email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                                <Input
                                    id="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Confirm Password" hasFeedback>
                                <Input
                                    id="confirmPassword"
                                    placeholder="Re-Enter your Password"
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <div className="input-feedback">{errors.confirmPassword}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Contact Number">
                                {<Input
                                    id="contactno"
                                    placeholder="Enter contact number"
                                    type="number"
                                    value={values.contactno}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.contactno && touched.contactno ? 'text-input error' : 'text-input'
                                    }
                                />}
                                {errors.contactno && touched.contactno && (
                                    <div className="input-feedback">{errors.contactno}</div>
                                )}
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default withRouter(AttendeeReg);
