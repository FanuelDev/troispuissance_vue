<template>
  <div class="banner1 primeur-banner">
    <div class="banner-overlay">
      <div class="banner-tagline">— Collection Exclusive —</div>
      <h1 class="banner-heading">Les Primeurs</h1>
      <p class="banner-sub">Des millésimes d'exception, avant leur mise en vente</p>
    </div>
  </div>

  <div class="page-wrapper">

    <!-- ══════════════════════════════════════
         BLOC DESCRIPTION — EN HAUT DE PAGE
    ══════════════════════════════════════ -->
    <section class="description-hero">
      <div class="description-hero-inner container">
        <div class="description-text" data-aos="tp-left" data-aos-delay="100">
          <div class="gold-eyebrow" data-aos="tp-rise" data-aos-delay="150">L'univers des Primeurs</div>
          <h2 class="description-title" data-aos="tp-rise" data-aos-delay="250">Un voyage sensoriel<br/>au cœur des vignes</h2>
          <div class="gold-divider" data-aos="tp-line" data-aos-delay="400"></div>
          <p class="description-body">
            Bienvenue dans l'univers des primeurs, un voyage sensoriel qui ravira les passionnés
            de vin. Ici, chaque bouteille raconte une histoire, chaque gorgée vous transporte au
            cœur des vignes. Réservés exclusivement à nos membres, ces crus d'exception vous
            ouvrent les portes de la découverte — vous permettant d'accéder à des millésimes
            soigneusement sélectionnés bien avant leur mise en vente sur les marchés africains.
          </p>
          <p class="description-body">
            Opter pour les vins en primeur, c'est faire le choix d'une expérience authentique
            et privilégiée. Une occasion unique d'anticiper l'évolution de grands crus et
            d'enrichir votre cave de trésors rares et précieux.
          </p>
        </div>
        <div class="description-image" data-aos="tp-right" data-aos-delay="200">
          <div class="image-frame">
            <img :src="imgPrimeur" alt="Vins Primeurs" class="desc-img"/>
            <div class="image-caption">Millésimes sélectionnés avec exigence</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         FORMULAIRE D'ACCÈS OBLIGATOIRE
    ══════════════════════════════════════ -->
    <section v-if="!accessGranted" class="access-gate" data-aos="tp-rise" data-aos-delay="100">
      <div class="gate-container container">
        <div class="gate-ornament">✦</div>
        <h2 class="gate-title">Accès Réservé aux Membres</h2>
        <p class="gate-desc">
          Notre sélection de vins Primeur est réservée aux amateurs éclairés et membres qualifiés.
          Veuillez renseigner vos informations pour accéder à ces crus d'exception.
        </p>
        <form class="gate-form" @submit.prevent="submitAccess">
          <div class="gate-grid">
            <div class="gate-field">
              <label class="gate-label">Prénom & Nom <span class="req">*</span></label>
              <input
                v-model="gateForm.name"
                type="text"
                class="gate-input"
                placeholder="Jean Dupont"
                required
              />
            </div>
            <div class="gate-field">
              <label class="gate-label">Adresse Email <span class="req">*</span></label>
              <input
                v-model="gateForm.email"
                type="email"
                class="gate-input"
                placeholder="jean@exemple.com"
                required
              />
            </div>
            <div class="gate-field">
              <label class="gate-label">Profession / Activité <span class="req">*</span></label>
              <input
                v-model="gateForm.profession"
                type="text"
                class="gate-input"
                placeholder="Sommelier, Négociant, Amateur passionné..."
                required
              />
            </div>
            <div class="gate-field">
              <label class="gate-label">Pays de résidence <span class="req">*</span></label>
              <input
                v-model="gateForm.country"
                type="text"
                class="gate-input"
                placeholder="France, Côte d'Ivoire, Sénégal..."
                required
              />
            </div>
          </div>
          <div class="gate-field gate-field-full">
            <label class="gate-label">Votre intérêt pour les Primeurs <span class="req">*</span></label>
            <select v-model="gateForm.interest" class="gate-select" required>
              <option value="">Sélectionnez votre intention...</option>
              <option>Investissement et conservation</option>
              <option>Consommation personnelle</option>
              <option>Distribution & Commerce</option>
              <option>Offre et cadeau d'exception</option>
              <option>Curiosité et découverte</option>
            </select>
          </div>
          <div class="gate-submit-wrap">
            <button type="submit" class="gate-btn">
              Accéder à la Sélection Primeur
              <span class="gate-arrow">→</span>
            </button>
            <p class="gate-privacy">
              <i class="fa fa-lock"></i>
              Vos informations restent strictement confidentielles.
            </p>
          </div>
        </form>
      </div>
    </section>

    <!-- ══════════════════════════════════════
         SECTION PRODUITS (après validation)
    ══════════════════════════════════════ -->
    <template v-if="accessGranted">

      <!-- Message de bienvenue -->
      <div class="welcome-strip container">
        <i class="fa fa-check-circle"></i>
        Bienvenue, <strong>{{ gateForm.name }}</strong> — Votre accès Primeur est activé.
      </div>

      <!-- TOOLBAR -->
      <div class="container">
        <div class="toolbar-bar my-4">
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
            <span class="toolbar-count">{{ products.length }} référence(s) sélectionnée(s)</span>
          </div>
          <div class="toolbar-sort">
            Trier par :
            <select class="sort-select">
              <option>Pertinence</option>
              <option>Note décroissante</option>
              <option>Note croissante</option>
            </select>
          </div>
        </div>

        <!-- FILTRES -->
        <div class="filters-bar my-3">
          <button v-for="f in filters" :key="f" class="btn-filter">
            {{ f }} <i class="fa fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <!-- GRILLE PRODUITS -->
      <section class="products-section">
        <div class="container">
          <div class="products-grid" :class="activeView === 1 ? 'list-view' : ''">
            <article
              v-for="(product, index) in products"
              :key="index"
              class="product-card"
              data-aos="tp-rise"
              :data-aos-delay="(index % 3) * 120"
            >
              <div class="badge-note">
                <span class="badge-score">{{ product.note }}</span>
                <span class="badge-pts">pts</span>
              </div>
              <div class="product-img-wrap">
                <img
                  :src="imgProduct"
                  :alt="product.name"
                  class="product-img"
                />
              </div>
              <div class="product-info">
                <div class="product-name">{{ product.name }}</div>
                <div class="product-vintage">{{ product.vintage }}</div>
                <div class="product-format">{{ product.format }}</div>
              </div>
              <div class="product-footer">
                <div class="qty-row">
                  <span class="qty-label">Qté :</span>
                  <div class="qty-control">
                    <button class="btn-qty" @click="decrement(index)">−</button>
                    <span class="qty-val">{{ product.qty }}</span>
                    <button class="btn-qty" @click="increment(index)">+</button>
                  </div>
                </div>
                <button class="btn-reserve">Réserver</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- IMAGE LIFESTYLE -->
      <div class="lifestyle-wrap my-5">
        <img :src="imgPartenaire" class="lifestyle-img" alt="Dégustation Primeur"/>
        <div class="lifestyle-caption">
          <span>Chaque bouteille, une histoire. Chaque millésime, un voyage.</span>
        </div>
      </div>

      <!-- SECTIONS ÉDITORIALES -->
      <section class="editorial-section container">
        <div class="editorial-block" data-aos="tp-rise" data-aos-delay="0">
          <div class="editorial-number">01</div>
          <div class="editorial-content">
            <h3 class="editorial-title">Pourquoi Choisir les Primeurs ?</h3>
            <h4 class="editorial-subtitle">Un privilège pour les amateurs éclairés</h4>
            <p>
              Opter pour l'achat de vins en primeur, c'est faire le choix d'une expérience
              authentique et privilégiée. C'est une occasion unique de découvrir des vins à leur
              stade le plus prometteur, d'anticiper leur évolution et d'enrichir votre cave
              de trésors rares et précieux avant qu'ils ne soient accessibles au grand public.
            </p>
          </div>
        </div>
        <div class="editorial-divider"></div>
        <div class="editorial-block" data-aos="tp-rise" data-aos-delay="80">
          <div class="editorial-number">02</div>
          <div class="editorial-content">
            <h3 class="editorial-title">Un Partenaire de Confiance</h3>
            <h4 class="editorial-subtitle">Main dans la main avec les vignerons</h4>
            <p>
              Nous avons tissé des relations solides avec les vignerons et artisans du vin qui
              partagent notre passion pour l'excellence. Ce partenariat direct nous permet de
              vous offrir des vins d'une qualité exceptionnelle, issus de méthodes de
              vinification respectueuses de l'environnement et de traditions séculaires.
            </p>
          </div>
        </div>
        <div class="editorial-divider"></div>
        <div class="editorial-block" data-aos="tp-rise" data-aos-delay="160">
          <div class="editorial-number">03</div>
          <div class="editorial-content">
            <h3 class="editorial-title">Un Service Exclusif pour Nos Membres</h3>
            <h4 class="editorial-subtitle">Une communauté de passionnés</h4>
            <p>
              Pour préserver cette expérience unique, l'accès aux primeurs est réservé à nos
              membres. En rejoignant notre communauté, vous bénéficiez d'un accès anticipé à
              des crus rares, de conseils personnalisés et d'une expérience sur mesure.
              Rejoignez-nous et vivez l'exception des Primeurs.
            </p>
          </div>
        </div>
      </section>

    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import imgPrimeur from '@/assets/images/use/p1.jpg'
