import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Code,
  Psychology,
  Group,
} from '@mui/icons-material';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const highlights = [
    {
      icon: <Code />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code using best practices.',
    },
    {
      icon: <Psychology />,
      title: 'Problem Solving',
      description: 'Analytical mindset with a passion for solving complex technical challenges.',
    },
    {
      icon: <Group />,
      title: 'Team Player',
      description: 'Collaborative approach with excellent communication and leadership skills.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ 
            mb: 8,
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem'
            }
          }}
        >
          About Me
        </Typography>
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: { xs: 3, md: 4 } 
            }}>
              <Box
                sx={{
                  width: { xs: 200, sm: 225, md: 250 },
                  height: { xs: 200, sm: 225, md: 250 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: { xs: 1, sm: 2 }, 
                  mb: 2 
                }}>
                  <Box sx={{ 
                    fontSize: { xs: 24, sm: 28, md: 30 }, 
                    textAlign: 'center' 
                  }}>⚙️</Box>
                  <Box sx={{ 
                    fontSize: { xs: 24, sm: 28, md: 30 }, 
                    textAlign: 'center' 
                  }}>🟢</Box>
                  <Box sx={{ 
                    fontSize: { xs: 24, sm: 28, md: 30 }, 
                    textAlign: 'center' 
                  }}>🍃</Box>
                  <Box sx={{ 
                    fontSize: { xs: 24, sm: 28, md: 30 }, 
                    textAlign: 'center' 
                  }}>🍂</Box>
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    textAlign: 'center', 
                    fontWeight: 'bold', 
                    color: 'primary.main',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                  }}
                >
                  MERN Stack
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    textAlign: 'center', 
                    color: 'text.secondary',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  Full Stack Developer
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
  <Typography 
    variant={isMobile ? "h5" : "h4"} 
    gutterBottom 
    color="primary"
    sx={{
      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '2rem' },
      textAlign: { xs: 'center', md: 'left' }
    }}
  >
    Hi there! I'm a passionate MERN Stack Developer
  </Typography>

  <Typography 
    variant="body1" 
    sx={{ 
      mb: 3, 
      fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
      lineHeight: 1.7,
      textAlign: { xs: 'center', md: 'left' },
      px: { xs: 1, sm: 0 }
    }}
  >
    I specialize in building scalable and responsive web applications with MongoDB, Express.js, React, and Node.js. 
    My hands-on projects, including a Payroll Management System, e-commerce platform, and food ordering app, 
    have strengthened my skills in both frontend and backend development. I focus on writing clean, maintainable code, 
    creating responsive UIs, and delivering practical solutions that are user-friendly and impactful.
  </Typography>

  <Typography 
    variant="body1" 
    sx={{ 
      fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
      lineHeight: 1.7,
      textAlign: { xs: 'center', md: 'left' },
      px: { xs: 1, sm: 0 }
    }}
  >
    When I’m not coding, I’m exploring new tools and frameworks, experimenting with side projects, 
    and improving my problem-solving skills through coding challenges.
  </Typography>
</Grid>

        </Grid>
        
        <Grid container spacing={4} sx={{ mt: { xs: 6, md: 8 } }}>
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    <Box sx={{ 
                      fontSize: { xs: 36, sm: 42, md: 48 } 
                    }}>{item.icon}</Box>
                  </Box>
                  <Typography 
                    variant={isMobile ? "h6" : "h5"} 
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: '1.1rem',
                        sm: '1.25rem',
                        md: '1.5rem'
                      }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: '0.875rem',
                        sm: '0.9rem'
                      }
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;