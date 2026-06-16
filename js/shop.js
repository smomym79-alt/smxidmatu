const phoneNumber = '221769437833';

const products = [
  {
    id: 'cafe-250', name: 'KAFE TUUBAA SOXNA MOMY 250g', category: 'cafe', categoryLabel: 'Café',
    price: 2000, badge: 'Populaire',
    image: 'mes%20images%20produits/photo_2026-06-15_18-14-36.jpg',
    desc: 'Café 95% + poivre de Sélim. Format idéal pour la maison et les petites commandes.',
    details: 'Café en poudre composé à 95% de café pur et 5% de poivre de Sélim — un mélange unique qui donne à KAFE TUUBAA son arôme distinctif et ses bienfaits reconnus. Sachet kraft doré 250g, idéal pour la maison, pour offrir ou commencer à revendre. Préparé artisanalement à Keur Massar, Route du Lac Rose.'
  },
  {
    id: 'cafe-500', name: 'KAFE TUUBAA SOXNA MOMY 500g', category: 'cafe', categoryLabel: 'Café',
    price: 3500, badge: null,
    image: 'mes%20images%20produits/caf%C3%A9500g.png',
    desc: 'Café 95% + poivre de Sélim. Format équilibré pour familles et revendeurs.',
    details: 'Café 95% pur + poivre de Sélim. Sachet aluminium 500g — le format équilibré pour une consommation familiale régulière ou les revendeurs débutants. Goût intense, arôme unique, bienfaits reconnus. Idéal pour les boutiques qui souhaitent proposer KAFE TUUBAA à leur clientèle.'
  },
  {
    id: 'cafe-1kg', name: 'KAFE TUUBAA SOXNA MOMY 1kg', category: 'cafe', categoryLabel: 'Café',
    price: 6500, badge: null,
    image: 'mes%20images%20produits/cafe1kg.png',
    desc: 'Café 95% + poivre de Sélim. Grand format pour consommation familiale ou revente.',
    details: 'Café 95% pur + poivre de Sélim. Grand sachet kraft 1kg — le format idéal pour la revente en boutique ou une forte consommation familiale. Préparez votre commande à l\'avance, ce format est fabriqué sur commande. Contactez-nous via WhatsApp pour délai et disponibilité.'
  },
  {
    id: 'arach-150', name: 'Arachides enrobées 150g', category: 'arachides', categoryLabel: 'Arachides',
    price: 1000, badge: 'Populaire',
    image: 'mes%20images%20produits/arachide150g.png',
    desc: 'Sachet souple 150g. Snack croquant parfait pour les pauses et la vente en boutique.',
    details: 'Arachides enrobées croquantes SOXNA MOMY — format sachet souple transparent 150g. Pratique, léger, facile à glisser dans un sac ou à disposer en boutique. Le snack préféré des amateurs de saveurs authentiques. Idéal pour les revendeurs de rue, les boutiques et les occasions.'
  },
  {
    id: 'arach-250', name: 'Arachides enrobées 250g', category: 'arachides', categoryLabel: 'Arachides',
    price: 1750, badge: 'Nouveauté',
    image: 'mes%20images%20produits/arachide250g.png',
    desc: 'Pot moyen 250g. Idéal pour offrir ou partager lors d\'un événement.',
    details: 'Arachides enrobées croquantes SOXNA MOMY — pot moyen transparent 250g avec étiquette officielle. Un format parfait pour offrir à un proche, poser sur une table lors d\'un événement ou revendre en boutique avec une belle présentation. Produit artisanal, fabriqué à Keur Massar.'
  },
  {
    id: 'arach-500', name: 'Arachides enrobées 500g', category: 'arachides', categoryLabel: 'Arachides',
    price: 3500, badge: null,
    image: 'mes%20images%20produits/arachide500g.png',
    desc: 'Grand pot 500g. Notre format le plus vendu pour familles et revendeurs.',
    details: 'Arachides enrobées croquantes SOXNA MOMY — grand pot rectangulaire 500g. Notre format le plus vendu, plébiscité par les familles et les revendeurs. Présentation soignée avec étiquette SOXNA MOMY bien visible. Idéal pour les boutiques, marchés et grandes occasions.'
  },
  {
    id: 'arach-1kg', name: 'Arachides enrobées 1kg', category: 'arachides', categoryLabel: 'Arachides',
    price: 6500, badge: 'Sur commande',
    image: 'mes%20images%20produits/photo_2026-06-15_18-14-27.jpg',
    desc: 'Grand format 1kg. Pour commandes importantes et grossistes.',
    details: 'Arachides enrobées croquantes SOXNA MOMY — grand format 1kg. Disponible pour les commandes importantes : boutiques, grossistes, événements. Contactez-nous directement via WhatsApp pour la disponibilité, les délais et les conditions de gros. Tarifs préférentiels pour volumes importants.'
  },
  {
    id: 'pack-duo', name: 'Pack Découverte SOXNA MOMY', category: 'packs', categoryLabel: 'Pack',
    price: 3500, badge: 'Nouveauté',
    image: 'mes%20images%20produits/1.jpg',
    desc: 'KAFE TUUBAA SOXNA MOMY 250g + Arachides 250g. Le duo parfait pour découvrir la marque.',
    details: 'Le Duo Parfait SOXNA MOMY : KAFE TUUBAA SOXNA MOMY 250g + Arachides enrobées croquantes 250g réunis dans un seul pack. Deux produits emblématiques pour découvrir tout ce que la marque a à offrir. Idéal pour offrir à un proche, tester la marque ou en faire un cadeau accessible et savoureux.'
  },
  {
    id: 'coffret', name: 'Coffret Cadeau Gourmand', category: 'packs', categoryLabel: 'Pack',
    price: 15000, badge: 'Premium',
    image: 'mes%20images%20produits/photo_2026-06-15_18-13-07.jpg',
    desc: 'Assortiment élégant de nos meilleurs produits pour cadeau, cérémonie ou entreprise.',
    details: 'Coffret gourmand premium SOXNA MOMY — notre assortiment le plus complet, présenté dans un emballage élégant et soigné. Inclut plusieurs formats de KAFE TUUBAA SOXNA MOMY et d\'arachides enrobées. Parfait pour les cérémonies, les entreprises souhaitant offrir un cadeau local authentique, et les occasions de prestige.'
  }
];

