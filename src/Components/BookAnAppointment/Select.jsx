import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import style from "../BookAnAppointment/style.module.css";

export default function BasicSelect() {
  const [service, setService] = React.useState("");

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth className={style.form}>
        <InputLabel id="demo-simple-select-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Service"
          onChange={handleChange}
        >
          <MenuItem value="braiding">Braids</MenuItem>
          <MenuItem value="weaving">Wigs n Weaves</MenuItem>
          <MenuItem value="natural hair care">Natural Hair Care</MenuItem>
          <MenuItem value="braiding">Spa n Massage</MenuItem>
          <MenuItem value="weaving">Tattoos and Piercings</MenuItem>
          <MenuItem value="natural hair care">Hands and Feet</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
