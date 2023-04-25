export const TextAnimationDawn = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.01,
    duration: 1,
  },
};
export const TextAnimationUp = {
  offscreen: {
    y: -300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 3,
  },
};

export const TextAnimationLeft = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 3,
  },
};

export const TextAnimationRight = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 3,
  },
};

export const TextAnimationZoom = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export const TextAnimationOpacity = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { duration: 2 },
  },
};
export const TextAnimationOpacityDelay = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 1 },
  }),
};
