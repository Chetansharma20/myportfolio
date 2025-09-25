import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

// Example static UI URLs. Replace/add your own URLs below.
const staticUIs = [
  {
    title: "Restaurant Landing Page UI",
    url: "https://chetansharma20.github.io/Restaurant/restaurant.html",
    description: "A modern landing page built with HTML and CSS.",
  },
  {
    title: "Formonix landing-page UI",
    url: "https://chetansharma20.github.io/forminix/formonix.html",
    description: "A clean landing page for a startup company using only HTML and CSS.",
  },
  {
    title: "Travis hero-section UI",
    url: "https://chetansharma20.github.io/travis/travis.html",
    description: "A stylish hero section for a website using pure HTML and CSS.",
  },
  {
    title: "Food Hero-section UI",
    url: "https://chetansharma20.github.io/burger/socialmedia.html",
    description: "A responsive hero section for a food delivery app using HTML and CSS.",
  },
  {
    title: "Hero-section UI",
    url: "http://127.0.0.1:5500/redplantsui.html",
    description: "A Hero-section UI for a website using basic HTML and CSS.",
  },
  {
    title: "Hero-section UI",
    url: "https://chetansharma20.github.io/yanya/yanya.html",
    description: "A product card component using HTML and CSS.",
  },
  {
    title: "Form  UI",
    url: "https://chetansharma20.github.io/formui/newform",
    description: "A Form UI using HTML and CSS.",
  },
  {
    title: "Contact Form UI",
    url: "https://chetansharma20.github.io/formdesign/desginform.html",
    description: "A Contact Form using HTML and CSS.",
  },
];

const StaticUISection = () => (
  <Box id="static-ui" sx={{ py: 10, backgroundColor: "background.paper" }}>
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        My Static UI Projects
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Explore my static UI projects created using only HTML and CSS.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {staticUIs.map((ui, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {ui.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {ui.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                href={ui.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ m: 2 }}
              >
                View UI
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default StaticUISection;
