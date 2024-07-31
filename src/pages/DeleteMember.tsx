// // src/pages/DeleteMember.tsx
// import React from "react";
// import { Card, Button, Form, Input, message } from "antd";
// import { deleteMemberAccount } from "../pages/login/api/index";

// const DeleteMember: React.FC = () => {
//   const onFinish = async (values: any) => {
//     try {
//       await deleteMemberAccount(values.email);
//       message.success("Member account deleted successfully");
//     } catch (error) {
//       message.error("Failed to delete member account");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100%",
//         background: "#f0f2f5",
//       }}
//     >
//       <Card
//         title="Delete Member"
//         style={{
//           width: 400,
//           borderRadius: 10,
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Form name="deleteMember" onFinish={onFinish}>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               { required: true, message: "Please input the email to delete!" },
//             ]}
//           >
//             <Input placeholder="Enter email" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
//               Delete Member
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default DeleteMember;
export {};
