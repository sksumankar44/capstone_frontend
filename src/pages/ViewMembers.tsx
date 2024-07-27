// import React, { useEffect, useState } from "react";
// import { Card, Table, message, Button, Popconfirm, Tag, Space } from "antd";
// import { getMemberAccounts, deleteMemberAccount } from "../pages/login/api"; // Adjust the import path as necessary
// import "./ViewMembers.css"; // Add this line to import custom CSS

// const ViewMembers: React.FC = () => {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const result = await getMemberAccounts();
//         console.log(result, "Fetched members");
//         if (Array.isArray(result.response)) {
//           setMembers(result.response);
//         } else {
//           console.error("Unexpected result format:", result);
//           message.error("Unexpected data format received");
//         }
//       } catch (error) {
//         message.error("Failed to fetch member accounts");
//         console.error("Error fetching member accounts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const handleDelete = async (email: string) => {
//     console.log(`Attempting to delete member with email: ${email}`);
//     try {
//       setLoading(true);
//       const result = await deleteMemberAccount(email);
//       console.log("Delete member result:", result);

//       // Adjust based on the structure of the result
//       if (result.response === "SUCCESS") {
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

//   const getTagColor = (points: number) => {
//     if (points >= 500) return "gold";
//     if (points > 50) return "green";
//     return "volcano";
//   };

//   const columns = [
//     {
//       title: "Member Name",
//       dataIndex: "member_name",
//       key: "member_name",
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Points",
//       dataIndex: "points",
//       key: "points",
//       render: (points: number) => (
//         <Tag color={getTagColor(points)} key={points}>
//           {points}
//         </Tag>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text: any, record: any) => (
//         <Space size="middle">
//           <Popconfirm
//             title="Are you sure to delete this member?"
//             onConfirm={() => handleDelete(record.email)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button type="primary" danger>
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div className="view-members-container">
//       <Card title="View Members" className="view-members-card">
//         <Table
//           columns={columns}
//           dataSource={members}
//           loading={loading}
//           rowKey="email"
//           className="view-members-table"
//         />
//       </Card>
//     </div>
//   );
// };

// export default ViewMembers;

// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   Table,
//   message,
//   Button,
//   Popconfirm,
//   Tag,
//   Space,
//   Drawer,
//   Form,
//   Input,
// } from "antd";
// import {
//   getMemberAccounts,
//   deleteMemberAccount,
//   updateMemberAccount,
// } from "../pages/login/api"; // Adjust the import path as necessary
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import "./ViewMembers.css"; // Import custom CSS

// const ViewMembers: React.FC = () => {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [visible, setVisible] = useState<boolean>(false);
//   const [currentMember, setCurrentMember] = useState<any>(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const result = await getMemberAccounts();
//         console.log(result, "Fetched members");
//         if (Array.isArray(result.response)) {
//           setMembers(result.response);
//         } else {
//           console.error("Unexpected result format:", result);
//           message.error("Unexpected data format received");
//         }
//       } catch (error) {
//         message.error("Failed to fetch member accounts");
//         console.error("Error fetching member accounts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const handleDelete = async (email: string) => {
//     console.log(`Attempting to delete member with email: ${email}`);
//     try {
//       setLoading(true);
//       const result = await deleteMemberAccount(email);
//       console.log("Delete member result:", result);

//       if (result.response === "SUCCESS") {
//         message.success("Member deleted successfully");
//         setMembers((prevMembers) =>
//           prevMembers.filter((member) => member.email !== email)
//         );
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

//   const handleUpdate = async (values: any) => {
//     try {
//       await updateMemberAccount(
//         currentMember.email,
//         values.newEmail || currentMember.email,
//         values.newName || currentMember.member_name
//       );
//       message.success("Member updated successfully");
//       setMembers((prevMembers) =>
//         prevMembers.map((member) =>
//           member.email === currentMember.email
//             ? {
//                 ...member,
//                 email: values.newEmail || currentMember.email,
//                 member_name: values.newName || currentMember.member_name,
//               }
//             : member
//         )
//       );
//       setVisible(false);
//     } catch (error) {
//       message.error("Failed to update member");
//       console.error("Error updating member:", error);
//     }
//   };

//   const showDrawer = (member: any) => {
//     setCurrentMember(member);
//     form.setFieldsValue({
//       newEmail: member.email,
//       newName: member.member_name,
//     });
//     setVisible(true);
//   };

