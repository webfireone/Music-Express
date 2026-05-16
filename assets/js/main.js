/* =============================================
   MUSIC EXPRESS — Main JavaScript
   ============================================= */

// ---------- Content Management System ----------
const CMS = {
  key: 'musicExpressContent',
  version: 3,

  defaults: {
    siteName: 'Music Express',
    hero: {
      badge: 'Compositores reales · Entrega rápida',
      title: 'Tu canción personalizada <span class="highlight">en 3 pasos.</span>',
      subtitle: 'Dinos qué querés y elegí al compositor que dará vida a tu idea. Letra, música y arreglos profesionales en menos de 24 horas.',
      stat1: '+2,400', stat1Label: 'canciones entregadas',
      stat2: '4.9★',   stat2Label: 'calificación promedio',
      stat3: '24hs',   stat3Label: 'tiempo récord'
    },
    pedido: { label: 'Paso 1', title: 'Contanos tu idea', subtitle: 'Contanos el título, la letra y el género que tenés en mente. En minutos recibís propuestas de compositores.' },
    comoFunciona: { label: 'El proceso', title: 'El proceso es simple', subtitle: 'En 4 pasos tenés tu canción profesional.' },
    ejemplos: { label: 'Ejemplos reales', title: 'Canciones que ya hicimos realidad', subtitle: 'Mirá lo que otros pidieron y recibieron.' },
    testimonios: { label: 'Testimonios', title: 'Lo que dicen nuestros clientes', subtitle: '+2400 personas ya convirtieron sus ideas en canciones.' },
    servicios: { label: 'Servicios incluidos', title: 'Todo lo que necesitás', subtitle: 'Composición, producción y arreglos profesionales para que tu canción suene exactamente como la imaginaste.' },
    tienda: { label: 'Catálogo', title: 'Encontrá tu sonido', subtitle: 'Explorá nuestros estilos y elegí el que más te guste.' },
    gallery: [
      { icon: 'birthday-cake', title: 'Pedido', text: '"Canción de cumpleaños para mi novia, ritmo balada, que hable de 5 años juntos."', result: 'Tema entregado en 2 días', stars: 5, author: 'Alex Torres', color: '#f6b83e' },
      { icon: 'heart', title: 'Pedido', text: '"Tema de desamor con esperanza. Que diga que estuvo bien pero hay que soltar."', result: 'Tema entregado en 36 horas', stars: 5, author: 'María Cuervo', color: '#ff6b35' },
      { icon: 'fire', title: 'Pedido', text: '"Un trap motivacional para mi canal de gym. Que tenga drops y subidón en el coro."', result: 'Tema entregado en 24 horas', stars: 4, author: 'Santi Paz', color: '#a855f7' }
    ],
    testimonials: [
      { quote: '"Pedí 3 ofertas, elegí a María, y en 24hs tenía mi canción lista para Spotify. Increíble la calidad."', name: 'Camila Gómez', role: 'Cantante independiente', initials: 'CG' },
      { quote: '"Pensé que era caro pero por $95 me hicieron un temón. Lo usé para proponerme. Dijo que sí."', name: 'Facundo Ríos', role: 'Cliente particular', initials: 'FR' },
      { quote: '"Necesitaba un jingle para mi marca y en 2 días lo tenía. Los compositores entendieron todo al toque."', name: 'Lara Ponce', role: 'Emprendedora', initials: 'LP' }
    ],
    composers: [
      { name: 'Alex Torres', genre: 'Pop / Balada', price: 120, delivery: '36 horas', initials: 'AT', color: 'av1', rank: '#1' },
      { name: 'María Cuervo', genre: 'Rock / Electrónica', price: 95, delivery: '48 horas', initials: 'MC', color: 'av2', rank: '#2' },
      { name: 'Santi Paz', genre: 'Reggaetón / Trap', price: 150, delivery: '24 horas', initials: 'SP', color: 'av3', rank: '#3' }
    ],
    services: [
      { icon: 'fa-music', title: 'Composición', desc: 'Creamos la música y letra original desde cero, adaptada a tu historia y al género que elijas.' },
      { icon: 'fa-microphone', title: 'Producción', desc: 'Grabación, mezcla y masterización profesional. Sonido listo para plataformas digitales.' },
      { icon: 'fa-sliders-h', title: 'Arreglos', desc: 'Instrumentación personalizada: piano, cuerdas, sintetizadores, percusión y más.' },
      { icon: 'fa-hourglass-half', title: 'Entrega rápida', desc: 'Tu canción completa en menos de 24 horas. Sin perder calidad ni atención al detalle.' }
    ],
    storeItems: [
      { icon: 'fa-crown', title: 'Balada Romántica', desc: 'Tema suave con piano y cuerdas. Ideal para declaraciones, aniversarios o momentos especiales.', price: 89, color: '#f6b83e' },
      { icon: 'fa-bolt', title: 'Trap Energético', desc: '808 contundentes, hi-hats rápidos y drops potentes. Para contenido de alto impacto.', price: 120, color: '#ff6b35' },
      { icon: 'fa-hand-peace', title: 'Reggaetón Playero', desc: 'Perreo suave con influencias caribeñas. Perfecto para verano y videos tropicales.', price: 99, color: '#a855f7' },
      { icon: 'fa-guitar', title: 'Rock Alternativo', desc: 'Guitarras distorsionadas, batería enérgica y estribillos potentes.', price: 110, color: '#22c55e' },
      { icon: 'fa-drum', title: 'Cumbia 4ever', desc: 'Güiro, acordeón y bajo eléctrico. Ritmo bailable con sabor latino auténtico.', price: 85, color: '#f59e0b' },
      { icon: 'fa-headphones', title: 'Electrónica Ambient', desc: 'Sintetizadores envolventes y pads atmosféricos. Ideal para videos y presentaciones.', price: 130, color: '#06b6d4' }
    ]
  },

  load() {
    try {
      const stored = localStorage.getItem(this.key);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed._version === this.version) {
          return this.deepMerge(this.clone(this.defaults), parsed);
        }
      }
    } catch (e) { /* ignore */ }
    return this.clone(this.defaults);
  },

  save(data) {
    data._version = this.version;
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  deepMerge(base, override) {
    const result = this.clone(base);
    for (const key in override) {
      if (override[key] !== null && typeof override[key] === 'object' && !Array.isArray(override[key])) {
        result[key] = this.deepMerge(result[key] || {}, override[key]);
      } else {
        result[key] = override[key];
      }
    }
    return result;
  }
};