import imgPartenaire from '@/assets/images/use/p2.jpg'
import imgProduct from '@/assets/images/product/3.png'

const activeView = ref(0)
const accessGranted = ref(false)

const gateForm = ref({
  name: '',
  email: '',
  profession: '',
  country: '',
  interest: '',
})

const filters = ['FORMAT', 'COULEUR', 'NOTATION', 'FILTRES SUPPLÉMENTAIRES']

const products = ref([
  { note: 95, name: 'RAWSON RETREAT', vintage: 'SHIRAZ CABERNET 2024', format: 'La Bouteille par 6 bouteilles', qty: 0 },
  { note: 96, name: 'BROADLEAF', vintage: 'CABERNET SAUVIGNON 2024', format: 'La Bouteille par 6 bouteilles', qty: 0 },
  { note: 97, name: 'DI MONTEFALCO', vintage: 'Lungarotti 2024', format: 'La Bouteille par 5 bouteilles', qty: 0 },
  { note: 95, name: 'RAWSON RETREAT', vintage: 'SHIRAZ CABERNET 2024', format: 'La Bouteille par 6 bouteilles', qty: 0 },
  { note: 96, name: 'BROADLEAF', vintage: 'CABERNET SAUVIGNON 2024', format: 'La Bouteille par 6 bouteilles', qty: 0 },
  { note: 97, name: 'DI MONTEFALCO', vintage: 'Lungarotti 2024', format: 'La Bouteille par 5 bouteilles', qty: 0 },
])