//   const closeDrawer = () => {
//     setVisible(false);
//     setCurrentMember(null);
//   };

//   const getTagColor = (points: number) => {
//     if (points >= 500) return "gold";
//     if (points > 50) return "green";
//     return "volcano";
//   };

//   const columns = [
//     {
//       title: "Member Name",
//       dataIndex: "member_name",
//       key: "member_name",
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Points",
//       dataIndex: "points",
//       key: "points",
//       render: (points: number) => (
//         <Tag color={getTagColor(points)} key={points}>
//           {points}
//         </Tag>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text: any, record: any) => (
//         <Space size="middle">
//           <Button
//             type="default"
//             icon={<EditOutlined />}
//             onClick={() => showDrawer(record)}
//           />
//           <Popconfirm
//             title="Are you sure to delete this member?"
//             onConfirm={() => handleDelete(record.email)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button type="primary" danger icon={<DeleteOutlined />} />
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div className="view-members-container">
//       <Card title="View Members" className="view-members-card">
//         <Table
//           columns={columns}
//           dataSource={members}
//           loading={loading}
//           rowKey="email"
//           className="view-members-table"
//         />
//       </Card>

//       <Drawer
//         title="Update Member"
//         placement="right"
//         onClose={closeDrawer}
//         visible={visible}
//         width={360}
//       >
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={handleUpdate}
//           initialValues={{
//             newEmail: currentMember?.email,
//             newName: currentMember?.member_name,
//           }}
//         >
//           <Form.Item name="newEmail" label="New Email">
//             <Input placeholder="Enter new email" />
//           </Form.Item>
//           <Form.Item name="newName" label="New Name">
//             <Input placeholder="Enter new name" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Update Member
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>
//     </div>
//   );
// };

// export default ViewMembers;

//=================================================
// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   Table,
//   message,
//   Button,
//   Popconfirm,
//   Tag,
//   Space,
//   Drawer,
//   Form,
//   Input,
//   Modal,
// } from "antd";
// import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
// import {
//   getMemberAccounts,
//   deleteMemberAccount,
//   createMemberAccount,
//   updateMemberAccount,
// } from "../pages/login/api";
// import "./ViewMembers.css"; // Import custom CSS

// const ViewMembers: React.FC = () => {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [visible, setVisible] = useState<boolean>(false);
//   const [currentMember, setCurrentMember] = useState<any>(null);
//   const [form] = Form.useForm();
//   const [addMemberVisible, setAddMemberVisible] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const result = await getMemberAccounts();
//         console.log(result, "Fetched members");
//         if (Array.isArray(result.response)) {
//           setMembers(result.response);
//         } else {
//           console.error("Unexpected result format:", result);
//           message.error("Unexpected data format received");
//         }
//       } catch (error) {
//         message.error("Failed to fetch member accounts");
//         console.error("Error fetching member accounts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const handleDelete = async (email: string) => {
//     console.log(`Attempting to delete member with email: ${email}`);
//     try {
//       setLoading(true);
//       const result = await deleteMemberAccount(email);
//       console.log("Delete member result:", result);

//       if (result.response === "SUCCESS") {
//         message.success("Member deleted successfully");
//         setMembers((prevMembers) =>
//           prevMembers.filter((member) => member.email !== email)
//         );
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

//   const handleUpdate = async (values: any) => {
//     try {
//       await updateMemberAccount(
//         currentMember.email,
//         values.newEmail || currentMember.email,
//         values.newName || currentMember.member_name
//       );
//       message.success("Member updated successfully");
//       setMembers((prevMembers) =>
//         prevMembers.map((member) =>
//           member.email === currentMember.email
//             ? {
//                 ...member,
//                 email: values.newEmail || currentMember.email,
//                 member_name: values.newName || currentMember.member_name,
//               }
//             : member
//         )
//       );
//       setVisible(false);
//     } catch (error) {
//       message.error("Failed to update member");
//       console.error("Error updating member:", error);
//     }
//   };

//   const handleAddMember = async (values: any) => {
//     try {
//       await createMemberAccount(values.email, values.member_name);
//       message.success("Member added successfully");
//       setMembers((prevMembers) => [
//         ...prevMembers,
//         {
//           email: values.email,
//           member_name: values.member_name,
//           points: values.points,
//         },
//       ]);
//       setAddMemberVisible(false);
//     } catch (error) {
//       message.error("Failed to add member");
//       console.error("Error adding member:", error);
//     }
//   };

