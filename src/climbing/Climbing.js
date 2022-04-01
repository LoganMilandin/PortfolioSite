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
              Hey, I'm Logan, a grad student at UW and soon-to-be engineer. My
              intention for this site is to provide an interactive extension of
              my resumé, plus a place to learn about my personal interests, so
              that recruiters and anyone checking out my LinkedIn can learn more
              about me. I'm working on a master's degree in computer science,
              which I'm finishing in Spring 2022, and I do some research and TA
              for the Allen school. Some of my active hobbies include running
              and rock climbing (I made pages for these!), and I try to hike a
              few times a year. Some of my less active hobbies include reading
              sci-fi and watching anime (I did not make pages for these). Click
              an item in the left menu to learn more!
            </Typography>
          </Stack>
        </div>
        <ClimbingVideos />
      </Stack>
    </PaperWrapper>
  );
};

export default Climbing;
