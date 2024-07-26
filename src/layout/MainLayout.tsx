// // src/layout/MainLayout.tsx
// import React, { useEffect, useState } from "react";
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   HistoryOutlined,
//   AccountBookOutlined,
//   TrophyOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Breadcrumb, Layout, Menu, theme } from "antd";
// import AddMember from "../pages/AddMember";
// import Dashboard from "../pages/Dashboard";
// import UpdateMember from "../pages/UpdateMember";
// import ViewMembers from "../pages/ViewMembers";
// import PointsManagementForm from "../pages/PointsManagementForm";
// import TransactionManagementForm from "../pages/TransactionManagementForm"; // Import the new Transaction Management Form
// import { useNavigate } from "react-router-dom";

// const { Header, Content, Sider } = Layout;

// const sidebarItems: MenuProps["items"] = [
//   {
//     key: "/dashboard",
//     icon: React.createElement(DashboardOutlined),
//     label: "Dashboard",
//   },
//   {
//     key: "manage-members",
//     icon: React.createElement(TeamOutlined),
//     label: "Manage Members",
//     children: [
//       {
//         key: "add-member",
//         label: "Add Member",
//       },
//       {
//         key: "view-member",
//         label: "View Member",
//       },
//       {
//         key: "update-member",
//         label: "Update Member",
//       },
//     ],
//   },
//   {
//     key: "points-management",
//     icon: React.createElement(TrophyOutlined),
//     label: "Points Management",
//   },

//   {
//     key: "transaction-management",
//     icon: React.createElement(HistoryOutlined),
//     label: "Transaction Management",
//   },
//   {
//     key: "maintain-accounts",
//     icon: React.createElement(AccountBookOutlined),
//     label: "Maintain Accounts",
//     children: [
//       {
//         key: "account-details",
//         label: "Account Details",
//       },
//     ],
//   },
// ];

// const headerItems: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const MainLayout: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const [isLogged, setIsLogged] = useState(false);
//   const navigate = useNavigate();
//   const [currentContent, setCurrentContent] = useState<React.ReactNode>(
//     <Dashboard />
//   );

//   const onMenuClick: MenuProps["onClick"] = (e) => {
//     switch (e.key) {
//       case "/dashboard":
//         setCurrentContent(<Dashboard />);
//         break;
//       case "add-member":
//         setCurrentContent(<AddMember />);
//         break;
//       case "view-member":
//         setCurrentContent(<ViewMembers />);
//         break;
//       case "update-member":
//         setCurrentContent(<UpdateMember />);
//         break;
//       case "points-management":
//         setCurrentContent(<PointsManagementForm />);
//         break;
//       case "transaction-management":
//         setCurrentContent(<TransactionManagementForm />); // Set Transaction Management Form as the content
//         break;
//       default:
//         setCurrentContent(<Dashboard />);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) setIsLogged(true);
//     else {
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <>
//       {isLogged ? (
//         <Layout style={{ minHeight: "100vh" }}>
//           <Header
//             style={{
//               display: "flex",
//               alignItems: "center",
//               background: colorBgContainer,
//             }}
//           >
//             <div className="demo-logo" />
//             <Menu
//               theme="dark"
//               mode="horizontal"
//               defaultSelectedKeys={["1"]}
//               items={headerItems}
//               style={{ flex: 1, minWidth: 0 }}
//             />
//           </Header>
//           <Layout>
//             <Sider width={200} style={{ background: colorBgContainer }}>
//               <Menu
//                 mode="inline"
//                 defaultSelectedKeys={["/dashboard"]}
//                 defaultOpenKeys={["manage-members"]}
//                 style={{ height: "100%", borderRight: 0 }}
//                 items={sidebarItems}
//                 onClick={onMenuClick}
//               />
//             </Sider>
//             <Layout style={{ padding: "0 24px 24px" }}>
//               <Breadcrumb style={{ margin: "16px 0" }}>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item>
//               </Breadcrumb>
//               <Content
//                 style={{
//                   padding: 24,
//                   margin: 0,
//                   minHeight: 280,
//                   background: colorBgContainer,
//                   borderRadius: borderRadiusLG,
//                 }}
//               >
//                 {currentContent}
//               </Content>
//             </Layout>
//           </Layout>
//         </Layout>
//       ) : (
//         <>Loading.....</>
//       )}
//     </>
//   );
// };

