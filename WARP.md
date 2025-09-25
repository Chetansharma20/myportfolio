# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern React portfolio website built with Vite, Material-UI (MUI), and ESLint. It's a single-page application featuring a responsive design with sections for personal information, skills, experience, projects, and contact details.

## Development Commands

### Core Development
```bash
# Start development server with hot reloading
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Package Management
```bash
# Install dependencies
npm install

# Install specific package
npm install <package-name>

# Install dev dependency
npm install -D <package-name>
```

### Vite-specific Commands
```bash
# Clean cache and restart dev server
npm run dev -- --force

# Build with detailed output
npm run build -- --mode development

# Preview with specific port
npm run preview -- --port 4173
```

## Architecture

### Application Structure
- **Single Page Application**: Uses Material-UI components with smooth scrolling navigation
- **Component-based Architecture**: Each section is a separate React component
- **Theme System**: Centralized MUI theme configuration with responsive design tokens
- **Mobile-first Responsive Design**: Uses MUI breakpoints and responsive utilities

### Key Architecture Patterns

#### Component Organization
- `src/components/`: Contains all section components (Header, HeroSection, AboutSection, etc.)
- `src/utils/`: Utility functions and configurations (theme.js)
- Each component is self-contained with its own logic and styling

#### Theme Architecture
- Centralized theme configuration in `src/utils/theme.js`
- Custom MUI component overrides for consistent styling
- Responsive typography with mobile breakpoints
- Material Design color palette with custom primary/secondary colors

#### Navigation Pattern
- Hash-based navigation (`#about`, `#skills`, etc.)
- Smooth scrolling implementation using `scrollIntoView`
- Responsive header with mobile drawer navigation
- Fixed header with backdrop blur effect

### Technology Stack
- **Frontend Framework**: React 19.1.1 with JSX
- **Build Tool**: Vite 7.1.6 with React plugin
- **UI Library**: Material-UI v7 (@mui/material, @emotion/react, @emotion/styled)
- **Icons**: Material-UI Icons (@mui/icons-material)
- **Linting**: ESLint 9.35.0 with React Hooks and React Refresh plugins
- **Styling**: MUI's sx prop system and global CSS reset

### File Structure Conventions
```
src/
├── components/          # React components for each section
│   ├── Header.jsx       # Navigation header with mobile drawer
│   ├── HeroSection.jsx  # Landing section
│   ├── AboutSection.jsx # About information
│   └── ...              # Other section components
├── utils/
│   └── theme.js         # MUI theme configuration
├── main.jsx             # React app entry point
├── App.jsx              # Main app component with theme provider
└── index.css            # Global CSS styles and resets
```

## Development Guidelines

### Component Development
- Use functional components with React hooks
- Follow Material-UI sx prop pattern for styling
- Implement responsive design using MUI breakpoints
- Use `useTheme()` and `useMediaQuery()` for responsive behavior

### Styling Approach
- Prefer MUI's sx prop over separate CSS files
- Use theme tokens for colors, spacing, and typography
- Implement responsive design with theme breakpoints
- Follow Material Design principles

### ESLint Configuration
- Uses flat config format (`eslint.config.js`)
- Configured for React Hooks best practices
- Includes React Refresh plugin for Vite
- Custom rule: allows uppercase variable names for constants

### Mobile Responsiveness
- Mobile-first approach with MUI breakpoints
- Responsive typography scaling
- Mobile drawer navigation pattern
- Touch-friendly interactive elements

## Key Dependencies

### Core Dependencies
- **React**: Main framework with StrictMode enabled
- **@mui/material**: Component library with ThemeProvider
- **@mui/icons-material**: Icon system
- **@emotion/react & @emotion/styled**: CSS-in-JS styling engine

### Development Tools
- **Vite**: Fast build tool with HMR
- **ESLint**: Code quality and React best practices
- **@vitejs/plugin-react**: Vite React integration

## Common Tasks

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `App.jsx` component tree
3. Add navigation item to `Header.jsx` navigationItems array
4. Implement responsive design using MUI breakpoints

### Modifying Theme
- Update `src/utils/theme.js` for global design system changes
- Use theme tokens for consistency across components
- Test responsive behavior across different screen sizes

### Component Testing
Since no testing framework is configured, test components by:
1. Running `npm run dev` and manually testing functionality
2. Testing responsive behavior using browser dev tools
3. Verifying ESLint compliance with `npm run lint`

## Browser Support
- Modern browsers supporting ES2020 features
- Mobile Safari and Chrome for mobile experience
- Uses CSS Grid and Flexbox for layout