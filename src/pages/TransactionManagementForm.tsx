// import React, { useState, useEffect } from "react";
// import { Table, Input, Button, Card, Space, message } from "antd";
// import moment from "moment";
// import { getTransactions } from "../pages/login/api"; // Import your API function

// const TransactionManagementForm: React.FC = () => {
//   const [transactions, setTransactions] = useState<any[]>([]);
//   const [filteredTransactions, setFilteredTransactions] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     setLoading(true);
//     try {
//       const result = await getTransactions();
//       console.log("Result:", result);
//       console.log(result.response);

//       const sortedTransactions = result.response.sort(
//         (a: any, b: any) =>
//           new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
//       );

//       setTransactions(sortedTransactions);
//       setFilteredTransactions(sortedTransactions);
//     } catch (error) {
//       message.error("Error fetching transactions");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     const lowercasedFilter = searchTerm.toLowerCase();
//     const filtered = transactions.filter((transaction: any) =>
//       transaction.member.toLowerCase().includes(lowercasedFilter)
//     );
//     setFilteredTransactions(filtered);
//   };

//   const columns = [
//     {
//       title: "Member",
//       dataIndex: "member",
//       key: "member",
//     },

//     {
//       title: "Type",
//       dataIndex: "type",
//       key: "type",
//     },
//     {
//       title: "Points",
//       dataIndex: "points",
//       key: "points",
//     },
//     {
//       title: "Description",
//       dataIndex: "description",
//       key: "description",
//     },
//     {
//       title: "Admin",
//       dataIndex: "admin",
//       key: "admin",
//     },
//     {
//       title: "Date",
//       dataIndex: "created_at",
//       key: "created_at",
//       render: (text: string) => moment(text).format("DD-MM-YYYY HH:mm:ss"),
//     },
//   ];

//   return (
//     <Card
//       title="Transaction Management"
//       bordered={false}
//       style={{
//         maxWidth: "100%",
//         margin: "50px auto",
//         borderRadius: "10px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Space style={{ marginBottom: 16 }}>
//         <Input
//           placeholder="Search by member email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onPressEnter={handleSearch}
//           style={{ width: 300 }}
//         />
//         <Button type="primary" onClick={handleSearch}>
//           Search
//         </Button>
//       </Space>
//       <Table
//         columns={columns}
//         dataSource={filteredTransactions}
//         rowKey="id"
//         loading={loading}
//         pagination={{ pageSize: 10 }}
//       />
//     </Card>
//   );
// };

// export default TransactionManagementForm;

import React, { useState, useEffect } from "react";
import { Table, Input, Button, Card, Space, message } from "antd";
import moment from "moment";
import { getTransactions } from "../pages/login/api"; // Import your API function
import "./TransactionManagementForm.css"; // Import the CSS file

const TransactionManagementForm: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const result = await getTransactions();
      console.log("Result:", result);
      console.log(result.response);

      const sortedTransactions = result.response.sort(
        (a: any, b: any) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setTransactions(sortedTransactions);
      setFilteredTransactions(sortedTransactions);
    } catch (error) {
      message.error("Error fetching transactions");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = transactions.filter((transaction: any) =>
      transaction.member.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredTransactions(filtered);
  };

  const columns = [
    {
      title: "Member",
      dataIndex: "member",
      key: "member",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
      render: (points: number, record: any) => {
        const isCredit = record.type.toLowerCase() === "credit";
        return (
          <span style={{ color: isCredit ? "green" : "red" }}>
            {isCredit ? `+${points}` : `-${points}`}
          </span>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Admin",
      dataIndex: "admin",
      key: "admin",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (text: string) => moment(text).format("DD-MM-YYYY HH:mm:ss"),
    },
  ];

  return (
    <Card
      title="Transaction Management"
      bordered={false}
      style={{
        maxWidth: "100%",
        margin: "50px auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by member email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onPressEnter={handleSearch}
          style={{ width: 300 }}
        />
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={filteredTransactions}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
        className="styled-table"
      />
    </Card>
  );
};

export default TransactionManagementForm;
