<template>
  <div class="banner1"></div>

  <div class="page-wrapper mt-5">

    <!-- ══════════════════════════════════
         HERO PRIMEURS (image + texte gauche)
    ══════════════════════════════════ -->
    <div class="hero-primeurs">
      <div class="hero-primeurs-inner">
        <!-- Côté image à droite -->
        <div class="hero-img-side">
          <img src="/src/assets/images/use/15.jpg" class="hero-main-img" alt="Primeurs"/>
        </div>
        <!-- Texte à gauche superposé -->
        <div class="hero-text-side">
          <h1 class="hero-title" style="font-size: 45px;">Éveillez<br/>vos Sens avec<br/>les Primeurs</h1>
        </div>
      </div>
      <!-- Description sous le bloc hero -->
      <div class="hero-description">
        <p>
          Bienvenue dans l'univers des primeurs, un voyage sensoriel qui ravira les passionnés de
          vin. Ici, chaque bouteille raconte une histoire, chaque gorgée vous transporte au cœur
          des vignes. Réservés exclusivement à nos abonnés, ces crus d'exception vous ouvrent les
          portes de la découverte, vous permettant d'accéder à des millésimes soigneusement
          sélectionnés bien avant leur mise en vente.
        </p>
      </div>
    </div>

    <!-- ══════════════════════════════════
         TOOLBAR
    ══════════════════════════════════ -->
    <div class="toolbar-bar">
      <div class="toolbar-left">
        <button
          v-for="(icon, i) in ['fa-th', 'fa-list']"
          :key="i"
          class="view-btn"
          :class="{ active: activeView === i }"
          @click="activeView = i"
        >
          <i :class="`fa ${icon}`"></i>
        </button>
        <span class="toolbar-count">{{ products.length }} réponse(s) trouvée(s)</span>
      </div>
      <div class="toolbar-sort">
        Trier par :
        <select class="sort-select">
          <option>Pertinence</option>
          <option>Prix croissant</option>
          <option>Prix décroissant</option>
          <option>Note</option>
        </select>
      </div>
    </div>

    <!-- ══════════════════════════════════
         FILTRES
    ══════════════════════════════════ -->
    <div class="filters-bar">
      <button v-for="f in filters" :key="f" class="btn-filter">
        {{ f }} <i class="fa fa-chevron-down"></i>
      </button>
    </div>

    <!-- ══════════════════════════════════
         GRILLE PRODUITS
    ══════════════════════════════════ -->
    <section class="products-section">
      <div class="products-grid">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
        >
          <div class="badge-note">
            <span class="badge-score">{{ product.note }}</span>
            <span class="badge-pts">pts</span>
          </div>
          <div class="product-img-wrap">
            <img :src="product.img ?? '/src/assets/images/product/3.png'" :alt="product.name" class="product-img"/>
          </div>
          <div class="product-name">{{ product.name }}</div>
          <div class="product-vintage">{{ product.vintage }}</div>
          <div class="product-format">{{ product.format }}</div>
          <div class="product-footer">
            <div class="product-price">
              {{ product.price }} <sup>HT</sup>
            </div>
            <div class="qty-row">
              <span class="qty-label">Quantité :</span>
              <div class="qty-control">
                <button class="btn-qty" @click="decrement(index)">−</button>
                <span class="qty-val">{{ product.qty }}</span>
                <button class="btn-qty" @click="increment(index)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════
         LIFESTYLE IMAGE
    ══════════════════════════════════ -->
    <div class="lifestyle-wrap">
      <img src="/src/assets/images/partenaire.jpeg" class="lifestyle-img" alt="Dégustation"/>
    </div>

    <!-- ══════════════════════════════════
         SECTIONS TEXTE
    ══════════════════════════════════ -->
    <section class="content-section">
      <div class="content-block">
        <h2 class="content-title">
          Pourquoi Choisir les Primeurs ?<br/>
          <span>Un Privilège pour les Amateurs Éclairés</span>
        </h2>
        <p class="content-body">
          Opter pour l'achat de vins en primeur, c'est faire le choix d'une expérience authentique
          et privilégiée. C'est une occasion unique de découvrir des vins à leur stade le plus
          prometteur, d'anticiper leur évolution et de les acquérir à des prix souvent plus
          attractifs que lors de leur mise sur le marché. Imaginez-vous savourer un vin
          prestigieux, reconnu pour son potentiel d'évolution, tout en étant parmi les premiers à
          le déguster. Les primeurs sont un véritable voyage dans le temps, de la vigne à votre
          verre, vous permettant d'enrichir votre cave de trésors rares et précieux.
        </p>
      </div>

      <div class="content-block">
        <h2 class="content-title">
          Un Partenaire de Confiance :<br/>
          <span>Travaillons Main dans la Main avec les Vignerons</span>
        </h2>
        <p class="content-body">
          Nous croyons fermement à l'importance des liens authentiques. C'est pourquoi nous avons
          tissé des relations solides avec les vignerons et les artisans du vin, qui partagent
          notre passion pour l'excellence. Ce partenariat direct nous permet de vous offrir des
          vins d'une qualité exceptionnelle, issus de méthodes de vinification respectueuses de
          l'environnement et de traditions séculaires. Chaque bouteille primeur que vous
          choisissez est le reflet du savoir-faire, de la passion et du dévouement des vignerons,
          un hommage à leur terroir et à leur engagement.
        </p>
      </div>

      <div class="content-block">
        <h2 class="content-title">
          Un Service Exclusif pour Nos Abonnés :<br/>
          <span>Une Communauté de Passionnés</span>
        </h2>
        <p class="content-body">
          Pour préserver cette expérience unique, l'accès aux primeurs est réservé à nos abonnés.
          En rejoignant notre communauté, vous bénéficiez d'un traitement privilégié : un accès
          anticipé à des crus rares, des conseils personnalisés et une expérience sur mesure. Ne
          laissez pas passer l'occasion de découvrir des trésors viticoles avant qu'ils ne soient
          accessibles au grand public. C'est le moment idéal pour partager votre passion avec
          d'autres amateurs éclairés et faire grandir votre cave avec des bouteilles d'exception.
          Rejoignez-Nous et Vivez l'Exception des Primeurs !
        </p>
      </div>

    </section>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeView = ref(0)

