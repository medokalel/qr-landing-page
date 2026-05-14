document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initMarqueeGlow();
});

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.partners-section, .landing-footer');
  sections.forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
    observer.observe(section);
  });

  document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < 300) {
      heroContent.style.transform = 'translateY(' + (scrolled * 0.15) + 'px)';
    }
  }, { passive: true });
}

function initMarqueeGlow() {
  const marqueeContainer = document.querySelector('.marquee-container');
  if (!marqueeContainer) return;

  const glow = document.createElement('div');
  glow.className = 'marquee-glow';
  glow.style.cssText = [
    'position: absolute;',
    'top: 50%;',
    'left: 50%;',
    'transform: translate(-50%, -50%);',
    'width: 80%;',
    'height: 120%;',
    'background: radial-gradient(ellipse, rgba(139, 92, 246, 0.06) 0%, transparent 70%);',
    'pointer-events: none;',
    'z-index: -1;',
    'animation: glowShift 15s ease-in-out infinite;',
    'border-radius: 50%;'
  ].join(' ');

  const style = document.createElement('style');
  style.textContent = [
    '@keyframes glowShift {',
    '  0%, 100% { filter: hue-rotate(0deg); }',
    '  50% { filter: hue-rotate(30deg); }',
    '}'
  ].join('');
  document.head.appendChild(style);

  marqueeContainer.style.position = 'relative';
  marqueeContainer.appendChild(glow);
}

document.addEventListener('visibilitychange', function() {
  const marqueeTrack = document.querySelector('.marquee-track');
  if (!marqueeTrack) return;

  if (document.hidden) {
    marqueeTrack.style.animationPlayState = 'paused';
  } else {
    marqueeTrack.style.animationPlayState = 'running';
  }
});

const styleSheet = document.createElement('style');
styleSheet.textContent = [
  '.is-visible {',
  '  opacity: 1 !important;',
  '  transform: translateY(0) !important;',
  '}'
].join('');
document.head.appendChild(styleSheet);