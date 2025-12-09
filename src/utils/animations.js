// Apple-style animation variants with smooth, fluid timing

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Apple's signature ease curve
    },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Apple-style stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Smooth stagger timing
      delayChildren: 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Apple-style stagger items
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Smooth hover scale (Apple-style)
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  },
};

// Gentle glow effect
export const hoverGlow = {
  boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
  transition: {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  },
};

// Smooth morph animation (Apple Intelligence style)
export const morphAnimation = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Floating animation (gentle)
export const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Gradient shift animation
export const gradientShift = {
  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  },
};
