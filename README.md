# Prudhvi Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A comprehensive Personal Portfolio** showcasing the journey of **Prudhvi Akula**, a Full-Stack Developer & Cloud Enthusiast.  
Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, this site combines modern web design with interactive UI components to present skills, projects, and professional experience in a polished, responsive layout.

---

🔗 **Live Demo:**  
➡️ [https://prudhvi-portfolio-website.vercel.app](https://prudhvi-portfolio-website.vercel.app)

---

## 📑Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
  - [Frameworks & Libraries](#frameworks--libraries)
  - [Styling & Animation](#styling--animation)
  - [Tooling & Quality](#tooling--quality)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage & Demo](#usage--demo)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📝Project Overview

Prudhvi Portfolio is a **Next.js** application built to highlight:
- **About Me**: A concise personal and professional bio.
- **Skills**: Detailed breakdown of languages, frameworks, and tools mastered.
- **Projects**: Live demos, source-code links, and walkthroughs for each major project.
- **Certifications & Education**: Academic credentials and specialized training.
- **Leadership & Collaboration**: Team achievements, open-source contributions, and soft-skill highlights.
- **Contact**: Direct messaging form and social links for networking.

The site’s design philosophy centers on **performance**, **accessibility**, and **engagement**—with features like a custom cursor, dynamic particle background, tilt-effect cards, and dark/light mode support. Every component is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices.

---

## ✨Key Features

- **Interactive UI Components**: A bespoke cursor that transforms on hover and leaves a burst animation on click, enhancing interactivity. plus mirror reflective effects on "Download Resume" and "Connect Me" buttons for enhanced interactivity.
- **Particle Background**: A canvas-powered, mouse‐responsive particle system that brings subtle motion to the hero section.
- **Responsive Navigation**: A fixed top nav bar with smooth scrolling, animated link highlighting, and a mobile toggle menu for small screens.
- **Portfolio Sections**: Dedicated sections for *About*, *Skills*, *Experience*, *Projects*, *Certifications*, *Leadership*, *Education*, and *Contact*.
- **Tilt-Effect Images**: Portfolio items and images tilt in 3D when hovered, using the lightweight *vanilla-tilt* library.
- **Dark/Light Mode Support**: Theme detection with CSS variables; toggle switch planned for next release.
- **TypeScript Integration**: Type-safe development with interfaces defined in `types.ts` for structured data.
- **Accessible Design**: ARIA labels, keyboard focus states, and semantic HTML to support all users.
- **Static Assets**: Profile picture, project images, and resume PDF served from the `public/` directory.

---

## 🛠️Tech Stack

### 📚Frameworks & Libraries:
- Next.js: A React-based framework for server-side rendering and static site generation.
- React: JavaScript library for building dynamic user interfaces.
- TypeScript: A statically typed superset of JavaScript for enhanced code reliability.

### 🎨Styling & Animation:
- Tailwind CSS: Utility-first CSS framework for rapid and custom styling.
- Framer Motion: Animation library for smooth transitions and effects.
- Vanilla Tilt: JavaScript library for 3D tilt effects on images.

### 🔧Tooling & Quality:
- Next Themes: Theme management for dark/light mode support.
- PostCSS: CSS transformation tool with Autoprefixer for browser compatibility.
- ESLint: Static code analysis for maintaining code quality.

---

## 📂Project Structure

The project is organized for modularity and maintainability, following Next.js App Router conventions:

```bash
├── public                # Static assets (images, PDFs)
├── src                   # Source code
├── config files          # Tool/framework configurations
└── README.md             # Project documentation
```

For a more detailed breakdown of the project structure, see the full directory tree in the expanded section below.

<details>
<summary>Full Directory Structure (Click to Expand)</summary>

```bash
prudhvi-portfolio/
├── public/                       # Static assets (images, resume PDF)
│   ├── profile-pic.jpg
│   ├── pins-studio.png
│   ├── python-compiler.png
│   ├── weather-dashboard.png
│   ├── prudhvi_resume.pdf
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── sections/         # Page sections (About, Skills, Projects, etc.)
│   │   │   ├── CustomCursor.tsx  # Custom cursor with hover and burst effects
│   │   │   ├── Icons.tsx         # SVG icon components
│   │   │   ├── ParticlesBackground.tsx  # Canvas-based particle background
│   │   │   └── TiltImage.tsx     # Image component with tilt effect
│   │   ├── globals.css           # Global styles with Tailwind CSS
│   │   ├── types.ts              # TypeScript interfaces
│   │   ├── layout.tsx            # Root layout with theme provider
│   │   └── page.tsx              # Main page with navigation and sections
├── .gitignore                    # Git ignore file
├── .eslintrc.json                # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next-env.d.ts                 # Next.js TypeScript definitions
└── README.md                     # Project documentation
```
</details>

---

## 🚀Installation

Follow these steps to set up the **Prudhvi Portfolio** locally.

### ✅Prerequisites

Ensure you have the following installed:

- **Node.js**: v18 or higher
- **npm**: v9 or higher (or **Yarn**, optional)


<ol> <li> <strong>Clone the repository:</strong> <pre> git clone https://github.com/&lt;your-username&gt;/prudhvi-portfolio.git cd prudhvi-portfolio </pre> </li> <li> <strong>Install dependencies:</strong><br /> <strong>Using npm:</strong> <pre>npm install</pre> <strong>Or using Yarn:</strong> <pre>yarn install</pre> </li> <li> <strong>Set up environment variables (if needed):</strong> <ul> <li>Create a <code>.env.local</code> file if you add backend services (e.g., for contact form APIs).</li> <li><em>No environment variables are required for the current frontend-only setup.</em></li> </ul> </li> <li> <strong>Run the development server:</strong><br /> <strong>Using npm:</strong> <pre>npm run dev</pre> <strong>Or using Yarn:</strong> <pre>yarn dev</pre> </li> <li> <strong>Open the application:</strong><br /> Visit: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser. </li> </ol>

---

## 🎬Usage & Demo

After installation, you can:
- Explore sections like *About*, *Skills*, *Projects*, *Contact*, etc.
- Experience the **Custom Cursor** with hover effects and click animations.
- View the particle background with mouse interaction.
- Watch images tilt in 3D on hover.
- Navigate using the **responsive menu** (mobile-friendly toggle).
- Download the resume PDF from the Hero section.

---

## 🤝Contributing

We love contributions from the community! Please refer to our detailed [CONTRIBUTING.md](CONTRIBUTING.md) guide for steps on how to contribute to this project.  

Contributions are welcome! To contribute to Prudhvi Portfolio:

1. **Fork** the repository.
2. **Create a feature branch** (`git checkout -b feature/your-feature-name`).
3. **Make your changes** and **commit** (git commit -m "Add your feature").
4. **Push** to the branch (git push origin feature/your-feature).
5. **Open a pull request** with a clear description of your changes.

Please ensure your code follows the project’s ESLint rules and TypeScript conventions. For major changes, open an issue first to discuss.

---

## 📜License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for the full details.

---

## 📬Contact

- GitHub Repository: [prudhvi-portfolio](https://github.com/prudhvi1519/Prudhvi-Portfolio)
- Issues and Feature Requests: [GitHub Issues](https://github.com/prudhvi1519/Prudhvi-Portfolio/issues)
- GitHub: **[prudhvi1519](https://github.com/prudhvi1519)**
- LinkedIn: **[prudhvi1519](https://www.linkedin.com/in/prudhvi1519)**

---

*Portfolio Owner*: [***Prudhvi Akula***](https://prudhvi-portfolio-website.vercel.app)
