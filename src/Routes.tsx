// src/Routes.tsx
import React from "react";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import LoginForm from "./pages/login/Login";
import RegisterForm from "./pages/login/Register";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
// import AddMember from "./pages/AddMember";
// import UpdateMember from "./pages/UpdateMember";
// import DeleteMember from "./pages/DeleteMember";
import ViewMembers from "./pages/ViewMembers";
import TransactionManagementForm from "./pages/TransactionManagementForm"; // Import the component

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/main-layout" element={<MainLayout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/add-member" element={<AddMember />} />
      <Route path="/update-member" element={<UpdateMember />} />
      <Route path="/delete-member" element={<DeleteMember />} /> */}
      <Route path="/view-members" element={<ViewMembers />} />
      <Route
        path="/transaction-management"
        element={<TransactionManagementForm />}
      />{" "}
      {/* Add the route */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </RouterRoutes>
  );
};

export default Routes;
