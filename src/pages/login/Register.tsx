// src/pages/register/Register.tsx
import React from "react";
import { Card, Button, Form, Typography, message } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Link, useNavigate } from "react-router-dom";
import { registerAdminAccount } from "../login/api"; // Import the API call function
import backgroundVideo from "../../assets/register.mp4"; // Import the video

const { Title } = Typography;

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

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

        // Handle successful registration
        navigate("/login"); // Redirect to login page
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
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: "-20%", // Adjust this value to shift the video to the left
          width: "120%", // Ensure the video covers the entire background
          height: "100%",
          objectFit: "contain",
          zIndex: -1,
          filter: "brightness(1.2) contrast(1.7)", // Adjust brightness and contrast
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Registration Card */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end", // Align to the right
          alignItems: "center",
          height: "100%",
          paddingRight: "5%", // Add some padding to the right
          backgroundColor: "rgba(9, 1, 155, 0.3)", // Semi-transparent background
        }}
      >
        <Card
          title={
            <Title
              level={3}
              style={{ margin: 0, textAlign: "center", color: "black" }}
            >
              Register
            </Title>
          }
          style={{
            width: 350,
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(111, 1, 155, 0.9)",
            backgroundColor: "rgba(110, 1, 155, 0.1)",
            opacity: 0.9, // Slight transparency
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
              style={{
                marginBottom: 16,
                backgroundColor: "#F4C0FF", // Light pink background
              }}
              fieldProps={{
                style: {
                  color: "black", // Deep black placeholder color
                  fontSize: "14px",
                },
              }}
            />
            <ProFormText
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
              placeholder="Enter your email"
              style={{
                marginBottom: 16,
                backgroundColor: "black", // Light pink background
              }}
              fieldProps={{
                type: "email",
                autoComplete: "email",
                style: {
                  color: "#000", // Deep black placeholder color
                  fontSize: "14px",
                },
              }}
            />
            <ProFormText.Password
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              placeholder="Enter your password"
              style={{
                marginBottom: 24,
                backgroundColor: "#ffe0e0", // Light pink background
              }}
              fieldProps={{
                style: {
                  color: "#000", // Deep black placeholder color
                  fontSize: "14px",
                },
              }}
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
    </div>
  );
};

export default RegisterForm;
