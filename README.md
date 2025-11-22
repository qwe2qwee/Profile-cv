# Hossin Portfolio - Personal CV Website

A modern, responsive portfolio website built with React.js showcasing my skills, projects, and professional experience as a Frontend Web Developer.

## Live Demo

**[View Live Site](https://qwe2qwee.github.io/Profile-cv)**

## Preview

![Portfolio Preview](src/assets/profile.png)

## Features

- **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for fluid UI transitions
- **Dynamic Content** - Content managed through Sanity.io headless CMS
- **Contact Form** - Integrated contact form with backend storage
- **Social Media Links** - Quick access to LinkedIn, GitHub, and Snapchat
- **Downloadable CV** - Option to download resume as PDF
- **Modern UI/UX** - Clean and professional design with SCSS styling

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend framework |
| **Framer Motion** | Animations & transitions |
| **Sanity.io** | Headless CMS for dynamic content |
| **SCSS/Sass** | Styling and design |
| **React Icons** | Icon components |
| **React Tooltip** | Interactive tooltips |
| **GitHub Pages** | Deployment & hosting |

## Sections

- **Home** - Introduction and welcome section
- **About** - Personal information and background
- **Work** - Portfolio projects showcase
- **Skills** - Technical skills and expertise
- **Testimonials** - Client feedback and reviews
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/qwe2qwee/Profile-cv.git
   cd Profile-cv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with your Sanity credentials:
   ```env
   REACT_APP_SANITY_PROJECT_ID=your_project_id
   REACT_APP_SANITY_TOKEN=your_token
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Deploys to GitHub Pages |
| `npm test` | Runs the test suite |

## Project Structure

```
Profile-cv/
├── public/              # Static files & index.html
├── src/
│   ├── assets/          # Images, icons, and PDF files
│   ├── components/      # Reusable UI components
│   │   ├── Navbar/      # Navigation bar
│   │   ├── NavigationDots.jsx
│   │   └── SocialMedia.jsx
│   ├── container/       # Page sections/containers
│   │   ├── About/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Skills/
│   │   ├── Testimonial/
│   │   └── Work/
│   ├── constants/       # Constants and image exports
│   ├── wrapper/         # Higher-order components
│   ├── App.js           # Main application component
│   ├── App.scss         # Global styles
│   ├── client.js        # Sanity client configuration
│   └── index.js         # Application entry point
└── package.json
```

## Customization

### Update Personal Information

1. Modify the header text in `src/container/Header/Header.jsx`
2. Update contact email in `src/container/Footer/Footer.jsx`
3. Change social media links in `src/components/SocialMedia.jsx`
4. Replace profile image in `src/assets/profile.png`

### Update Content via Sanity

The following content types are managed through Sanity CMS:
- About section cards
- Work/Portfolio projects
- Skills and experiences
- Testimonials
- Contact form submissions

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## Connect with Me

- **LinkedIn**: [Hossin Simo](https://www.linkedin.com/in/hossin-simo-832651254)
- **GitHub**: [qwe2qwee](https://github.com/qwe2qwee)
- **Email**: kykw83253@gmail.com

## License

This project is open source and available for personal use and learning purposes.

---

**Built with React** | **Designed with Passion**
