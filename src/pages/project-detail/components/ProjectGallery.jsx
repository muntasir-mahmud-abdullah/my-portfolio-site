import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Dashboard Overview",
      caption: "Main dashboard with key performance indicators and real-time data visualization"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Inventory Management",
      caption: "Inventory management interface with filtering and sorting capabilities"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Sales Analytics",
      caption: "Advanced sales analytics with customizable date ranges and export options"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Customer Management",
      caption: "Customer management system with detailed profiles and purchase history"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-2 text-text-primary mb-6">Project Gallery</h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-lg overflow-hidden shadow-sm border border-border cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-background">
                  <p className="text-text-secondary text-sm">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-text-primary bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-light transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <Icon name="X" size={24} />
            </button>
            
            <div className="bg-background rounded-lg overflow-hidden">
              <div className="h-[70vh] overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-text-primary font-medium">{selectedImage.alt}</p>
                <p className="text-text-secondary">{selectedImage.caption}</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                className="p-2 rounded-full bg-background text-text-primary hover:text-primary transition-colors"
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prevIndex]);
                }}
                aria-label="Previous image"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                className="p-2 rounded-full bg-background text-text-primary hover:text-primary transition-colors"
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[nextIndex]);
                }}
                aria-label="Next image"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;