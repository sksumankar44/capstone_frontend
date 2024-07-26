import React, { useState } from "react";
import { Card, Form, Input, Button, Select, message } from "antd";
import { updateMemberPoints } from "../pages/login/api"; // Correct the import path

const { Option } = Select;

const PointsManagementForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const result = await updateMemberPoints(values);
      console.log("Result:", result);

      if (result.response.status === 200) {
        message.success(result.message || "Points updated successfully");
      } else {
        message.error(result.message || "Failed to update points");
      }
    } catch (error) {
      message.error("Error updating points");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title="Points Management"
      bordered={false}
      style={{
        maxWidth: 600,
        margin: "50px auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Form
        name="pointsManagementForm"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ admin: localStorage.getItem("name") }} // Set initial value for admin
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <Form.Item
          name="member"
          label="Member Email "
          rules={[{ required: true, message: "Please enter member's email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="points"
          label="Points"
          rules={[
            { required: true, message: "Please enter the number of points" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: "Please select the type" }]}
        >
          <Select>
            <Option value="credit">Credit Points</Option>
            <Option value="debit">Debit Points</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="admin"
          hidden // Hidden input for admin
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PointsManagementForm;
