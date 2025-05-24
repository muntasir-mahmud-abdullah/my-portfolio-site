import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const AboutHero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-surface">
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
              About <span className="text-primary">Me</span>
            </h1>
            <p className="body-large text-text-secondary mb-8">
              I'm Muntasir Mahmud, a passionate frontend developer with a love
              for creating beautiful, functional, and user-centered digital
              experiences. Get to know the person behind the code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1jMOxpJcxM25J56hzoRkpTPHeI_ZfHx_F/view?usp=sharing"
                className="btn-primary flex items-center gap-2"
                id="download-resume" target="_blank"
                // onClick={(e) => {
                //   e.preventDefault();
                //   // Mock download functionality
                //   alert("Resume download started!");
                // }}
              >
                <Icon name="Download" size={18} />
                Resume
              </a>
              {/* <a
                href="#timeline"
                className="btn-outline flex items-center gap-2"
              >
                <Icon name="Clock" size={18} />
                View My Journey
              </a> */}
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
              <div className="absolute inset-0 bg-primary rounded-lg opacity-10 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-lg border-4 border-primary border-opacity-20 shadow-xl">
                <Image
                  src="https://ibb.co.com/qY8Md6xr"
                  alt="Muntasir Mahmud - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
