import React, { useEffect, useState } from "react";
import { Card, Table, message, Button, Popconfirm } from "antd";
import { getMemberAccounts, deleteMemberAccount } from "../pages/login/api"; // Adjust the import path as necessary

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

  //   const handleDelete = async (email: string) => {
  //     console.log(`Attempting to delete member with email: ${email}`);
  //     try {
  //       setLoading(true);
  //       const result = await deleteMemberAccount(email);
  //       console.log(result, "Delete member result");

  //       if (result.status === 200) {
  //         // Adjust based on the actual status field from API response
  //         message.success("Member deleted successfully");
  //         setMembers(members.filter((member) => member.email !== email));
  //       } else {
  //         message.error(result.message || "Failed to delete member");
  //       }
  //     } catch (error) {
  //       message.error("Failed to delete member");
  //       console.error("Error deleting member:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
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

  const columns = [
    {
      title: "Member Name",
      dataIndex: "member_name",
      key: "member_name",
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
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
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
      ),
    },
  ];

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
        title="View Members"
        style={{
          width: 800,
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table
          columns={columns}
          dataSource={members}
          loading={loading}
          rowKey="email"
        />
      </Card>
    </div>
  );
};

export default ViewMembers;
