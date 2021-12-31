import SpikePongGame from "./SpikePongGame";
import { Stack, Box, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    <Stack>
      <Paper sx={{ m: 1, width: "70vw" }} elevation={3}>
        <Typography>
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words
        </Typography>
      </Paper>
      <Paper sx={{ m: 1, width: "70vw" }} elevation={3}>
        <SpikePongGame />
      </Paper>
    </Stack>
  );
};

export default Home;
