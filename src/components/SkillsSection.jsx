// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   LinearProgress,
//   Chip,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';

// const SkillsSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const skills = [
//     { name: 'React.js', level: 90 },
//     { name: 'Node.js', level: 85 },
//     { name: 'Express.js', level: 88 },
//     { name: 'MongoDB', level: 80 },
//       { name: 'MYSQL', level: 80 },
//     { name: 'JavaScript (ES6+)', level: 92 },
//     { name: 'HTML5 & CSS3', level: 95 },
//     { name: 'Material-UI', level: 85 },
//     { name: 'Git & GitHub', level: 88 },
//   ];

//   const technologies = [
//     'React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript',
//     'HTML5', 'CSS3', 'Sass', 'Material-UI', 'Bootstrap', 
//     'Git', 'GitHub', 'REST APIs', 'GraphQL', 'JWT', 
//      'Vite',  'VS Code', 'Postman'
//   ];

//   return (
//     <Box id="skills" sx={{ py: 10, backgroundColor: 'background.default' }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant={isMobile ? "h3" : "h2"}
//           component="h2"
//           textAlign="center"
//           gutterBottom
//           sx={{ 
//             mb: { xs: 6, md: 8 },
//             fontSize: {
//               xs: '2rem',
//               sm: '2.5rem',
//               md: '3rem'
//             }
//           }}
//         >
//           Skills & Technologies
//         </Typography>
        
//         <Grid container spacing={{ xs: 3, md: 6 }}>
//           <Grid item xs={12} md={6}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent sx={{ p: { xs: 3, md: 4 } }}>
//                 <Typography 
//                   variant={isMobile ? "h5" : "h4"} 
//                   gutterBottom 
//                   color="primary"
//                   sx={{
//                     fontSize: {
//                       xs: '1.3rem',
//                       sm: '1.5rem',
//                       md: '2rem'
//                     }
//                   }}
//                 >
//                   Technical Skills
//                 </Typography>
//                 <Typography 
//                   variant="body2" 
//                   color="text.secondary" 
//                   sx={{ 
//                     mb: { xs: 3, md: 4 },
//                     fontSize: {
//                       xs: '0.875rem',
//                       sm: '0.9rem'
//                     }
//                   }}
//                 >
//                   My proficiency in various technologies and frameworks
//                 </Typography>
                
//                 {skills.map((skill, index) => (
//                   <Box key={index} sx={{ mb: { xs: 2.5, md: 3 } }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                       <Typography 
//                         variant="body1" 
//                         fontWeight="medium"
//                         sx={{
//                           fontSize: {
//                             xs: '0.9rem',
//                             sm: '1rem'
//                           }
//                         }}
//                       >
//                         {skill.name}
//                       </Typography>
//                       <Typography 
//                         variant="body2" 
//                         color="text.secondary"
//                         sx={{
//                           fontSize: {
//                             xs: '0.8rem',
//                             sm: '0.875rem'
//                           }
//                         }}
//                       >
//                         {skill.level}%
//                       </Typography>
//                     </Box>
//                     <LinearProgress
//                       variant="determinate"
//                       value={skill.level}
//                       sx={{
//                         height: { xs: 6, sm: 8 },
//                         borderRadius: 4,
//                         backgroundColor: 'grey.200',
//                         '& .MuiLinearProgress-bar': {
//                           borderRadius: 4,
//                         },
//                       }}
//                     />
//                   </Box>
//                 ))}
//               </CardContent>
//             </Card>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent sx={{ p: { xs: 3, md: 4 } }}>
//                 <Typography 
//                   variant={isMobile ? "h5" : "h4"} 
//                   gutterBottom 
//                   color="primary"
//                   sx={{
//                     fontSize: {
//                       xs: '1.3rem',
//                       sm: '1.5rem',
//                       md: '2rem'
//                     }
//                   }}
//                 >
//                   Technologies & Tools
//                 </Typography>
//                 <Typography 
//                   variant="body2" 
//                   color="text.secondary" 
//                   sx={{ 
//                     mb: { xs: 3, md: 4 },
//                     fontSize: {
//                       xs: '0.875rem',
//                       sm: '0.9rem'
//                     }
//                   }}
//                 >
//                   Technologies and tools I work with on a regular basis
//                 </Typography>
                
//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 1 } }}>
//                   {technologies.map((tech, index) => (
//                     <Chip
//                       key={index}
//                       label={tech}
//                       variant="outlined"
//                       color="primary"
//                       size={isMobile ? "small" : "medium"}
//                       sx={{
//                         mb: 1,
//                         fontSize: {
//                           xs: '0.75rem',
//                           sm: '0.8125rem'
//                         },
//                         '&:hover': {
//                           backgroundColor: 'primary.main',
//                           color: 'white',
//                         },
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
        
//         <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
//           <Typography 
//             variant={isMobile ? "h6" : "h5"} 
//             gutterBottom
//             sx={{
//               fontSize: {
//                 xs: '1.1rem',
//                 sm: '1.25rem',
//                 md: '1.5rem'
//               }
//             }}
//           >
//             Always Learning
//           </Typography>
//           <Typography 
//             variant="body1" 
//             color="text.secondary" 
//             sx={{ 
//               maxWidth: 600, 
//               mx: 'auto',
//               fontSize: {
//                 xs: '0.9rem',
//                 sm: '1rem'
//               },
//               px: { xs: 2, sm: 0 }
//             }}
//           >
//             I believe in continuous learning and staying updated with the latest technologies 
//             and industry trends. Currently exploring cloud technologies, DevOps practices, 
//             and advanced React patterns.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default SkillsSection;


import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Storage, Code, GitHub } from '@mui/icons-material';
 // example, you can replace/add proper icons

const SkillsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Group skills into categories for better readability
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Material-UI', 'Bootstrap',],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT'],
    },
    {
      category: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite'],
    },
  ];

  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: { xs: 6, md: 8 }, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
        >
          Skills & Technologies
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  color="primary"
                  gutterBottom
                  sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.75rem' } }}
                >
                  {category.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      color="primary"
                      variant="outlined"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8125rem' },
                        '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' } }}
          >
            Always Learning
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', fontSize: { xs: '0.9rem', sm: '1rem' }, px: { xs: 2, sm: 0 } }}
          >
            I believe in continuous learning and staying updated with the latest technologies and industry trends. 
            Currently exploring cloud technologies, DevOps practices, and advanced React patterns.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;
