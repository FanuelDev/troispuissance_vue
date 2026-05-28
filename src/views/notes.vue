<template>
  <div class="banner1 notes-banner">
    <div class="notes-banner-overlay">
      <div class="notes-tagline">— Expertise & Distinction —</div>
      <h1 class="notes-banner-title">Recherche de Produits</h1>
      <p class="notes-banner-sub">Trouvez le produit d'exception qui vous correspond</p>
    </div>
  </div>

  <section class="notes-intro container" data-aos="fade-up">
    <div class="notes-intro-inner">
      <div class="gold-eyebrow">Notre Philosophie</div>
      <h2 class="notes-intro-title">L'Art de Choisir le Bon Produit</h2>
      <div class="gold-divider mx-auto"></div>
      <p class="notes-intro-body">
        Déguster un vin, c'est s'immerger dans un monde de sensations. Chaque bouteille raconte
        une histoire — une alchimie de terroir, de cépages et de savoir-faire. Pour apprécier
        pleinement cette expérience, il est essentiel de se familiariser avec les notes de
        dégustation. Elles sont votre boussole, vous guidant à travers les nuances et les
        subtilités de chaque produit, afin que vous puissiez faire des choix éclairés.
      </p>
    </div>
  </section>

  <!-- SÉLECTION PAR TYPE DE PRODUIT -->
  <section class="product-type-section" data-aos="fade-up">
    <div class="container">
      <div class="section-label">Faites votre choix</div>
      <h3 class="section-heading">Par Type de Produit</h3>
      <div class="product-type-grid">
        <button class="type-card" :class="{ active: activeType === 'vins' }" @click="activeType = 'vins'">
          <div class="type-icon"><i class="fa fa-wine-bottle"></i></div>
          <div class="type-name">Vins</div>
          <div class="type-desc">Rouges, Blancs, Rosés, Effervescents</div>
        </button>
        <button class="type-card" :class="{ active: activeType === 'spiritueux' }" @click="activeType = 'spiritueux'">
          <div class="type-icon"><i class="fa fa-glass-martini-alt"></i></div>
          <div class="type-name">Spiritueux</div>
          <div class="type-desc">Cognac, Whisky, Rhum, Armagnac</div>
        </button>
      </div>
    </div>
  </section>

  <!-- BARRE DE RECHERCHE -->
  <section class="search-section" data-aos="fade-up">
    <div class="container">
      <div class="search-label">Rechercher un produit</div>
      <div class="search-bar-wrap">
        <i class="fa fa-search search-icon"></i>
        <input
          type="search"
          placeholder="Nom du produit, millésime, appellation, pays..."
          class="luxury-search"
        />
        <button class="search-btn">Rechercher</button>
      </div>
    </div>
  </section>

  <!-- GUIDE DE SÉLECTION -->
  <section class="guide-section bg-cream" data-aos="fade-up">
    <div class="container">
      <div class="guide-inner">
        <div class="guide-text">
          <div class="gold-eyebrow">Conseil Personnalisé</div>
          <h3 class="guide-title">Laissez-vous Guider<br/>vers le Produit Idéal</h3>
          <p class="guide-body">
            Dites-nous qui vous êtes, et nous vous révélerons le produit qui vous correspond.
            Notre équipe d'experts façonne votre expérience avec précision et raffinement.
          </p>
          <button class="guide-btn">Découvrir ma sélection</button>
        </div>
        <div class="guide-form-wrap">
          <form class="guide-form" action="#">
            <div class="gf-field">
              <label>Je recherche un produit</label>
              <input type="text" class="gf-input" placeholder="Ex: un grand rouge tannique..."/>
            </div>
            <div class="gf-field">
              <label>Millésime souhaité</label>
              <input type="text" class="gf-input" placeholder="Ex: 2018, 2020..."/>
            </div>
            <div class="gf-field">
              <label>Origine / Région</label>
              <input type="text" class="gf-input" placeholder="Ex: Bordeaux, Toscane..."/>
            </div>
            <div class="gf-field">
              <label>Budget estimé</label>
              <input type="text" class="gf-input" placeholder="Ex: 50–150 €"/>
            </div>
            <button type="submit" class="gf-submit">Trouver mon produit →</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- REDIRECT VERS TOP AFRIQUE POUR LES DISTINCTIONS -->
  <section class="redirect-section" data-aos="fade-up">
    <div class="container">
      <div class="redirect-inner">
        <div class="redirect-medal-icons">
          <img src="/src/assets/images/or.png" class="redir-medal" alt="Or"/>
          <img src="/src/assets/images/argent.png" class="redir-medal redir-medal-main" alt="Argent"/>
          <img src="/src/assets/images/bronze.png" class="redir-medal" alt="Bronze"/>
        </div>
        <div class="redirect-text">
          <div class="gold-eyebrow">Nouvellement intégré</div>
          <h3 class="redirect-title">
            Les distinctions & médailles sont<br/>désormais dans <em>Top Afrique</em>
          </h3>
          <p class="redirect-body">
            Notre système complet de récompenses — Médaille d'Or, d'Argent et de Bronze —
            a été transféré vers la section <strong>Top Afrique</strong>, pour une meilleure
            valorisation des meilleures références du continent.
          </p>
          <a href="/topafrique" class="redirect-btn">
            Découvrir le Top Afrique <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeType = ref('vins')
