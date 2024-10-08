// import React, { useEffect, useState } from "react";
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   HistoryOutlined,
//   AccountBookOutlined,
//   TrophyOutlined,
//   UserOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import {
//   Breadcrumb,
//   Layout,
//   Menu,
//   theme,
//   Avatar,
//   Typography,
//   Button,
// } from "antd";
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
//         label: "All Admin Accounts",
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

//   const handleLogout = async () => {
//     try {
//       await fetch("/api/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Include cookies in the request
//       });
//       localStorage.removeItem("token");
//       localStorage.removeItem("adminName");
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
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
//               <Text className="admin-name">{localStorage.getItem("name")}</Text>
//               <Button
//                 type="default"
//                 icon={<LogoutOutlined />}
//                 onClick={handleLogout}
//                 style={{ marginLeft: "16px" }}
//               >
//                 Logout
//               </Button>
//             </div>
//           </Header>
//           <Layout>
//             <Sider width={230} style={{ background: colorBgContainer }}>
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

//==============================
//============================

// import React, { useEffect, useState } from "react";
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   HistoryOutlined,
//   AccountBookOutlined,
//   TrophyOutlined,
//   UserOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import {
//   Breadcrumb,
//   Layout,
//   Menu,
//   theme,
//   Avatar,
//   Typography,
//   Button,
// } from "antd";
// // import AddMember from "../pages/AddMember";
// import Dashboard from "../pages/Dashboard";
// // import UpdateMember from "../pages/UpdateMember";
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
//       // {
//       //   key: "add-member",
//       //   label: "Add Member",
//       // },
//       {
//         key: "view-member",
//         label: "Member Management",
//       },
//       // {
//       //   key: "update-member",
//       //   label: "Update Member",
//       // },
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
//         label: "All Admin Accounts",
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
//       // case "add-member":
//       //   setCurrentContent(<AddMember />);
//       //   break;
//       case "view-member":
//         setCurrentContent(<ViewMembers />);
//         break;
//       // case "update-member":
//       //   setCurrentContent(<UpdateMember />);
//       //   break;
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

//   const handleLogout = async () => {
//     try {
//       await fetch("/api/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // Include cookies in the request
//       });
//       localStorage.removeItem("token");
//       localStorage.removeItem("adminName");
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
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
//         <Layout style={{ height: "100vh" }}>
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
//               <Text className="admin-name">{localStorage.getItem("name")}</Text>
//               <Button
//                 type="default"
//                 icon={<LogoutOutlined />}
//                 onClick={handleLogout}
//                 style={{ marginLeft: "16px" }}
//               >
//                 Logout
//               </Button>
//             </div>
//           </Header>
//           <Layout>
//             <Sider width={230} style={{ background: colorBgContainer }}>
//               <Menu
//                 mode="inline"
//                 defaultSelectedKeys={["/dashboard"]}
//                 //  defaultOpenKeys={["manage-members"]}
//                 style={{ height: "100%", borderRight: 0 }}
//                 items={sidebarItems}
//                 onClick={onMenuClick}
//               />
//             </Sider>
//             <Layout style={{ padding: "0 24px 24px" }}>
//               <Breadcrumb style={{ margin: "16px 0" }}>
//                 {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item> */}
//               </Breadcrumb>
//               <Content
//                 style={{
//                   padding: 24,
//                   margin: 0,
//                   minHeight: 280,
//                   background: colorBgContainer,
//                   borderRadius: borderRadiusLG,
//                   overflow: "hidden", // Prevents scrolling within Content
//                   // backgroundColor: "red",
//                 }}
//               >
//                 <div style={{ height: "100%", overflowY: "auto" }}>
//                   {currentContent}
//                 </div>
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

//=======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
import Dashboard from "../pages/Dashboard";
import ViewMembers from "../pages/ViewMembers";
import PointsManagementForm from "../pages/PointsManagementForm";
import TransactionManagementForm from "../pages/TransactionManagementForm";
import AccountDetails from "../pages/AccountDetails";
import { useNavigate } from "react-router-dom";
import "./MainLayout.css";
import logo from "../assets/comviva_logo_text.png"; // Import the logo image

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
        key: "view-member",
        label: "Member Management",
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
      case "view-member":
        setCurrentContent(<ViewMembers />);
        break;
      case "points-management":
        setCurrentContent(<PointsManagementForm />);
        break;
      case "transaction-management":
        setCurrentContent(<TransactionManagementForm />);
        break;
      case "account-details":
        setCurrentContent(<AccountDetails />);
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
        credentials: "include",
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
        <Layout style={{ height: "100vh" }}>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
              filter: "brightness(1.4) contrast(2)", // Adjust brightness and contrast
            }}
          ></video>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: colorBgContainer,
            }}
          >
            <img src={logo} alt="Logo" style={{ height: 40 }} />
            {/* Add the logo */}
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
                style={{ height: "100%", borderRight: 0 }}
                items={sidebarItems}
                onClick={onMenuClick}
              />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  overflow: "auto",
                }}
              >
                <div style={{ height: "100%" }}>{currentContent}</div>
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
