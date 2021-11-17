import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, Input, Button, Checkbox, Row } from 'antd';
import { userLogin } from '../../../../redux/actions/userLogin';
import { useDispatch, useSelector } from 'react-redux';

function FormLogin() {
    const dispatch = useDispatch();

    const localRmb = localStorage.getItem('remember_me');
    const localEmp = localStorage.getItem('username');
    const localPass = localStorage.getItem('password') ? window.atob(localStorage.getItem('password')) : null;
    const initialValues = {
        remember_me: localRmb,
        username: localEmp ? localEmp : '',
        password: localPass ? localPass : '',
    };

    const rules = {
        username: [{
            required: true,
            whitespace: true,
            message: 'Please enter username'
        }],
        password: [{
            required: true,
            message: 'Please enter password',
        }]
    };

    const { error } = useSelector(state => state.login);

    const onFinish = (values) => {
        console.log('Get form Login:', values);
        const { username, password, remember_me } = values;
        if (remember_me && username !== '') {
            localStorage.setItem('username', username);
            localStorage.setItem('password', window.btoa(password));
            localStorage.setItem('remember_me', remember_me);
        } else {
            localStorage.setItem('username', '');
            localStorage.setItem('password', '');
            localStorage.setItem('remember_me', '');
        }
        dispatch(userLogin({ username, password }));
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={initialValues}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={rules.username}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={rules.password}
            >
                <Input.Password />
            </Form.Item>

            {error && <Alert message={error} type='error' />}

            <Form.Item name="remember_me" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox checked={localRmb}>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormLogin;