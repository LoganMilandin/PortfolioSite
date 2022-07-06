import SpikePongGame from "./SpikePongGame";
import { Stack, Box, Paper, Typography, Link } from "@mui/material";
import PaperWrapper from "../PaperWrapper/PaperWrapper";

const SpikePong = () => {
  return (
    <Stack>
      <PaperWrapper elevation={3}>
        <Typography>
          This is the first project I ever made. I wrote it in a standalone HTML
          document during senior year of high school, but later React-ified it
          to embed it in this site.{" "}
          <Link
            href="https://github.com/LoganMilandin/SpikePong"
            target="_blank"
          >
            Here
          </Link>
          's the repo with the original (it's messy). Enjoy!
        </Typography>
      </PaperWrapper>
      <PaperWrapper elevation={3}>
        <Stack alignItems="center">
          {" "}
          <SpikePongGame />
          <Typography>Note: you need a keyboard to play</Typography>
        </Stack>
      </PaperWrapper>
    </Stack>
  );
};

export default SpikePong;
