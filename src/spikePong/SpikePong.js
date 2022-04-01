import SpikePongGame from "./SpikePongGame";
import { Stack, Box, Paper, Typography } from "@mui/material";
import PaperWrapper from "../PaperWrapper/PaperWrapper";

const SpikePong = () => {
  return (
    <Stack>
      <PaperWrapper elevation={3}>
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
      </PaperWrapper>
      <PaperWrapper elevation={3}>
        <Stack alignItems="center">
          {" "}
          <SpikePongGame />
          <Typography>
            Note: you need a keyboard to play, which means this won't work on
            mobile
          </Typography>
        </Stack>
      </PaperWrapper>
    </Stack>
  );
};

export default SpikePong;
