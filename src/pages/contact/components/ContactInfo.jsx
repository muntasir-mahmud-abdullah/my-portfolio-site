import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "Mail",
      title: "Email",
      value: "muntasirm525@gmail.com",
      link: "mailto:muntasirm525@gmail.com",
    },
    {
      icon: "Phone",
      title: "Phone",
      value: "+880 1577065084",
      link: "tel:+15551234567",
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "Chattogram, Bangladesh",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: "Github",
      name: "GitHub",
      username: "@muntasir-mahmud-abdullah",
      link: "https://github.com/muntasir-mahmud-abdullah",
    },
    {
      icon: "Linkedin",
      name: "LinkedIn",
      username: "muntasir-mahmud-abdullah47",
      link: "https://www.linkedin.com/in/muntasir-mahmud-abdullah47",
    },
    // {
    //   icon: "Twitter",
    //   name: "Twitter",
    //   username: "@alexjohnsondev",
    //   link: "https://twitter.com",
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-background rounded-lg shadow-sm border border-border p-6 md:p-8 mb-8">
        <h2 className="heading-3 text-text-primary mb-6">
          Contact Information
        </h2>

        <div className="space-y-6">
          {contactDetails.map((item) => (
            <div key={item.title} className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <Icon name={item.icon} size={20} />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-primary hover:underline transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-secondary">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background rounded-lg shadow-sm border border-border p-6 md:p-8">
        <h2 className="heading-3 text-text-primary mb-6">Connect With Me</h2>

        <div className="space-y-6">
          {socialLinks.map((item) => (
            <div key={item.name} className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <Icon name={item.icon} size={20} />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">{item.name}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-colors duration-300"
                >
                  {item.username}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-primary bg-opacity-5 rounded-lg p-6 border border-primary border-opacity-20">
        <div className="flex items-center mb-4">
          <div className="text-primary mr-3">
            <Icon name="Clock" size={20} />
          </div>
          <h3 className="font-medium text-text-primary">Response Time</h3>
        </div>
        <p className="text-text-secondary">
          I typically respond to all inquiries within 24-48 hours during
          business days. For urgent matters, please indicate in your message.
        </p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
