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
import axios from "axios";
import "./AccountDetails.css";
import { API_BASE_URL } from "./login/api";

const { Title } = Typography;

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
      setAdminDetails(adminDetails.filter((item) => item.email !== email));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div className="account-details-container">
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 24]} justify="center">
          {adminDetails.map((item, index) => (
            <Col span={8} key={index} className="account-card-col">
              <Card
                className="account-details-card"
                cover={
                  <Avatar
                    size={64}
                    icon={<UserOutlined />}
                    style={{ margin: "16px auto", backgroundColor: "#f56a00" }}
                  />
                }
                actions={[
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
                  </Popconfirm>,
                ]}
              >
                <Title level={4} className="card-title">
                  {item.name}
                </Title>
                <Form layout="vertical" className="static-form">
                  <Form.Item label="Email">
                    <Input value={item.email} readOnly />
                  </Form.Item>
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