// export default MainLayout;

//-----------------------------------

// import React, { useEffect, useState } from "react";
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   HistoryOutlined,
//   AccountBookOutlined,
//   TrophyOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Breadcrumb, Layout, Menu, theme, Avatar, Typography } from "antd";
// import AddMember from "../pages/AddMember";
// import Dashboard from "../pages/Dashboard";
// import UpdateMember from "../pages/UpdateMember";
// import ViewMembers from "../pages/ViewMembers";
// import PointsManagementForm from "../pages/PointsManagementForm";
// import TransactionManagementForm from "../pages/TransactionManagementForm";
// import { useNavigate } from "react-router-dom";
// import "./MainLayout.css"; // Import CSS file for custom styles and animations

// const { Header, Content, Sider } = Layout;
// const { Text } = Typography;

// const sidebarItems: MenuProps["items"] = [
//   {
//     key: "/dashboard",
//     icon: React.createElement(DashboardOutlined),
//     label: "Dashboard",
//   },
//   {
//     key: "manage-members",
//     icon: React.createElement(TeamOutlined),
//     label: "Manage Members",
//     children: [
//       {
//         key: "add-member",
//         label: "Add Member",
//       },
//       {
//         key: "view-member",
//         label: "View Member",
//       },
//       {
//         key: "update-member",
//         label: "Update Member",
//       },
//     ],
//   },
//   {
//     key: "points-management",
//     icon: React.createElement(TrophyOutlined),
//     label: "Points Management",
//   },
//   {
//     key: "transaction-management",
//     icon: React.createElement(HistoryOutlined),
//     label: "Transaction Management",
//   },
//   {
//     key: "maintain-accounts",
//     icon: React.createElement(AccountBookOutlined),
//     label: "Maintain Accounts",
//     children: [
//       {
//         key: "account-details",
//         label: "Account Details",
//       },
//     ],
//   },
// ];

// // const headerItems: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
// //   key,
// //   label: `nav ${key}`,
// // }));

// const MainLayout: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const [isLogged, setIsLogged] = useState(false);
//   const [adminName, setAdminName] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const [currentContent, setCurrentContent] = useState<React.ReactNode>(
//     <Dashboard />
//   );

//   const onMenuClick: MenuProps["onClick"] = (e) => {
//     switch (e.key) {
//       case "/dashboard":
//         setCurrentContent(<Dashboard />);
//         break;
//       case "add-member":
//         setCurrentContent(<AddMember />);
//         break;
//       case "view-member":
//         setCurrentContent(<ViewMembers />);
//         break;
//       case "update-member":
//         setCurrentContent(<UpdateMember />);
//         break;
//       case "points-management":
//         setCurrentContent(<PointsManagementForm />);
//         break;
//       case "transaction-management":
//         setCurrentContent(<TransactionManagementForm />);
//         break;
//       default:
//         setCurrentContent(<Dashboard />);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const admin = localStorage.getItem("adminName");
//     if (token) {
//       setIsLogged(true);
//       setAdminName(admin);
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <>
//       {isLogged ? (
//         <Layout style={{ minHeight: "100vh" }}>
//           <Header
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               background: colorBgContainer,
//             }}
//           >
//             <div className="demo-logo" />
//             {/* <Menu
//               theme="dark"
//               mode="horizontal"
//               defaultSelectedKeys={["1"]}
//               items={headerItems}
//               style={{ flex: 1, minWidth: 0 }}
//             /> */}
//             <div className="admin-info">
//               <Avatar
//                 style={{ backgroundColor: "#87d068" }}
//                 icon={<DashboardOutlined />}
//               />
//               <Text className="admin-name">{adminName}</Text>
//             </div>
//           </Header>
//           <Layout>
//             <Sider width={200} style={{ background: colorBgContainer }}>
//               <Menu
//                 mode="inline"
//                 defaultSelectedKeys={["/dashboard"]}
//                 defaultOpenKeys={["manage-members"]}
//                 style={{ height: "100%", borderRight: 0 }}
//                 items={sidebarItems}
//                 onClick={onMenuClick}
//               />
//             </Sider>
//             <Layout style={{ padding: "0 24px 24px" }}>
//               <Breadcrumb style={{ margin: "16px 0" }}>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item>
//               </Breadcrumb>
//               <Content
//                 style={{
//                   padding: 24,
//                   margin: 0,
//                   minHeight: 280,
//                   background: colorBgContainer,
//                   borderRadius: borderRadiusLG,
//                 }}
//               >
//                 {currentContent}
//               </Content>
//             </Layout>
//           </Layout>
//         </Layout>
//       ) : (
//         <>Loading.....</>
//       )}
//     </>
//   );
// };