const state = { cart: JSON.parse(localStorage.getItem('soxnaCart') || '{}') };

const money = (v) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(v) + ' FCFA';
const qs = (s) => document.querySelector(s);

const BADGE_CLASS = {
  'Populaire':    'sb-green',
  'Nouveauté':   'sb-blue',
  'Sur commande': 'sb-gray',
  'Premium':      'sb-gold'
};

function saveCart() {
  localStorage.setItem('soxnaCart', JSON.stringify(state.cart));
}

function renderProducts() {
  const container = qs('[data-products]');
  const term = qs('[data-search]').value.toLowerCase();
  const filter = qs('[data-filter]').value;
  const visible = products.filter((p) =>
    (p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term)) &&
    (filter === 'all' || p.category === filter)
  );

  container.innerHTML = visible.length
    ? visible.map((p, i) => {
        const qty = state.cart[p.id] || 0;
        return `
        <article class="product-card" data-open="${p.id}" style="animation-delay:${i * 0.07}s" role="button" tabindex="0" aria-label="Voir ${p.name}">
          <div class="media-wrap">
            <span class="product-badge badge-${p.category}">${p.categoryLabel}</span>
            ${p.badge ? `<span class="status-badge ${BADGE_CLASS[p.badge] || ''}">${p.badge}</span>` : ''}
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="card-hover-hint">Voir le détail</div>
          </div>
          <div class="product-info">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price-row">
              <strong class="price">${money(p.price)}</strong>
              <button class="add${qty > 0 ? ' in-cart' : ''}" data-add="${p.id}" aria-label="Ajouter ${p.name}">${qty > 0 ? `×${qty}` : '+'}</button>
            </div>
          </div>
        </article>`;
      }).join('')
    : '<p class="no-results">Aucun produit trouvé.</p>';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.product-card').forEach((card) => observer.observe(card));
}

function cartItems() {
  return Object.entries(state.cart)
    .map(([id, qty]) => ({ ...products.find((p) => p.id === id), qty }))
    .filter((item) => item.id);
}

function bounceCartCount() {
  const el = qs('[data-cart-count]');
  el.classList.remove('bounce');
  void el.offsetWidth;
  el.classList.add('bounce');
}

