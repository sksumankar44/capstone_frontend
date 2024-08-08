import React from "react";
import { Card, Button, Form, Typography, message } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Link, useNavigate } from "react-router-dom";
import { validateCredentials } from "./api"; // Import the API function
import backgroundVideo from "../../assets/Gifts.mp4"; // Import the video
import "./Login.css";
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
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: -270,
          left: "-15%", // Adjust this value to shift the video to the left
          width: "100%", // Make the video wider to ensure it covers the screen
          height: "180%",
          objectFit: "contain",
          zIndex: -1,
          filter: "brightness(1.4) contrast(2)", // Adjust brightness and contrast
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end", // Align the card to the right
          alignItems: "center",
          height: "100%",
          backgroundColor: "rgba(111,2, 155, 0.1)", // Optional: add a dark overlay for better text contrast
          paddingRight: "10%", // Adjust the padding as needed
        }}
      >
        <Card
          title={
            <Title
              level={3}
              style={{ margin: 0, textAlign: "center", color: "purple" }}
            >
              Login
            </Title>
          }
          style={{
            width: 350,

            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(111, 1, 155, 0.9)",
            backgroundColor: "rgba(111, 1, 155, 0.28)", // Make the card slightly transparent
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
                style: { backgroundColor: "#F4C0FF" },
              }}
              style={{ marginBottom: 16 }}
            />
            <ProFormText.Password
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              placeholder="Enter your password"
              fieldProps={{
                style: { backgroundColor: "#F4C0FF" }, // Light pink background
              }}
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
    </div>
  );
};

export default LoginForm;
