import { useRef, useEffect } from "react";

import { Stack, Box, Paper, Typography } from "@mui/material";
import PaperWrapper from "../PaperWrapper/PaperWrapper";

const Snake = () => {
  const gameFrame = useRef(null);
  useEffect(() => {
    gameFrame.current.focus();
  }, []);
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
          <iframe
            frameborder="0"
            width="100%"
            height="1000px"
            src="https://replit.com/@Logmilly/Snake?lite=true&outputonly=true"
            ref={gameFrame}
          ></iframe>
          <Typography>
            Note: you need a keyboard to play, which means this won't work on
            mobile
          </Typography>
        </Stack>
      </PaperWrapper>
    </Stack>
  );
};

export default Snake;
