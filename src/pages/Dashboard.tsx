// import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "antd";
// import { Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { supabase } from "../supabaseClient";
// import moment from "moment";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard: React.FC = () => {
//   const [membersEnrolledData, setMembersEnrolledData] = useState<any>(null);
//   const [transactionTrendData, setTransactionTrendData] = useState<any>(null);
//   const [topMembersData, setTopMembersData] = useState<any>(null);

//   useEffect(() => {
//     const fetchMemberData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("members")
//           .select("created_at")
//           .order("created_at", { ascending: true });

//         if (error) throw error;

//         const membersByMonth = data.reduce((acc: any, member: any) => {
//           const month = moment(member.created_at).format("YYYY-MM");
//           acc[month] = (acc[month] || 0) + 1;
//           return acc;
//         }, {});

//         const labels = Object.keys(membersByMonth);
//         const dataPoints = Object.values(membersByMonth) as number[];

//         setMembersEnrolledData({
//           labels,
//           datasets: [
//             {
//               label: "Members Enrolled",
//               data: dataPoints,
//               backgroundColor: "rgba(75, 192, 192, 0.2)",
//               borderColor: "rgba(75, 192, 192, 1)",
//               borderWidth: 1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching member data:", error);
//       }
//     };

//     const fetchTransactionData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("transactions")
//           .select("created_at, points")
//           .order("created_at", { ascending: true });

//         if (error) throw error;

//         const transactionsByMonth = data.reduce(
//           (acc: any, transaction: any) => {
//             const month = moment(transaction.created_at).format("YYYY-MM");
//             acc[month] = (acc[month] || 0) + (transaction.points || 0);
//             return acc;
//           },
//           {}
//         );

//         const labels = Object.keys(transactionsByMonth);
//         const dataPoints = Object.values(transactionsByMonth) as number[];

//         setTransactionTrendData({
//           labels,
//           datasets: [
//             {
//               label: "Transaction Trend",
//               data: dataPoints,
//               borderColor: "#4caf50",
//               backgroundColor: "rgba(76, 175, 80, 0.2)",
//               fill: false,
//               tension: 0.1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching transaction data:", error);
//       }
//     };

//     const fetchTopMembersData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("members")
//           .select("member_name, points")
//           .order("points", { ascending: false });

//         if (error) throw error;

//         const labels = data.map((member: any) => member.member_name);
//         const dataPoints = data.map((member: any) => member.points) as number[];

//         setTopMembersData({
//           labels,
//           datasets: [
//             {
//               label: "Top Members by Points",
//               data: dataPoints,
//               backgroundColor: "rgba(255, 99, 132, 0.2)",
//               borderColor: "rgba(255, 99, 132, 1)",
//               borderWidth: 1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching top members data:", error);
//       }
//     };

//     fetchMemberData();
//     fetchTransactionData();
//     fetchTopMembersData();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Card title="Members Enrolled">
//             {membersEnrolledData && (
//               <Bar
//                 data={membersEnrolledData}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: {
//                       title: {
//                         display: true,
//                         text: "Month",
//                       },
//                     },
//                     y: {
//                       title: {
//                         display: true,
//                         text: "Number of Members",
//                       },
//                       beginAtZero: true,
//                     },
//                   },
//                 }}
//               />
//             )}
//           </Card>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Card title="Transaction Trend">
//             {transactionTrendData && (
//               <Line
//                 data={transactionTrendData}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: {
//                       title: {
//                         display: true,
//                         text: "Month",
//                       },
//                     },
//                     y: {
//                       title: {
//                         display: true,
//                         text: "Total Points",
//                       },
//                       beginAtZero: true,
//                     },
//                   },
//                 }}
//               />
//             )}
//           </Card>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Card title="Top Members by Points">
//             {topMembersData && (
//               <Bar
//                 data={topMembersData}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: {
//                       title: {
//                         display: true,
//                         text: "Member",
//                       },
//                       ticks: {
//                         autoSkip: false,
//                       },
//                     },
//                     y: {
//                       title: {
//                         display: true,
//                         text: "Points",
//                       },
//                       beginAtZero: true,
//                     },
//                   },
//                 }}
//               />
//             )}
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "antd";
// import { Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { supabase } from "../supabaseClient";
// import moment from "moment";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard: React.FC = () => {
//   const [membersEnrolledData, setMembersEnrolledData] = useState<any>(null);
//   const [transactionTrendData, setTransactionTrendData] = useState<any>(null);
//   const [topMembersData, setTopMembersData] = useState<any>(null);

//   useEffect(() => {
//     const fetchMemberData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("members")
//           .select("created_at")
//           .order("created_at", { ascending: true });

//         if (error) throw error;

