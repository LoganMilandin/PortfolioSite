import ContactCard from "./ContactCard";
import { Stack, Box, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ flexWrap: "wrap", display: "flex" }}>
      <Paper sx={{ maxWidth: 500, m: 1, p: 1 }} elevation={3}>
        <Typography>
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
          hello my name is logan hello my name is logan hello my name is logan
        </Typography>
      </Paper>
      <ContactCard />
    </Box>
  );
};

export default Home;
