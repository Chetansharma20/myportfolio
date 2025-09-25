import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "MUI",
        "Redux Toolkit",
        "Razorpay",
      ],
      githubUrl: "https://github.com/Chetansharma20/OnlineShoppingWebsite",
      liveUrl: "https://your-ecommerce-demo.com",
    },
    {
      title: "Payroll Management System",
      description:
        "A full-stack payroll management application built with the MERN stack, featuring employee management, salary settings, leave tracking, and salary slip generation.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "MUI",
        "Redux Toolkit",
      ],
      githubUrl: "https://github.com/Chetansharma20/Payroll-System",
      liveUrl: "https://your-payroll-demo.com",
    },
    {
      title: "Store Rating System",
      description:
        "A full-stack web application built with the MERN stack that allows users to rate and review stores. Features include role-based dashboards for Admin, Store Owners, and Users, as well as real-time ratings and analytics.",
      technologies: [
        "React",
        "Node.js",
        "MySql(Sequelize ORM)",
        "Express",
        "MUI",
        "Redux Toolkit",
      ],
      githubUrl: "https://github.com/Chetansharma20/store-rating",
      liveUrl: "https://your-store-rating-demo.com",
    },
  ];

  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: { xs: 6, md: 8 },
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
          }}
        >
          My Projects
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{
            mb: { xs: 6, md: 8 },
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
            },
            px: { xs: 2, sm: 0 },
          }}
        >
          Here are some of my recent projects that showcase my skills in
          full-stack development
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    component="h3"
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: "1.1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                      },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontSize: {
                        xs: "0.875rem",
                        sm: "0.9rem",
                      },
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 3, sm: 4 },
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: { xs: 0.25, sm: 0.5 },
                      mb: 2,
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                        sx={{
                          fontSize: {
                            xs: "0.7rem",
                            sm: "0.75rem",
                          },
                          height: { xs: 24, sm: 28 },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    p: { xs: 2, sm: 3 },
                    pt: 0,
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" },
                    "& .MuiButton-root": {
                      minWidth: { xs: "100%", sm: "auto" },
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                >
                  <Button
                    size={isSmallMobile ? "small" : "medium"}
                    startIcon={<GitHub />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    fullWidth={isSmallMobile}
                  >
                    Code
                  </Button>
                  <Button
                    size={isSmallMobile ? "small" : "medium"}
                    startIcon={<Launch />}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    fullWidth={isSmallMobile}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 6, md: 8 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          {/* <Button
            variant="contained"
            size={isMobile ? "medium" : "large"}
            onClick={() => navigate("/screenshots")}
            sx={{
              px: { xs: 3, md: 4 },
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
              },
            }}
          >
            View Project Screenshots
          </Button> */}
          <Button
            variant="outlined"
            size={isMobile ? "medium" : "large"}
            startIcon={<GitHub />}
            href="https://github.com/Chetansharma20"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: { xs: 3, md: 4 },
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
              },
            }}
          >
            View All Projects on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