//         const membersByDay = data.reduce((acc: any, member: any) => {
//           const day = moment(member.created_at).format("YYYY-MM-DD");
//           acc[day] = (acc[day] || 0) + 1;
//           return acc;
//         }, {});

//         const labels = Object.keys(membersByDay).map((day) =>
//           moment(day, "YYYY-MM-DD").format("MMM DD")
//         );
//         const dataPoints = Object.values(membersByDay) as number[];

//         setMembersEnrolledData({
//           labels,
//           datasets: [
//             {
//               label: "Members Enrolled",
//               data: dataPoints,
//               backgroundColor: "rgba(75, 111, 192, 0.5)",
//               borderColor: "rgba(75, 111, 192, 1)",
//               borderWidth: 1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching member data:", error);
//       }
//     };

//     const fetchTransactionData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("transactions")
//           .select("created_at, points")
//           .order("created_at", { ascending: true });

//         if (error) throw error;

//         const transactionsByDay = data.reduce((acc: any, transaction: any) => {
//           const day = moment(transaction.created_at).format("YYYY-MM-DD");
//           acc[day] = (acc[day] || 0) + (transaction.points || 0);
//           return acc;
//         }, {});

//         const labels = Object.keys(transactionsByDay).map((day) =>
//           moment(day, "YYYY-MM-DD").format("MMM DD")
//         );
//         const dataPoints = Object.values(transactionsByDay) as number[];

//         setTransactionTrendData({
//           labels,
//           datasets: [
//             {
//               label: "Transaction Trend",
//               data: dataPoints,
//               borderColor: "#4caf50",
//               backgroundColor: "rgba(76, 175, 80, 0.2)",
//               fill: false,
//               tension: 0.1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching transaction data:", error);
//       }
//     };

//     const fetchTopMembersData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("members")
//           .select("member_name, points")
//           .order("points", { ascending: false });

//         if (error) throw error;

//         const labels = data.map((member: any) => member.member_name);
//         const dataPoints = data.map((member: any) => member.points) as number[];

//         setTopMembersData({
//           labels,
//           datasets: [
//             {
//               label: "Top Members by Points",
//               data: dataPoints,
//               backgroundColor: "rgba(255, 1, 132, 0.2)",
//               borderColor: "rgba(255, 1, 132, 1)",
//               borderWidth: 1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching top members data:", error);
//       }
//     };

//     fetchMemberData();
//     fetchTransactionData();
//     fetchTopMembersData();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Card title="Members Enrolled">
//             {membersEnrolledData && (
//               <Bar
//                 data={membersEnrolledData}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: {
//                       title: {
//                         display: true,
//                         text: "Days",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                       },
//                       ticks: {
//                         font: {
//                           size: 14,
//                           weight: "bold",
//                         },
//                       },
//                     },
//                     y: {
//                       title: {
//                         display: true,
//                         text: "Number of Members",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                       },

//                       ticks: {
//                         font: {
//                           size: 14,
//                           weight: "bold",
//                         },
//                       },
//                       beginAtZero: true,
//                     },
//                   },
//                 }}
//               />
//             )}
//           </Card>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Card title="Transaction Trend">
//             {transactionTrendData && (
//               <Line
//                 data={transactionTrendData}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: {
//                       title: {
//                         display: true,
//                         text: "Days",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                       },
//                       ticks: {
//                         font: {
//                           size: 14,
//                           weight: "bold",
//                         },
//                       },
//                     },
//                     y: {
//                       title: {
//                         display: true,
//                         text: "Total Points",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                       },
//                       ticks: {
//                         font: {
//                           size: 14,
//                           weight: "bold",
//                         },
//                       },
//                       beginAtZero: true,
//                     },
//                   },
//                 }}
//               />
//             )}
//           </Card>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Card title="Top Members by Points">
//             {topMembersData && (
//               <Bar
//                 data={topMembersData}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: {
//                       title: {
//                         display: true,
//                         text: "Members",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                       },
//                       ticks: {
//                         autoSkip: false,
//                         font: {
//                           size: 14,
//                           weight: "bold",
//                         },
//                         color: "darkred",
//                       },
//                     },
//                     y: {
//                       title: {
//                         display: true,
//                         text: "Points",
//                         font: {
//                           size: 14,
//                           weight: "bold",
//                         },
//                       },
//                       ticks: {
//                         font: {
//                           size: 14,
//                           weight: "bold",
//                         },
//                       },
//                       beginAtZero: true,
//                     },
//                   },
//                 }}
//               />
//             )}
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Dashboard;

