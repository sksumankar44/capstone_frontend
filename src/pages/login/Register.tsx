// src/pages/register/Register.tsx
import React from "react";
import { Card, Button, Form, Typography, message } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Link } from "react-router-dom";
import { registerAdminAccount } from "../login/api"; // Import the API call function

const { Title } = Typography;

const RegisterForm: React.FC = () => {
  const onFinish = async (values: any) => {
    try {
      const response = await registerAdminAccount(
        values.name,
        values.email,
        values.password
      );
      if (response) {
        message.success("Registration successful ✌️");
        console.log("Registration successful:", response);
      }
    } catch (error) {
      message.error("Registration failed");
      console.error("Registration error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "rgb(8 145 178)",
      }}
    >
      <Card
        title={
          <Title level={3} style={{ margin: 0, textAlign: "center" }}>
            Register
          </Title>
        }
        style={{
          width: 350,
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <ProForm
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          submitter={{
            render: () => null, // Remove default buttons
          }}
        >
          <ProFormText
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
            placeholder="Enter your name"
            style={{ marginBottom: 16 }}
          />
          <ProFormText
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
            placeholder="Enter your email"
            style={{ marginBottom: 16 }}
          />
          <ProFormText.Password
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
            placeholder="Enter your password"
            style={{ marginBottom: 24 }}
          />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                borderRadius: 5,
                padding: "10px",
                fontSize: "16px",
              }}
            >
              Register
            </Button>
          </Form.Item>
        </ProForm>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Link to="/login" style={{ color: "#1890ff", fontSize: "14px" }}>
            Already have an account? Login here
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RegisterForm;