// Global state
let content = CMS.load();
let isAdmin = false;
let cart = [];

// ---------- DOM REFS ----------
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ---------- INIT ----------
const APP_VERSION = '2.0';

document.addEventListener('DOMContentLoaded', () => {
  console.log(`Music Express v${APP_VERSION} - JS loaded`);

  // Force clean any stale CMS data on fresh version
  try {
    const stored = localStorage.getItem('musicExpressContent');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (!parsed._version || parsed._version < 3) {
        localStorage.removeItem('musicExpressContent');
        console.log('Stale CMS data cleared');
      }
    }
  } catch(e) { /* ignore */ }
  content = CMS.load();

  renderContent();
  renderCart();
  initNavbar();
  initSlides();
  initRange();
  initReveal();
  initWaveBars();
  initForm();
  initAudio();
  initAdminUI();

});

// ---------- RENDER CONTENT FROM CMS ----------
function applySectionText() {
  setSectionText('pedido', content.pedido);
  setSectionText('como-funciona', content.comoFunciona);
  setSectionText('ejemplos', content.ejemplos);
  setSectionText('testimonios', content.testimonios);
  setSectionText('servicios', content.servicios);
  setSectionText('tienda', content.tienda);
}

function renderContent() {
  // Gallery
  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = content.gallery.map((item, i) => `
      <div class="gallery-card reveal">
        <div class="gallery-card-top">
          <div class="gallery-icon"><i class="fas fa-${item.icon}"></i></div>
          <h5>${item.title}</h5>
          <p class="pedido-text">${item.text}</p>
          <div class="resultado-text"><i class="fas fa-check"></i> ${item.result}</div>
          <div class="gallery-stars">${'<i class="fas fa-star"></i>'.repeat(item.stars)}${item.stars < 5 ? '<i class="fas fa-star off"></i>'.repeat(5 - item.stars) : ''}</div>
        </div>
        <div class="gallery-card-bottom">
          <span class="author">por <strong>${item.author}</strong></span>
          <button class="btn btn-dark btn-sm" onclick="alertPreview()"><i class="fas fa-headphones"></i> Preview</button>
        </div>
      </div>
    `).join('');
  }

  // Testimonials
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = content.testimonials.map(t => `
      <div class="testimonial-card reveal">
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <blockquote>${t.quote}</blockquote>
        <div class="testimonial-author">
          <div class="avatar-sm">${t.initials}</div>
          <div class="info"><h5>${t.name}</h5><p>${t.role}</p></div>
        </div>
      </div>
    `).join('');
  }

  // Services
  const serviceGrid = document.querySelector('.service-grid');
  if (serviceGrid) {
    serviceGrid.innerHTML = content.services.map(s => `
      <div class="service-card reveal">
        <div class="service-icon"><i class="fas ${s.icon}"></i></div>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  // Store items (Temas destacados)
  const storeGrid = document.querySelector('.store-grid');
  if (storeGrid) {
    storeGrid.innerHTML = content.storeItems.map((item, i) => `
      <div class="store-card reveal" style="--accent:${item.color}">
        <div class="store-card-icon" style="background:${item.color}15; color:${item.color}"><i class="fas ${item.icon}"></i></div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <div class="store-card-footer">
          <span class="store-price">$${item.price} <small>USD</small></span>
          <button class="btn btn-primary btn-sm" onclick="addToCartStore(${i})"><i class="fas fa-shopping-cart"></i> Encargar similar</button>
        </div>
      </div>
    `).join('');
  }
}

function setSectionText(id, data) {
  const section = document.getElementById(id);
  if (!section) return;
  const label = section.querySelector('.section-label');
  const title = section.querySelector('.section-title');
  const sub = section.querySelector('.section-subtitle');
  if (label && data.label) label.textContent = data.label;
  if (title && data.title) title.textContent = data.title;
  if (sub && data.subtitle) sub.textContent = data.subtitle;
}

// ---------- SLIDESHOW ----------
function initSlides() {
  const slides = document.querySelectorAll('.landing-slide');
  const indicators = document.querySelectorAll('.indicator');
  if (!slides.length) return;

  let currentIndex = -1;
  let interval = null;
  const totalSlides = slides.length;

  // Generate random order
  let order = Array.from({ length: totalSlides }, (_, i) => i);
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentIndex = index;
  }

  function nextSlide() {
    if (order.length === 0) {
      order = shuffle(Array.from({ length: totalSlides }, (_, i) => i));
    }
    const next = order.pop();
    showSlide(next);
  }

  // Start: shuffle and show first
  order = shuffle(order);
  nextSlide();

  // Rotate every 2 minutes (120000ms)
  interval = setInterval(nextSlide, 120000);

  // Click indicators to change
  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      showSlide(i);
      order = order.filter(n => n !== i);
    });
  });
}

// ---------- NAVIGATION ----------
window.navigateTo = (view) => {
  // Hide all page views
  document.querySelectorAll('.page-view').forEach(el => {
    el.classList.remove('active');
  });
  // Show target
  const target = document.querySelector(`[data-view="${view}"]`);
  if (target) {
    target.classList.add('active');
  }
  // Update nav active state
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('nav-active'));
  const navLink = document.querySelector(`.nav-links a[onclick*="${view}"]`);
  if (navLink) navLink.classList.add('nav-active');
  // Scroll to top with smooth behavior
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ---------- NAVBAR ----------
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  window.toggleMobile = () => {
    document.getElementById('mobileMenu').classList.toggle('active');
  };
}

// ---------- RANGE ----------
function initRange() {
  const budgetRange = document.getElementById('budgetRange');
  const rangeDisplay = document.getElementById('rangeDisplay');
  if (!budgetRange || !rangeDisplay) return;
  const update = (val) => { rangeDisplay.innerHTML = `$${val} <span>USD</span>`; };
  budgetRange.addEventListener('input', (e) => update(e.target.value));
  update(budgetRange.value);
}

// ---------- REVEAL ----------
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---------- WAVE BARS ----------
function initWaveBars() {
  document.querySelectorAll('.audio-wave-group').forEach(group => {
    for (let i = 0; i < 12; i++) {
      const bar = document.createElement('div');
      bar.className = 'wbar';
      bar.style.height = (6 + Math.random() * 26) + 'px';
      group.appendChild(bar);
    }
  });
  const heroWave = document.getElementById('heroWave');
  if (heroWave) {
    heroWave.querySelectorAll('.bar').forEach(bar => {
      if (!bar.style.height) bar.style.height = (12 + Math.random() * 26) + 'px';
    });
  }
}

// ---------- FORM ----------
function initForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value.trim();
    const letra = document.getElementById('letra').value.trim();
    const genero = document.getElementById('genero').value;
    if (!titulo || !letra || !genero) {
      alert('Completá todos los campos obligatorios.');
      return;
    }
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.add('active');
    setTimeout(() => {
      overlay.classList.remove('active');
      const section = document.getElementById('resultados');
      section.classList.add('active');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const cards = document.querySelectorAll('.composer-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 150 * i);
      });
    }, 2500);
  });
}

// ---------- AUDIO ----------
let currentPlaying = null;
let audioTimer = null;

function initAudio() {
  window.togglePlay = (el) => {
    const btn = el.querySelector('.play-btn');
    const waves = el.querySelectorAll('.wbar');
    const isPlaying = btn.classList.contains('playing');
    if (currentPlaying && currentPlaying !== el) {
      const pb = currentPlaying.querySelector('.play-btn');
      currentPlaying.querySelectorAll('.wbar').forEach(w => w.classList.remove('active'));
      pb.classList.remove('playing'); pb.innerHTML = '<i class="fas fa-play"></i>';
    }
    if (isPlaying) {
      btn.classList.remove('playing'); btn.innerHTML = '<i class="fas fa-play"></i>';
      waves.forEach(w => w.classList.remove('active'));
      if (audioTimer) clearTimeout(audioTimer); currentPlaying = null;
    } else {
      btn.classList.add('playing'); btn.innerHTML = '<i class="fas fa-pause"></i>';
      waves.forEach((w, i) => setTimeout(() => w.classList.add('active'), i * 80));
      currentPlaying = el;
      if (audioTimer) clearTimeout(audioTimer);
      audioTimer = setTimeout(() => {
        if (currentPlaying === el) {
          btn.classList.remove('playing'); btn.innerHTML = '<i class="fas fa-play"></i>';
          waves.forEach(w => w.classList.remove('active')); currentPlaying = null;
        }
      }, 3000);
    }
  };
  window.addEventListener('scroll', () => {
    if (currentPlaying) {
      const btn = currentPlaying.querySelector('.play-btn');
      currentPlaying.querySelectorAll('.wbar').forEach(w => w.classList.remove('active'));
      btn.classList.remove('playing'); btn.innerHTML = '<i class="fas fa-play"></i>';
      if (audioTimer) clearTimeout(audioTimer); currentPlaying = null;
    }
  }, { passive: true });
}

// ---------- CART ----------
function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
  const items = document.getElementById('cartItems');
  const total = document.getElementById('cartTotal');
  if (!items) return;
  if (cart.length === 0) {
    items.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>Tu carrito está vacío</p></div>';
    if (total) total.textContent = '$0 USD';
    return;
  }
  let sum = 0;
  items.innerHTML = cart.map((item, i) => {
    sum += item.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span class="cart-item-meta">${item.genre || ''} · $${item.price} USD</span>
        </div>
        <div class="cart-item-actions">
          <span>${item.qty}</span>
          <button class="cart-remove" onclick="removeFromCart(${i})"><i class="fas fa-times"></i></button>
        </div>
      </div>
    `;
  }).join('');
  if (total) total.textContent = `$${sum} USD`;
}

