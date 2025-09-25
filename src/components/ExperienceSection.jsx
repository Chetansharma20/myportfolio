import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Work,
  School,
  Code,
  Business,
} from '@mui/icons-material';

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      id: 1,
      title: 'MERN Stack Developer Intern',
      company: 'TechnoWeit',
      duration: 'December 2024 - May 2025',
      type: 'Internship',
      location: 'Jalgaon',
      description: [
        'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js',
        'Built responsive and user-friendly interfaces with modern React components and hooks',
        'Implemented RESTful APIs and integrated them with frontend applications',
        'Worked with databases to design efficient schemas and perform CRUD operations',
        'Collaborated with senior developers in an agile development environment',
        'Gained hands-on experience with version control using Git and GitHub',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      icon: <Work />,
      color: 'primary',
    },
  ];

  // const skills = [
  //   { category: 'Frontend', skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Material-UI', 'Responsive Design'] },
  //   { category: 'Backend', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication & Authorization'] },
  //   { category: 'Database', skills: ['MongoDB', 'Mongoose', 'Database Design', 'CRUD Operations', 'Mysql(Sequelize ORM)'] },
  //   { category: 'Tools & Others', skills: ['Git', 'GitHub', 'VS Code', 'Postman',  'Agile Methodology'] },
  // ];

  return (
    <Box id="experience" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 8 }}
        >
          Experience
        </Typography>
        
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 8, fontSize: '1.2rem' }}
        >
          My professional journey and internship experience in MERN stack development
        </Typography>

        {/* Timeline for larger screens, Cards for mobile */}
        {!isMobile ? (
          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                  color="text.secondary"
                >
                  {exp.duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color={exp.color} sx={{ p: 2 }}>
                    {exp.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Card
                    sx={{
                      maxWidth: 500,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h5" component="h3" gutterBottom color="primary">
                        {exp.title}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" gutterBottom>
                        {exp.company}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                        <Chip
                          label={exp.type}
                          size="small"
                          color="secondary"
                          variant="outlined"
                        />
                        <Chip
                          label={exp.location}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                      
                      <Box sx={{ mb: 3 }}>
                        {exp.description.map((item, idx) => (
                          <Typography key={idx} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'flex-start' }}>
                            <Box component="span" sx={{ mr: 1, mt: 0.5, fontSize: '0.8rem' }}>•</Box>
                            {item}
                          </Typography>
                        ))}
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {exp.technologies.map((tech, techIdx) => (
                          <Chip
                            key={techIdx}
                            label={tech}
                            size="small"
                            variant="outlined"
                            color="primary"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          // Mobile view - simple cards
          <Grid container spacing={4}>
            {experiences.map((exp) => (
              <Grid item xs={12} key={exp.id}>
                <Card
                  sx={{
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          color: 'white',
                          mr: 2,
                        }}
                      >
                        {exp.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" component="h3" color="primary">
                          {exp.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          {exp.company}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {exp.duration}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip label={exp.type} size="small" color="secondary" variant="outlined" />
                      <Chip label={exp.location} size="small" variant="outlined" />
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      {exp.description.map((item, idx) => (
                        <Typography key={idx} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'flex-start' }}>
                          <Box component="span" sx={{ mr: 1, mt: 0.5, fontSize: '0.8rem' }}>•</Box>
                          {item}
                        </Typography>
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {exp.technologies.map((tech, techIdx) => (
                        <Chip
                          key={techIdx}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Skills gained during experience */}
        {/* <Box sx={{ mt: 10 }}>
          <Typography variant="h4" textAlign="center" gutterBottom color="primary">
            Skills Gained
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Technical skills and expertise developed during my internship
          </Typography>
          
          <Grid container spacing={4}>
            {skills.map((skillCategory, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      {skillCategory.category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                      {skillCategory.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          variant="outlined"
                          sx={{ mb: 0.5 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>
    </Box>
  );
};

export default ExperienceSection;