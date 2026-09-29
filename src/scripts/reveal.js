// Fade-and-rise for [data-reveal] blocks. Blocks already in view on load are not animated.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.remove('reveal-pending');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.92) return;
    el.classList.add('reveal-pending');
    // Apply the transition after the hidden state has painted, so hiding is instant.
    requestAnimationFrame(() => el.classList.add('reveal-anim'));
    io.observe(el);
  });
}
