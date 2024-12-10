import { Github, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="">
      <nav className="container flex flex-row items-center justify-between w-full p-1 mx-auto text-2xl">
        <Link to="/">
          <img
            src={"logo"}
            alt="logo"
            className="w-10 h-10 transition-all hover:scale-90"
          />
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
            className="flex items-center transition-all hover:scale-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-10 md:h-12 text-primaryText" />
          </a>
          <a
            href="https://github.com/tushar-upadhya/markdown"
            className="flex items-center transition-all hover:scale-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-10 md:h-12 text-primaryText" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
