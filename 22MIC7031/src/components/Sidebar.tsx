import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

interface Props {
  open: boolean;
}

const Sidebar = ({ open }: Props) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 240,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          background:
            "linear-gradient(to bottom, #1f2937, #111827)",
          color: "#f8fafc",
          border: "none",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ p: 3 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          AFFORDMED
        </Typography>

        <Typography
          variant="body1"
          sx={{ opacity: 0.8 }}
        >
          Notification System
        </Typography>
      </Box>

      <List>
        <ListItemButton
          component={Link}
          to="/"
          sx={{
            mx: 1,
            mb: 1,
            borderRadius: 2,
            color: "#f8fafc",

            "&:hover": {
              backgroundColor:
                "rgba(248,250,252,0.18)",
            },
          }}
        >
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/notifications"
          sx={{
            mx: 1,
            mb: 1,
            borderRadius: 2,
            color: "#f8fafc",

            "&:hover": {
              backgroundColor:
                "rgba(248,250,252,0.18)",
            },
          }}
        >
          <ListItemText primary="Notifications" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/settings"
          sx={{
            mx: 1,
            mb: 1,
            borderRadius: 2,
            color: "#f8fafc",

            "&:hover": {
              backgroundColor:
                "rgba(248,250,252,0.18)",
            },
          }}
        >
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;