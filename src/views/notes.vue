<template>
  <div class="banner1 notes-banner">
    <div class="notes-banner-overlay">
      <div class="notes-tagline">{{ $t('notes.bannerTagline') }}</div>
      <h1 class="notes-banner-title">{{ $t('notes.bannerTitle') }}</h1>
      <p class="notes-banner-sub">{{ $t('notes.bannerSub') }}</p>
    </div>
  </div>

  <section class="notes-intro container" data-aos="fade-up">
    <div class="notes-intro-inner">
      <div class="gold-eyebrow">{{ $t('notes.philoLabel') }}</div>
      <h2 class="notes-intro-title">{{ $t('notes.philoTitle') }}</h2>
      <div class="gold-divider mx-auto"></div>
      <p class="notes-intro-body">{{ $t('notes.philoText') }}</p>
    </div>
  </section>

  <!-- SÉLECTION PAR TYPE DE PRODUIT -->
  <section class="product-type-section" data-aos="fade-up">
    <div class="container">
      <div class="section-label">{{ $t('notes.choiceLabel') }}</div>
      <h3 class="section-heading">{{ $t('notes.byType') }}</h3>
      <div class="product-type-grid">
        <button class="type-card" :class="{ active: activeType === 'vins' }" @click="activeType = 'vins'">
          <div class="type-icon"><i class="fa fa-wine-bottle"></i></div>
          <div class="type-name">{{ $t('notes.wines') }}</div>
          <div class="type-desc">{{ $t('notes.winesDesc') }}</div>
        </button>
        <button class="type-card" :class="{ active: activeType === 'spiritueux' }" @click="activeType = 'spiritueux'">
          <div class="type-icon"><i class="fa fa-glass-martini-alt"></i></div>
          <div class="type-name">{{ $t('notes.spirits') }}</div>
          <div class="type-desc">{{ $t('notes.spiritsDesc') }}</div>
        </button>
      </div>
    </div>
  </section>

  <!-- BARRE DE RECHERCHE -->
  <section class="search-section" data-aos="fade-up">
    <div class="container">
      <div class="search-label">{{ $t('notes.searchLabel') }}</div>
      <div class="search-bar-wrap">
        <i class="fa fa-search search-icon"></i>
        <input
          type="search"
          :placeholder="$t('notes.searchPlaceholder')"
          class="luxury-search"
        />
        <button class="search-btn">{{ $t('notes.searchBtn') }}</button>
      </div>
    </div>
  </section>

  <!-- GUIDE DE SÉLECTION -->
  <section class="guide-section bg-cream" data-aos="fade-up">
    <div class="container">
      <div class="guide-inner">
        <div class="guide-text">
          <div class="gold-eyebrow">{{ $t('notes.guideLabel') }}</div>
          <h3 class="guide-title">{{ $t('notes.guideTitle') }}</h3>
          <p class="guide-body">{{ $t('notes.guideText') }}</p>
          <button class="guide-btn">{{ $t('notes.guideBtn') }}</button>
        </div>
        <div class="guide-form-wrap">
          <form class="guide-form" action="#">
            <div class="gf-field">
              <label>{{ $t('notes.gfField1') }}</label>
              <input type="text" class="gf-input" :placeholder="$t('notes.gfField1Ph')"/>
            </div>
            <div class="gf-field">
              <label>{{ $t('notes.gfField2') }}</label>
              <input type="text" class="gf-input" :placeholder="$t('notes.gfField2Ph')"/>
            </div>
            <div class="gf-field">
              <label>{{ $t('notes.gfField3') }}</label>
              <input type="text" class="gf-input" :placeholder="$t('notes.gfField3Ph')"/>
            </div>
            <div class="gf-field">
              <label>{{ $t('notes.gfField4') }}</label>
              <input type="text" class="gf-input" :placeholder="$t('notes.gfField4Ph')"/>
            </div>
            <button type="submit" class="gf-submit">{{ $t('notes.gfSubmit') }}</button>
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
          <div class="gold-eyebrow">{{ $t('notes.newLabel') }}</div>
          <h3 class="redirect-title">{{ $t('notes.redirectTitle') }}</h3>
          <p class="redirect-body">{{ $t('notes.redirectText') }}</p>
          <a href="/topafrique" class="redirect-btn">
            {{ $t('notes.redirectBtn') }}
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