window.toggleCart = () => {
  document.getElementById('cartSidebar').classList.toggle('active');
  document.getElementById('cartOverlay').classList.toggle('active');
};

window.addToCart = (btn) => {
  const card = btn.closest('.composer-card');
  const name = card.querySelector('h4').textContent;
  const priceText = card.querySelector('.composer-price').textContent.trim();
  const price = parseInt(priceText.replace(/[^0-9]/g, ''));
  const genre = card.querySelector('.genre-tag').textContent;
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, genre, qty: 1 });
  }
  renderCart();
  animateCartBadge();
  btn.textContent = '✓ En el carrito';
  btn.style.pointerEvents = 'none';
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Añadir al carrito';
    btn.style.pointerEvents = 'auto';
    btn.style.opacity = '1';
  }, 2000);
};

window.addToCartStore = (index) => {
  const item = content.storeItems[index];
  const existing = cart.find(i => i.name === item.title);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: item.title, price: item.price, genre: 'Tema destacado', qty: 1 });
  }
  renderCart();
  animateCartBadge();
  toggleCart();
};

window.removeFromCart = (index) => {
  cart.splice(index, 1);
  renderCart();
};

window.checkoutCart = () => {
  if (cart.length === 0) { alert('El carrito está vacío.'); return; }
  const total = document.getElementById('cartTotal').textContent;
  if (confirm(`🛒 Total: ${total}\n\n¿Confirmar pedido?`)) {
    alert('✅ Pedido confirmado. Recibirás un email con los detalles para el pago.\n\n(Plataforma en desarrollo — demo funcional)');
    cart = [];
    renderCart();
    toggleCart();
  }
};