//=====-------------------------------===============================
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography } from "antd";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { supabase } from "../supabaseClient";
import moment from "moment";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const [membersEnrolledData, setMembersEnrolledData] = useState<any>(null);
  const [transactionTrendData, setTransactionTrendData] = useState<any>(null);
  const [topMembersData, setTopMembersData] = useState<any>(null);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const { data, error } = await supabase
          .from("members")
          .select("created_at")
          .order("created_at", { ascending: true });

        if (error) throw error;

        const membersByDay = data.reduce((acc: any, member: any) => {
          const day = moment(member.created_at).format("YYYY-MM-DD");
          acc[day] = (acc[day] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(membersByDay).map((day) =>
          moment(day, "YYYY-MM-DD").format("MMM DD")
        );
        const dataPoints = Object.values(membersByDay) as number[];

        setMembersEnrolledData({
          labels,
          datasets: [
            {
              label: "Members Enrolled",
              data: dataPoints,
              backgroundColor: "rgba(75, 111, 192, 0.5)",
              borderColor: "rgba(75, 111, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    const fetchTransactionData = async () => {
      try {
        const { data, error } = await supabase
          .from("transactions")
          .select("created_at, points")
          .order("created_at", { ascending: true });

        if (error) throw error;

        const transactionsByDay = data.reduce((acc: any, transaction: any) => {
          const day = moment(transaction.created_at).format("YYYY-MM-DD");
          acc[day] = (acc[day] || 0) + (transaction.points || 0);
          return acc;
        }, {});

        const labels = Object.keys(transactionsByDay).map((day) =>
          moment(day, "YYYY-MM-DD").format("MMM DD")
        );
        const dataPoints = Object.values(transactionsByDay) as number[];

        setTransactionTrendData({
          labels,
          datasets: [
            {
              label: "Transaction Trend",
              data: dataPoints,
              borderColor: "#4caf50",
              backgroundColor: "rgba(76, 175, 80, 0.2)",
              fill: false,
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    const fetchTopMembersData = async () => {
      try {
        const { data, error } = await supabase
          .from("members")
          .select("member_name, points")
          .order("points", { ascending: false });

        if (error) throw error;

        const labels = data.map((member: any) => member.member_name);
        const dataPoints = data.map((member: any) => member.points) as number[];
        const total = dataPoints.reduce((a, b) => a + b, 0);

        setTopMembersData({
          labels,
          datasets: [
            {
              label: "Top Members by Points",
              data: dataPoints,
              backgroundColor: "rgba(255, 1, 132, 0.2)",
              borderColor: "rgba(255, 1, 132, 1)",
              borderWidth: 1,
            },
          ],
        });

        setTotalPoints(total);
      } catch (error) {
        console.error("Error fetching top members data:", error);
      }
    };

    fetchMemberData();
    fetchTransactionData();
    fetchTopMembersData();
  }, []);

  return (
    <div className="dashboard">
      <Row gutter={16}>
        <Col xs={24} sm={12} lg={12}>
          <Card title="Members Enrolled">
            {membersEnrolledData && (
              <Bar
                data={membersEnrolledData}
                options={{
                  responsive: true,
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Days",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                      },
                      ticks: {
                        font: {
                          size: 14,
                          weight: "bold",
                        },
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Number of Members",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                      },
                      ticks: {
                        font: {
                          size: 14,
                          weight: "bold",
                        },
                      },
                      beginAtZero: true,
                    },
                  },
                }}
              />
            )}
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={12}>
          <Card title="Transaction Trend">
            {transactionTrendData && (
              <Line
                data={transactionTrendData}
                options={{
                  responsive: true,
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Days",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                      },
                      ticks: {
                        font: {
                          size: 14,
                          weight: "bold",
                        },
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Total Points",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                      },
                      ticks: {
                        font: {
                          size: 14,
                          weight: "bold",
                        },
                      },
                      beginAtZero: true,
                    },
                  },
                }}
              />
            )}
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} lg={24}>
          <Card title="Top Members by Points">
            {topMembersData && (
              <>
                <Typography.Paragraph>
                  <h5 color="red">
                    <strong>Total Points Distributed: {totalPoints}</strong>
                  </h5>
                </Typography.Paragraph>
                <div className="bar-chart-container">
                  <Bar
                    data={topMembersData}
                    options={{
                      responsive: true,
                      scales: {
                        x: {
                          title: {
                            display: true,
                            text: "Members",
                            font: {
                              size: 16,
                              weight: "bold",
                            },
                          },
                          ticks: {
                            autoSkip: false,
                            font: {
                              size: 14,
                              weight: "bold",
                            },
                            color: "darkred",
                          },
                        },
                        y: {
                          title: {
                            display: true,
                            text: "Points",
                            font: {
                              size: 16,
                              weight: "bold",
                            },
                          },
                          ticks: {
                            font: {
                              size: 14,
                              weight: "bold",
                            },
                          },
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
