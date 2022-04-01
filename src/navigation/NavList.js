import { List } from "@mui/material";
import React from "react";

const PaperWrapper = (props) => {
  const { children } = props;
  return (
    <Paper
      sx={{ m: 1, p: 1, backgroundColor: "rgba(0,0,0,0.12)", opacity: "1" }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default PaperWrapper;
