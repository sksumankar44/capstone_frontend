// src/pages/UpdateMember.tsx
import React from "react";
import { Card, Button, Form, Input, message } from "antd";
import { updateMemberAccount } from "../pages/login/api/index";

const UpdateMember: React.FC = () => {
  const onFinish = async (values: any) => {
    try {
      await updateMemberAccount(
        values.currentEmail,
        values.newEmail,
        values.newName
      );
      message.success("Member account updated successfully");
    } catch (error) {
      message.error("Failed to update member account");
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
        title="Update Member"
        style={{
          width: 400,
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form name="updateMember" onFinish={onFinish}>
          <Form.Item
            name="currentEmail"
            label="Current Email"
            rules={[
              { required: true, message: "Please input the current email!" },
            ]}
          >
            <Input placeholder="Enter current email" />
          </Form.Item>
          <Form.Item name="newEmail" label="New Email">
            <Input placeholder="Enter new email" />
          </Form.Item>
          <Form.Item name="newName" label="New Name">
            <Input placeholder="Enter new name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Update Member
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UpdateMember;
