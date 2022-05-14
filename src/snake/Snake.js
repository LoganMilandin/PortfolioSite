import { useRef, useEffect } from "react";

import { Stack, Box, Paper, Typography, Link } from "@mui/material";
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
          This is a fun little implementation of the classic Snake game, written
          in Python using Tkinter. I built it several years ago when I was first
          learning Python, to get practice with the OOP constructs available
          therein.{" "}
          <Link href="https://github.com/LoganMilandin/Snake" target="_blank">
            Here
          </Link>
          's the code repo. Enjoy!
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
            Note: you need a keyboard to play, so this won't work on mobile
          </Typography>
        </Stack>
      </PaperWrapper>
    </Stack>
  );
};

export default Snake;
