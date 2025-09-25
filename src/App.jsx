import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import theme from "./utils/theme";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import StaticUISection from "./components/StaticUISection";
import VideoSection from "./components/VideoSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Header />
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ExperienceSection />
              <ProjectsSection />
              <StaticUISection />
              <VideoSection />
              <ContactSection />
              <Footer />
            </Box>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
