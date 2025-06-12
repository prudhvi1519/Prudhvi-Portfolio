import { LinkedinIcon, GithubIcon } from "../Icons";

export default function FooterSection() {
  return (
    <footer className="py-8 bg-gray-800 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/prudhvi1519/"
            className="flex items-center text-blue-400 hover:text-blue-600 text-lg font-semibold transition-colors duration-200"
          >
            <LinkedinIcon className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/prudhvi1519"
            className="flex items-center text-blue-400 hover:text-blue-600 text-lg font-semibold transition-colors duration-200"
          >
            <GithubIcon className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
        <p className="text-gray-400">© 2025 Prudhvi Akula. Built with Passion & Code.</p>
      </footer>
  );
}