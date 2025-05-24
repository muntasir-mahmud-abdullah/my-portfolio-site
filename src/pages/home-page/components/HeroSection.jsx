import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="display text-text-primary mb-6">
              Hi, I'm <span className="text-primary">Muntasir Mahmud</span>
              <br />
              Frontend Developer
            </h1>
            <p className="body-large text-text-secondary mb-8">
              I craft responsive websites where technology meets creativity.
              Specializing in building exceptional digital experiences that are
              fast, accessible, and visually appealing.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <Link to="/portfolio-gallery" className="btn-primary">
                View My Work
              </Link> */}
              <Link
                to="/contact"
                className="btn-outline flex items-center gap-2"
              >
                <Icon name="Mail" size={18} />
                Contact Me
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-12">
              <p className="body-small text-text-tertiary mb-4">Find me on</p>
              <div className="flex space-x-5">
                <a
                  href="https://github.com/muntasir-mahmud-abdullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <Icon name="Github" size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muntasir-mahmud-abdullah47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Icon name="Linkedin" size={22} />
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                  aria-label="Twitter Profile"
                >
                  <Icon name="Twitter" size={22} />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                  aria-label="Dribbble Profile"
                >
                  <Icon name="Dribbble" size={22} />
                </a> */}
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 max-w-md"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-primary border-opacity-20 shadow-xl">
                <Image
                  src="https://i.ibb.co.com/tp6M4R3J/Whats-App-Image-2024-02-27-at-15-33-24-09792d8f.jpg"
                  alt="Muntasir Mahmud - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-surface p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
