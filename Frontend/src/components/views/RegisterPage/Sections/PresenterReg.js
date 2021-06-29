import React, {useState} from "react";
import moment from "moment";
import { Formik } from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';
import { registerUser } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";

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

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [title,setTitle] = useState('');

    return (

        <Formik
            initialValues={{
                title: '',
                name: '',
                userName: '',
                password: '',
                email: '',
                contactNumber: '',
                university:'',
                department:''
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
                contact: Yup.string()
                    .required('Contact number is required'),
                university: Yup.string()
                    .required('University is required'),
                department: Yup.string()
                    .required('Department is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                    let dataToSubmit = {
                        email: values.email,
                        password: values.password,
                        confirmPassword: '',
                        name: values.name,
                        title: title.value,
                        userName: values.userName,
                        contactNumber: values.contactNumber,
                        university: values.university,
                        department: values.department
                    };

                    console.log(dataToSubmit);

                    dispatch(registerUser(dataToSubmit)).then(response => {
                        if (response.payload.success) {
                            props.history.push("/login");
                        } else {
                            alert(response.payload.err.errmsg)
                        }
                    })

                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div className="container">
                        <br/>
                        {/*<h2>Presenter Sign up</h2>*/}
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
                                    placeholder="Enter your Last Name"
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
                                    placeholder="Enter your confirmPassword"
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
                                <Input
                                    id="contactNumber"
                                    placeholder="Enter contact number"
                                    type="number"
                                    value={values.contactNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.contactNumber && touched.contactNumber ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.contactNumber && touched.contactNumber && (
                                    <div className="input-feedback">{errors.contactNumber}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="University">
                                <Input
                                    id="university"
                                    placeholder="Enter university"
                                    type="text"
                                    value={values.university}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.university && touched.university ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.university && touched.university && (
                                    <div className="input-feedback">{errors.university}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Department">
                                <Input
                                    id="department"
                                    placeholder="Enter department"
                                    type="text"
                                    value={values.department}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.department && touched.department ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.department && touched.department && (
                                    <div className="input-feedback">{errors.department}</div>
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

export default RegisterPage
