// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Card, Typography, Col, Row, Statistic, Spin } from "antd";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import axios from "axios";

const { Title: AntTitle } = Typography;

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<any>(null);
  const [totalMembers, setTotalMembers] = useState<number>(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch data from API
        const [membersResponse, statsResponse] = await Promise.all([
          axios.get("/api/members/enrolled-over-time"),
          axios.get("/api/members/total"),
        ]);

        // Process data for chart
        const enrolledData = membersResponse.data;
        const labels = enrolledData.map((entry: any) => entry.date);
        const data = enrolledData.map((entry: any) => entry.count);

        // Set chart data
        setChartData({
          labels,
          datasets: [
            {
              label: "Members Enrolled Over Time",
              data,
              borderColor: "#4CAF50",
              backgroundColor: "rgba(76, 175, 80, 0.2)",
              borderWidth: 2,
              tension: 0.1,
            },
          ],
        });

        // Set total members
        setTotalMembers(statsResponse.data.total);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div
      style={{ padding: "24px", backgroundColor: "#fff", minHeight: "100vh" }}
    >
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row gutter={16}>
            <Col span={24}>
              <Card>
                <AntTitle level={2}>Dashboard</AntTitle>
                <Row gutter={16}>
                  <Col span={24}>
                    <Statistic
                      title="Total Members"
                      value={totalMembers}
                      precision={0}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Card>
                <AntTitle level={3}>Members Enrolled Over Time</AntTitle>
                {chartData ? (
                  <Line data={chartData} />
                ) : (
                  <p>No data available</p>
                )}
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Dashboard;
