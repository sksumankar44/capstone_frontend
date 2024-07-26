import axios from "axios";

export const API_BASE_URL = "http://localhost:5050";

// API call to validate credentials
export const validateCredentials = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/validate`, {
      email,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error validating credentials:", error);
    throw error;
  }
};

// API call to register a new admin account
export const registerAdminAccount = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/register/createadminaccount`,
      {
        name,
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating admin account:", error);
    throw error;
  }
};

// API call to get admin accounts
export const getAdminAccounts = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/register/getadminaccounts`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching admin accounts:", error);
    throw error;
  }
};

// API call to delete admin account
export const deleteAdminAccount = async (id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/deleteadminaccount`, {
      data: { id },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting admin account:", error);
    throw error;
  }
};

// API call to create a new member account
export const createMemberAccount = async (
  memberName: string,
  email: string
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_BASE_URL}/member/creatememberaccount`,
      {
        member_name: memberName,
        email: email,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating member account:", error);
    throw error;
  }
};

// API call to update a member account
export const updateMemberAccount = async (
  currentEmail: string,
  newEmail: string,
  newName: string
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${API_BASE_URL}/member/updatememberaccount`,
      {
        currentEmail,
        newEmail,
        newName,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating member account:", error);
    throw error;
  }
};

// API call to delete a member account
export const deleteMemberAccount = async (email: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `${API_BASE_URL}/member/deletememberaccount`,
      {
        data: { email },
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting member account:", error);
    throw error;
  }
};

// API call to get member accounts
export const getMemberAccounts = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/member/getmembers`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching member accounts:", error);
    throw error;
  }
};

// API call to update member points
// export const updateMemberPoints = async (data: {
//   member: string;
//   points: number;
//   type: string;
//   description: string;
// }) => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.post(
//       `${API_BASE_URL}/points/updatememberpoints`,
//       data,
//       {
//         headers: {
//           "x-auth-token": token,
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     console.error("Error updating member points:", error);
//     throw error;
//   }
// };

// API call to update member points
export const updateMemberPoints = async (data: {
  member: string;
  points: number;
  type: string;
  description: string;
}) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_BASE_URL}/points/updatepoints`,
      data,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating member points:", error);
    throw error;
  }
};

export const getTransactions = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/transactions/gettransactions`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
