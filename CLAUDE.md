# Boutique SMXidmatu — CLAUDE.md

## Projet
Site e-commerce one-page pour **SOXNA MOMY**, vendant du café KAFE TUUBAA et des arachides enrobées croquantes depuis Keur Massar, Dakar.

## Stack
- Vanilla HTML / CSS / JS (aucun framework)
- Commandes via WhatsApp (`wa.me/221769437833`)
- Panier persisté en `localStorage`
- Déploiement : GitHub → Vercel (auto-deploy sur push `main`)

## Dépôt & Déploiement
- GitHub : `github.com/smomym79-alt/smxidmatu`
- Vercel URL : `https://smxidmatu.vercel.app`
- Vercel project ID : `prj_KHG6hp9tluzwD2dE3dRRTy3QKy1r`
- Vercel team ID : `team_qULUaXf0qOW80jvYvFomFAXA`

## Fichiers principaux
| Fichier | Rôle |
|---|---|
| `index.html` | Structure HTML, nav, hero, sections, footer, modal, barre mobile |
| `css/shop.css` | Tout le CSS (palette, layout, composants, responsive) |
| `js/shop.js` | Produits, panier, modal, WhatsApp, filtres catégorie |
| `mes images produits/` | Photos produits (JPG + PNG) |

## Design

### Palette — Vert Forêt & Or (Palette 5)
```
--forest:      #166534   vert forêt (boutons, accents)
--forest-dark: #052e16   vert nuit (sections sombres, barre mobile)
--black:       #021008   vert nuit profond (footer, hero panel)
--gold:        #d4af37   or vieilli (accents, prix, titre hero)
--gold-2:      #f0d875   or clair (textes sur fond sombre)
--paper:       #f5faf2   fond vert très pâle
--cream:       #e8f5e2   crème verte
--line:        #c8dfc2   bordures
--muted:       #4d6b55   texte secondaire
```

### Polices
- Titres / serif : **DM Serif Display** (Google Fonts)
- Corps / UI : **DM Sans** (Google Fonts)

## Produits (`js/shop.js`)
| ID | Nom | Prix | Badge | Image |
|---|---|---|---|---|
| cafe-250 | KAFE TUUBAA SOXNA MOMY 250g | 2 000 FCFA | Populaire | `photo_2026-06-15_18-14-36.jpg` |
| cafe-500 | KAFE TUUBAA SOXNA MOMY 500g | 3 500 FCFA | — | `café500g.png` |
| cafe-1kg | KAFE TUUBAA SOXNA MOMY 1kg | 6 500 FCFA | — | `cafe1kg.png` |
| arach-150 | Arachides enrobées 150g | 1 000 FCFA | Populaire | `arachide150g.png` |
| arach-250 | Arachides enrobées 250g | 1 750 FCFA | Nouveauté | `arachide250g.png` |
| arach-500 | Arachides enrobées 500g | 3 500 FCFA | — | `arachide500g.png` |
| arach-1kg | Arachides enrobées 1kg | 6 500 FCFA | Sur commande | `photo_2026-06-15_18-14-27.jpg` |
| pack-duo | Pack Découverte SOXNA MOMY | 3 500 FCFA | Nouveauté | `1.jpg` |
| coffret | Coffret Cadeau Gourmand | 15 000 FCFA | Premium | `photo_2026-06-15_18-13-07.jpg` |

> Images café (sachets portrait) : `object-fit: contain` via `.product-card:has(.badge-cafe) img`

## Navigation (Navigation C)
Topbar : `[SMX · SMXidmatu]` | `[☕ Café] [🥜 Arachides] [🎁 Packs]` | `[📞] [🛒]`
- Clic catégorie → filtre catalogue + scroll vers `#articles`
- Mobile : hamburger → dropdown `.cat-nav`
- Barre fixe en bas sur mobile (`≤820px`) : ☕ / 🥜 / 🎁 / 🛒

## Fonctionnalités
- Modal produit au clic sur carte (détail + ajout panier)
- Panier latéral avec nom / téléphone / note client
- Message WhatsApp pré-formaté généré automatiquement
- Bouton WhatsApp désactivé si panier vide
- Filtre par catégorie + recherche texte
- Open Graph configuré (WhatsApp/Facebook preview)
- `localStorage` pour persistance du panier

## Conventions importantes
- Nom du café toujours : **KAFE TUUBAA SOXNA MOMY** (jamais "Café KAFE TUUBAA")
- Marque dans le header : **SMXidmatu** / badge : **SMX**
- Titre hero : *Soxna Momy Xidmatu* (DM Serif Display italic, or)
- Téléphone : `+221 76 943 78 33` / `221769437833` (WhatsApp)
- Ne jamais mettre "Sur commande" sur le café 1kg (stock disponible)