function submitAccess() {
  accessGranted.value = true
  setTimeout(() => window.scrollTo({ top: 600, behavior: 'smooth' }), 100)
}
function increment(i: number) { products.value[i].qty++ }
function decrement(i: number) { if (products.value[i].qty > 0) products.value[i].qty-- }
</script>

<style scoped>
/* ════════════════════════════════════
   VARIABLES
════════════════════════════════════ */
:root {
  --wine: #6B1A27;
  --wine-dark: #3D0D17;
  --gold: #C9A84C;
  --gold-light: #E8D5A3;
  --cream: #F8F4EF;
  --charcoal: #1C1C1C;
}

/* ════════════════════════════════════
   BANNER
════════════════════════════════════ */
.primeur-banner {
  position: relative;
  background-position: 50% 60% !important;
}
.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(20,5,10,0.55) 0%, rgba(60,10,20,0.7) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
.banner-tagline {
  font-size: 13px;
  letter-spacing: 4px;
  color: #C9A84C;
  text-transform: uppercase;
  margin-bottom: 14px;
  font-family: 'Lato', sans-serif;
}
.banner-heading {
  font-family: 'Playfair Display', serif;
  font-size: clamp(42px, 6vw, 72px);
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0 0 12px;
}
.banner-sub {
  color: rgba(255,255,255,0.75);
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0;
  font-style: italic;
}