//   const showDrawer = (member: any) => {
//     setCurrentMember(member);
//     form.setFieldsValue({
//       newEmail: member.email,
//       newName: member.member_name,
//     });
//     setVisible(true);
//   };

//   const closeDrawer = () => {
//     setVisible(false);
//     setCurrentMember(null);
//   };

//   const showAddMemberModal = () => {
//     setAddMemberVisible(true);
//     form.resetFields();
//   };

//   const closeAddMemberModal = () => {
//     setAddMemberVisible(false);
//   };

//   const getTagColor = (points: number) => {
//     if (points >= 500) return "gold";
//     if (points > 50) return "green";
//     return "volcano";
//   };

//   const columns = [
//     {
//       title: "Member Name",
//       dataIndex: "member_name",
//       key: "member_name",
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Points",
//       dataIndex: "points",
//       key: "points",
//       render: (points: number) => (
//         <Tag color={getTagColor(points)} key={points}>
//           {points}
//         </Tag>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text: any, record: any) => (
//         <Space size="middle">
//           <Button
//             type="default"
//             icon={<EditOutlined />}
//             onClick={() => showDrawer(record)}
//           />
//           <Popconfirm
//             title="Are you sure to delete this member?"
//             onConfirm={() => handleDelete(record.email)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button type="primary" danger icon={<DeleteOutlined />} />
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div className="view-members-container">
//       <div className="members-management-header">
//         <h2>Add New Member</h2>
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           onClick={showAddMemberModal}
//           className="add-member-button"
//         >
//           Add Member
//         </Button>
//       </div>
//       <Card title="View Members" className="view-members-card">
//         <Table
//           columns={columns}
//           dataSource={members}
//           loading={loading}
//           rowKey="email"
//           className="view-members-table"
//         />
//       </Card>

//       <Drawer
//         title="Update Member"
//         placement="right"
//         onClose={closeDrawer}
//         visible={visible}
//         width={360}
//       >
//         <Form form={form} layout="vertical" onFinish={handleUpdate}>
//           <Form.Item name="newEmail" label="New Email">
//             <Input placeholder="Enter new email" />
//           </Form.Item>
//           <Form.Item name="newName" label="New Name">
//             <Input placeholder="Enter new name" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Update Member
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>

//       <Modal
//         title="Add Member"
//         visible={addMemberVisible}
//         onCancel={closeAddMemberModal}
//         footer={null}
//         centered
//         width={400}
//       >
//         <Form form={form} layout="vertical" onFinish={handleAddMember}>
//           <Form.Item
//             name="member_name"
//             label="Member Name"
//             rules={[
//               { required: true, message: "Please input the member name!" },
//             ]}
//           >
//             <Input placeholder="Enter member name" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: "Please input the email!" }]}
//           >
//             <Input placeholder="Enter email" />
//           </Form.Item>
//           <Form.Item
//             name="points"
//             label="Points"
//             rules={[{ required: true, message: "Please input the points!" }]}
//           >
//             <Input type="number" placeholder="Enter points" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Add Member
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default ViewMembers;

//=============================================
//==============================================

// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   Table,
//   message,
//   Button,
//   Popconfirm,
//   Tag,
//   Space,
//   Drawer,
//   Form,
//   Input,
//   Modal,
// } from "antd";
// import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
// import {
//   getMemberAccounts,
//   deleteMemberAccount,
//   createMemberAccount,
//   updateMemberAccount,
// } from "../pages/login/api";
// import "./ViewMembers.css"; // Import custom CSS

// const ViewMembers: React.FC = () => {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [visible, setVisible] = useState<boolean>(false);
//   const [currentMember, setCurrentMember] = useState<any>(null);
//   const [form] = Form.useForm();
//   const [addMemberVisible, setAddMemberVisible] = useState<boolean>(false);
//   const [searchText, setSearchText] = useState<string>("");

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const result = await getMemberAccounts();
//         if (Array.isArray(result.response)) {
//           setMembers(result.response);
//         } else {
//           message.error("Unexpected data format received");
//         }
//       } catch (error) {
//         message.error("Failed to fetch member accounts");
//         console.error("Error fetching member accounts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const handleDelete = async (email: string) => {
//     try {
//       setLoading(true);
//       const result = await deleteMemberAccount(email);
//       if (result.response === "SUCCESS") {
//         message.success("Member deleted successfully");
//         setMembers((prevMembers) =>
//           prevMembers.filter((member) => member.email !== email)
//         );
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