let cartAnimTimer = null;
function animateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  badge.style.transform = 'scale(1.4)';
  if (cartAnimTimer) clearTimeout(cartAnimTimer);
  cartAnimTimer = setTimeout(() => { badge.style.transform = 'scale(1)'; }, 300);
}

window.alertPreview = () => {
  alert('🎵 Preview de 30 segundos (simulado)\n\nEn la versión final podrás escuchar fragmentos reales de cada canción.');
};

// ---------- ADMIN ----------
function initAdminUI() {
  const saved = sessionStorage.getItem('musicExpressAdmin');
  if (saved === 'true') { isAdmin = true; enableAdminMode(); }
  renderAdminBadge();
}

window.openAdminLogin = () => {
  document.getElementById('adminModal').classList.add('active');
};

window.closeAdminLogin = () => {
  document.getElementById('adminModal').classList.remove('active');
};

window.adminLogin = () => {
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;
  if (user === 'admin' && pass === '123456') {
    isAdmin = true;
    sessionStorage.setItem('musicExpressAdmin', 'true');
    closeAdminLogin();
    enableAdminMode();
    renderAdminBadge();
  } else {
    alert('Usuario o contraseña incorrectos.');
  }
};

window.adminLogout = () => {
  isAdmin = false;
  sessionStorage.removeItem('musicExpressAdmin');
  disableAdminMode();
  renderAdminBadge();
};