function updateCart() {
  const items = cartItems();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);
  qs('[data-cart-count]').textContent = count;
  const mobileCount = qs('[data-mobile-cart-count]');
  if (mobileCount) mobileCount.textContent = count;
  qs('[data-cart-total]').textContent = money(total);
  qs('[data-cart-items]').innerHTML = items.length
    ? items.map((item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <small>${money(item.price)} × ${item.qty}</small>
        </div>
        <div class="qty">
          <button data-dec="${item.id}">−</button>
          <strong>${item.qty}</strong>
          <button data-inc="${item.id}">+</button>
        </div>
      </div>`).join('')
    : '<p class="empty-cart">Panier vide — explorez le catalogue ☕</p>';
  updateWhatsapp();
  saveCart();
  renderProducts();
}

function updateWhatsapp() {
  const items = cartItems();
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);
  const name  = qs('[data-customer-name]').value  || 'Client';
  const phone = qs('[data-customer-phone]').value || 'Non renseigné';
  const note  = qs('[data-customer-note]').value  || 'Aucune note';
  const lines = items.map((i) => `- ${i.name} ×${i.qty} = ${money(i.qty * i.price)}`).join('%0A');
  const msg = `Bonjour SOXNA MOMY,%0A%0AJe souhaite commander :%0A${lines || '- Panier vide'}%0A%0A*Total : ${money(total)}*%0ANom : ${name}%0ATél : ${phone}%0ANote : ${note}`;
  const btn = qs('[data-whatsapp]');
  btn.href = `https://wa.me/${phoneNumber}?text=${msg}`;
  const empty = items.length === 0;
  btn.classList.toggle('btn-disabled', empty);
  btn.style.pointerEvents = empty ? 'none' : '';
  btn.style.opacity = empty ? '0.45' : '';
}

/* ── MODAL ── */
function openModal(product) {
  const backdrop = qs('[data-modal-backdrop]');
  qs('[data-modal-img]').src = product.image;
  qs('[data-modal-img]').alt = product.name;
  const badgeEl = qs('[data-modal-badge]');
  badgeEl.textContent = product.categoryLabel;
  badgeEl.className = `product-badge badge-${product.category}`;
  qs('[data-modal-name]').textContent = product.name;
  qs('[data-modal-details]').textContent = product.details;
  qs('[data-modal-price]').textContent = money(product.price);
  qs('[data-modal-add]').dataset.add = product.id;
  backdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  qs('[data-modal-backdrop]').classList.remove('show');
  document.body.style.overflow = '';
}

/* ── CART PANEL ── */
function openCart() {
  qs('[data-cart]').classList.add('open');
  qs('[data-overlay]').classList.add('show');
}

function closeCart() {
  qs('[data-cart]').classList.remove('open');
  qs('[data-overlay]').classList.remove('show');
}

/* ── EVENTS ── */
document.addEventListener('click', (e) => {
  const addId = e.target.closest('[data-add]')?.dataset.add;
  const incId = e.target.closest('[data-inc]')?.dataset.inc;
  const decId = e.target.closest('[data-dec]')?.dataset.dec;

  if (addId) {
    state.cart[addId] = (state.cart[addId] || 0) + 1;
    updateCart();
    bounceCartCount();
    // If triggered from modal, close modal and open cart
    if (e.target.closest('[data-modal-backdrop]')) { closeModal(); openCart(); }
    else { openCart(); }
  }
  if (incId) { state.cart[incId] = (state.cart[incId] || 0) + 1; updateCart(); bounceCartCount(); }
  if (decId) {
    state.cart[decId] = Math.max(0, (state.cart[decId] || 0) - 1);
    if (state.cart[decId] === 0) delete state.cart[decId];
    updateCart();
  }

  if (e.target.closest('[data-cart-open]')) openCart();
  if (e.target.closest('[data-cart-close]') || e.target.matches('[data-overlay]')) closeCart();
  if (e.target.closest('[data-clear]')) { state.cart = {}; updateCart(); }

  // Modal: open on card click (but not on the + button)
  const cardEl = e.target.closest('[data-open]');
  if (cardEl && !e.target.closest('[data-add]')) {
    const product = products.find((p) => p.id === cardEl.dataset.open);
    if (product) openModal(product);
  }

  // Modal: close
  if (e.target.closest('[data-modal-close]')) closeModal();
  if (e.target.matches('[data-modal-backdrop]')) closeModal();
});

// Category nav: filter + scroll on click
document.querySelectorAll('[data-cat]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = link.dataset.cat;
    qs('[data-filter]').value = cat;
    renderProducts();
    qs('#articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('[data-cat]').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
    qs('[data-nav]')?.classList.remove('open');
  });
});

// Sync cat-nav active state when select changes
function syncCatNav() {
  const val = qs('[data-filter]').value;
  document.querySelectorAll('[data-cat]').forEach((l) => {
    l.classList.toggle('active', l.dataset.cat === val);
  });
}

// Close mobile nav when a link is clicked
document.querySelectorAll('[data-nav] a').forEach((a) =>
  a.addEventListener('click', () => qs('[data-nav]')?.classList.remove('open'))
);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

qs('[data-menu]')?.addEventListener('click', () => qs('[data-nav]')?.classList.toggle('open'));
qs('[data-search]').addEventListener('input', renderProducts);
qs('[data-filter]').addEventListener('change', () => { syncCatNav(); renderProducts(); });
document.querySelectorAll('.customer-input').forEach((el) => el.addEventListener('input', updateWhatsapp));

renderProducts();
updateCart();