/* ════════════════════════════════════
   PAGE WRAPPER
════════════════════════════════════ */
.page-wrapper {
  background: #fff;
  color: #2a2a2a;
}

/* ════════════════════════════════════
   DESCRIPTION HERO
════════════════════════════════════ */
.description-hero {
  background: #F8F4EF;
  padding: 80px 0;
  border-bottom: 1px solid #e8ddd5;
}
.description-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.gold-eyebrow {
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #C9A84C;
  margin-bottom: 16px;
  font-family: 'Lato', sans-serif;
}
.description-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 42px);
  color: #1C1C1C;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 20px;
}
.gold-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(to right, #C9A84C, #E8D5A3);
  margin-bottom: 28px;
}
.description-body {
  font-size: 16px;
  color: #555;
  line-height: 1.85;
  margin-bottom: 16px;
}
.image-frame {
  position: relative;
}
.desc-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
}
.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(60,13,23,0.85);
  color: rgba(255,255,255,0.85);
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  font-family: 'Lato', sans-serif;
}

/* ════════════════════════════════════
   ACCESS GATE
════════════════════════════════════ */
.access-gate {
  background: #fff;
  padding: 80px 0 100px;
  border-bottom: 1px solid #eee;
}
.gate-container {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}
.gate-ornament {
  font-size: 28px;
  color: #C9A84C;
  margin-bottom: 20px;
  letter-spacing: 10px;
}
.gate-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 400;
  color: #1C1C1C;
  margin-bottom: 14px;
}
.gate-desc {
  color: #666;
  font-size: 16px;
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto 40px;
}
.gate-form {
  text-align: left;
}
.gate-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
.gate-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.gate-field-full {
  margin-bottom: 28px;
}
.gate-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6B1A27;
  font-weight: 600;
}
.req { color: #C9A84C; }
.gate-input,
.gate-select {
  border: none;
  border-bottom: 1px solid #c8b8b2;
  padding: 12px 4px;
  font-size: 14px;
  color: #333;
  background: transparent;
  outline: none;
  width: 100%;
  transition: border-color 0.25s;
  font-family: 'Lato', sans-serif;
}
.gate-input:focus,
.gate-select:focus {
  border-bottom-color: #6B1A27;
}
.gate-input::placeholder { color: #bbb; }
.gate-submit-wrap {
  text-align: center;
  margin-top: 10px;
}
.gate-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #6B1A27;
  color: #fff;
  border: none;
  padding: 16px 44px;
  font-size: 12px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.gate-btn:hover {
  background: #3D0D17;
  transform: translateY(-1px);
}
.gate-arrow { font-size: 16px; }
.gate-privacy {
  margin-top: 16px;
  font-size: 11px;
  color: #aaa;
  letter-spacing: 0.5px;
}
.gate-privacy .fa { margin-right: 5px; }

/* ════════════════════════════════════
   WELCOME STRIP
════════════════════════════════════ */
.welcome-strip {
  background: linear-gradient(135deg, #6B1A27, #3D0D17);
  color: #fff;
  padding: 14px 24px;
  font-size: 13px;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 10px;
}
.welcome-strip .fa { color: #C9A84C; font-size: 16px; }

/* ════════════════════════════════════
   TOOLBAR & FILTERS
════════════════════════════════════ */
.toolbar-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #e0d8d4;
}
.toolbar-left { display: flex; align-items: center; gap: 8px; }
.view-btn {
  background: #fff;
  border: 1px solid #ddd;
  color: #888;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.15s;
}
.view-btn.active { border-color: #6B1A27; color: #6B1A27; }
.toolbar-count { font-size: 12px; color: #999; margin-left: 8px; font-style: italic; }
.toolbar-sort {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
}
.sort-select {
  border: 1px solid #ddd;
  background: #fff;
  font-size: 11px;
  color: #555;
  padding: 4px 8px;
  outline: none;
  cursor: pointer;
}
.filters-bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 10px 0;
}
.btn-filter {
  border: 1px solid #6B1A27;
  color: #6B1A27;
  background: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;
}
.btn-filter:hover { background: #6B1A27; color: #fff; }

/* ════════════════════════════════════
   PRODUCT GRID
════════════════════════════════════ */
.products-section { padding: 40px 0 60px; background: #F8F4EF; }
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.product-card {
  background: #fff;
  border: 1px solid #ede5e0;
  padding: 20px 18px 16px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s, transform 0.2s;
}
.product-card:hover {
  box-shadow: 0 12px 40px rgba(107,26,39,0.12);
  transform: translateY(-3px);
}
.badge-note {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6B1A27, #3D0D17);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(107,26,39,0.35);
}
.badge-score { font-size: 18px; font-weight: 700; line-height: 1; }
.badge-pts { font-size: 10px; color: #C9A84C; margin-top: 1px; }
.product-img-wrap {
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
}
.product-img { max-height: 280px; object-fit: contain; }
.product-info { flex: 1; }
.product-name {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-weight: 700;
  color: #6B1A27;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}
.product-vintage {
  font-size: 13px;
  color: #9a5a62;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  margin-bottom: 4px;
}
.product-format { font-size: 12px; color: #aaa; padding-bottom: 12px; }
.product-footer {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #f0e8e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.qty-row { display: flex; align-items: center; gap: 6px; }
.qty-label { font-size: 10px; color: #aaa; letter-spacing: 0.5px; }
.qty-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  overflow: hidden;
}
.btn-qty {
  background: none;
  border: none;
  padding: 3px 9px;
  font-size: 15px;
  color: #666;
  cursor: pointer;
}
.btn-qty:hover { background: #f5f0ec; }
.qty-val {
  padding: 3px 10px;
  font-size: 12px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  min-width: 28px;
  text-align: center;
}
.btn-reserve {
  background: #6B1A27;
  color: #fff;
  border: none;
  padding: 7px 16px;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-reserve:hover { background: #3D0D17; }

/* ════════════════════════════════════
   LIFESTYLE
════════════════════════════════════ */
.lifestyle-wrap {
  position: relative;
  overflow: hidden;
}
.lifestyle-img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  display: block;
  filter: brightness(0.82);
}
.lifestyle-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(20,5,10,0.7), transparent);
  padding: 40px 48px 28px;
  text-align: center;
}
.lifestyle-caption span {
  color: rgba(255,255,255,0.9);
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-style: italic;
  letter-spacing: 0.5px;
}

/* ════════════════════════════════════
   ÉDITORIAL
════════════════════════════════════ */
.editorial-section {
  padding: 80px 0 100px;
}
.editorial-block {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 32px;
  align-items: start;
  padding: 40px 0;
}
.editorial-number {
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  color: #e8ddd5;
  line-height: 1;
  font-weight: 700;
}
.editorial-content p {
  font-size: 15px;
  color: #555;
  line-height: 1.85;
  margin-top: 8px;
}

.editorial-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: #1C1C1C;
  font-weight: 700;
  margin-bottom: 4px;
}
.editorial-subtitle {
  font-size: 13px;
  color: #C9A84C;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0;
}
.editorial-divider {
  height: 1px;
  background: linear-gradient(to right, #e8ddd5, transparent);
}
</style>
