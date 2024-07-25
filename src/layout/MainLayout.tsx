// // src/layout/MainLayout.tsx
// import React, { useState } from "react";
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   HistoryOutlined,
//   AccountBookOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Breadcrumb, Layout, Menu, theme } from "antd";
// import AddMember from "../pages/AddMember"; // Import AddMember component
// import Dashboard from "../pages/Dashboard"; // Import other components
// import UpdateMember from "../pages/UpdateMember";
// import DeleteMember from "../pages/DeleteMember";
// import ViewMembers from "../pages/ViewMembers";
// // import ViewMember from "../pages/ViewMember";
// // import TransactionsHistory from "../pages/TransactionsHistory";

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
//       {
//         key: "delete-member",
//         label: "Delete Member",
//       },
//     ],
//   },
//   {
//     key: "transactions-history",
//     icon: React.createElement(HistoryOutlined),
//     label: "Transactions History",
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
//       case "delete-member":
//         setCurrentContent(<DeleteMember />);
//         break;
//       // Add cases for other menu items as needed
//       default:
//         setCurrentContent(<Dashboard />);
//     }
//   };

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Header
//         style={{
//           display: "flex",
//           alignItems: "center",
//           background: colorBgContainer,
//         }}
//       >
//         <div className="demo-logo" />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={["1"]}
//           items={headerItems}
//           style={{ flex: 1, minWidth: 0 }}
//         />
//       </Header>
//       <Layout>
//         <Sider width={200} style={{ background: colorBgContainer }}>
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={["/dashboard"]}
//             defaultOpenKeys={["manage-members"]}
//             style={{ height: "100%", borderRight: 0 }}
//             items={sidebarItems}
//             onClick={onMenuClick}
//           />
//         </Sider>
//         <Layout style={{ padding: "0 24px 24px" }}>
//           <Breadcrumb style={{ margin: "16px 0" }}>
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>List</Breadcrumb.Item>
//             <Breadcrumb.Item>App</Breadcrumb.Item>
//           </Breadcrumb>
//           <Content
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             {currentContent}
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;

// src/layout/MainLayout.tsx
import React, { useEffect, useState } from "react";
import {
  DashboardOutlined,
  TeamOutlined,
  HistoryOutlined,
  AccountBookOutlined,
  TrophyOutlined, // Import new icon for Points Management
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import AddMember from "../pages/AddMember"; // Import AddMember component
import Dashboard from "../pages/Dashboard"; // Import other components
import UpdateMember from "../pages/UpdateMember";
import DeleteMember from "../pages/DeleteMember";
import ViewMembers from "../pages/ViewMembers";
import LoginForm from "../pages/login/Login";
import { useNavigate } from "react-router-dom";
// import ViewMember from "../pages/ViewMember";
// import TransactionsHistory from "../pages/TransactionsHistory";

const { Header, Content, Sider } = Layout;

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
      // {
      //   key: "delete-member",
      //   label: "Delete Member",
      // },
    ],
  },
  {
    key: "points-management",
    icon: React.createElement(TrophyOutlined),
    label: "Points Management",
    children: [
      {
        key: "view-points",
        label: "View Points",
      },
      {
        key: "add-points",
        label: "Add Points",
      },
      {
        key: "redeem-points",
        label: "Redeem Points",
      },
    ],
  },
  {
    key: "transactions-history",
    icon: React.createElement(HistoryOutlined),
    label: "Transactions History",
  },
  {
    key: "maintain-accounts",
    icon: React.createElement(AccountBookOutlined),
    label: "Maintain Accounts",
    children: [
      {
        key: "account-details",
        label: "Account Details",
      },
    ],
  },
];

const headerItems: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isLogged, setIsLogged] = useState(false);
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
      // case "delete-member":
      //   setCurrentContent(<DeleteMember />);
      //   break;
      // Add cases for other menu items as needed
      default:
        setCurrentContent(<Dashboard />);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLogged(true);
    else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {isLogged ? (
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              background: colorBgContainer,
            }}
          >
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={headerItems}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Layout>
            <Sider width={200} style={{ background: colorBgContainer }}>
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

//------------------------------------------------------------------------------
