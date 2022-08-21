import { Stack, Box, Paper, Typography } from "@mui/material";
import PaperWrapper from "../PaperWrapper/PaperWrapper";

const Teaching = () => {
  return (
    <Stack>
      <PaperWrapper elevation={3}>
        <Typography>
          In reverse chronological order, here are descriptions of my duties for
          each of the classes I've been a TA for.
        </Typography>
        <ul>
          <li>
            <Typography>
              CSE332: Data Structures and Parallelism - Developed exam and
              homework problems throughout the quarter, aligning with this
              course's efforts to continuously refresh its content and come up
              with new scenarios to highlight the use of data structures and
              concurrency. Taught weekly sections where I walked through sample
              problems that aim to develop understanding of common data
              structures and algorithms that use them such as searching and
              sorting. Held weekly office hours where I mainly helped students
              debug their data structure implementations.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE312: Foundations of Computing II - Held frequent office hours,
              mostly devoted to providing conceptual help to students working on
              homeworking problems involving probability and enumeration. Also
              answered many questions in the Zoom chat during lectures. Held
              weekly quiz sections to walk through sample problems, graded
              homeworks and exams.
            </Typography>
          </li>
          <li>
            <Typography>
              CSE142: Computer Programming I - Taught weekly quiz sections
              walking through basic programming problems. Graded student
              assignments, focusing on providing detailed, constructive feedback
              that allowed students to improve their work before resubmitting
              for additional credit. This aligns with the course's focus on
              improvement and the idea that software development is iterative.
            </Typography>
          </li>
        </ul>
      </PaperWrapper>
    </Stack>
  );
};
export default Teaching;