// export default MainLayout;

//============================================
//=====================================================
// import React, { useEffect, useState } from "react";
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   HistoryOutlined,
//   AccountBookOutlined,
//   TrophyOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Breadcrumb, Layout, Menu, theme, Avatar, Typography } from "antd";
// import AddMember from "../pages/AddMember";
// import Dashboard from "../pages/Dashboard";
// import UpdateMember from "../pages/UpdateMember";
// import ViewMembers from "../pages/ViewMembers";
// import PointsManagementForm from "../pages/PointsManagementForm";
// import TransactionManagementForm from "../pages/TransactionManagementForm";
// import AccountDetails from "../pages/AccountDetails"; // Import the AccountDetails page
// import { useNavigate } from "react-router-dom";
// import "./MainLayout.css";

// const { Header, Content, Sider } = Layout;
// const { Text } = Typography;

// const sidebarItems: MenuProps["items"] = [
//   {
//     key: "/dashboard",
//     icon: React.createElement(DashboardOutlined),
//     label: "Dashboard",
//   },
//   {
//     key: "manage-members",
//     icon: React.createElement(TeamOutlined),
//     label: "Manage Members",
//     children: [
//       {
//         key: "add-member",
//         label: "Add Member",
//       },
//       {
//         key: "view-member",
//         label: "View Member",
//       },
//       {
//         key: "update-member",
//         label: "Update Member",
//       },
//     ],
//   },
//   {
//     key: "points-management",
//     icon: React.createElement(TrophyOutlined),
//     label: "Points Management",
//   },
//   {
//     key: "transaction-management",
//     icon: React.createElement(HistoryOutlined),
//     label: "Transaction Management",
//   },
//   {
//     key: "maintain-accounts",
//     icon: React.createElement(AccountBookOutlined),
//     label: "Maintain Accounts",
//     children: [
//       {
//         key: "account-details",
//         label: "Account Details",
//       },
//     ],
//   },
// ];

// const MainLayout: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const [isLogged, setIsLogged] = useState(false);
//   const [adminName, setAdminName] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const [currentContent, setCurrentContent] = useState<React.ReactNode>(
//     <Dashboard />
//   );

//   const onMenuClick: MenuProps["onClick"] = (e) => {
//     switch (e.key) {
//       case "/dashboard":
//         setCurrentContent(<Dashboard />);
//         break;
//       case "add-member":
//         setCurrentContent(<AddMember />);
//         break;
//       case "view-member":
//         setCurrentContent(<ViewMembers />);
//         break;
//       case "update-member":
//         setCurrentContent(<UpdateMember />);
//         break;
//       case "points-management":
//         setCurrentContent(<PointsManagementForm />);
//         break;
//       case "transaction-management":
//         setCurrentContent(<TransactionManagementForm />);
//         break;
//       case "account-details":
//         setCurrentContent(<AccountDetails />); // Set Account Details as the content
//         break;
//       default:
//         setCurrentContent(<Dashboard />);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const admin = localStorage.getItem("adminName");
//     if (token) {
//       setIsLogged(true);
//       setAdminName(admin);
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <>
//       {isLogged ? (
//         <Layout style={{ minHeight: "100vh" }}>
//           <Header
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               background: colorBgContainer,
//             }}
//           >
//             <div className="demo-logo" />
//             <div className="admin-info">
//               <Avatar
//                 style={{ backgroundColor: "#87d068" }}
//                 icon={<UserOutlined />}
//               />
//               <Text className="admin-name">{adminName}</Text>
//             </div>
//           </Header>
//           <Layout>
//             <Sider width={200} style={{ background: colorBgContainer }}>
//               <Menu
//                 mode="inline"
//                 defaultSelectedKeys={["/dashboard"]}
//                 defaultOpenKeys={["manage-members"]}
//                 style={{ height: "100%", borderRight: 0 }}
//                 items={sidebarItems}
//                 onClick={onMenuClick}
//               />
//             </Sider>
//             <Layout style={{ padding: "0 24px 24px" }}>
//               <Breadcrumb style={{ margin: "16px 0" }}>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item>
//               </Breadcrumb>
//               <Content
//                 style={{
//                   padding: 24,
//                   margin: 0,
//                   minHeight: 280,
//                   background: colorBgContainer,
//                   borderRadius: borderRadiusLG,
//                 }}
//               >
//                 {currentContent}
//               </Content>
//             </Layout>
//           </Layout>
//         </Layout>
//       ) : (
//         <>Loading.....</>
//       )}
//     </>
//   );
// };

