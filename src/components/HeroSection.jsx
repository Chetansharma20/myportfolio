import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Download,
} from '@mui/icons-material';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
   <Box
  id="home"
  sx={{
    minHeight: isMobile ? 'auto' : '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    py: isMobile ? 5 : 0, // add some padding for mobile
  }}
>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography 
              variant={isMobile ? "h2" : "h1"} 
              gutterBottom
              sx={{ 
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3.5rem',
                  lg: '4rem'
                },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Hello, I'm{' '}
              <Box component="span" sx={{ color: '#ffeb3b' }}>
                {/* Your Name */}
                Chetan Sharma
              </Box>
            </Typography>
            <Typography 
              // variant={isMobile ? "h5" : "h4"} 
              gutterBottom 
              sx={{ 
                mb: 3,
                fontSize: {
                  xs: '1.3rem',
                  sm: '1.5rem',
                  md: '2rem'
                },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              MERN Stack Developer
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                fontSize: {
                  xs: '1rem',
                  sm: '1.1rem',
                  md: '1.2rem'
                }, 
                lineHeight: 1.6,
                textAlign: { xs: 'center', md: 'left' },
                px: { xs: 1, sm: 0 }
              }}
            >
              Passionate full-stack developer specializing in MongoDB, Express.js, 
              React, and Node.js. I create scalable web applications with modern 
              technologies and responsive design.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
              '& .MuiButton-root': {
                minWidth: { xs: '140px', sm: '160px' },
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }
            }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                sx={{
                  backgroundColor: '#ffeb3b',
                  color: '#333',
                  '&:hover': {
                    backgroundColor: '#ffc107',
                  },
                }}
                href="https://drive.google.com/file/d/1jz4QK7838n8Lp4-7XRqsSeBUSMIfufJg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHub />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: '#ffeb3b',
                    backgroundColor: 'rgba(255, 235, 59, 0.1)',
                  },
                }}
                href="https://github.com/Chetansharma20"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 4, md: 0 }
              }}
            >
              <Box
                sx={{
                  width: { xs: 200, sm: 250, md: 300 },
                  height: { xs: 200, sm: 250, md: 300 },
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  color: 'white',
                }}
              >
                <Box sx={{ 
                  fontSize: { xs: 50, sm: 65, md: 80 }, 
                  mb: 2 
                }}>
                  👨‍💻
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                  }}
                >
                  MERN Stack
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    textAlign: 'center',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  Developer
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;