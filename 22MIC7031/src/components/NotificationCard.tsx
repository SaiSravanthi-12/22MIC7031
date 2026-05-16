import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";

interface Props {
  notification: any;
  markAsRead: (id: number) => void;
  deleteNotification: (id: number) => void;
}

const NotificationCard = ({
  notification,
  markAsRead,
  deleteNotification,
}: Props) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        boxShadow: 4,
        height: "100%",
        background: "#ffffff",
        border: "1px solid rgba(124, 58, 237, 0.12)",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 10,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          {notification.title}
        </Typography>

        <Chip
          label={notification.category}
          size="small"
          sx={{
            mb: 2,
            fontWeight: "bold",
          }}
        />

        <Typography
          color="text.secondary"
          sx={{
            mb: 3,
            minHeight: "60px",
          }}
        >
          {notification.message}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Chip
            label={notification.priority}
            color={
              notification.priority === "High"
                ? "error"
                : notification.priority ===
                  "Medium"
                ? "warning"
                : "primary"
            }
            sx={{
              fontWeight: "bold",
            }}
          />

          <Stack
            direction="row"
            spacing={1}
          >
            {!notification.read && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7c3aed",
                }}
                onClick={() =>
                  markAsRead(
                    notification.id
                  )
                }
              >
                Read
              </Button>
            )}

            <Button
              variant="outlined"
              sx={{
                borderColor: "#ec4899",
                color: "#ec4899",
              }}
              onClick={() =>
                deleteNotification(
                  notification.id
                )
              }
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;