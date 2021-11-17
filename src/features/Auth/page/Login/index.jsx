import { Col, Row, Typography } from 'antd';
import React from 'react';
import FormLogin from '../../component/FormLogin'

Login.propTypes = {

};

function Login(props) {
    return (
        <div>
            <h1 className="center">Login</h1>
            <Row justify="center">
                <Col xl={6}>
                    <FormLogin></FormLogin>
                </Col>
            </Row>
        </div>
    );
}

export default Login;