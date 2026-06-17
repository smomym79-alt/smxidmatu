(function () {
  var STORAGE_KEY = 'soxnaLang';

  var UI = {
    fr: {
      'nav.cafe': '☕ Café',
      'nav.arachides': '🥜 Arachides',
      'nav.packs': '🎁 Packs',
      'topbar.cart': 'Panier',
      'hero.eyebrow': 'Café 95% + Poivre de Sélim · Arachides Enrobées Croquantes',
      'hero.h1': 'Du café touba et des arachides croquantes prêts à commander.',
      'hero.p': 'KAFE TUUBAA SOXNA MOMY et arachides enrobées croquantes — fabriqués avec soin à Keur Massar. Commandez directement, en famille ou en gros pour revendeurs.',
      'hero.btn.catalog': 'Voir le catalogue',
      'hero.btn.cart': 'Ouvrir le panier',
      'hero.proof.natural': 'naturel',
      'hero.proof.craft': 'artisanal',
      'hero.panel.label': 'Sélection premium',
      'catalog.eyebrow': 'Catalogue',
      'catalog.h2': 'Articles disponibles',
      'catalog.p': 'Cliquez sur un produit pour voir le détail. Ajoutez au panier et envoyez la commande par WhatsApp.',
      'catalog.search': 'Rechercher un article…',
      'filter.all': 'Toutes catégories',
      'filter.cafe': 'Café',
      'filter.arachides': 'Arachides',
      'filter.packs': 'Packs & Coffrets',
      'promise.eyebrow': 'Pourquoi commander chez nous',
      'promise.h2': 'Une qualité artisanale, une commande rapide et fluide.',
      'promise.p': 'Café 95% pur + poivre de Sélim, arachides enrobées croquantes faites maison. Livraison et commande directe depuis Keur Massar.',
      'promise.card1.h3': 'Commande fluide',
      'promise.card1.p': 'Le panier calcule automatiquement le total et prépare le message WhatsApp en un clic.',
      'promise.card2.h3': 'Formats pour tous',
      'promise.card2.p': 'Petits sachets, pots moyens, grands formats familiaux, packs et coffrets élégants.',
      'promise.card3.h3': 'Revendeurs bienvenus',
      'promise.card3.p': 'Commandes en gros disponibles pour boutiques, marchés et zones de revente.',
      'cta.eyebrow': 'Commande rapide',
      'cta.h2': 'Votre commande est prête en quelques clics.',
      'cta.p': 'Indiquez votre nom, téléphone et adresse dans le panier. Le message WhatsApp sera généré automatiquement.',
      'cta.btn': 'Commander sur WhatsApp',
      'cart.label': 'Commande',
      'cart.title': 'Votre panier',
      'cart.total': 'Total commande',
      'cart.name': 'Votre nom',
      'cart.phone': 'Téléphone',
      'cart.note': 'Adresse ou note de livraison',
      'cart.whatsapp': 'Envoyer sur WhatsApp',
      'cart.clear': 'Vider le panier',
      'cart.empty': 'Panier vide — explorez le catalogue ☕',
      'modal.add': 'Ajouter au panier',
      'hover.hint': 'Voir le détail',
      'no.results': 'Aucun produit trouvé.',
      'footer.brand.desc': 'Boutique officielle<br>Café, arachides enrobées,<br>packs et coffrets gourmands',
      'footer.cat.h4': 'Catalogue',
      'footer.cat.link2': 'Arachides enrobées',
      'footer.cat.link3': 'Packs & Coffrets',
      'footer.cat.link4': 'Passer une commande',
      'footer.contact.h4': 'Contact & Localisation',
      'footer.address.street': 'Route du Lac Rose, Dakar',
      'footer.bottom.right': 'Artisanal · 100% naturel · Fait au Sénégal 🇸🇳',
      'mobile.cafe': 'Café',
      'mobile.arachides': 'Arachides',
      'mobile.packs': 'Packs',
      'mobile.cart': 'Panier',
      'wa.hello': 'Bonjour SOXNA MOMY,',
      'wa.order': 'Je souhaite commander :',
      'wa.total': 'Total :',
      'wa.name': 'Nom :',
      'wa.phone': 'Tél :',
      'wa.note': 'Note :',
      'wa.empty': '- Panier vide',
      'wa.default.name': 'Client',
      'wa.default.phone': 'Non renseigné',
      'wa.default.note': 'Aucune note',
      'toast.added': '✓ Ajouté au panier',
      'toast.whatsapp': '✓ WhatsApp ouvert — finalisez l\'envoi',
      'meta.desc': 'KAFE TUUBAA SOXNA MOMY (95% café + poivre de Sélim) et arachides enrobées croquantes. Commandez directement depuis Keur Massar, Dakar.',
      'reviews.eyebrow': 'Avis clients',
      'reviews.h2': 'Ce que disent nos clients',
      'review1.text': '"Un café d\'exception ! L\'arôme du poivre de Sélim est unique, ça fait vraiment la différence. Je commande le 500g toutes les semaines."',
      'review2.text': '"Les arachides enrobées sont irrésistibles. Toute ma famille en redemande. Je prends maintenant le grand format 1kg pour avoir du stock."',
      'review3.text': '"J\'ai commandé le coffret cadeau pour un mariage, l\'emballage était soigné et la livraison rapide. Tout le monde a adoré !"'
    },
    en: {
      'nav.cafe': '☕ Coffee',
      'nav.arachides': '🥜 Peanuts',
      'nav.packs': '🎁 Packs',
      'topbar.cart': 'Cart',
      'hero.eyebrow': '95% Coffee + Selim Pepper · Crunchy Coated Peanuts',
      'hero.h1': 'Touba coffee and crunchy peanuts, ready to order.',
      'hero.p': 'KAFE TUUBAA SOXNA MOMY and crunchy coated peanuts — crafted with care in Keur Massar. Order directly, for family or in bulk for resellers.',
      'hero.btn.catalog': 'View catalog',
      'hero.btn.cart': 'Open cart',
      'hero.proof.natural': 'natural',
      'hero.proof.craft': 'artisanal',
      'hero.panel.label': 'Premium selection',
      'catalog.eyebrow': 'Catalog',
      'catalog.h2': 'Available items',
      'catalog.p': 'Click on a product to see details. Add to cart and send your order via WhatsApp.',
      'catalog.search': 'Search for an item…',
      'filter.all': 'All categories',
      'filter.cafe': 'Coffee',
      'filter.arachides': 'Peanuts',
      'filter.packs': 'Packs & Gift sets',
      'promise.eyebrow': 'Why order from us',
      'promise.h2': 'Artisanal quality, fast and smooth ordering.',
      'promise.p': '95% pure coffee + Selim pepper, homemade crunchy coated peanuts. Delivery and direct ordering from Keur Massar.',
      'promise.card1.h3': 'Smooth ordering',
      'promise.card1.p': 'The cart automatically calculates the total and prepares the WhatsApp message in one click.',
      'promise.card2.h3': 'Formats for everyone',
      'promise.card2.p': 'Small sachets, medium jars, large family sizes, packs and elegant gift sets.',
      'promise.card3.h3': 'Resellers welcome',
      'promise.card3.p': 'Bulk orders available for shops, markets and resale areas.',
      'cta.eyebrow': 'Quick order',
      'cta.h2': 'Your order is ready in a few clicks.',
      'cta.p': 'Enter your name, phone and address in the cart. The WhatsApp message will be generated automatically.',
      'cta.btn': 'Order on WhatsApp',
      'cart.label': 'Order',
      'cart.title': 'Your cart',
      'cart.total': 'Order total',
      'cart.name': 'Your name',
      'cart.phone': 'Phone',
      'cart.note': 'Address or delivery note',
      'cart.whatsapp': 'Send on WhatsApp',
      'cart.clear': 'Empty cart',
      'cart.empty': 'Empty cart — browse the catalog ☕',
      'modal.add': 'Add to cart',
      'hover.hint': 'See details',
      'no.results': 'No products found.',
      'footer.brand.desc': 'Official store<br>Coffee, coated peanuts,<br>packs and gourmet gift sets',
      'footer.cat.h4': 'Catalog',
      'footer.cat.link2': 'Coated peanuts',
      'footer.cat.link3': 'Packs & Gift sets',
      'footer.cat.link4': 'Place an order',
      'footer.contact.h4': 'Contact & Location',
      'footer.address.street': 'Lake Rose Road, Dakar',
      'footer.bottom.right': 'Artisanal · 100% natural · Made in Senegal 🇸🇳',
      'mobile.cafe': 'Coffee',
      'mobile.arachides': 'Peanuts',
      'mobile.packs': 'Packs',
      'mobile.cart': 'Cart',
      'wa.hello': 'Hello SOXNA MOMY,',
      'wa.order': 'I would like to order:',
      'wa.total': 'Total:',
      'wa.name': 'Name:',
      'wa.phone': 'Tel:',
      'wa.note': 'Note:',
      'wa.empty': '- Empty cart',
      'wa.default.name': 'Customer',
      'wa.default.phone': 'Not provided',
      'wa.default.note': 'No note',
      'toast.added': '✓ Added to cart',
      'toast.whatsapp': '✓ WhatsApp opened — complete your order',
      'meta.desc': 'KAFE TUUBAA SOXNA MOMY (95% coffee + Selim pepper) and crunchy coated peanuts. Order directly from Keur Massar, Dakar.',
      'reviews.eyebrow': 'Customer reviews',
      'reviews.h2': 'What our customers say',
      'review1.text': '"An exceptional coffee! The Selim pepper aroma is unique, it really makes a difference. I order the 500g every week."',
      'review2.text': '"The coated peanuts are irresistible. My whole family keeps asking for more. I now get the large 1kg format to keep in stock."',
      'review3.text': '"I ordered the gift box for a wedding, the packaging was neat and delivery fast. Everyone loved it!"'
    },
    es: {
      'nav.cafe': '☕ Café',
      'nav.arachides': '🥜 Cacahuetes',
      'nav.packs': '🎁 Packs',
      'topbar.cart': 'Carrito',
      'hero.eyebrow': 'Café 95% + Pimienta de Selim · Cacahuetes Rebozados Crujientes',
      'hero.h1': 'Café de Touba y cacahuetes crujientes, listos para pedir.',
      'hero.p': 'KAFE TUUBAA SOXNA MOMY y cacahuetes rebozados crujientes — elaborados con cuidado en Keur Massar. Pide directamente, en familia o al por mayor para revendedores.',
      'hero.btn.catalog': 'Ver catálogo',
      'hero.btn.cart': 'Abrir carrito',
      'hero.proof.natural': 'natural',
      'hero.proof.craft': 'artesanal',
      'hero.panel.label': 'Selección premium',
      'catalog.eyebrow': 'Catálogo',
      'catalog.h2': 'Artículos disponibles',
      'catalog.p': 'Haz clic en un producto para ver los detalles. Añade al carrito y envía tu pedido por WhatsApp.',
      'catalog.search': 'Buscar un artículo…',
      'filter.all': 'Todas las categorías',
      'filter.cafe': 'Café',
      'filter.arachides': 'Cacahuetes',
      'filter.packs': 'Packs y Cestas',
      'promise.eyebrow': 'Por qué elegirnos',
      'promise.h2': 'Calidad artesanal, pedido rápido y fluido.',
      'promise.p': 'Café 95% puro + pimienta de Selim, cacahuetes rebozados crujientes hechos en casa. Entrega y pedido directo desde Keur Massar.',
      'promise.card1.h3': 'Pedido fluido',
      'promise.card1.p': 'El carrito calcula automáticamente el total y prepara el mensaje de WhatsApp con un clic.',
      'promise.card2.h3': 'Formatos para todos',
      'promise.card2.p': 'Bolsas pequeñas, botes medianos, formatos familiares grandes, packs y cestas elegantes.',
      'promise.card3.h3': 'Revendedores bienvenidos',
      'promise.card3.p': 'Pedidos al por mayor disponibles para tiendas, mercados y zonas de reventa.',
      'cta.eyebrow': 'Pedido rápido',
      'cta.h2': 'Tu pedido está listo en pocos clics.',
      'cta.p': 'Introduce tu nombre, teléfono y dirección en el carrito. El mensaje de WhatsApp se generará automáticamente.',
      'cta.btn': 'Pedir por WhatsApp',
      'cart.label': 'Pedido',
      'cart.title': 'Tu carrito',
      'cart.total': 'Total del pedido',
      'cart.name': 'Tu nombre',
      'cart.phone': 'Teléfono',
      'cart.note': 'Dirección o nota de entrega',
      'cart.whatsapp': 'Enviar por WhatsApp',
      'cart.clear': 'Vaciar carrito',
      'cart.empty': 'Carrito vacío — explora el catálogo ☕',
      'modal.add': 'Añadir al carrito',
      'hover.hint': 'Ver detalles',
      'no.results': 'No se encontraron productos.',
      'footer.brand.desc': 'Tienda oficial<br>Café, cacahuetes rebozados,<br>packs y cestas gourmet',
      'footer.cat.h4': 'Catálogo',
      'footer.cat.link2': 'Cacahuetes rebozados',
      'footer.cat.link3': 'Packs y Cestas',
      'footer.cat.link4': 'Hacer un pedido',
      'footer.contact.h4': 'Contacto y Ubicación',
      'footer.address.street': 'Ruta del Lago Rosa, Dakar',
      'footer.bottom.right': 'Artesanal · 100% natural · Hecho en Senegal 🇸🇳',
      'mobile.cafe': 'Café',
      'mobile.arachides': 'Cacahuetes',
      'mobile.packs': 'Packs',
      'mobile.cart': 'Carrito',
      'wa.hello': 'Hola SOXNA MOMY,',
      'wa.order': 'Me gustaría pedir:',
      'wa.total': 'Total:',
      'wa.name': 'Nombre:',
      'wa.phone': 'Tel:',
      'wa.note': 'Nota:',
      'wa.empty': '- Carrito vacío',
      'wa.default.name': 'Cliente',
      'wa.default.phone': 'No proporcionado',
      'wa.default.note': 'Sin nota',
      'toast.added': '✓ Añadido al carrito',
      'toast.whatsapp': '✓ WhatsApp abierto — finaliza tu pedido',
      'meta.desc': 'KAFE TUUBAA SOXNA MOMY (95% café + pimienta de Selim) y cacahuetes rebozados crujientes. Pide directamente desde Keur Massar, Dakar.',
      'reviews.eyebrow': 'Opiniones de clientes',
      'reviews.h2': 'Lo que dicen nuestros clientes',
      'review1.text': '"¡Un café excepcional! El aroma de la pimienta de Selim es único, marca realmente la diferencia. Pido el de 500g todas las semanas."',
      'review2.text': '"Los cacahuetes rebozados son irresistibles. Toda mi familia pide más. Ahora compro el gran formato de 1kg para tener stock."',
      'review3.text': '"Pedí la cesta regalo para una boda, el embalaje era cuidado y la entrega rápida. ¡A todos les encantó!"'
    }
  };

  var PRODUCTS = {
    fr: {
      'cafe-250': { name: 'KAFE TUUBAA SOXNA MOMY 250g', badge: 'Populaire', categoryLabel: 'Café', desc: 'Café 95% + poivre de Sélim. Format idéal pour la maison et les petites commandes.', details: 'Café en poudre composé à 95% de café pur et 5% de poivre de Sélim — un mélange unique qui donne à KAFE TUUBAA son arôme distinctif et ses bienfaits reconnus. Sachet kraft doré 250g, idéal pour la maison, pour offrir ou commencer à revendre. Préparé artisanalement à Keur Massar, Route du Lac Rose.' },
      'cafe-500': { name: 'KAFE TUUBAA SOXNA MOMY 500g', badge: null, categoryLabel: 'Café', desc: 'Café 95% + poivre de Sélim. Format équilibré pour familles et revendeurs.', details: 'Café 95% pur + poivre de Sélim. Sachet aluminium 500g — le format équilibré pour une consommation familiale régulière ou les revendeurs débutants. Goût intense, arôme unique, bienfaits reconnus. Idéal pour les boutiques qui souhaitent proposer KAFE TUUBAA à leur clientèle.' },
      'cafe-1kg': { name: 'KAFE TUUBAA SOXNA MOMY 1kg', badge: null, categoryLabel: 'Café', desc: 'Café 95% + poivre de Sélim. Grand format pour consommation familiale ou revente.', details: 'Café 95% pur + poivre de Sélim. Grand sachet kraft 1kg — le format idéal pour la revente en boutique ou une forte consommation familiale. Préparez votre commande à l\'avance, ce format est fabriqué sur commande. Contactez-nous via WhatsApp pour délai et disponibilité.' },
      'arach-150': { name: 'Arachides enrobées 150g', badge: 'Populaire', categoryLabel: 'Arachides', desc: 'Sachet souple 150g. Snack croquant parfait pour les pauses et la vente en boutique.', details: 'Arachides enrobées croquantes SOXNA MOMY — format sachet souple transparent 150g. Pratique, léger, facile à glisser dans un sac ou à disposer en boutique. Le snack préféré des amateurs de saveurs authentiques. Idéal pour les revendeurs de rue, les boutiques et les occasions.' },
      'arach-250': { name: 'Arachides enrobées 250g', badge: 'Nouveauté', categoryLabel: 'Arachides', desc: 'Pot moyen 250g. Idéal pour offrir ou partager lors d\'un événement.', details: 'Arachides enrobées croquantes SOXNA MOMY — pot moyen transparent 250g avec étiquette officielle. Un format parfait pour offrir à un proche, poser sur une table lors d\'un événement ou revendre en boutique avec une belle présentation. Produit artisanal, fabriqué à Keur Massar.' },
      'arach-500': { name: 'Arachides enrobées 500g', badge: null, categoryLabel: 'Arachides', desc: 'Grand pot 500g. Notre format le plus vendu pour familles et revendeurs.', details: 'Arachides enrobées croquantes SOXNA MOMY — grand pot rectangulaire 500g. Notre format le plus vendu, plébiscité par les familles et les revendeurs. Présentation soignée avec étiquette SOXNA MOMY bien visible. Idéal pour les boutiques, marchés et grandes occasions.' },
      'arach-1kg': { name: 'Arachides enrobées 1kg', badge: 'Sur commande', categoryLabel: 'Arachides', desc: 'Grand format 1kg. Pour commandes importantes et grossistes.', details: 'Arachides enrobées croquantes SOXNA MOMY — grand format 1kg. Disponible pour les commandes importantes : boutiques, grossistes, événements. Contactez-nous directement via WhatsApp pour la disponibilité, les délais et les conditions de gros. Tarifs préférentiels pour volumes importants.' },
      'pack-duo': { name: 'Pack Découverte SOXNA MOMY', badge: 'Nouveauté', categoryLabel: 'Pack', desc: 'KAFE TUUBAA SOXNA MOMY 250g + Arachides 250g. Le duo parfait pour découvrir la marque.', details: 'Le Duo Parfait SOXNA MOMY : KAFE TUUBAA SOXNA MOMY 250g + Arachides enrobées croquantes 250g réunis dans un seul pack. Deux produits emblématiques pour découvrir tout ce que la marque a à offrir. Idéal pour offrir à un proche, tester la marque ou en faire un cadeau accessible et savoureux.' },
      'coffret': { name: 'Coffret Cadeau Gourmand', badge: 'Premium', categoryLabel: 'Pack', desc: 'Assortiment élégant de nos meilleurs produits pour cadeau, cérémonie ou entreprise.', details: 'Coffret gourmand premium SOXNA MOMY — notre assortiment le plus complet, présenté dans un emballage élégant et soigné. Inclut plusieurs formats de KAFE TUUBAA SOXNA MOMY et d\'arachides enrobées. Parfait pour les cérémonies, les entreprises souhaitant offrir un cadeau local authentique, et les occasions de prestige.' }
    },
    en: {
      'cafe-250': { name: 'KAFE TUUBAA SOXNA MOMY 250g', badge: 'Popular', categoryLabel: 'Coffee', desc: '95% coffee + Selim pepper. Ideal size for home and small orders.', details: 'Ground coffee made of 95% pure coffee and 5% Selim pepper — a unique blend that gives KAFE TUUBAA its distinctive aroma and recognized benefits. 250g golden kraft sachet, perfect for home, as a gift or to start reselling. Handcrafted in Keur Massar, Lake Rose Road.' },
      'cafe-500': { name: 'KAFE TUUBAA SOXNA MOMY 500g', badge: null, categoryLabel: 'Coffee', desc: '95% coffee + Selim pepper. Balanced size for families and resellers.', details: '95% pure coffee + Selim pepper. 500g aluminum sachet — the balanced size for regular family consumption or beginner resellers. Intense flavour, unique aroma, recognized benefits. Ideal for shops wishing to offer KAFE TUUBAA to their customers.' },
      'cafe-1kg': { name: 'KAFE TUUBAA SOXNA MOMY 1kg', badge: null, categoryLabel: 'Coffee', desc: '95% coffee + Selim pepper. Large size for family consumption or resale.', details: '95% pure coffee + Selim pepper. Large 1kg kraft sachet — the ideal size for resale in a shop or heavy family consumption. Made to order. Contact us via WhatsApp for lead time and availability.' },
      'arach-150': { name: 'Coated Peanuts 150g', badge: 'Popular', categoryLabel: 'Peanuts', desc: '150g soft sachet. Crunchy snack perfect for breaks and boutique sales.', details: 'Crunchy coated peanuts SOXNA MOMY — 150g transparent soft sachet. Handy, lightweight, easy to slip in a bag or display in a shop. The favourite snack of authentic flavour lovers. Ideal for street resellers, boutiques and occasions.' },
      'arach-250': { name: 'Coated Peanuts 250g', badge: 'New', categoryLabel: 'Peanuts', desc: '250g medium jar. Perfect for gifting or sharing at an event.', details: 'Crunchy coated peanuts SOXNA MOMY — 250g transparent medium jar with official label. A perfect format to give to a loved one, place on a table at an event or resell in a boutique with a beautiful presentation. Artisanal product, made in Keur Massar.' },
      'arach-500': { name: 'Coated Peanuts 500g', badge: null, categoryLabel: 'Peanuts', desc: 'Large 500g jar. Our best-selling size for families and resellers.', details: 'Crunchy coated peanuts SOXNA MOMY — large 500g rectangular jar. Our best-selling size, loved by families and resellers. Neat presentation with clearly visible SOXNA MOMY label. Ideal for boutiques, markets and big occasions.' },
      'arach-1kg': { name: 'Coated Peanuts 1kg', badge: 'On order', categoryLabel: 'Peanuts', desc: 'Large 1kg size. For bulk orders and wholesalers.', details: 'Crunchy coated peanuts SOXNA MOMY — large 1kg size. Available for bulk orders: boutiques, wholesalers, events. Contact us directly via WhatsApp for availability, lead times and wholesale terms. Preferential rates for large volumes.' },
      'pack-duo': { name: 'SOXNA MOMY Discovery Pack', badge: 'New', categoryLabel: 'Pack', desc: 'KAFE TUUBAA SOXNA MOMY 250g + Peanuts 250g. The perfect duo to discover the brand.', details: 'The Perfect SOXNA MOMY Duo: KAFE TUUBAA SOXNA MOMY 250g + crunchy coated peanuts 250g in one pack. Two iconic products to discover everything the brand has to offer. Ideal as a gift for a loved one, to test the brand, or as an affordable and delicious present.' },
      'coffret': { name: 'Gourmet Gift Box', badge: 'Premium', categoryLabel: 'Pack', desc: 'Elegant assortment of our finest products for gifts, ceremonies or corporate events.', details: 'Premium gourmet gift box SOXNA MOMY — our most complete assortment, presented in elegant and carefully crafted packaging. Includes several sizes of KAFE TUUBAA SOXNA MOMY and coated peanuts. Perfect for ceremonies, companies wishing to offer an authentic local gift, and prestigious occasions.' }
    },
    es: {
      'cafe-250': { name: 'KAFE TUUBAA SOXNA MOMY 250g', badge: 'Popular', categoryLabel: 'Café', desc: 'Café 95% + pimienta de Selim. Tamaño ideal para casa y pequeños pedidos.', details: 'Café molido compuesto de 95% de café puro y 5% de pimienta de Selim — una mezcla única que da a KAFE TUUBAA su aroma distintivo y sus reconocidos beneficios. Bolsa kraft dorada 250g, ideal para casa, para regalar o para empezar a revender. Elaborado artesanalmente en Keur Massar, Ruta del Lago Rosa.' },
      'cafe-500': { name: 'KAFE TUUBAA SOXNA MOMY 500g', badge: null, categoryLabel: 'Café', desc: 'Café 95% + pimienta de Selim. Tamaño equilibrado para familias y revendedores.', details: 'Café 95% puro + pimienta de Selim. Bolsa de aluminio 500g — el tamaño equilibrado para un consumo familiar regular o revendedores principiantes. Sabor intenso, aroma único, beneficios reconocidos. Ideal para tiendas que deseen ofrecer KAFE TUUBAA a sus clientes.' },
      'cafe-1kg': { name: 'KAFE TUUBAA SOXNA MOMY 1kg', badge: null, categoryLabel: 'Café', desc: 'Café 95% + pimienta de Selim. Gran formato para consumo familiar o reventa.', details: 'Café 95% puro + pimienta de Selim. Gran bolsa kraft 1kg — el formato ideal para la reventa en tienda o un consumo familiar elevado. Hecho bajo pedido. Contáctenos via WhatsApp para plazos y disponibilidad.' },
      'arach-150': { name: 'Cacahuetes rebozados 150g', badge: 'Popular', categoryLabel: 'Cacahuetes', desc: 'Bolsa suave 150g. Snack crujiente perfecto para pausas y venta en tienda.', details: 'Cacahuetes rebozados crujientes SOXNA MOMY — bolsa suave transparente 150g. Práctico, ligero, fácil de llevar en una bolsa o colocar en una tienda. El snack favorito de los amantes de los sabores auténticos. Ideal para revendedores de calle, tiendas y ocasiones.' },
      'arach-250': { name: 'Cacahuetes rebozados 250g', badge: 'Novedad', categoryLabel: 'Cacahuetes', desc: 'Bote mediano 250g. Ideal para regalar o compartir en un evento.', details: 'Cacahuetes rebozados crujientes SOXNA MOMY — bote mediano transparente 250g con etiqueta oficial. Un formato perfecto para regalar a un ser querido, colocar en una mesa durante un evento o revender en tienda con una hermosa presentación. Producto artesanal, fabricado en Keur Massar.' },
      'arach-500': { name: 'Cacahuetes rebozados 500g', badge: null, categoryLabel: 'Cacahuetes', desc: 'Gran bote 500g. Nuestro formato más vendido para familias y revendedores.', details: 'Cacahuetes rebozados crujientes SOXNA MOMY — gran bote rectangular 500g. Nuestro formato más vendido, preferido por familias y revendedores. Presentación cuidada con etiqueta SOXNA MOMY bien visible. Ideal para tiendas, mercados y grandes ocasiones.' },
      'arach-1kg': { name: 'Cacahuetes rebozados 1kg', badge: 'Por encargo', categoryLabel: 'Cacahuetes', desc: 'Gran formato 1kg. Para pedidos importantes y mayoristas.', details: 'Cacahuetes rebozados crujientes SOXNA MOMY — gran formato 1kg. Disponible para pedidos importantes: tiendas, mayoristas, eventos. Contáctenos directamente via WhatsApp para disponibilidad, plazos y condiciones de mayorista. Tarifas preferenciales para grandes volúmenes.' },
      'pack-duo': { name: 'Pack Descubrimiento SOXNA MOMY', badge: 'Novedad', categoryLabel: 'Pack', desc: 'KAFE TUUBAA SOXNA MOMY 250g + Cacahuetes 250g. El dúo perfecto para descubrir la marca.', details: 'El Dúo Perfecto SOXNA MOMY: KAFE TUUBAA SOXNA MOMY 250g + Cacahuetes rebozados crujientes 250g en un solo pack. Dos productos emblemáticos para descubrir todo lo que la marca tiene para ofrecer. Ideal para regalar a un ser querido, probar la marca o como un regalo accesible y delicioso.' },
      'coffret': { name: 'Cesta Regalo Gourmet', badge: 'Premium', categoryLabel: 'Pack', desc: 'Surtido elegante de nuestros mejores productos para regalo, ceremonia o empresa.', details: 'Cesta gourmet premium SOXNA MOMY — nuestro surtido más completo, presentado en un embalaje elegante y cuidado. Incluye varios formatos de KAFE TUUBAA SOXNA MOMY y cacahuetes rebozados. Perfecto para ceremonias, empresas que deseen ofrecer un regalo local auténtico, y ocasiones de prestigio.' }
    }
  };

  var BADGE_CLASS = {
    'Populaire': 'sb-green', 'Popular': 'sb-green',
    'Nouveauté': 'sb-blue', 'New': 'sb-blue', 'Novedad': 'sb-blue',
    'Sur commande': 'sb-gray', 'On order': 'sb-gray', 'Por encargo': 'sb-gray',
    'Premium': 'sb-gold'
  };

  var lang = localStorage.getItem(STORAGE_KEY) || 'fr';

  function t(key) { return (UI[lang] || UI.fr)[key] || UI.fr[key] || key; }
  function tProduct(id) { return (PRODUCTS[lang] || PRODUCTS.fr)[id] || PRODUCTS.fr[id] || {}; }
  function getLang() { return lang; }
  function badgeClass(badge) { return BADGE_CLASS[badge] || ''; }

  function applyLang(newLang) {
    if (!UI[newLang]) return;
    lang = newLang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.placeholder = t(el.dataset.i18nPh);
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta.desc');

    document.dispatchEvent(new CustomEvent('smx:langchange'));
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang-btn]');
    if (btn) applyLang(btn.dataset.langBtn);
  });

  window.SMX = { t: t, tProduct: tProduct, getLang: getLang, badgeClass: badgeClass, applyLang: applyLang };

  applyLang(lang);
})();
