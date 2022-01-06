import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { Image } from "mui-image";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactCard = (props) => {
  const phoneNumber = "206-335-3057";
  const email = "mi1andin@cs.washington.edu";
  const linkedInUrl = "linkedin.com/in/LoganMilandin";
  const githubUrl = "github.com/LoganMilandin";
  const instagramUrl = "instagram.com/lmilandin/";

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Stack sx={{ alignItems: "center" }}>
        {" "}
        <Image
          src={require("./profilePic.png")}
          height="60%"
          width="60%"
          duration={500}
          sx={{ borderRadius: "50%" }}
        />
        <Typography variant="h4">Logan Milandin</Typography>
        <Typography variant="h6">Computer Science Student</Typography>
        <Stack direction="row" spacing={2}>
          <IconButton href={`tel:${phoneNumber}`}>
            <PhoneIcon />
          </IconButton>
          <IconButton href={`mailto:${email}`}>
            <EmailIcon />
          </IconButton>
          <IconButton href={`https://${linkedInUrl}`} target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton href={`https://${githubUrl}`} target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton href={`https://${instagramUrl}`} target="_blank">
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};

export default ContactCard;
