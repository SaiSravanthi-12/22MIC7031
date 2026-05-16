import { TextField } from "@mui/material";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <TextField
      label="Search Notifications"
      variant="outlined"
      fullWidth
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
};

export default SearchBar;