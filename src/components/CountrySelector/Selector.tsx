import React from "react";
import "./Selector.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Countries } from "../interface";

const Selector: React.FC<Countries> = ({ countries }) => {
  return (
    <div className="selector">
      <Box sx={{ minWidth: 120, height: 30 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Country
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "Country",
              id: "uncontrolled-native",
            }}
          >
            {countries.map(({ Country, ISO2 }, index) => (
              <option key={index} value={ISO2.toLowerCase()}>
                {Country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};

export default Selector;
