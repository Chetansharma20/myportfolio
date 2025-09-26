import React from "react";
import { videoThumbnails } from "../assets/videoThumbnails";
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
import { PlayArrow, GitHub, Launch } from "@mui/icons-material";

const VideoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const videos = [
    {
      title: "E-Commerce Platform Demo",
      description:
        "A comprehensive walkthrough of the e-commerce platform showing user authentication, product management, cart functionality, and payment integration.",
      videoUrl: "https://res.cloudinary.com/duvw71tdz/video/upload/v1758862480/ecommercedemo_nud7s0.mp4",
      thumbnail: videoThumbnails["ecommerce"],
      duration: "8:45",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
      githubUrl: "https://github.com/Chetansharma20/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
    },
    {
      title: "Payroll Management System",
      description:
        "Demonstration of a full-stack payroll management application built with the MERN stack, featuring employee management, salary settings, leave tracking, and salary slip generation.",
      videoUrl: "https://www.youtube.com/embed/your-payroll-video-id", // replace with actual YouTube video ID
      duration: "8:45", // replace with your actual video duration
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "MUI",
        "Redux Toolkit",
      ],
      githubUrl: "https://github.com/Chetansharma20/Payroll-System",
      liveUrl: "https://your-payroll-demo.com", // replace with actual live demo URL if available
    },
  ];

  const handleVideoPlay = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <Box id="videos" sx={{ py: 10, backgroundColor: "background.default" }}>
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
          Project Demos
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
          Watch detailed demonstrations of my projects in action
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {videos.map((video, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
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
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 200, sm: 240, md: 280 },
                    backgroundColor: "grey.900",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                  onClick={() => handleVideoPlay(video.videoUrl)}
                >
                  {/* Video thumbnail image */}
                  {video.thumbnail && (
                    <Box
                      component="img"
                      src={video.thumbnail}
                      alt={video.title + " thumbnail"}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                      }}
                    />
                  )}
                  {/* Play icon overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        borderRadius: "50%",
                        width: { xs: 60, sm: 70, md: 80 },
                        height: { xs: 60, sm: 70, md: 80 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <PlayArrow
                        sx={{
                          fontSize: { xs: 30, sm: 35, md: 40 },
                          color: "primary.main",
                          ml: 0.5,
                        }}
                      />
                    </Box>
                  </Box>
                  {/* Duration badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: { xs: 8, md: 10 },
                      right: { xs: 8, md: 10 },
                      backgroundColor: "rgba(0,0,0,0.8)",
                      color: "white",
                      px: { xs: 0.75, sm: 1 },
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      zIndex: 3,
                    }}
                  >
                    {video.duration}
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, sm: 3 } }}>
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
                    {video.title}
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
                    {video.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: { xs: 0.25, sm: 0.5 },
                      mb: 2,
                    }}
                  >
                    {video.technologies.map((tech, techIndex) => (
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
                    p: { xs: 2.5, sm: 3 },
                    pt: 0,
                    gap: { xs: 0.5, sm: 1 },
                    flexDirection: { xs: "column", sm: "row" },
                    "& .MuiButton-root": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      minWidth: { xs: "100%", sm: "auto" },
                    },
                  }}
                >
                  <Button
                    size={isSmallMobile ? "small" : "medium"}
                    startIcon={<PlayArrow />}
                    onClick={() => handleVideoPlay(video.videoUrl)}
                    variant="contained"
                    color="secondary"
                    fullWidth={isSmallMobile}
                  >
                    Watch Demo
                  </Button>
                  <Button
                    size={isSmallMobile ? "small" : "medium"}
                    startIcon={<GitHub />}
                    href={video.githubUrl}
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
                    href={video.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    fullWidth={isSmallMobile}
                  >
                    Live
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.25rem",
                md: "1.5rem",
              },
            }}
          >
            More Videos Coming Soon
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: {
                xs: "0.875rem",
                sm: "0.9rem",
              },
              px: { xs: 2, sm: 0 },
            }}
          >
            I regularly create video content showcasing new projects and
            tutorials. Follow my GitHub for updates on new releases.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
