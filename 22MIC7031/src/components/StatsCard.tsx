import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  value: number;
}

const StatsCard = ({
  title,
  value,
}: Props) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        textAlign: "center",
        boxShadow: 4,
        py: 3,
        background: "#faf5ff",
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
          variant="h6"
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="h2"
          fontWeight="bold"
          color="#7c3aed"
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;