//   const handleUpdate = async (values: any) => {
//     try {
//       await updateMemberAccount(
//         currentMember.email,
//         values.newEmail || currentMember.email,
//         values.newName || currentMember.member_name
//       );
//       message.success("Member updated successfully");
//       setMembers((prevMembers) =>
//         prevMembers.map((member) =>
//           member.email === currentMember.email
//             ? {
//                 ...member,
//                 email: values.newEmail || currentMember.email,
//                 member_name: values.newName || currentMember.member_name,
//               }
//             : member
//         )
//       );
//       setVisible(false);
//     } catch (error) {
//       message.error("Failed to update member");
//       console.error("Error updating member:", error);
//     }
//   };

//   const handleAddMember = async (values: any) => {
//     try {
//       await createMemberAccount(values.email, values.member_name);
//       message.success("Member added successfully");
//       setMembers((prevMembers) => [
//         ...prevMembers,
//         {
//           email: values.email,
//           member_name: values.member_name,
//           points: values.points,
//         },
//       ]);
//       setAddMemberVisible(false);
//     } catch (error) {
//       message.error("Failed to add member");
//       console.error("Error adding member:", error);
//     }
//   };

//   const showDrawer = (member: any) => {
//     setCurrentMember(member);
//     form.setFieldsValue({
//       newEmail: member.email,
//       newName: member.member_name,
//     });
//     setVisible(true);
//   };

//   const closeDrawer = () => {
//     setVisible(false);
//     setCurrentMember(null);
//   };

//   const showAddMemberModal = () => {
//     setAddMemberVisible(true);
//     form.resetFields();
//   };

//   const closeAddMemberModal = () => {
//     setAddMemberVisible(false);
//   };

//   const getTagColor = (points: number) => {
//     if (points >= 500) return "gold";
//     if (points > 50) return "green";
//     return "volcano";
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(e.target.value);
//   };

//   const filteredMembers = members.filter((member) =>
//     member.member_name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const columns = [
//     {
//       title: "Member Name",
//       dataIndex: "member_name",
//       key: "member_name",
//       render: (text: string) => <a>{text}</a>,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Points",
//       dataIndex: "points",
//       key: "points",
//       render: (points: number) => (
//         <Tag color={getTagColor(points)} key={points}>
//           {points}
//         </Tag>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text: any, record: any) => (
//         <Space size="middle">
//           <Button
//             type="default"
//             icon={<EditOutlined />}
//             onClick={() => showDrawer(record)}
//           />
//           <Popconfirm
//             title="Are you sure to delete this member?"
//             onConfirm={() => handleDelete(record.email)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button type="primary" danger icon={<DeleteOutlined />} />
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div className="view-members-container">
//       <div className="members-management-header">
//         <Input
//           placeholder="Search Members"
//           value={searchText}
//           onChange={handleSearch}
//           className="search-bar"
//         />
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           onClick={showAddMemberModal}
//           className="add-member-button"
//         >
//           Add New Member
//         </Button>
//       </div>
//       <Card title="View Members" className="view-members-card">
//         <Table
//           columns={columns}
//           dataSource={filteredMembers}
//           loading={loading}
//           rowKey="email"
//           className="view-members-table"
//         />
//       </Card>

//       <Drawer
//         title="Update Member"
//         placement="right"
//         onClose={closeDrawer}
//         visible={visible}
//         width={360}
//       >
//         <Form form={form} layout="vertical" onFinish={handleUpdate}>
//           <Form.Item name="newEmail" label="New Email">
//             <Input placeholder="Enter new email" />
//           </Form.Item>
//           <Form.Item name="newName" label="New Name">
//             <Input placeholder="Enter new name" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Update Member
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>

