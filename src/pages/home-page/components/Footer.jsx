import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/home-page" },
    // { name: "Portfolio", path: "/portfolio-gallery" },
    { name: "About", path: "/about-me" },
    { name: "Skills", path: "/skills-expertise" },
    // { name: "Blog", path: "/blog-articles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link
              to="/home-page"
              className="flex items-center space-x-2 mb-4"
              aria-label="Go to homepage"
            >
              <div className="text-primary">
                <Icon name="Code" size={28} />
              </div>
              <span className="text-xl font-bold text-text-primary">
                Dev<span className="text-primary">Portfolio</span>
              </span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-md">
              A frontend developer specializing in building exceptional digital
              experiences with a focus on responsive design, accessibility, and
              performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/muntasir-mahmud-abdullah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href="https://linkedin.com/in/muntasir-mahmud-abdullah47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <Icon name="Twitter" size={20} />
              </a> */}
              {/* <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                aria-label="Dribbble Profile"
              >
                <Icon name="Dribbble" size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon
                  name="Mail"
                  size={18}
                  className="text-text-tertiary mt-0.5"
                />
                <span className="text-text-secondary">
                  muntasirm525@gmail.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="Phone"
                  size={18}
                  className="text-text-tertiary mt-0.5"
                />
                <span className="text-text-secondary">+880 1577065084</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  size={18}
                  className="text-text-tertiary mt-0.5"
                />
                <span className="text-text-secondary">
                  Chattogram, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center md:flex md:justify-between md:text-left">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Muntasir Mahmud. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li>
                <a
                  href="#privacy"
                  className="text-text-secondary hover:text-primary text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-text-secondary hover:text-primary text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
