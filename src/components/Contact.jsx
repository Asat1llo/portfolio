import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = ({color}) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.error("Xato: ", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${color ? "bg-gradient-to-br from-purple-900 to-black ":"bg-white"} px-4`}>
      <motion.div
        ref={ref}
        className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full md:max-w-lg lg:max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl text-white font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact Me
        </motion.h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="text-white block mb-1">Name:</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="text-white block mb-1">Email:</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="text-white block mb-1">Message:</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <AnimatePresence>
        {isSent && (
          <motion.div
            className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Message Sent Successfully! ✅
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};