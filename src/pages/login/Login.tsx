import React from "react";
import { Card, Button, Form, Typography, message } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Link, useNavigate } from "react-router-dom";
import { validateCredentials } from "./api"; // Import the API function

const { Title } = Typography;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const result = await validateCredentials(values.email, values.password);
      message.success("Login successful😊");
      console.log("Login successful:", result);

      // Store the token in local storage
      localStorage.setItem("token", result.token);
      localStorage.setItem("name", result.userData);

      // Handle successful login
      navigate("/main-layout"); // Redirect to dashboard
    } catch (error) {
      message.error("Login failed");
      console.error("Login failed:", error);
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
        background: "rgb(8 145 178)", // Background color
      }}
    >
      <Card
        title={
          <Title level={3} style={{ margin: 0, textAlign: "center" }}>
            Login
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
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
            placeholder="Enter your email"
            fieldProps={{
              type: "email",
              autoComplete: "email",
            }}
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
                backgroundColor: "#1890ff", // Ant Design blue
                borderColor: "#1890ff",
                borderRadius: 5,
                padding: "10px",
                fontSize: "16px",
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </ProForm>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Link to="/register" style={{ color: "#1890ff", fontSize: "14px" }}>
            Don't have an account? Register here
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
