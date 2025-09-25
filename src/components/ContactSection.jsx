import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send,
} from '@mui/icons-material';
  import emailjs from 'emailjs-com';
const ContactSection = () => {


const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send(
    'service_o5c159o',
    'template_g4qtytw',
    formData,
    'tNu1PI90o5a-eCsRk'
  )
  .then((result) => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  }, (error) => {
    alert('Failed to send message. Try again.');
    console.error(error);
  });
};

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  //   // You can integrate with a backend API or email service
  //   alert('Thank you for your message! I will get back to you soon.');
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  // };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'sharmachetan20082000@gmail.com',
      link: 'mailto:sharmachetan20082000@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 8080419573',
      link: 'tel:+918080419573',
    },
    {
      icon: <LocationOn />,
      title: 'Bhusawal',
      value: 'Bhusawal Maharashtra, India',
      link: null,
    },
  ];

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ 
            mb: { xs: 6, md: 8 },
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem'
            }
          }}
        >
          Get In Touch
        </Typography>
        
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ 
            mb: { xs: 6, md: 8 }, 
            fontSize: {
              xs: '1rem',
              sm: '1.1rem',
              md: '1.2rem'
            },
            px: { xs: 2, sm: 0 }
          }}
        >
          I'm always open to discussing new opportunities, interesting projects, or just having a chat
        </Typography>
        
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography 
                  variant={isMobile ? "h5" : "h4"} 
                  gutterBottom 
                  color="primary"
                  sx={{
                    fontSize: {
                      xs: '1.3rem',
                      sm: '1.5rem',
                      md: '2rem'
                    },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Contact Information
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: { xs: 3, md: 4 },
                    fontSize: {
                      xs: '0.875rem',
                      sm: '0.9rem'
                    },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Feel free to reach out through any of these channels
                </Typography>
                
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    component={info.link ? 'a' : 'div'}
                    href={info.link}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: { xs: 2.5, md: 3 },
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: 2,
                      textDecoration: 'none',
                      color: 'inherit',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                      ...(info.link && {
                        cursor: 'pointer',
                      }),
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: 40, sm: 45, md: 50 },
                        height: { xs: 40, sm: 45, md: 50 },
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        mr: { xs: 2, md: 3 },
                        fontSize: { xs: '1.2rem', sm: '1.3rem' }
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{
                          fontSize: {
                            xs: '1rem',
                            sm: '1.1rem',
                            md: '1.25rem'
                          }
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          fontSize: {
                            xs: '0.8rem',
                            sm: '0.875rem'
                          }
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                
                <Box sx={{ mt: { xs: 3, md: 4 } }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: '1rem',
                        sm: '1.1rem',
                        md: '1.25rem'
                      },
                      textAlign: { xs: 'center', md: 'left' }
                    }}
                  >
                    Follow Me
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: { xs: 1.5, md: 2 },
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}>
                    <IconButton
                      color="primary"
                      component="a"
                      href="https://github.com/Chetansharma20"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'action.hover',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      color="primary"
                      component="a"
                      href="https://www.linkedin.com/in/chetansharma2008"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'action.hover',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography 
                  variant={isMobile ? "h5" : "h4"} 
                  gutterBottom 
                  color="primary"
                  sx={{
                    fontSize: {
                      xs: '1.3rem',
                      sm: '1.5rem',
                      md: '2rem'
                    },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Send Message
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: { xs: 3, md: 4 },
                    fontSize: {
                      xs: '0.875rem',
                      sm: '0.9rem'
                    },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Have a project in mind? Let's discuss it
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      mb: { xs: 2.5, md: 3 },
                      '& .MuiInputBase-input': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      mb: { xs: 2.5, md: 3 },
                      '& .MuiInputBase-input': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      mb: { xs: 2.5, md: 3 },
                      '& .MuiInputBase-input': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={isMobile ? 3 : 4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      mb: { xs: 2.5, md: 3 },
                      '& .MuiInputBase-input': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size={isMobile ? "medium" : "large"}
                    startIcon={<Send />}
                    fullWidth
                    sx={{ 
                      py: { xs: 1.2, md: 1.5 },
                      fontSize: {
                        xs: '0.9rem',
                        sm: '1rem'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;