</script>

<style scoped>
.notes-banner {
  position: relative;
  background-position: 50% 55% !important;
}
.notes-banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(20,5,10,0.5) 0%, rgba(60,10,20,0.72) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
.notes-tagline {
  font-size: 12px;
  letter-spacing: 5px;
  color: #C9A84C;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.notes-banner-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(36px, 5vw, 64px);
  color: #fff;
  font-weight: 400;
  margin: 0 0 10px;
}
.notes-banner-sub {
  color: rgba(255,255,255,0.72);
  font-size: 15px;
  font-style: italic;
  margin: 0;
}

.notes-intro {
  padding: 80px 0 60px;
  text-align: center;
}
.notes-intro-inner { max-width: 680px; margin: 0 auto; }
.gold-eyebrow {
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #C9A84C;
  margin-bottom: 14px;
}
.notes-intro-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 400;
  color: #1C1C1C;
  margin-bottom: 20px;
}
.gold-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(to right, #C9A84C, #E8D5A3);
  margin-bottom: 28px;
}
.mx-auto { margin-left: auto; margin-right: auto; }
.notes-intro-body {
  font-size: 16px;
  color: #666;
  line-height: 1.85;
}

.product-type-section {
  padding: 60px 0;
  background: #1C1C1C;
}
.section-label {
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #C9A84C;
  text-align: center;
  margin-bottom: 10px;
}
.section-heading {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: #fff;
  text-align: center;
  font-weight: 400;
  margin-bottom: 40px;
}
.product-type-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
}
.type-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 36px 28px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  color: rgba(255,255,255,0.7);
}
.type-card:hover,
.type-card.active {
  background: rgba(201,168,76,0.12);
  border-color: #C9A84C;
  color: #fff;
}
.type-icon { font-size: 32px; color: #C9A84C; margin-bottom: 14px; }
.type-name {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  margin-bottom: 6px;
}
.type-desc { font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 0.5px; }
.type-card.active .type-desc { color: rgba(255,255,255,0.7); }

.search-section {
  padding: 60px 0;
  background: #F8F4EF;
}
.search-label {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #6B1A27;
  margin-bottom: 20px;
  text-align: center;
}
.search-bar-wrap {
  display: flex;
  align-items: center;
  border: 1px solid #c8b8b2;
  background: #fff;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
}
.search-icon { padding: 0 16px; color: #aaa; font-size: 14px; }
.luxury-search {
  flex: 1;
  border: none;
  padding: 16px 8px;
  font-size: 14px;
  color: #333;
  background: transparent;
  outline: none;
}
.luxury-search::placeholder { color: #bbb; font-style: italic; }
.search-btn {
  background: #6B1A27;
  color: #fff;
  border: none;
  padding: 16px 28px;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.search-btn:hover { background: #3D0D17; }

.guide-section { padding: 80px 0; }
.bg-cream { background: #fff; }
.guide-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.guide-title {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 400;
  color: #1C1C1C;
  margin-bottom: 16px;
  line-height: 1.3;
}
.guide-body { font-size: 15px; color: #666; line-height: 1.8; margin-bottom: 28px; }
.guide-btn {
  background: transparent;
  border: 1px solid #6B1A27;
  color: #6B1A27;
  padding: 12px 32px;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
}
.guide-btn:hover { background: #6B1A27; color: #fff; }

.guide-form {
  background: #F8F4EF;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.gf-field { display: flex; flex-direction: column; gap: 6px; }
.gf-field label {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6B1A27;
  font-weight: 600;
}
.gf-input {
  border: none;
  border-bottom: 1px solid #d8cbc6;
  padding: 10px 4px;
  font-size: 14px;
  background: transparent;
  outline: none;
  color: #333;
  transition: border-color 0.2s;
}
.gf-input:focus { border-bottom-color: #6B1A27; }
.gf-input::placeholder { color: #bbb; font-style: italic; }
.gf-submit {
  background: #6B1A27;
  color: #fff;
  border: none;
  padding: 14px 24px;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  text-align: center;
  transition: background 0.2s;
}
.gf-submit:hover { background: #3D0D17; }

.redirect-section {
  padding: 80px 0 100px;
  background: #1C1C1C;
}
.redirect-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 60px;
  align-items: center;
  max-width: 860px;
  margin: 0 auto;
}
.redirect-medal-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.redir-medal {
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 50%;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.redir-medal-main { width: 90px; height: 90px; opacity: 1; }
.redirect-text .gold-eyebrow { color: #C9A84C; }
.redirect-title {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  line-height: 1.35;
  margin-bottom: 16px;
}
.redirect-title em { color: #C9A84C; font-style: normal; }
.redirect-body { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 28px; }
.redirect-body strong { color: rgba(255,255,255,0.85); }
.redirect-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #C9A84C;
  color: #1C1C1C;
  text-decoration: none;
  padding: 14px 32px;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background 0.25s, transform 0.2s;
}
.redirect-btn:hover {
  background: #e8c96a;
  transform: translateY(-1px);
  color: #1C1C1C;
}
</style>