// export default MainLayout;

//Logout Changes

//

import React, { useEffect, useState } from "react";
import {
  DashboardOutlined,
  TeamOutlined,
  HistoryOutlined,
  AccountBookOutlined,
  TrophyOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Avatar,
  Typography,
  Button,
} from "antd";
import AddMember from "../pages/AddMember";
import Dashboard from "../pages/Dashboard";
import UpdateMember from "../pages/UpdateMember";
import ViewMembers from "../pages/ViewMembers";
import PointsManagementForm from "../pages/PointsManagementForm";
import TransactionManagementForm from "../pages/TransactionManagementForm";
import AccountDetails from "../pages/AccountDetails"; // Import the AccountDetails page
import { useNavigate } from "react-router-dom";
import "./MainLayout.css";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const sidebarItems: MenuProps["items"] = [
  {
    key: "/dashboard",
    icon: React.createElement(DashboardOutlined),
    label: "Dashboard",
  },
  {
    key: "manage-members",
    icon: React.createElement(TeamOutlined),
    label: "Manage Members",
    children: [
      {
        key: "add-member",
        label: "Add Member",
      },
      {
        key: "view-member",
        label: "View Member",
      },
      {
        key: "update-member",
        label: "Update Member",
      },
    ],
  },
  {
    key: "points-management",
    icon: React.createElement(TrophyOutlined),
    label: "Points Management",
  },
  {
    key: "transaction-management",
    icon: React.createElement(HistoryOutlined),
    label: "Transaction Management",
  },
  {
    key: "maintain-accounts",
    icon: React.createElement(AccountBookOutlined),
    label: "Maintain Accounts",
    children: [
      {
        key: "account-details",
        label: "All Admin Accounts",
      },
    ],
  },
];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isLogged, setIsLogged] = useState(false);
  const [adminName, setAdminName] = useState<string | null>(null);
  const navigate = useNavigate();
  const [currentContent, setCurrentContent] = useState<React.ReactNode>(
    <Dashboard />
  );

  const onMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "/dashboard":
        setCurrentContent(<Dashboard />);
        break;
      case "add-member":
        setCurrentContent(<AddMember />);
        break;
      case "view-member":
        setCurrentContent(<ViewMembers />);
        break;
      case "update-member":
        setCurrentContent(<UpdateMember />);
        break;
      case "points-management":
        setCurrentContent(<PointsManagementForm />);
        break;
      case "transaction-management":
        setCurrentContent(<TransactionManagementForm />);
        break;
      case "account-details":
        setCurrentContent(<AccountDetails />); // Set Account Details as the content
        break;
      default:
        setCurrentContent(<Dashboard />);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
      });
      localStorage.removeItem("token");
      localStorage.removeItem("adminName");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const admin = localStorage.getItem("adminName");
    if (token) {
      setIsLogged(true);
      setAdminName(admin);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      {isLogged ? (
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: colorBgContainer,
            }}
          >
            <div className="demo-logo" />
            <div className="admin-info">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
              <Text className="admin-name">{localStorage.getItem("name")}</Text>
              <Button
                type="default"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                style={{ marginLeft: "16px" }}
              >
                Logout
              </Button>
            </div>
          </Header>
          <Layout>
            <Sider width={230} style={{ background: colorBgContainer }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["/dashboard"]}
                defaultOpenKeys={["manage-members"]}
                style={{ height: "100%", borderRight: 0 }}
                items={sidebarItems}
                onClick={onMenuClick}
              />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {currentContent}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <>Loading.....</>
      )}
    </>
  );
};

export default MainLayout;
