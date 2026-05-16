import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface Props {
  toggleSidebar: () => void;
}

const Navbar = ({
  toggleSidebar,
}: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1400,
        background:
          "linear-gradient(to right, #7c3aed, #ec4899)",
        boxShadow: 3,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <NotificationsIcon
          sx={{
            mr: 2,
            fontSize: 30,
          }}
        />

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Notification Dashboard
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Avatar
            sx={{
              bgcolor: "#f8fafc",
              color: "#7c3aed",
              fontWeight: "bold",
            }}
          >
            S
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;