//       <Modal
//         title="Add Member"
//         visible={addMemberVisible}
//         onCancel={closeAddMemberModal}
//         footer={null}
//         centered
//         width={400}
//       >
//         <Form form={form} layout="vertical" onFinish={handleAddMember}>
//           <Form.Item
//             name="member_name"
//             label="Member Name"
//             rules={[
//               { required: true, message: "Please input the member name!" },
//             ]}
//           >
//             <Input placeholder="Enter member name" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: "Please input the email!" }]}
//           >
//             <Input placeholder="Enter email" />
//           </Form.Item>
//           <Form.Item
//             name="points"
//             label="Points"
//             rules={[{ required: true, message: "Please input the points!" }]}
//           >
//             <Input type="number" placeholder="Enter points" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Add Member
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default ViewMembers;

///Add new Member

import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  message,
  Button,
  Popconfirm,
  Tag,
  Space,
  Drawer,
  Form,
  Input,
  Modal,
} from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  getMemberAccounts,
  deleteMemberAccount,
  createMemberAccount,
  updateMemberAccount,
} from "../pages/login/api";
import "./ViewMembers.css"; // Import custom CSS

const ViewMembers: React.FC = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [currentMember, setCurrentMember] = useState<any>(null);
  const [form] = Form.useForm();
  const [addMemberVisible, setAddMemberVisible] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const result = await getMemberAccounts();
        if (Array.isArray(result.response)) {
          setMembers(result.response);
        } else {
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
    try {
      setLoading(true);
      const result = await deleteMemberAccount(email);
      if (result.response === "SUCCESS") {
        message.success("Member deleted successfully");
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.email !== email)
        );
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

  const handleUpdate = async (values: any) => {
    try {
      await updateMemberAccount(
        currentMember.email,
        //currentMember.member_name,
        values.newEmail || currentMember.email,
        values.newName || currentMember.member_name
      );
      message.success("Member updated successfully");
      setMembers((prevMembers) =>
        prevMembers.map((member) =>
          member.email === currentMember.email
            ? {
                ...member,
                email: values.newEmail || currentMember.email,
                member_name: values.newName || currentMember.member_name,
              }
            : member
        )
      );
      setVisible(false);
    } catch (error) {
      message.error("Failed to update member");
      console.error("Error updating member:", error);
    }
  };

  const handleAddMember = async (values: any) => {
    try {
      await createMemberAccount(values.member_name, values.email);
      message.success("Member added successfully");
      setMembers((prevMembers) => [
        ...prevMembers,
        {
          email: values.email,
          member_name: values.member_name,
          points: values.points,
        },
      ]);
      setAddMemberVisible(false);
    } catch (error) {
      message.error("Failed to add member");
      console.error("Error adding member:", error);
    }
  };

  const showDrawer = (member: any) => {
    setCurrentMember(member);
    form.setFieldsValue({
      newEmail: member.email,
      newName: member.member_name,
    });
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
    setCurrentMember(null);
  };

  const showAddMemberModal = () => {
    setAddMemberVisible(true);
    form.resetFields();
  };

  const closeAddMemberModal = () => {
    setAddMemberVisible(false);
  };

  const getTagColor = (points: number) => {
    if (points >= 500) return "gold";
    if (points > 50) return "green";
    return "volcano";
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredMembers = members.filter((member) =>
    member.member_name.toLowerCase().includes(searchText.toLowerCase())
  );

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
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={() => showDrawer(record)}
          />
          <Popconfirm
            title="Are you sure to delete this member?"
            onConfirm={() => handleDelete(record.email)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="view-members-container">
      <div className="members-management-header">
        <Input
          placeholder="Search Members"
          value={searchText}
          onChange={handleSearch}
          className="search-bar"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showAddMemberModal}
          className="add-member-button"
        >
          Add New Member
        </Button>
      </div>
      <Card title="View Members" className="view-members-card">
        <Table
          columns={columns}
          dataSource={filteredMembers}
          loading={loading}
          rowKey="email"
          className="view-members-table"
        />
      </Card>

      <Drawer
        title="Update Member"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
        width={360}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
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
      </Drawer>

      <Modal
        title="Add Member"
        visible={addMemberVisible}
        onCancel={closeAddMemberModal}
        footer={null}
        centered
        width={400}
      >
        <Form form={form} layout="vertical" onFinish={handleAddMember}>
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
          {/* <Form.Item
            name="points"
            label="Points"
            rules={[{ required: true, message: "Please input the points!" }]}
          >
            <Input type="number" placeholder="Enter points" />
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Add Member
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ViewMembers;
