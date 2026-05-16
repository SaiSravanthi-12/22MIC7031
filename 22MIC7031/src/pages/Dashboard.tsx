import { useState } from "react";

import {
  Box,
  Grid,
  Typography,
  Toolbar,
} from "@mui/material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import NotificationCard from "../components/NotificationCard";

import useNotifications from "../hooks/useNotifications";

interface Props {
  darkMode: boolean;
}

const Dashboard = ({ darkMode }: Props) => {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const {
    notifications,
    markAsRead,
    deleteNotification,
  } = useNotifications();

  const unreadCount = notifications.filter(
    (n) => !n.read
  ).length;

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        toggleSidebar={toggleSidebar}
      />

      <Sidebar open={sidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          background: darkMode
            ? "linear-gradient(to right, #121212, #1e1e1e)"
            : "linear-gradient(to right, #faf5ff, #fff1f2)",
          minHeight: "100vh",
          transition: "0.3s",
          p: 4,
          color: darkMode ? "white" : "#1f2937",
        }}
      >
        <Toolbar />

        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            spacing={3}
            mb={4}
          >
            <Grid item xs={12} md={6}>
              <StatsCard
                title="Total Notifications"
                value={notifications.length}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <StatsCard
                title="Unread Notifications"
                value={unreadCount}
              />
            </Grid>
          </Grid>

          <Typography
            variant="h4"
            fontWeight="bold"
            mb={3}
          >
            Notifications
          </Typography>

          <Grid container spacing={3}>
            {notifications.map(
              (notification) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={notification.id}
                >
                  <NotificationCard
                    notification={
                      notification
                    }
                    markAsRead={
                      markAsRead
                    }
                    deleteNotification={
                      deleteNotification
                    }
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;