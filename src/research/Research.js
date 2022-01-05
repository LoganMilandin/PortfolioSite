import { Stack, Box, Paper, Typography } from "@mui/material";
const Research = () => {
  return (
    <Stack>
      <Paper sx={{ p: 2, m: 2 }} elevation={3}>
        <Typography variant="h4">My Background</Typography>
        <Typography>
          Like many researchers, I started doing research out of a desire to
          apply what I was learning in school to solve real-world problems and
          develop novel ideas. I first got involved in research through the UW
          Privacy and Security Lab in my freshman year, where I worked on a
          desktop analysis tool for Facebook data. I enjoyed the experience, but
          did not continue with the lab in my sophomore year because I chose to
          work two part-time jobs, as a TA for the Allen School and as a
          computer science instructor for kids. At the start of my junior year,
          I was introduced to a large research project called Project Sidewalk
          through one of my classes, which aims to improve the accessibility of
          urban infrastructure. I've been working on this ever since.
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "10px" }}>
          Facebook Data Analysis Tool
        </Typography>
        <Typography>
          I developed this tool together with Christine Chen, a PhD student, for
          use in human trafficking clinics in cases where an abuser is
          monitoring a victim’s social media activity. We worked with members of
          a Cornell Tech clinic for trafficking victims to design data
          filtering, visualization, and annotation tools to help users identify
          an abuser's illicit activity. We then implemented a proof-of-concept
          prototype with a ReactJS frontend embedded into an Electron desktop
          application, interacting with a local SQLite database storing users'
          downloadable Facebook data.
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "10px" }}>
          Project Sidewalk
        </Typography>
        <Typography>
          The central element of this project is a web application that collects
          crowdsourced accessibility data, specifically about the presence or
          lack of sidewalk accessibility features such as curb ramps. My group's
          work on this project consists of developing machine learning models to
          assist in the validation of this crowdsourced data. The idea here is a
          user of the crowdsourcing tool labels a section of a Google Street
          View image with an accessibility feature/problem, which is then
          validated by asking other users whether they agree with the initial
          user's label. With a strong enough machine learning model, the second
          step can be partially automated, allowing quality data to be collected
          in larger quantities. Below is a writeup of some recent findings by my
          colleague and I.
        </Typography>
      </Paper>
      <Paper sx={{ p: 2, m: 2 }} elevation={3}>
        <iframe
          style={{ height: "100vh", width: "100%" }}
          src={"https://thatonegoat.github.io/sidewalk-cv-2021/"}
        />
      </Paper>
    </Stack>
  );
};
export default Research;