const navItems = [
  { label: 'Primeurs', active: true },
  { label: 'Notes', active: false },
  { label: 'Top Afrique', active: false },
  { label: "Explorez l'Art du vin", active: false },
  { label: 'Dégustation', active: false },
  { label: 'Club VIP', active: false },
  { label: 'Boutique', active: false },
  { label: 'Actualité', active: false },
]

const filters = ['FORMAT', 'COULEUR', 'NOTATION', 'PRIX UNITAIRE', 'FILTRES SUPPLÉMENTAIRES']

const products = ref([
  {
    note: 95,
    img: '/src/assets/images/product/3.png',
    name: 'RAWSON RETREAT',
    vintage: 'SHIRAZ CABERNET 2024',
    format: 'La Bouteille par 6 bouteilles',
    price: '20,30 €',
    qty: 0,
  },
  {
    note: 96,
    img: '/src/assets/images/product/4.jpeg',
    name: 'BROADLEAF',
    vintage: 'CABERNET SAUVIGNON 2024',
    format: 'La Bouteille par 6 bouteilles',
    price: '25,30 €',
    qty: 0,
  },
  {
    note: 97,
    img: '/src/assets/images/product/1.png',
    name: 'DI MONTEFALCA',
    vintage: 'Lungarotti 2024',
    format: 'La Bouteille par 5 bouteilles',
    price: '30,30 €',
    qty: 0,
  },
  {
    note: 95,
    img: '/src/assets/images/product/3.png',
    name: 'RAWSON RETREAT',
    vintage: 'SHIRAZ CABERNET 2024',
    format: 'La Bouteille par 6 bouteilles',
    price: '20,30 €',
    qty: 0,
  },
  {
    note: 96,
    img: '/src/assets/images/product/4.jpeg',
    name: 'BROADLEAF',
    vintage: 'CABERNET SAUVIGNON 2024',
    format: 'La Bouteille par 6 bouteilles',
    price: '25,30 €',
    qty: 0,
  },
  {
    note: 97,
    img: '/src/assets/images/product/1.png',
    name: 'DI MONTEFALCA',
    vintage: 'Lungarotti 2024',
    format: 'La Bouteille par 5 bouteilles',
    price: '30,30 €',
    qty: 0,
  },
])

const footerLinksRapides = ['Home', 'Primeurs', 'Notes', 'Top Afrique', 'Dégustation', 'Boutique', 'Actualité']
const footerLinksUtiles = ['Mentions légales', 'CGV', 'Politique de confidentialité', 'Contact']

function increment(index: number) {
  products.value[index].qty++
}
function decrement(index: number) {
  if (products.value[index].qty > 0) products.value[index].qty--
}
</script>

<style scoped>
/* ═══════════════════════════════════════
   VARIABLES & BASE
═══════════════════════════════════════ */
:root {
  --primary: #7b1c2e;
  --primary-dark: #5a1220;
  --primary-light: #9a2540;
  --font-title: 'Playfair Display', serif;
  --font-body: 'Lato', sans-serif;
}

