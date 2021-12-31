import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactCard = () => {
  const phoneNumber = "206-335-3057";
  const email = "mi1andin@cs.washington.edu";
  const linkedInUrl = "linkedin.com/in/LoganMilandin";
  const githubUrl = "github.com/LoganMilandin";

  return (
    <Card sx={{ width: "350px", height: "350px", p: 1, m: 1 }} elevation={3}>
      <CardMedia
        component="img"
        src={require("./profilePic.png")}
        style={{
          borderRadius: "50%",
          height: "65%",
          width: "65%",
          margin: "0 auto",
        }}
        alt="me"
      />
      <CardContent>
        <Stack direction="row" spacing={2}>
          <PhoneIcon />
          <Typography variant="body1" color="text.secondary">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <EmailIcon />
          <Typography variant="body1" color="text.secondary">
            <a href={`mailto:${email}`}>{email}</a>
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <LinkedInIcon />
          <Typography variant="body1" color="text.secondary">
            <a href={`https://${linkedInUrl}`}>{linkedInUrl}</a>
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <GitHubIcon />
          <Typography variant="body1" color="text.secondary">
            <a href={`https://${githubUrl}`}>{githubUrl}</a>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
