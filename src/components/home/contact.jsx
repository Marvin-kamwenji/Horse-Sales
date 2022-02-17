import React from "react";


import {Form, Input, Button, Checkbox} from 'antd';
const { TextArea } = Input;


function AppContact() {
    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Contact us</h2>
                    <p>Fill the below form incase of any complaints, comments, suggestions or feedback </p>
                    <p>We would love to hear from you </p>
                </div>

                <Form name="normal_login" className="login-form" initialValues={{remember: true}}>
                    <Form.Item name="fullname"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Please enter your full name!'
                                   }
                               ]}>

                        <Input placeholder="Full Name" />

                    </Form.Item>

                    <Form.Item name="email"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Please input your Email!'
                                   }
                               ]}>

                        <Input placeholder="Email Address" />

                    </Form.Item>

                    <Form.Item name="telephone">

                        <Input placeholder="Telephone" />

                    </Form.Item>

                    <Form.Item name="subject">

                        <Input placeholder="Subject" />

                    </Form.Item>

                    <Form.Item name="message">

                        <TextArea placeholder="Message" />

                    </Form.Item>

                    <Form.Item name="remember" 
                         valuePropName="checked"
                         noStyle
                         rules={[
                         { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                         ]}
                       >
                      <Checkbox>I agree with terms and conditions.</Checkbox>
                    </Form.Item>

                     <Form.Item >

                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            Submit
                        </Button>    

                    </Form.Item>

                    
                </Form>

            </div>

        </div>
    );
}

export default AppContact;