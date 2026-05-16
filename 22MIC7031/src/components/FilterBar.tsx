import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface Props {
  filter: string;
  setFilter: (value: string) => void;
}

const FilterBar = ({ filter, setFilter }: Props) => {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel>Filter</InputLabel>

      <Select
        value={filter}
        label="Filter"
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="read">Read</MenuItem>
        <MenuItem value="unread">Unread</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterBar;