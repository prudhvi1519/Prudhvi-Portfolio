Prudhvi Portfolio

Next.js | React | TypeScript | Tailwind CSS

Welcome to Prudhvi Portfolio! This is a personal portfolio website showcasing the skills, projects, and experiences of Prudhvi Akula, a Full-Stack Developer and Cloud Enthusiast. The portfolio is designed to deliver a modern, interactive, and visually engaging user experience with a responsive design and dynamic features.

Table of Contents





Project Overview



Features



Technologies Used



Project Structure



Installation



Usage



Contributing



License



Contact

Project Overview

Prudhvi Portfolio is a modern web application built to highlight Prudhvi Akula’s professional journey, including skills, projects, certifications, education, and leadership experience. The site leverages Next.js for a seamless React-based frontend, TypeScript for type safety, and Tailwind CSS for utility-first styling. It includes interactive features like a custom cursor, particle background, and tilt-effect images to enhance user engagement.

The portfolio is optimized for performance and accessibility, with a responsive navigation bar, mobile-friendly design, and dark mode support.

Features





Interactive UI Components: Custom cursor with hover effects and click burst animations.



Particle Background: A dynamic canvas-based background with mouse-responsive particles.



Responsive Navigation: Fixed navigation bar with smooth scrolling and mobile menu toggle.



Portfolio Sections: Dedicated sections for About, Skills, Experience, Projects, Certifications, Leadership, Education, and Contact.



Tilt-Effect Images: Images with a 3D tilt effect using vanilla-tilt for visual appeal.



Dark/Light Mode Support: Theme-aware particle background (toggle planned for future updates).



TypeScript Integration: Type-safe development with defined interfaces for structured data.



Accessible Design: ARIA labels and focus styles for improved accessibility.



Static Assets: Profile picture, project images, and resume PDF served from the public/ directory.

Technologies Used

Frontend





Next.js: A React-based framework for server-side rendering and static site generation.



React: JavaScript library for building dynamic user interfaces.



TypeScript: A statically typed superset of JavaScript for enhanced code reliability.



Tailwind CSS: Utility-first CSS framework for rapid and custom styling.



Framer Motion: Animation library for smooth transitions and effects.



Vanilla Tilt: JavaScript library for 3D tilt effects on images.



Next Themes: Theme management for dark/light mode support.



PostCSS: CSS transformation tool with Autoprefixer for browser compatibility.



ESLint: Static code analysis for maintaining code quality.

Future Backend (Planned)





Potential future integration of backend services for contact form submissions or API-driven content.

Project Structure

The project is organized for modularity and maintainability, following Next.js App Router conventions:

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

Installation

Follow these steps to set up the Prudhvi Portfolio locally.

Prerequisites

Ensure you have the following installed:





Node.js: v18 or higher



npm: v9 or higher (or Yarn, optional)

Steps to Set Up





Clone the repository:

git clone https://github.com/<your-username>/prudhvi-portfolio.git
cd prudhvi-portfolio



Install dependencies: Using npm:

npm install

Or using Yarn:

yarn install



Set up environment variables (if needed):





Create a .env.local file if you add backend services (e.g., for contact form APIs).



No environment variables are required for the current frontend-only setup.



Run the development server: Using npm:

npm run dev

Or using Yarn:

yarn dev



Open the application: Visit http://localhost:3000 in your browser.

Usage

After installation, you can:





Explore sections like About, Skills, Projects, and Contact.



Experience the custom cursor with hover effects and click animations.



View the particle background with mouse interaction.



Navigate using the responsive menu (mobile-friendly toggle).



Download the resume PDF from the relevant section (once implemented).

Contributing

Contributions are welcome! To contribute to Prudhvi Portfolio:





Fork the repository.



Create a feature branch (git checkout -b feature/your-feature).



Make your changes and commit (git commit -m "Add your feature").



Push to the branch (git push origin feature/your-feature).



Open a pull request with a clear description of your changes.

Please ensure your code follows the project’s ESLint rules and TypeScript conventions. For major changes, open an issue first to discuss.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact





GitHub Repository: https://github.com//prudhvi-portfolio



Issues and Feature Requests: GitHub Issues



Portfolio Owner: Prudhvi Akula



LinkedIn: Prudhvi Akula (update with your actual LinkedIn URL)

Built with ❤️ by Prudhvi Akula
