import { motion, useScroll } from "framer-motion";

const BlogHeader = () => {
  const { scrollYProgress } = useScroll();

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-1 bg-purple-500 origin-left"
      />
      <nav className="container mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center"
        >
          <h1 className="text-2xl font-bold text-white">DevBlog</h1>
          <div className="space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Articles
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default BlogHeader;
