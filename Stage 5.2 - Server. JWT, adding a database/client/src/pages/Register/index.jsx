import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useRegisterMutation } from "../../redux/slices/auth.query";
import { login } from "../../redux/slices/auth.slice";

import "./register.scss";

export default function Register() {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const [register] = useRegisterMutation();
  const [formMessage, setFormMessage] = useState(null);

  const onFinish = async (values) => {
    const { data } = await register({
      username: values.username,
      password: values.password,
      age: values.age,
    });
    if (data.token) {
      console.log(data);
      dispatcher(login(data.token));
      navigate("/");
    } else {
      setFormMessage(data.message);
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
          span: 10,
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
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your age!",
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
          label="Password repeat"
          name="password_confirm"
          rules={[
            {
              required: true,
              message: "Please repeat your password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          Register or <Link to={"/login"}>login</Link>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <p style={{ color: "red" }}>{formMessage}</p>
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
