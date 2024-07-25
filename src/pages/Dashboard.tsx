import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const Dashboard: React.FC = () => {
  return (
    <div
      style={{
        padding: 24,
        background: "#fff",
        borderRadius: 8,
        minHeight: 280,
      }}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Members"
              value={1128}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Transactions"
              value={5324}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={123456}
              prefix={<DollarOutlined />}
              precision={2}
              suffix="$"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