function enableAdminMode() {
  document.getElementById('adminToolbar')?.classList.add('active');
  document.querySelectorAll('[data-cms]').forEach(el => {
    el.classList.add('cms-editable');
    el.addEventListener('dblclick', openCmsEditor);
  });
}

function disableAdminMode() {
  document.getElementById('adminToolbar')?.classList.remove('active');
  document.querySelectorAll('[data-cms]').forEach(el => {
    el.classList.remove('cms-editable');
    el.removeEventListener('dblclick', openCmsEditor);
  });
  document.querySelectorAll('.cms-editor-modal').forEach(m => m.remove());
}

function renderAdminBadge() {
  const container = document.getElementById('adminBadgeContainer');
  if (!container) return;
  container.innerHTML = isAdmin
    ? `<span class="admin-badge active" onclick="window.adminLogout()"><i class="fas fa-shield-alt"></i> Admin</span>`
    : `<span class="admin-badge" onclick="window.openAdminLogin()"><i class="fas fa-lock"></i> Admin</span>`;
}

function openCmsEditor(e) {
  const el = e.currentTarget;
  const path = el.dataset.cms;
  if (!path) return;
  const existing = document.querySelector('.cms-editor-modal');
  if (existing) existing.remove();

  const keys = path.split('.');
  let obj = content;
  for (const k of keys) obj = obj[k];
  if (typeof obj !== 'string') return;

  const modal = document.createElement('div');
  modal.className = 'cms-editor-modal';
  modal.innerHTML = `
    <div class="cms-editor-backdrop" onclick="this.parentElement.remove()"></div>
    <div class="cms-editor-panel">
      <h4><i class="fas fa-pen"></i> Editar contenido</h4>
      <p class="cms-editor-path">${path}</p>
      ${path.includes('title') || path.includes('subtitle') || path.includes('text') || path.includes('quote')
        ? `<textarea id="cmsEditorInput" rows="4">${obj}</textarea>`
        : `<input type="text" id="cmsEditorInput" value="${obj}" />`
      }
      <div class="cms-editor-actions">
        <button class="btn btn-dark btn-sm" onclick="this.closest('.cms-editor-modal').remove()">Cancelar</button>
        <button class="btn btn-primary btn-sm" onclick="saveCmsField('${path}')">Guardar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

window.saveCmsField = (path) => {
  const input = document.getElementById('cmsEditorInput');
  if (!input) return;
  const val = input.value;
  const keys = path.split('.');
  let obj = content;
  for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
  obj[keys[keys.length - 1]] = val;
  CMS.save(content);
  // Close modal
  document.querySelector('.cms-editor-modal')?.remove();
  // Re-render
  renderContent();
  applySectionText();
  if (isAdmin) enableAdminMode();
  renderCart();
};

window.openCmsPanel = () => {
  const existing = document.querySelector('.cms-panel-modal');
  if (existing) { existing.remove(); return; }

  const flat = flattenObject(content);
  const modal = document.createElement('div');
  modal.className = 'cms-panel-modal';
  modal.innerHTML = `
    <div class="cms-panel-backdrop" onclick="this.parentElement.remove()"></div>
    <div class="cms-panel">
      <div class="cms-panel-header">
        <h3><i class="fas fa-shield-alt"></i> Panel de Administración</h3>
        <button class="cms-panel-close" onclick="this.closest('.cms-panel-modal').remove()"><i class="fas fa-times"></i></button>
      </div>
      <div class="cms-panel-body">
        <p class="cms-panel-hint">Hacé doble clic en cualquier texto de la página para editarlo, o usá el panel rápido:</p>
        ${Object.entries(flat).filter(([k]) => !k.includes('icon') && !k.includes('color') && !k.includes('initials')).map(([key, val]) => `
          <div class="cms-field">
            <label>${key}</label>
            <input type="text" value="${escapeHtml(String(val))}" data-cms-key="${key}" />
          </div>
        `).join('')}
      </div>
      <div class="cms-panel-footer">
        <button class="btn btn-dark" onclick="this.closest('.cms-panel-modal').remove()">Cancelar</button>
        <button class="btn btn-primary" onclick="saveCmsPanel()">Guardar todos los cambios</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};

function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' + k : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre));
    } else if (typeof obj[k] === 'string') {
      acc[pre] = obj[k];
    }
    return acc;
  }, {});
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

window.saveCmsPanel = () => {
  const inputs = document.querySelectorAll('.cms-field input');
  inputs.forEach(inp => {
    const key = inp.dataset.cmsKey;
    if (!key) return;
    const keys = key.split('.');
    let obj = content;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!obj[keys[i]]) obj[keys[i]] = {};
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = inp.value;
  });
  CMS.save(content);
  document.querySelector('.cms-panel-modal')?.remove();
  renderContent();
  applySectionText();
  if (isAdmin) enableAdminMode();
  renderCart();
  alert('✅ Todos los cambios guardados.');
};

window.resetContent = () => {
  if (!confirm('¿Restaurar contenido por defecto? Se perderán tus cambios personalizados.')) return;
  localStorage.removeItem(CMS.key);
  content = CMS.clone(CMS.defaults);
  renderContent();
  applySectionText();
  if (isAdmin) enableAdminMode();
  renderCart();
  document.querySelector('.cms-panel-modal')?.remove();
  alert('✅ Contenido restaurado.');
};
