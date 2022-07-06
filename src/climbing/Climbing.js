import ClimbingVideos from "./ClimbingVideos";
import { Stack, Box, Paper, Typography } from "@mui/material";
import PaperWrapper from "../PaperWrapper/PaperWrapper";

const Climbing = (props) => {
  return (
    <PaperWrapper elevation={3}>
      <Stack
        direction={props.smallScreen ? "column" : "row"}
        sx={{ alignItems: "center" }}
        spacing={10}
      >
        <div>
          <Stack sx={{ maxWidth: "800px", m: 1, p: 1 }} spacing={2}>
            <Typography variant="h4">My Journey</Typography>
            <Typography>
              I started climbing just before the pandemic and am now addicted. I
              like to boulder as well as climb bigger walls with a rope. These
              are videos of some of the harder boulders I've done, which I
              filmed to help me see and document my progress.
            </Typography>
          </Stack>
        </div>
        <ClimbingVideos />
      </Stack>
    </PaperWrapper>
  );
};

export default Climbing;
