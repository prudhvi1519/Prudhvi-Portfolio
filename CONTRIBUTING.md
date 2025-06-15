<h1>Contributing to Prudhvi Portfolio</h1>
<p>Thank you for considering contributing to <strong>Prudhvi Portfolio</strong>! This personal portfolio showcases Prudhvi Akula’s skills, projects, and experiences as a Full-Stack Developer and Cloud Enthusiast. Your contributions help enhance features, fix issues, and improve the user experience. We welcome all contributions, from bug fixes to new features.</p>

<h2>How to Contribute</h2>
<ol>
  <li>
    <strong>Fork the Repository</strong><br/>
    Click the <em>Fork</em> button on the Prudhvi Portfolio repository to create a copy in your GitHub account.
  </li>
  <li>
    <strong>Clone the Repository</strong><br/>
    <pre>git clone https://github.com/your-username/prudhvi-portfolio.git
cd prudhvi-portfolio</pre>
  </li>
  <li>
    <strong>Set Up the Project</strong><br/>
    <pre>npm install
npm run dev</pre>
    Open <code>http://localhost:3000</code> to view the portfolio.
  </li>
  <li>
    <strong>Create a New Branch</strong><br/>
    Name your branch descriptively:<br/>
    <pre>git checkout -b feature-or-bugfix-name</pre>
  </li>
  <li>
    <strong>Make Your Changes</strong><br/>
    Follow project guidelines:
    <ul>
      <li>Use TypeScript interfaces from <code>src/app/types.ts</code>.</li>
      <li>Adhere to ESLint rules (<code>npm run lint</code>).</li>
      <li>Style with Tailwind CSS, using custom colors.</li>
      <li>Test interactive components (cursor, particles) for performance.</li>
      <li>Ensure accessibility (ARIA labels, focus styles).</li>
    </ul>
  </li>
  <li>
    <strong>Test Your Changes</strong><br/>
    <pre>npm run dev
npm run lint
npm run build</pre>
    Verify functionality and performance across devices.
  </li>
  <li>
    <strong>Commit Your Changes</strong><br/>
    Use clear, semantic messages:<br/>
    <pre>git add .
git commit -m "fix: add aria-label to nav toggle button"</pre>
  </li>
  <li>
    <strong>Push Your Branch</strong><br/>
    <pre>git push origin feature-or-bugfix-name</pre>
  </li>
  <li>
    <strong>Create a Pull Request</strong><br/>
    Go to the original repository, click <em>Pull Requests &gt; New Pull Request</em>, select your branch, and write a detailed description.
  </li>
</ol>

<h2>Code of Conduct</h2>
<ul>
  <li>Be respectful and welcoming to all contributors.</li>
  <li>Provide constructive feedback during reviews.</li>
  <li>Write clean, maintainable, and accessible code.</li>
</ul>

<h2>Reporting Issues</h2>
<p>If you find a bug or have a feature idea:</p>
<ul>
  <li>Search existing GitHub Issues for duplicates.</li>
  <li>Create a new issue with:</li>
  <ul>
    <li>A clear title (e.g., “Custom cursor lag on mobile”).</li>
    <li>Detailed description, steps to reproduce, and screenshots or code snippets.</li>
  </ul>
</ul>

<h2>Coding Guidelines</h2>
<ul>
  <li><strong>TypeScript:</strong> Use interfaces in <code>src/app/types.ts</code> and avoid <code>any</code>.</li>
  <li><strong>ESLint:</strong> Follow <code>.eslintrc.json</code> rules (no-unused-vars, react-hooks/exhaustive-deps).</li>
  <li><strong>Tailwind CSS:</strong> Use utility classes and custom colors (e.g., <code>text-portfolio-blue-400</code>).</li>
  <li><strong>Performance:</strong> Optimize canvas animations (<code>particleCount ≤ 50</code>).</li>
  <li><strong>Accessibility:</strong> Add ARIA attributes and ensure visible focus states.</li>
  <li><strong>Commits:</strong> Use semantic messages (e.g., <code>feat:</code>, <code>fix:</code>).</li>
  <li><strong>Pull Requests:</strong> Keep them small and focused; include tests or docs as needed.</li>
</ul>

<h2>First-Time Contributors</h2>
<p>New to open source? We’re happy to help! Start with:</p>
<ul>
  <li>Fixing typos in <code>README.md</code>.</li>
  <li>Improving accessibility (e.g., add <code>alt</code> text to images).</li>
  <li>Optimizing performance (e.g., reduce animation durations).</li>
  <li>Look for issues tagged <em>good first issue</em>.</li>
</ul>

<h2>Questions &amp; Support</h2>
<ul>
  <li>Use <strong>GitHub Issues</strong> for bugs or feature requests.</li>
  <li>Post general questions in the repository’s <strong>Discussions</strong> tab (if enabled).</li>
</ul>

<p>Thank you for contributing to <strong>Prudhvi Portfolio</strong>! Your efforts make this project shine. 🌟</p>
