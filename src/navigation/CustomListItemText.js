import { ListItemText } from "@mui/material";
import React from "react";

const CustomListItemText = (props) => {
  const { children } = props;
  return <ListItemText sx={{ color: "white" }} {...props} />;
};

export default CustomListItemText;
