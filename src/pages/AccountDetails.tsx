// src/pages/AccountDetails.tsx
import React, { useEffect, useState } from "react";
import {
  Card,
  Avatar,
  Typography,
  Spin,
  Form,
  Input,
  Row,
  Col,
  Button,
  Popconfirm,
} from "antd";
import { UserOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios"; // Assuming you use axios for API calls
import "./AccountDetails.css";
import { API_BASE_URL } from "./login/api";

const { Title, Text } = Typography;

const AccountDetails: React.FC = () => {
  const [adminDetails, setAdminDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/register/getadminaccounts`
        );
        setAdminDetails(response.data.response);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch admin details:", error);
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, []);

  const handleDelete = async (email: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/register/deleteadminaccount`, {
        data: { email },
      });
      // Refresh the list after deletion
      setAdminDetails(adminDetails.filter((item) => item.email !== email));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div className="account-details-container">
      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={16}>
          {adminDetails.map((item, index) => (
            <Col span={8} key={index}>
              <Card
                title={<Title level={4}>{item.name}</Title>}
                extra={
                  <Popconfirm
                    title="Are you sure you want to delete this user?"
                    onConfirm={() => handleDelete(item.email)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      className="delete-button"
                    />
                  </Popconfirm>
                }
                className="account-details-card"
              >
                <Form layout="vertical">
                  <Form.Item label="Email">
                    <Input value={item.email} readOnly />
                  </Form.Item>
                  {/* Add more form items as needed */}
                </Form>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default AccountDetails;
