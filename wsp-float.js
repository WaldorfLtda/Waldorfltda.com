(function () {
  var style = document.createElement('style');
  style.textContent =
    '.wsp-float{position:fixed;bottom:22px;right:22px;width:58px;height:58px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);z-index:9999;transition:transform 0.25s ease, box-shadow 0.25s ease;}' +
    '.wsp-float:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.3);}' +
    '.wsp-float svg{width:30px;height:30px;fill:#fff;position:relative;z-index:1;}' +
    '.wsp-float::before,.wsp-float::after{content:"";position:absolute;inset:0;border-radius:50%;background:#25D366;animation:wspPulse 2.2s ease-out infinite;}' +
    '.wsp-float::after{animation-delay:1.1s;}' +
    '@keyframes wspPulse{0%{opacity:0.55;transform:scale(1);}100%{opacity:0;transform:scale(1.9);}}' +
    '@media(max-width:600px){.wsp-float{width:52px;height:52px;bottom:16px;right:16px;}.wsp-float svg{width:27px;height:27px;}}';
  document.head.appendChild(style);

  var a = document.createElement('a');
  a.href = 'https://wa.me/56997974978?text=' + encodeURIComponent('Hola, me interesa cotizar un proyecto con Constructora Waldorf');
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = 'wsp-float';
  a.setAttribute('aria-label', 'Escríbenos por WhatsApp');
  a.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.445h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.448z"/></svg>';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(a);
    });
  } else {
    document.body.appendChild(a);
  }
})();
