import ContactCard from "./ContactCard";
import { Stack, Box, Paper, Typography } from "@mui/material";
import Resume from "./Resume";

const Home = (props) => {
  return (
    <Stack>
      <Paper sx={{ m: 2, p: 2 }} elevation={3}>
        <Stack
          direction={props.smallScreen ? "column" : "row"}
          sx={{ alignItems: "center" }}
          spacing={props.smallScreen ? 2 : 4}
        >
          <ContactCard smallScreen={props.smallScreen} />

          <Typography sx={{ maxWidth: "900px" }}>
            Hey, I'm Logan, a grad student at University of Washington and
            soon-to-be engineer. My intention for this site is to provide an
            interactive extension of my resumé, plus a place to learn about my
            personal interests, so that recruiters and anyone checking out my
            LinkedIn can learn more about me. I'm working on a master's degree
            in computer science, which I'm finishing in Spring 2022, and I do
            some research and TA for the Allen school. My active hobbies include
            running and rock climbing (I made pages for these!), and I try to
            hike a few times a year. My less active hobbies include reading
            sci-fi and watching anime (I did not make pages for these). Click an
            item in the left menu to learn more!
          </Typography>
        </Stack>
      </Paper>
      <Resume />
    </Stack>
  );
};

export default Home;
