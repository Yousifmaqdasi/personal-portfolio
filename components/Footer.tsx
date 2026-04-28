import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 mt-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6 items-center text-center">
        <div>
          <p className="text-sm font-medium mb-3">
            © {new Date().getFullYear()} Yousif Maqdasi
          </p>
          <p className="text-xs text-neutral-400">
            Fullstack Developer
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/Yousifmaqdasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group"
          >
            <FaGithub
              size={26}
              className="hover:text-red-400 transition"
            />
            <span className="text-xs hover:text-red-400 transition">
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/yousif-maqdasi-731578382/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group"
          >
            <FaLinkedin
              size={26}
              className="hover:text-red-400 transition"
            />
            <span className="text-xs hover:text-red-400 transition">
              LinkedIn
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
