import {
  Box,
  Typography,
  Toolbar,
  Card,
  CardContent,
  Switch,
  Stack,
} from "@mui/material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useState } from "react";

interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Settings = ({
  darkMode,
  setDarkMode,
}: Props) => {
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
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
          color: darkMode
            ? "white"
            : "black",
        }}
      >
        <Toolbar />

        <Typography
          variant="h3"
          fontWeight="bold"
          mb={4}
        >
          Settings
        </Typography>

        <Card
          sx={{
            maxWidth: 500,
            borderRadius: 4,
            boxShadow: 4,
            background: darkMode
              ? "#1e1e1e"
              : "#faf5ff",
            color: darkMode
              ? "white"
              : "#1f2937",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(124, 58, 237, 0.15)",
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">
                Dark Mode
              </Typography>

              <Switch
                checked={darkMode}
                onChange={() =>
                  setDarkMode(!darkMode)
                }
              />
            </Stack>

            <Typography
              mt={3}
              color={
                darkMode
                  ? "gray"
                  : "text.secondary"
              }
            >
              Enable dark mode across the
              entire application.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Settings;