* { box-sizing: border-box; }

.page-wrapper {
  font-family: 'Lato', sans-serif;
  color: #333;
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
}

/* ═══════════════════════════════════════
   HEADER TOP BAR
═══════════════════════════════════════ */
.header-top {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 10px 24px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  white-space: nowrap;
}

.logo-trois {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.logo-puissances {
  font-family: 'Lato', sans-serif;
  font-size: 9px;
  font-weight: 300;
  letter-spacing: 4px;
  color: #555;
  text-transform: uppercase;
}

.header-search {
  flex: 1;
  max-width: 360px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #999;
}

.search-input {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 6px 14px 6px 30px;
  font-size: 12px;
  outline: none;
  color: #555;
  background: #fafafa;
}

.search-input::placeholder { color: #bbb; }

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-icon {
  background: none;
  border: none;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  padding: 4px;
}

.btn-connexion {
  background: none;
  border: 1px solid #7b1c2e;
  color: #7b1c2e;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 2px;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: background 0.2s, color 0.2s;
}

.btn-connexion:hover {
  background: #7b1c2e;
  color: #fff;
}

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
.main-nav {
  background: #7b1c2e;
  padding: 0 24px;
}

.nav-list {
  list-style: none;
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;
  gap: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  color: rgba(255,255,255,0.88);
  text-decoration: none;
  font-size: 11.5px;
  font-weight: 400;
  padding: 11px 13px;
  letter-spacing: 0.2px;
  white-space: nowrap;
  transition: color 0.15s, background 0.15s;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255,255,255,0.08);
}

.nav-item.active .nav-link {
  color: #fff;
  font-weight: 700;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #fff;
}

.nav-item.nav-cta {
  margin-left: auto;
}

.nav-link-cta {
  background: rgba(255,255,255,0.15);
  color: #fff !important;
  font-weight: 600;
  border-left: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link-cta .fa-chevron-down { font-size: 8px; }

/* ═══════════════════════════════════════
   HERO VIGNES (photo pleine largeur)
═══════════════════════════════════════ */
.hero-vignes {
  width: 100%;
  height: 140px;
  overflow: hidden;
}

.vignes-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 65%;
  display: block;
}

/* ═══════════════════════════════════════
   HERO PRIMEURS
═══════════════════════════════════════ */
.hero-primeurs {
  background: #fff;
}

.hero-primeurs-inner {
  position: relative;
  height: 50vh;
  overflow: hidden;
}

.hero-img-side {
  position: absolute;
  inset: 0;
}

.hero-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  display: block;
}

/* Dégradé pour lisibilité du texte */
.hero-primeurs-inner::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(90, 18, 32, 0.85) 0%,
    rgba(90, 18, 32, 0.55) 40%,
    transparent 65%
  );
}

.hero-text-side {
  position: absolute;
  bottom: 24px;
  left: 28px;
  z-index: 2;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin: 0;
}

.hero-description {
  padding: 16px 28px 20px;
  border-bottom: 1px solid #eee;
}

.hero-description p {
  font-size: 18px !important;
  color: #444;
  line-height: 1.75;
  margin: 0;
}

/* ═══════════════════════════════════════
   TOOLBAR
═══════════════════════════════════════ */
.toolbar-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 20px;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.view-btn {
  background: #fff;
  border: 1px solid #ccc;
  color: #777;
  font-size: 12px;
  padding: 4px 9px;
  border-radius: 3px;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}

.view-btn.active {
  border-color: #7b1c2e;
  color: #7b1c2e;
}

.toolbar-count {
  font-size: 12px;
  color: #888;
  margin-left: 6px;
}

.toolbar-sort {
  font-size: 12px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 6px;
}

