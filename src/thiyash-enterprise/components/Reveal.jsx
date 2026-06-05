import { useReveal } from '../hooks/useReveal';

/**
 * A wrapper component to handle scroll-reveal animations.
 * Wraps children in a div that applies 'reveal' and 'visible' classes.
 */
const Reveal = ({ children, className = '', animation = 'reveal-up', delay = '0s', threshold, as: Component = 'div', id }) => {
  const [ref, isVisible] = useReveal({ threshold });

  const classes = [
    'reveal',
    animation,
    isVisible ? 'visible' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component id={id} ref={ref} className={classes} style={{ transitionDelay: delay }}>
      {children}
    </Component>
  );
};

export default Reveal;
