import React, {useState} from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import {Link,useNavigate} from "react-router-dom";

import { useIsGetAuthMutation } from "../../redux/slices/auth.query.js";
import { login } from "../../redux/slices/auth.slice.js";

import "./login.scss";

export default function Login() {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const [isGetAuth] = useIsGetAuthMutation();
  const [formMessage,setFormMessage] = useState(null);

  const onFinish = async (values) => {
    const { data } = await isGetAuth({
      username: values.username,
      password: values.password,
    });
    console.log(data);
    if(data.token){
      dispatcher(login(data.token));
      navigate("/");
    }
    else{
      setFormMessage(data.message)
    }


  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="center">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          Login or <Link to={"/register"}>Register</Link>
        </Form.Item>

        <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <p style={{color: "red"}}>{formMessage}</p>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
