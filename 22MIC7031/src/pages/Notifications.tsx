import {
  Box,
  Typography,
  Toolbar,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NotificationCard from "../components/NotificationCard";

import { useState } from "react";
import useNotifications from "../hooks/useNotifications";

const activityCategories = [
  {
    value: "all",
    label: "All Activities",
  },
  {
    value: "Internship/job activities",
    label: "Internship/job activities",
  },
  {
    value: "Event/club activities",
    label: "Event/club activities",
  },
  {
    value: "Test/evaluation activities",
    label: "Test/evaluation activities",
  },
  {
    value: "Resume extracurricular activities",
    label: "Resume extracurricular activities",
  },
];

interface Props {
  darkMode: boolean;
}

const Notifications = ({ darkMode }: Props) => {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);
  const [activityFilter, setActivityFilter] =
    useState("all");

  const {
    notifications,
    markAsRead,
    deleteNotification,
  } = useNotifications();

  const filteredNotifications =
    activityFilter === "all"
      ? notifications
      : notifications.filter(
          (notification) =>
            notification.category ===
            activityFilter
        );

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        toggleSidebar={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

      <Sidebar open={sidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          background: darkMode
            ? "linear-gradient(to right, #121212, #1e1e1e)"
            : "linear-gradient(to right, #faf5ff, #fff1f2)",
          minHeight: "100vh",
          color: darkMode ? "white" : "#1f2937",
        }}
      >
        <Toolbar />

        <Typography
          variant="h3"
          fontWeight="bold"
          mb={3}
        >
          Notifications
        </Typography>

        <FormControl
          fullWidth
          sx={{ maxWidth: 360, mb: 4 }}
        >
          <InputLabel>Activity</InputLabel>
          <Select
            value={activityFilter}
            label="Activity"
            onChange={(e) =>
              setActivityFilter(
                e.target.value
              )
            }
          >
            {activityCategories.map(
              (category) => (
                <MenuItem
                  key={category.value}
                  value={category.value}
                >
                  {category.label}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>

        <Grid container spacing={3}>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(
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
            )
          ) : (
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)",
                }}
              >
                <Typography variant="h6">
                  No activities found for the
                  selected category.
                </Typography>
                <Typography
                  color={
                    darkMode
                      ? "text.secondary"
                      : "text.secondary"
                  }
                >
                  Choose a different activity type
                  from the dropdown.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Notifications;