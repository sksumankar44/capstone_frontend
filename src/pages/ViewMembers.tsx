import React, { useEffect, useState } from "react";
import { Card, Table, message, Button, Popconfirm, Tag, Space } from "antd";
import { getMemberAccounts, deleteMemberAccount } from "../pages/login/api"; // Adjust the import path as necessary
import "./ViewMembers.css"; // Add this line to import custom CSS

const ViewMembers: React.FC = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const result = await getMemberAccounts();
        console.log(result, "Fetched members");
        if (Array.isArray(result.response)) {
          setMembers(result.response);
        } else {
          console.error("Unexpected result format:", result);
          message.error("Unexpected data format received");
        }
      } catch (error) {
        message.error("Failed to fetch member accounts");
        console.error("Error fetching member accounts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (email: string) => {
    console.log(`Attempting to delete member with email: ${email}`);
    try {
      setLoading(true);
      const result = await deleteMemberAccount(email);
      console.log("Delete member result:", result);

      // Adjust based on the structure of the result
      if (result.response === "SUCCESS") {
        message.success("Member deleted successfully");
        setMembers(members.filter((member) => member.email !== email));
      } else {
        message.error(result.message || "Failed to delete member");
      }
    } catch (error) {
      message.error("Failed to delete member");
      console.error("Error deleting member:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTagColor = (points: number) => {
    if (points >= 500) return "gold";
    if (points > 50) return "green";
    return "volcano";
  };

  const columns = [
    {
      title: "Member Name",
      dataIndex: "member_name",
      key: "member_name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
      render: (points: number) => (
        <Tag color={getTagColor(points)} key={points}>
          {points}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this member?"
            onConfirm={() => handleDelete(record.email)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="view-members-container">
      <Card title="View Members" className="view-members-card">
        <Table
          columns={columns}
          dataSource={members}
          loading={loading}
          rowKey="email"
          className="view-members-table"
        />
      </Card>
    </div>
  );
};

export default ViewMembers;
