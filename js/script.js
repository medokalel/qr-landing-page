// Landing page: reveal-on-scroll and a light parallax on the hero.
// Both are skipped when the visitor prefers reduced motion.
document.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Reveal sections once they scroll into view. The class is added here,
  // so the page stays fully visible if this script does not run.
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.partners-section, .landing-footer').forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  // Hero moves at 15% of the scroll speed for the first 300px (passive listener, rAF-throttled).
  var hero = document.querySelector('.hero-content');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!hero || ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (y < 300) hero.style.transform = 'translateY(' + (y * 0.15) + 'px)';
      ticking = false;
    });
  }, { passive: true });
});
