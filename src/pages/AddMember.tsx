// src/pages/AddMember.tsx
import React from "react";
import { Card, Button, Form, Input, message } from "antd";
import { createMemberAccount } from "../pages/login/api/index";

const AddMember: React.FC = () => {
  const onFinish = async (values: any) => {
    try {
      await createMemberAccount(values.member_name, values.email);
      message.success("Member account created successfully");
    } catch (error) {
      message.error("Failed to create member account");
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background: "#f0f2f5",
      }}
    >
      <Card
        title="Add Member"
        style={{
          width: 400,
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form name="addMember" onFinish={onFinish}>
          <Form.Item
            name="member_name"
            label="Member Name"
            rules={[
              { required: true, message: "Please input the member name!" },
            ]}
          >
            <Input placeholder="Enter member name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Create Member
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddMember;
