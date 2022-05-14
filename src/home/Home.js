import ContactCard from "./ContactCard";
import { Stack, Box, Paper, Typography, Link } from "@mui/material";
import Resume from "./Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaperWrapper from "../PaperWrapper/PaperWrapper";

const Home = (props) => {
  return (
    <Stack>
      <PaperWrapper elevation={3}>
        <Stack
          direction={props.smallScreen ? "column" : "row"}
          sx={{ alignItems: "center" }}
          spacing={props.smallScreen ? 2 : 4}
        >
          <ContactCard smallScreen={props.smallScreen} />

          <Typography sx={{ maxWidth: "900px" }}>
            Hey, I'm Logan, a grad student at University of Washington. This
            site is an interactive extension of my resume, and I've also
            included some pages about my hobbies so anyone who finds themself
            here (probably recruiters) can learn about me. I'm working on a
            master's degree in computer science, which I'm finishing in Spring
            2022, and I do some research and TA work for the Allen school. I
            also did a minor in experimental physics. My primary career focus is
            machine learning at the moment, but I'm also interested in
            algorithms and complexity. I like to{" "}
            {<Link href={"running"}>run</Link>} and{" "}
            {<Link href={"climbing"}>rock climb</Link>}, and I try to hike a few
            times a year. I like to read and watch sci-fi and fantasy, and I
            watch anime. Click an item in the left menu to learn more!
          </Typography>
        </Stack>
      </PaperWrapper>
      {/* <Resume /> */}
    </Stack>
  );
};

export default Home;
