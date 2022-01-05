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
      <Paper sx={{ m: 1, p: 1, width: "70vw" }} elevation={3}>
        <Stack alignItems="center">
          {" "}
          <SpikePongGame />
          <Typography>
            Note: you need a keyboard to play, which means this won't work on
            mobile
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Home;
