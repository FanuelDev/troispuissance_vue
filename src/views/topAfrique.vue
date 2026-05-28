<template>
  <div class="banner1 ta-banner">
    <div class="ta-banner-overlay">
      <div class="ta-tagline">— Sélection Continentale —</div>
      <h1 class="ta-banner-title">Top Afrique</h1>
      <p class="ta-banner-sub">Les meilleurs produits du continent, distingués par nos experts</p>
    </div>
  </div>

  <!-- SECTION MÉDAILLES -->
  <section class="medals-section" data-aos="fade-up">
    <div class="container">
      <div class="medals-header">
        <div class="gold-eyebrow">Explorer par distinction</div>
        <h2 class="medals-title">Les Distinctions Officielles</h2>
        <div class="gold-divider mx-auto"></div>
        <p class="medals-desc">
          Sélectionnez une médaille pour découvrir les produits récompensés par notre jury d'experts internationaux.
        </p>
      </div>
      <div class="medals-grid">
        <!-- OR -->
        <div class="medal-card medal-or" :class="{ active: activeMedal === 'or' }" @click="activeMedal = activeMedal === 'or' ? null : 'or'" data-aos="fade-up" data-aos-delay="0">
          <div class="medal-bg"></div>
          <div class="medal-content">
            <img src="/src/assets/images/or.png" class="medal-img" alt="Médaille d'Or"/>
            <h3 class="medal-name">Médaille d'Or</h3>
            <span class="medal-desc">Découvrez l'excellence absolue</span>
            <div class="medal-badge-line">
              <span class="medal-count">{{ wines.filter(w => getMedal(w.note) === 'or').length }} produit(s)</span>
            </div>
            <button class="medal-btn medal-btn-or">Voir les produits primés</button>
          </div>
        </div>
        <!-- ARGENT -->
        <div class="medal-card medal-ag" :class="{ active: activeMedal === 'argent' }" @click="activeMedal = activeMedal === 'argent' ? null : 'argent'" data-aos="fade-up" data-aos-delay="100">
          <div class="medal-bg"></div>
          <div class="medal-content">
            <img src="/src/assets/images/argent.png" class="medal-img" alt="Médaille d'Argent"/>
            <h3 class="medal-name">Médaille d'Argent</h3>
            <span class="medal-desc">Explorez les grandes distinctions</span>
            <div class="medal-badge-line">
              <span class="medal-count">{{ wines.filter(w => getMedal(w.note) === 'argent').length }} produit(s)</span>
            </div>
            <button class="medal-btn medal-btn-ag">Voir les produits primés</button>
          </div>
        </div>
        <!-- BRONZE -->
        <div class="medal-card medal-bz" :class="{ active: activeMedal === 'bronze' }" @click="activeMedal = activeMedal === 'bronze' ? null : 'bronze'" data-aos="fade-up" data-aos-delay="200">
          <div class="medal-bg"></div>
          <div class="medal-content">
            <img src="/src/assets/images/bronze.png" class="medal-img" alt="Médaille de Bronze"/>
            <h3 class="medal-name">Médaille de Bronze</h3>
            <span class="medal-desc">Découvrez les vins distingués</span>
            <div class="medal-badge-line">
              <span class="medal-count">{{ wines.filter(w => getMedal(w.note) === 'bronze').length }} produit(s)</span>
            </div>
            <button class="medal-btn medal-btn-bz">Voir les produits primés</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RÉSULTATS OFFICIELS -->
  <section class="results-banner" data-aos="fade-up">
    <div class="container results-banner-inner">
      <div>
        <div class="gold-eyebrow">Palmarès 2024</div>
        <h3 class="results-title">Résultats Officiels de la Sélection Top Afrique</h3>
        <p class="results-desc">
          Accédez à la liste complète des produits récompensés par notre jury d'experts internationaux.
        </p>
      </div>
      <button class="results-btn">Voir tous les résultats 2024</button>
    </div>
  </section>

  <!-- CATALOGUE DE PRODUITS -->
  <div class="catalog-wrapper">
    <div class="container">
      <!-- En-tête catalogue -->
      <div class="catalog-top" data-aos="fade-up">
        <h2 class="catalog-title">TROIS PUISSANCES — TOP AFRIQUE</h2>
        <div class="input-group search-group">
          <span class="search-prefix"><i class="fa fa-search"></i></span>
          <input type="search" placeholder="Rechercher un produit, un producteur, un pays..." class="catalog-search" @input="searchWine"/>
        </div>
      </div>

      <div class="catalog-layout">
        <!-- FILTRES LATÉRAUX -->
        <aside class="filters-sidebar" data-aos="fade-right" data-aos-duration="1200">
          <div class="filter-group">
            <h4 class="filter-title">Producteur</h4>
            <div class="filter-search-wrap">
              <input type="search" placeholder="Recherche dans 1739 producteurs" class="filter-input"/>
            </div>
          </div>
          <div class="filter-group">
            <h4 class="filter-title">Pays</h4>
            <div class="filter-search-wrap">
              <input type="search" placeholder="Recherche dans 32 pays" class="filter-input"/>
            </div>
            <div class="filter-chips">
              <div v-for="country in countries" :key="country" class="filter-chip">
                <span class="chip-dot"></span>
                <span>{{ country.name }}</span>
              </div>
            </div>
          </div>
          <div class="filter-group">
            <h4 class="filter-title">Région</h4>
            <div class="filter-search-wrap">
              <input type="search" placeholder="Recherche dans les régions" class="filter-input"/>
            </div>
          </div>
          <div class="filter-group">
            <h4 class="filter-title">Appellation</h4>
            <div class="filter-search-wrap">
              <input type="search" placeholder="Recherche..." class="filter-input"/>
            </div>
          </div>
          <div class="filter-group">
            <h4 class="filter-title">Cépage</h4>
            <div class="filter-search-wrap">
              <input type="search" placeholder="Recherche..." class="filter-input"/>
            </div>
            <div class="filter-chips">
              <div v-for="grape in grapes" :key="grape" class="filter-chip">
                <span class="chip-dot"></span>
                <span>{{ grape.name }}</span>
              </div>
            </div>
          </div>
          <div class="filter-group">
            <h4 class="filter-title">Couleur</h4>
            <div class="filter-chips">
              <div v-for="color in colors" :key="color" class="filter-chip">
                <span class="chip-dot"></span>
                <span>{{ color.name }}</span>
              </div>
            </div>
          </div>
          <div class="filter-group">
            <h4 class="filter-title">Distinction</h4>
            <div class="filter-chips">
              <div class="filter-chip" @click="activeMedal = activeMedal === 'or' ? null : 'or'" :class="{ selected: activeMedal === 'or' }">
                <span class="chip-medal chip-or">●</span><span>Médaille d'Or</span>
              </div>
              <div class="filter-chip" @click="activeMedal = activeMedal === 'argent' ? null : 'argent'" :class="{ selected: activeMedal === 'argent' }">
                <span class="chip-medal chip-ag">●</span><span>Médaille d'Argent</span>
              </div>
              <div class="filter-chip" @click="activeMedal = activeMedal === 'bronze' ? null : 'bronze'" :class="{ selected: activeMedal === 'bronze' }">
                <span class="chip-medal chip-bz">●</span><span>Médaille de Bronze</span>
              </div>
            </div>
          </div>
          <button class="reset-btn">
            <i class="fa fa-redo"></i> Réinitialiser les filtres
          </button>
        </aside>

        <!-- LISTE DES PRODUITS -->
        <main class="products-list" data-aos="fade-up" data-aos-duration="1500">
          <div class="products-list-header">
            <h2 class="list-title">Top Afrique</h2>
            <p class="list-count">Affichage de <strong>{{ filteredWines.length }}</strong> résultat(s)</p>
          </div>

          <div v-for="(wine, idx) in filteredWines" :key="idx" class="wine-card" data-aos="fade-up" :data-aos-delay="idx * 60">
            <!-- Badge médaille -->
            <div class="wine-medal-badge" :class="'medal-badge-' + getMedal(wine.note)">
              <img
                v-if="getMedal(wine.note) === 'or'"
                src="/src/assets/images/or.png"
                class="wm-img" alt="Or"
              />
              <img
                v-else-if="getMedal(wine.note) === 'argent'"
                src="/src/assets/images/argent.png"
                class="wm-img" alt="Argent"
              />
              <img
                v-else
                src="/src/assets/images/bronze.png"
                class="wm-img" alt="Bronze"
              />
            </div>

            <div class="wine-card-inner">
              <!-- Image -->
              <div class="wine-img-wrap">
                <img src="/src/assets/images/product/1.png" class="wine-img" alt=""/>
                <!-- Score overlay -->
                <div class="wine-score-overlay">
                  <span class="score-val">{{ wine.note || '—' }}</span>
                  <span class="score-label">pts</span>
                </div>
              </div>

              <!-- Infos -->
              <div class="wine-info">
                <div class="wine-medal-label" :class="'medal-label-' + getMedal(wine.note)">
                  <i class="fa fa-award"></i>
                  {{ getMedalLabel(wine.note) }}
                </div>
                <h3 class="wine-name">{{ wine.name }}</h3>
                <p class="wine-desc">
                  Un vin d'exception issu des terres africaines les plus prometteuses,
                  sélectionné avec rigueur par notre jury d'experts internationaux.
                </p>
              </div>

              <!-- Détails & actions -->
              <div class="wine-details">
                <div class="wine-price-wrap">
                  <span class="wine-price">{{ wine.price }} <sup>€</sup></span>
                  <div class="wine-avail" :class="wine.isAvailable ? 'avail-yes' : 'avail-no'">
                    <i :class="wine.isAvailable ? 'fa fa-check-circle' : 'fa fa-times-circle'"></i>
                    {{ wine.isAvailable ? 'Disponible' : 'Indisponible' }}
                  </div>
                </div>
                <div class="wine-meta">
                  <span class="wine-code"><i class="fa fa-tag"></i> {{ wine.code }}</span>
                  <span class="wine-date">
                    <i class="fa fa-calendar-alt"></i>
                    {{ wine.updatedAt ? new Date(wine.updatedAt).toLocaleDateString('fr-FR') : '—' }}
                  </span>
                </div>
                <div class="wine-tags">
                  <span class="wine-tag">{{ wine.wineType }}</span>
                  <span class="wine-tag">{{ wine.spelling }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- État vide -->
          <div v-if="filteredWines.length === 0" class="empty-state">
            <i class="fa fa-wine-glass-alt empty-icon"></i>
            <p>Aucun produit trouvé pour ces critères.</p>
          </div>
        </main>
      </div>
    </div>
  </div>

  <div class="top"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import wineService from '@/services/wineService'

const wines = ref<any[]>([])
const colors = ref<any[]>([])
const producteurs = ref<any[]>([])
const grapes = ref<any[]>([])
const countries = ref<any[]>([])
const activeMedal = ref<string | null>(null)

function getMedal(note: number): string {
  if (!note) return 'bronze'
  if (note >= 95) return 'or'
  if (note >= 90) return 'argent'
  return 'bronze'
}

function getMedalLabel(note: number): string {
  const m = getMedal(note)
  if (m === 'or') return 'Médaille d\'Or'
  if (m === 'argent') return 'Médaille d\'Argent'
  return 'Médaille de Bronze'
}

const filteredWines = computed(() => {
  if (!activeMedal.value) return wines.value
  return wines.value.filter(w => getMedal(w.note) === activeMedal.value)
})

const searchWine = (e: any) => {
  const data = e.target.value
  wineService.searchWine(data).then(res => { wines.value = res.data })
}

onMounted(() => {
  wineService.listWines().then(res => { wines.value = res.data })
  wineService.listCouleur().then(res => { colors.value = res.data })
  wineService.listProducteur().then(res => { producteurs.value = res.data })
  wineService.listGrapes().then(res => { grapes.value = res.data })
  wineService.listCountries().then(res => { countries.value = res.data })
})
</script>

<style scoped>
/* ── BANNER ── */
.ta-banner { position: relative; background-position: 50% 60% !important; }
.ta-banner-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(15,5,8,0.5), rgba(50,10,18,0.75));
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 20px;
}
.ta-tagline { font-size: 12px; letter-spacing: 5px; color: #C9A84C; text-transform: uppercase; margin-bottom: 12px; }
.ta-banner-title { font-family: 'Playfair Display', serif; font-size: clamp(38px,6vw,70px); color: #fff; font-weight: 400; margin: 0 0 10px; }
.ta-banner-sub { color: rgba(255,255,255,0.7); font-size: 15px; font-style: italic; margin: 0; }

/* ── MEDALS SECTION ── */
.medals-section { padding: 80px 0; background: #F8F4EF; }
.medals-header { text-align: center; margin-bottom: 56px; }
.gold-eyebrow { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #C9A84C; margin-bottom: 12px; }
.medals-title { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 400; color: #1C1C1C; margin-bottom: 18px; }
.gold-divider { width: 60px; height: 2px; background: linear-gradient(to right, #C9A84C, #E8D5A3); margin-bottom: 20px; }
.mx-auto { margin-left: auto; margin-right: auto; }
.medals-desc { font-size: 15px; color: #777; max-width: 560px; margin: 0 auto; line-height: 1.75; }

.medals-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

.medal-card {
  position: relative; overflow: hidden;
  padding: 44px 28px 36px;
  text-align: center;
  border: 1px solid #e8ddd5;
  background: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.25s, border-color 0.25s;
}
.medal-card:hover, .medal-card.active {
  box-shadow: 0 16px 48px rgba(107,26,39,0.15);
  transform: translateY(-5px);
}
.medal-or:hover, .medal-or.active { border-color: #C9A84C; }
.medal-ag:hover, .medal-ag.active { border-color: #a8a8a8; }
.medal-bz:hover, .medal-bz.active { border-color: #b87333; }

.medal-img { width: 100px; height: 100px; object-fit: contain; border-radius: 50%; margin-bottom: 20px; }
.medal-name { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 600; margin-bottom: 8px; }
.medal-or .medal-name { color: #8A6041; }
.medal-ag .medal-name { color: #5a5a5a; }
.medal-bz .medal-name { color: #6B4226; }
.medal-desc { font-size: 13px; color: #999; display: block; margin-bottom: 16px; }
.medal-count { font-size: 11px; letter-spacing: 1px; color: #bbb; text-transform: uppercase; }
.medal-badge-line { margin-bottom: 20px; }

.medal-btn {
  display: inline-block; padding: 10px 24px; font-size: 10px; letter-spacing: 2px;
  text-transform: uppercase; font-weight: 700; cursor: pointer; border: 1px solid; background: transparent;
  transition: all 0.25s;
}
.medal-btn-or { color: #8A6041; border-color: #8A6041; }
.medal-btn-or:hover { background: #8A6041; color: #fff; }
.medal-btn-ag { color: #5a5a5a; border-color: #5a5a5a; }
.medal-btn-ag:hover { background: #5a5a5a; color: #fff; }
.medal-btn-bz { color: #6B4226; border-color: #6B4226; }
.medal-btn-bz:hover { background: #6B4226; color: #fff; }

/* ── RESULTS BANNER ── */
.results-banner {
  background: linear-gradient(135deg, #1C1C1C 60%, #3D0D17);
  padding: 60px 0;
}
.results-banner-inner {
  display: flex; justify-content: space-between; align-items: center; gap: 40px; flex-wrap: wrap;
}
.results-banner .gold-eyebrow { color: #C9A84C; }
.results-title { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 400; color: #fff; margin-bottom: 10px; }
.results-desc { font-size: 14px; color: rgba(255,255,255,0.6); margin: 0; }
.results-btn {
  background: #C9A84C; color: #1C1C1C; border: none; padding: 16px 36px;
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;
  cursor: pointer; white-space: nowrap; transition: background 0.25s;
}
.results-btn:hover { background: #e8c96a; }

/* ── CATALOG ── */
.catalog-wrapper { padding: 60px 0 100px; background: #fff; }
.catalog-top {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  padding-bottom: 24px; border-bottom: 1px solid #ede5e0; margin-bottom: 40px; flex-wrap: wrap;
}
.catalog-title { font-family: 'Playfair Display', serif; font-size: 22px; color: #6B1A27; font-weight: 700; letter-spacing: 1px; }
.search-group { display: flex; align-items: center; border: 1px solid #ddd; flex: 0 0 380px; overflow: hidden; }
.search-prefix { padding: 0 14px; color: #bbb; font-size: 13px; }
.catalog-search {
  flex: 1; border: none; padding: 12px 8px; font-size: 13px; color: #333;
  background: transparent; outline: none;
}
.catalog-search::placeholder { color: #ccc; font-style: italic; }

.catalog-layout { display: grid; grid-template-columns: 280px 1fr; gap: 40px; }

/* SIDEBAR FILTERS */
.filters-sidebar { display: flex; flex-direction: column; gap: 24px; }
.filter-group { }
.filter-title {
  font-family: 'Playfair Display', serif; font-size: 15px; color: #6B1A27;
  font-weight: 700; margin-bottom: 12px; padding-bottom: 8px;
  border-bottom: 1px solid #ede5e0;
}
.filter-search-wrap { margin-bottom: 10px; }
.filter-input {
  width: 100%; border: none; border-bottom: 1px solid #ddd; padding: 8px 4px;
  font-size: 13px; background: transparent; outline: none; color: #555;
}
.filter-input::placeholder { color: #ccc; font-size: 12px; font-style: italic; }
.filter-input:focus { border-bottom-color: #6B1A27; }

.filter-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.filter-chip {
  display: inline-flex; align-items: center; gap: 5px;
  background: #F8F4EF; padding: 5px 10px;
  font-size: 12px; color: #555; cursor: pointer;
  border: 1px solid transparent; transition: all 0.2s;
}
.filter-chip:hover, .filter-chip.selected { background: #fff; border-color: #6B1A27; color: #6B1A27; }
.chip-dot { width: 7px; height: 7px; border-radius: 50%; background: #6B1A27; flex-shrink: 0; }
.chip-medal { font-size: 14px; }
.chip-or { color: #C9A84C; }
.chip-ag { color: #a8a8a8; }
.chip-bz { color: #b87333; }

.reset-btn {
  background: none; border: 1px solid #6B1A27; color: #6B1A27;
  padding: 10px 20px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;
  cursor: pointer; font-weight: 700; transition: all 0.2s;
}
.reset-btn:hover { background: #6B1A27; color: #fff; }

/* PRODUCTS LIST */
.products-list-header { margin-bottom: 28px; }
.list-title { font-family: 'Playfair Display', serif; font-size: 20px; color: #6B1A27; font-weight: 700; margin-bottom: 4px; }
.list-count { font-size: 13px; color: #aaa; font-style: italic; }

/* WINE CARD */
.wine-card {
  position: relative;
  border: 1px solid #ede5e0;
  margin-bottom: 20px;
  background: #fff;
  overflow: hidden;
  transition: box-shadow 0.3s;
}
.wine-card:hover { box-shadow: 0 8px 32px rgba(107,26,39,0.1); }

.wine-medal-badge {
  position: absolute; top: 0; left: 0;
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  z-index: 2;
}
.medal-badge-or { background: linear-gradient(135deg, #C9A84C, #e8c96a); }
.medal-badge-argent { background: linear-gradient(135deg, #b0b0b0, #e0e0e0); }
.medal-badge-bronze { background: linear-gradient(135deg, #b87333, #d99a5b); }
.wm-img { width: 38px; height: 38px; object-fit: contain; border-radius: 50%; }

.wine-card-inner {
  display: grid;
  grid-template-columns: 140px 1fr auto;
  gap: 0;
}
.wine-img-wrap {
  position: relative; background: #F8F4EF;
  display: flex; align-items: center; justify-content: center;
  padding: 24px 16px;
}
.wine-img { max-height: 140px; object-fit: contain; }
.wine-score-overlay {
  position: absolute; bottom: 8px; right: 8px;
  background: rgba(107,26,39,0.9); color: #fff;
  padding: 4px 8px; text-align: center; border-radius: 2px;
}
.score-val { font-size: 16px; font-weight: 700; display: block; line-height: 1; }
.score-label { font-size: 9px; color: #C9A84C; letter-spacing: 1px; }

.wine-info {
  padding: 20px 24px;
  border-left: 3px solid;
}
.wine-card:nth-child(3n+1) .wine-info { border-left-color: #C9A84C; }
.wine-card:nth-child(3n+2) .wine-info { border-left-color: #a8a8a8; }
.wine-card:nth-child(3n+3) .wine-info { border-left-color: #b87333; }

.wine-medal-label {
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
}
.medal-label-or { color: #C9A84C; }
.medal-label-argent { color: #909090; }
.medal-label-bronze { color: #b87333; }

.wine-name {
  font-family: 'Playfair Display', serif;
  font-size: 20px; color: #1C1C1C; font-weight: 700; margin-bottom: 10px;
}
.wine-desc { font-size: 13px; color: #888; line-height: 1.7; margin: 0; }

.wine-details {
  padding: 20px 24px;
  display: flex; flex-direction: column; justify-content: space-between;
  border-left: 1px solid #f0e8e4; min-width: 180px;
}
.wine-price-wrap { margin-bottom: 12px; }
.wine-price { font-size: 22px; font-weight: 700; color: #1C1C1C; }
.wine-price sup { font-size: 12px; color: #aaa; font-weight: 400; }
.wine-avail {
  font-size: 11px; font-weight: 600; letter-spacing: 0.5px;
  display: flex; align-items: center; gap: 5px; margin-top: 4px;
}
.avail-yes { color: #4CAF50; }
.avail-no { color: #aaa; }

.wine-meta { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
.wine-code, .wine-date { font-size: 11px; color: #bbb; display: flex; align-items: center; gap: 6px; }

.wine-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.wine-tag {
  background: #6B1A27; color: #fff; font-size: 10px; letter-spacing: 1px;
  text-transform: uppercase; padding: 4px 10px; font-weight: 600;
}

.empty-state { text-align: center; padding: 80px 20px; color: #ccc; }
.empty-icon { font-size: 48px; margin-bottom: 16px; display: block; }
</style>
