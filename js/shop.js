const phoneNumber = '221769437833';

const products = [
  { id: 'cafe-250',     name: 'KAFE TUUBAA 250g',           category: 'cafe',      categoryLabel: 'Café',      price: 2000,  badge: 'Populaire',   image: 'mes%20images%20produits/photo_2026-06-15_18-14-36.jpg', desc: 'Café 95% + poivre de Sélim. Format idéal pour la maison et les petites commandes.' },
  { id: 'cafe-500',     name: 'KAFE TUUBAA 500g',           category: 'cafe',      categoryLabel: 'Café',      price: 3500,  badge: null,           image: 'mes%20images%20produits/photo_2026-06-15_18-14-41.jpg', desc: 'Café 95% + poivre de Sélim. Format équilibré pour familles et revendeurs.' },
  { id: 'cafe-1kg',     name: 'KAFE TUUBAA 1kg',            category: 'cafe',      categoryLabel: 'Café',      price: 6500,  badge: 'Sur commande', image: 'mes%20images%20produits/photo_2026-06-15_18-14-54.jpg', desc: 'Café 95% + poivre de Sélim. Grand format pour consommation familiale ou revente.' },
  { id: 'arach-100',   name: 'Arachides enrobées 100g',    category: 'arachides', categoryLabel: 'Arachides', price: 700,   badge: null,           image: 'mes%20images%20produits/photo_2026-06-15_18-14-30.jpg', desc: 'Arachides croquantes enrobées. Petit format gourmand idéal pour vendre et offrir.' },
  { id: 'arach-150',   name: 'Arachides enrobées 150g',    category: 'arachides', categoryLabel: 'Arachides', price: 1000,  badge: 'Populaire',   image: 'mes%20images%20produits/photo_2026-06-15_18-14-30.jpg', desc: 'Arachides croquantes enrobées. Snack parfait pour pause, boutique et événements.' },
  { id: 'arach-500',   name: 'Arachides enrobées 500g',    category: 'arachides', categoryLabel: 'Arachides', price: 3500,  badge: null,           image: 'mes%20images%20produits/photo_2026-06-15_18-14-27.jpg', desc: 'Arachides croquantes enrobées. Format familial pour partager ou revendre.' },
  { id: 'arach-1kg',   name: 'Arachides enrobées 1kg',     category: 'arachides', categoryLabel: 'Arachides', price: 6500,  badge: 'Sur commande', image: 'mes%20images%20produits/photo_2026-06-15_18-14-27.jpg', desc: 'Arachides croquantes enrobées. Grand format pour commandes importantes.' },
  { id: 'pack-duo',    name: 'Pack Découverte SOXNA MOMY', category: 'packs',     categoryLabel: 'Pack',      price: 3500,  badge: 'Nouveauté',   image: 'mes%20images%20produits/1.jpg',                          desc: 'Café KAFE TUUBAA 250g + Arachides enrobées 250g. Le duo parfait pour découvrir la marque.' },
  { id: 'coffret',     name: 'Coffret Cadeau Gourmand',    category: 'packs',     categoryLabel: 'Pack',      price: 15000, badge: 'Premium',     image: 'mes%20images%20produits/photo_2026-06-15_18-13-07.jpg',  desc: 'Assortiment élégant de nos meilleurs produits. Idéal pour cadeau, cérémonie ou entreprise.' }
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
    ? visible.map((p, i) => `
      <article class="product-card" style="animation-delay:${i * 0.07}s">
        <div class="media-wrap">
          <span class="product-badge badge-${p.category}">${p.categoryLabel}</span>
          ${p.badge ? `<span class="status-badge ${BADGE_CLASS[p.badge] || ''}">${p.badge}</span>` : ''}
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="price-row">
            <strong class="price">${money(p.price)}</strong>
            <button class="add" data-add="${p.id}" aria-label="Ajouter ${p.name}">+</button>
          </div>
        </div>
      </article>`).join('')
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

function updateCart() {
  const items = cartItems();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);
  qs('[data-cart-count]').textContent = count;
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
    : '<p class="empty-cart">Votre panier est vide.</p>';
  updateWhatsapp();
  saveCart();
}

function updateWhatsapp() {
  const items = cartItems();
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);
  const name  = qs('[data-customer-name]').value  || 'Client';
  const phone = qs('[data-customer-phone]').value || 'Non renseigné';
  const note  = qs('[data-customer-note]').value  || 'Aucune note';
  const lines = items.map((i) => `- ${i.name} ×${i.qty} = ${money(i.qty * i.price)}`).join('%0A');
  const msg = `Bonjour SOXNA MOMY,%0A%0AJe souhaite commander :%0A${lines || '- Panier vide'}%0A%0A*Total : ${money(total)}*%0ANom : ${name}%0ATél : ${phone}%0ANote : ${note}`;
  qs('[data-whatsapp]').href = `https://wa.me/${phoneNumber}?text=${msg}`;
}

function openCart() {
  qs('[data-cart]').classList.add('open');
  qs('[data-overlay]').classList.add('show');
}

function closeCart() {
  qs('[data-cart]').classList.remove('open');
  qs('[data-overlay]').classList.remove('show');
}

document.addEventListener('click', (e) => {
  const addId = e.target.closest('[data-add]')?.dataset.add;
  const incId = e.target.closest('[data-inc]')?.dataset.inc;
  const decId = e.target.closest('[data-dec]')?.dataset.dec;
  if (addId) { state.cart[addId] = (state.cart[addId] || 0) + 1; updateCart(); openCart(); }
  if (incId) { state.cart[incId] = (state.cart[incId] || 0) + 1; updateCart(); }
  if (decId) {
    state.cart[decId] = Math.max(0, (state.cart[decId] || 0) - 1);
    if (state.cart[decId] === 0) delete state.cart[decId];
    updateCart();
  }
  if (e.target.closest('[data-cart-open]')) openCart();
  if (e.target.closest('[data-cart-close]') || e.target.matches('[data-overlay]')) closeCart();
  if (e.target.closest('[data-clear]')) { state.cart = {}; updateCart(); }
});

qs('[data-menu]')?.addEventListener('click', () => qs('[data-nav]')?.classList.toggle('open'));
qs('[data-search]').addEventListener('input', renderProducts);
qs('[data-filter]').addEventListener('change', renderProducts);
document.querySelectorAll('.customer-input').forEach((el) => el.addEventListener('input', updateWhatsapp));

renderProducts();
updateCart();
