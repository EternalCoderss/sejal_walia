import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/data';
import { slideUp, staggerContainer } from '../utils/animations';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="testimonials" className="section bg-dark-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={slideUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              What clients and partners say about working together
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[350px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full"
                >
                  <div className="glass rounded-2xl p-8 md:p-12 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 text-6xl text-primary-500/20">
                      <FaQuoteLeft />
                    </div>

                    <div className="relative z-10 space-y-6">
                      {/* Stars */}
                      <div className="flex gap-1 justify-center">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <HiStar key={i} className="text-2xl text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg md:text-xl text-dark-100 leading-relaxed text-center italic">
                        "{testimonials[current].text}"
                      </p>

                      {/* Client Info */}
                      <div className="flex flex-col items-center gap-4 pt-4">
                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary-500/30">
                          {testimonials[current].name.split(' ').map(n => n[0]).join('')}
                        </div>

                        {/* Name & Position */}
                        <div className="text-center">
                          <div className="font-bold text-dark-50 text-lg">
                            {testimonials[current].name}
                          </div>
                          <div className="text-dark-300 text-sm">
                            {testimonials[current].position}
                          </div>
                          <div className="text-primary-400 text-sm font-medium">
                            {testimonials[current].company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
              >
                <HiChevronLeft className="text-2xl" />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`transition-all ${
                      index === current
                        ? 'w-8 h-3 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full'
                        : 'w-3 h-3 bg-dark-600 rounded-full hover:bg-primary-500/50'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
              >
                <HiChevronRight className="text-2xl" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