.sort-select {
  border: 1px solid #ddd;
  background: #fff;
  font-size: 11px;
  color: #555;
  padding: 3px 6px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

/* ═══════════════════════════════════════
   FILTRES
═══════════════════════════════════════ */
.filters-bar {
  display: flex;
  gap: 8px;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
  flex-wrap: wrap;
}

.btn-filter {
  border: 1px solid #7b1c2e;
  color: #7b1c2e;
  background: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: background 0.18s, color 0.18s;
}

.btn-filter .fa-chevron-down { font-size: 7px; }

.btn-filter:hover {
  background: #7b1c2e;
  color: #fff;
}

/* ═══════════════════════════════════════
   PRODUCTS SECTION
═══════════════════════════════════════ */
.products-section {
  padding: 24px 20px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

/* ═══════════════════════════════════════
   PRODUCT CARD
═══════════════════════════════════════ */
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 14px 14px 12px;
  text-align: center;
  position: relative;
  background: #fff;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 4px 20px rgba(123, 28, 46, 0.1);
}

/* Badge note – deux lignes : score + pts */
.badge-note {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #7b1c2e;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.badge-score {
  font-size: 12px;
  font-weight: 700;
}

.badge-pts {
  font-size: 7.5px;
  font-weight: 300;
  margin-top: 1px;
}

.product-img-wrap {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px auto 14px;
}

.product-img {
  max-height: 350px;
  object-fit: contain;
}

.product-name {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  color: #7b1c2e;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  line-height: 1.3;
}

.product-vintage {
  font-size: 14px;
  color: #7b1c2e;
  margin-top: 2px;
  font-family: 'Playfair Display', serif;
}

.product-format {
  font-size: 13px;
  color: #888;
  margin-top: 5px;
  padding-bottom: 10px;
}

.product-footer {
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
}

.product-price {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
}

.product-price sup {
  font-size: 9px;
  font-weight: 400;
  color: #888;
}

.qty-row {
  display: flex;
  align-items: center;
  gap: 5px;
}

.qty-label {
  font-size: 10px;
  color: #888;
}

.qty-control {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
}

.btn-qty {
  background: none;
  border: none;
  padding: 2px 8px;
  font-size: 15px;
  color: #555;
  cursor: pointer;
  line-height: 1;
  transition: background 0.1s;
}

.btn-qty:hover { background: #f0f0f0; }

.qty-val {
  padding: 2px 10px;
  font-size: 12px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  min-width: 28px;
  text-align: center;
}

/* ═══════════════════════════════════════
   LIFESTYLE IMAGE
═══════════════════════════════════════ */
.lifestyle-wrap {
  margin: 30px 20px 0;
  overflow: hidden;
  border-radius: 3px;
  max-height: 50vh;
}

.lifestyle-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center 35%;
  display: block;
  filter: brightness(0.87);
}

/* ═══════════════════════════════════════
   CONTENT SECTIONS
═══════════════════════════════════════ */
.content-section {
  padding: 32px 28px 20px;
}

.content-block {
  margin-bottom: 28px;
}

.content-title {
  font-size: 25px;
  font-weight: 700;
  color: #7b1c2e;
  line-height: 1.4;
  margin-bottom: 10px;
}

.content-title span {
  display: block;
}

.content-body {
  font-size: 18px !important;
  color: #444;
  line-height: 1.78;
  margin: 0;
}

/* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */
.site-footer {
  background: #5a1220;
  color: rgba(255,255,255,0.85);
  margin-top: 40px;
  padding: 32px 28px 0;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1.6fr;
  gap: 32px;
  padding-bottom: 24px;
}

.footer-heading {
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 12px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 5px;
}

.footer-links a {
  color: rgba(255,255,255,0.72);
  text-decoration: none;
  font-size: 11.5px;
  transition: color 0.15s;
}

.footer-links a:hover { color: #fff; }

.footer-newsletter-text {
  font-size: 11.5px;
  color: rgba(255,255,255,0.72);
  line-height: 1.6;
  margin-bottom: 12px;
}

.newsletter-form {
  display: flex;
  gap: 0;
}

.newsletter-input {
  flex: 1;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 12px;
  padding: 7px 12px;
  outline: none;
  border-radius: 2px 0 0 2px;
}

.newsletter-input::placeholder { color: rgba(255,255,255,0.45); }

.newsletter-btn {
  background: rgba(255,255,255,0.22);
  border: 1px solid rgba(255,255,255,0.3);
  border-left: none;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 7px 14px;
  cursor: pointer;
  border-radius: 0 2px 2px 0;
  transition: background 0.18s;
  text-transform: uppercase;
}

.newsletter-btn:hover { background: rgba(255,255,255,0.32); }

.footer-divider {
  border-top: 1px solid rgba(255,255,255,0.15);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 16px;
}

.footer-contacts p {
  font-size: 11.5px;
  color: rgba(255,255,255,0.72);
  margin: 3px 0;
  display: flex;
  align-items: center;
  gap: 7px;
}

.footer-contacts .fa {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
}

.footer-logo-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.footer-logo-bottom .logo-trois {
  color: #fff;
  font-size: 16px;
}

.footer-logo-bottom .logo-puissances {
  color: rgba(255,255,255,0.7);
}

.footer-social {
  display: flex;
  gap: 10px;
}

.footer-social a {
  color: rgba(255,255,255,0.75);
  font-size: 14px;
  transition: color 0.15s;
  text-decoration: none;
}

.footer-social a:hover { color: #fff; }

.footer-legal {
  border-top: 1px solid rgba(255,255,255,0.12);
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 10.5px;
  color: rgba(255,255,255,0.45);
}
</style>
