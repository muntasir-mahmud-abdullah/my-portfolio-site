import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const Biography = () => {
  const personalInfo = {
    biography: `I'm a passionate frontend developer with over 4 years of experience specializing in building exceptional digital experiences. My journey in web development began with a fascination for creating things that live on the internet. This curiosity led me to pursue a degree in Computer Science and eventually specialize in frontend technologies.

What drives me is the intersection of design and technology – finding ways to make complex interfaces feel simple and intuitive for users while maintaining technical excellence behind the scenes. I believe that the best digital products are those that feel invisible to the user, allowing them to accomplish their goals without friction or confusion.

When I'm not coding, you can find me exploring hiking trails, experimenting with new cooking recipes, or attending local tech meetups. I'm a lifelong learner who's always looking to expand my knowledge and skills, whether that's through online courses, technical books, or collaborating with other developers.`,
    location: "Chattogram, Bangladesh",
    email: "muntasirm525@gmail.com",
    phone: "+880 1577065084",
    availability: "Available for freelance projects",
    languages: [
      "English (Native)",
      "Spanish (Conversational)",
      "French (Basic)",
    ],
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 text-text-primary mb-6">My Story</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none text-text-secondary mb-12"
          >
            <p className="mb-4">{personalInfo.biography}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface p-8 rounded-lg border border-border"
          >
            <div>
              <h3 className="heading-4 text-text-primary mb-4">
                Personal Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    size={18}
                    className="text-primary mt-0.5"
                  />
                  <span className="text-text-secondary">
                    {personalInfo.location}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Mail" size={18} className="text-primary mt-0.5" />
                  <span className="text-text-secondary">
                    {personalInfo.email}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon
                    name="Phone"
                    size={18}
                    className="text-primary mt-0.5"
                  />
                  <span className="text-text-secondary">
                    {personalInfo.phone}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="heading-4 text-text-primary mb-4">
                Additional Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon
                    name="Clock"
                    size={18}
                    className="text-primary mt-0.5"
                  />
                  <span className="text-text-secondary">
                    {personalInfo.availability}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon
                    name="Globe"
                    size={18}
                    className="text-primary mt-0.5"
                  />
                  <div className="text-text-secondary">
                    <p className="mb-1">Languages:</p>
                    <ul className="list-disc list-inside pl-2">
                      {personalInfo.languages.map((language, index) => (
                        <li key={index}>{language}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
