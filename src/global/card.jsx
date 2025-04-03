import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types for component props if needed, although this component is self-contained
// type VideoCardProps = {};

export const VideoCard = ({item}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoSrc = item.img; // Example video URL
  const projectTitle = item.name;
  const websiteUrl = item.link.web; // Placeholder URL
  const githubUrl = item.link.git; // Placeholder URL

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-video bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Video Background */}
      <img
        src={videoSrc}
        // autoPlay
        // loop
        // muted
        // playsInline // Important for iOS playback
        className="absolute inset-0 object-cover w-full h-full"
        // Optional: Add a poster image for loading state
        // poster="your-poster-image.jpg"
      />

      {/* Hover Overlay and Content */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black bg-opacity-60"
            variants={overlayVariants}
            initial="initial"
            animate="hover"
            exit="initial" // Use initial state for exit animation
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-center"
              variants={contentVariants}
              initial="initial"
              animate="hover"
              exit="initial"
            >
              {/* Title */}
              <motion.h3
                className="text-2xl font-bold text-white mb-4 uppercase"
                variants={itemVariants}
              >
                {projectTitle}
              </motion.h3>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0"
                variants={itemVariants} // Apply item variant to the container for staggered effect within
              >
                <motion.a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-medium text-white transition-colors duration-200 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Website
                </motion.a>
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-medium text-white transition-colors duration-200 ease-in-out bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// export default VideoCard; // Default export for use in other parts of the application