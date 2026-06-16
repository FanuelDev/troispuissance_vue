<template>
  <!-- HERO ÉDITORIAL -->
  <div class="actu-hero">
    <div class="actu-hero-bg"></div>
    <div class="actu-hero-overlay">
      <div class="actu-hero-content">
        <div class="hero-eyebrow">{{ $t('actualite.heroEyebrow') }}</div>
        <h1 class="actu-hero-title">{{ $t('actualite.heroTitle') }}</h1>
        <p class="actu-hero-sub">{{ $t('actualite.heroSub') }}</p>
        <div class="hero-scroll-hint"><span></span></div>
      </div>
    </div>
  </div>

  <!-- ARTICLE PRINCIPAL -->
  <section class="featured-article container" data-aos="fade-up">
    <div class="featured-inner">
      <div class="featured-image-wrap">
        <img src="/src/assets/images/banner/banner3.jpg" class="featured-img" alt="Article vedette"/>
        <div class="featured-category">{{ $t('actualite.featured') }}</div>
      </div>
      <div class="featured-text">
        <div class="article-meta">
          <span class="meta-date"><i class="fa fa-calendar-alt"></i> 12 Mai 2025</span>
          <span class="meta-read"><i class="fa fa-clock"></i> 8 min de lecture</span>
        </div>
        <h2 class="featured-title">{{ $t('actualite.featuredTitle') }}</h2>
        <div class="featured-lead-line"></div>
        <p class="featured-lead">
          Depuis quelques années, le continent africain s'impose comme l'une des destinations
          les plus fascinantes pour les amateurs de grands vins. De Johannesburg à Lagos, de
          Nairobi à Abidjan, une nouvelle génération de connaisseurs redéfinit les codes de
          la dégustation et de la culture œnologique.
        </p>
        <p class="featured-body">
          Ce mouvement ne se contente pas de reproduire les modèles occidentaux — il les
          transcende, en y insufflant une sensibilité africaine unique, une curiosité
          insatiable et une exigence croissante pour l'authenticité des terroirs.
          Trois Puissances accompagne cette évolution au plus près, en créant des ponts
          durables entre les domaines d'exception et ces marchés en pleine effervescence.
        </p>
        <a href="#" class="read-more-btn">{{ $t('actualite.readFull') }} <span>→</span></a>
      </div>
    </div>
  </section>

  <!-- SÉPARATEUR DORÉ -->
  <div class="gold-separator container">
    <div class="gold-sep-line"></div>
    <div class="gold-sep-diamond">◆</div>
    <div class="gold-sep-line"></div>
  </div>

  <!-- GRILLE D'ARTICLES -->
  <section class="articles-grid-section container" data-aos="fade-up">
    <div class="section-header">
      <div class="gold-eyebrow">{{ $t('actualite.chroniclesLabel') }}</div>
      <h2 class="section-title">{{ $t('actualite.sectionTitle') }}</h2>
    </div>

    <div class="articles-grid">
      <!-- Article 1 -->
      <article class="article-card" data-aos="fade-up" data-aos-delay="0">
        <div class="article-img-wrap">
          <img src="/src/assets/images/use/2.jpg" class="article-img" alt=""/>
          <div class="article-cat">Terroirs</div>
        </div>
        <div class="article-body">
          <div class="article-meta-small">
            <span>18 Avril 2025</span><span class="dot">·</span><span>5 min</span>
          </div>
          <h3 class="article-title">
            Les Terroirs d'Afrique du Sud : Quand le Cap Rivale Bordeaux
          </h3>
          <p class="article-excerpt">
            La Vallée de Stellenbosch s'impose désormais sur la scène mondiale.
            Ses Cabernet Sauvignon et Chenin Blanc conjuguent minéralité et richesse
            aromatique avec une élégance que les plus grandes maisons bordelaises
            ne peuvent ignorer.
          </p>
          <a href="#" class="article-link">{{ $t('actualite.readMore') }} <i class="fa fa-arrow-right"></i></a>
        </div>
      </article>

      <!-- Article 2 -->
      <article class="article-card" data-aos="fade-up" data-aos-delay="80">
        <div class="article-img-wrap">
          <img src="/src/assets/images/use/6.jpg" class="article-img" alt=""/>
          <div class="article-cat">Millésimes</div>
        </div>
        <div class="article-body">
          <div class="article-meta-small">
            <span>3 Avril 2025</span><span class="dot">·</span><span>6 min</span>
          </div>
          <h3 class="article-title">
            Millésime 2023 : Une Année d'Exception pour les Vins du Continent
          </h3>
          <p class="article-excerpt">
            Les conditions climatiques particulièrement favorables ont produit des vins
            d'une concentration exceptionnelle. Notre sélection des cuvées les plus
            prometteuses du millésime 2023 sur le continent africain.
          </p>
          <a href="#" class="article-link">{{ $t('actualite.readMore') }} <i class="fa fa-arrow-right"></i></a>
        </div>
      </article>

      <!-- Article 3 -->
      <article class="article-card" data-aos="fade-up" data-aos-delay="160">
        <div class="article-img-wrap">
          <img src="/src/assets/images/use/7.jpg" class="article-img" alt=""/>
          <div class="article-cat">Gastronomie</div>
        </div>
        <div class="article-body">
          <div class="article-meta-small">
            <span>22 Mars 2025</span><span class="dot">·</span><span>4 min</span>
          </div>
          <h3 class="article-title">
            Accords Mets-Vins : Les Épices Africaines Révèlent les Grands Crus
          </h3>
          <p class="article-excerpt">
            Le cumin, le poivre long, le gingembre — les épices africaines ouvrent
            de nouveaux horizons dans l'art des accords mets-vins. Une rencontre
            inattendue entre traditions millénaires et œnologie de prestige.
          </p>
          <a href="#" class="article-link">{{ $t('actualite.readMore') }} <i class="fa fa-arrow-right"></i></a>
        </div>
      </article>
    </div>
  </section>

  <!-- GALERIE IMMERSIVE -->
  <section class="gallery-strip" data-aos="fade-up">
    <div class="gallery-strip-inner">
      <img src="/src/assets/images/use/15.jpg" class="gallery-img" alt=""/>
      <img src="/src/assets/images/use/16.jpg" class="gallery-img gallery-img-tall" alt=""/>
      <img src="/src/assets/images/use/17.jpg" class="gallery-img" alt=""/>
      <img src="/src/assets/images/use/18.jpg" class="gallery-img gallery-img-tall" alt=""/>
    </div>
    <div class="gallery-caption">
      <em>"Le vin est la poésie de la terre"</em>
    </div>
  </section>

  <!-- ARTICLE DOUBLE COLONNE -->
  <section class="split-article container" data-aos="fade-up">
    <div class="split-article-inner">
      <div class="split-text">
        <div class="gold-eyebrow">Dossier exclusif</div>
        <h2 class="split-title">
          La Culture du Vin en Afrique Subsaharienne :
          Entre Héritage et Modernité
        </h2>
        <div class="split-divider"></div>
        <p>
          Longtemps perçue comme un marché émergent, l'Afrique subsaharienne s'affirme
          aujourd'hui comme l'un des foyers les plus dynamiques de la culture œnologique
          mondiale. Des clubs de dégustation privés de Lagos aux caves à vins sophistiquées
          d'Abidjan, une élite africaine réinvente son rapport au grand vin.
        </p>
        <p>
          Cette révolution culturelle s'accompagne d'une exigence accrue pour la qualité,
          la provenance et l'histoire derrière chaque bouteille. Les consommateurs africains
          premium ne cherchent plus simplement un vin — ils cherchent une expérience,
          un récit, une connexion authentique avec le terroir.
        </p>
        <div class="split-quote">
          <blockquote>
            "Chaque grand vin porte en lui la mémoire d'un lieu,
            d'une saison, d'un homme qui a su lire la terre."
          </blockquote>
          <cite>— L'équipe Trois Puissances</cite>
        </div>
      </div>
      <div class="split-images">
        <img src="/src/assets/images/use/19.jpg" class="split-img split-img-main" alt=""/>
      </div>
    </div>
  </section>

  <!-- SIDEBAR : EN BREF + ÉVÉNEMENTS -->
  <section class="sidebar-section container" data-aos="fade-up">
    <div class="sidebar-layout">
      <!-- MINI ARTICLES EN BREF -->
      <div class="news-brief">
        <div class="gold-eyebrow">En bref</div>
        <h3 class="news-brief-title">Les Dernières Nouvelles</h3>
        <div class="brief-list">
          <div class="brief-item">
            <div class="brief-date">Mai 2025</div>
            <div class="brief-text">
              <strong>Bordeaux Primeurs 2024</strong> — Des notes exceptionnelles pour les
              châteaux du Médoc. La demande africaine bat un record historique.
            </div>
          </div>
          <div class="brief-item">
            <div class="brief-date">Avr. 2025</div>
            <div class="brief-text">
              <strong>Trois Puissances à Vinexpo</strong> — Notre équipe représente les
              meilleurs producteurs africains au salon mondial à Paris.
            </div>
          </div>
          <div class="brief-item">
            <div class="brief-date">Mars 2025</div>
            <div class="brief-text">
              <strong>Nouveau partenariat</strong> — Signature d'un accord exclusif avec
              cinq domaines viticoles d'Afrique du Sud pour le marché ivoirien.
            </div>
          </div>
          <div class="brief-item">
            <div class="brief-date">Fév. 2025</div>
            <div class="brief-text">
              <strong>Master Class Lagos</strong> — 180 connaisseurs réunis pour une
              dégustation verticale de Grands Crus Classés de Bordeaux.
            </div>
          </div>
        </div>
      </div>

      <!-- ÉVÉNEMENTS À VENIR -->
      <div class="events-widget">
        <div class="gold-eyebrow">Agenda</div>
        <h3 class="events-title">Prochains Événements</h3>
        <div class="event-list">
          <div class="event-item">
            <div class="event-date-box">
              <span class="event-day">14</span>
              <span class="event-month">Juin</span>
            </div>
            <div class="event-info">
              <h5>Master Class — Grands Crus de Bourgogne</h5>
              <p><i class="fa fa-map-marker-alt"></i> Abidjan, Côte d'Ivoire</p>
            </div>
          </div>
          <div class="event-item">
            <div class="event-date-box">
              <span class="event-day">28</span>
              <span class="event-month">Juin</span>
            </div>
            <div class="event-info">
              <h5>Soirée Primeurs — Sélection Top Afrique 2024</h5>
              <p><i class="fa fa-map-marker-alt"></i> Lagos, Nigeria</p>
            </div>
          </div>
          <div class="event-item">
            <div class="event-date-box">
              <span class="event-day">10</span>
              <span class="event-month">Juil</span>
            </div>
            <div class="event-info">
              <h5>Dîner Œnologique — Accords Mets & Vins Africains</h5>
              <p><i class="fa fa-map-marker-alt"></i> Dakar, Sénégal</p>
            </div>
          </div>
        </div>
        <a href="#" class="events-cta">Voir tout l'agenda <span>→</span></a>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="newsletter-section" data-aos="fade-up">
    <div class="newsletter-inner container">
      <div class="nl-icon">✦</div>
      <h2 class="nl-title">Rejoignez Notre Cercle Privé</h2>
      <p class="nl-desc">
        Recevez en avant-première nos sélections, chroniques de dégustation
        et invitations à nos événements exclusifs.
      </p>
      <form class="nl-form" @submit.prevent>
        <input type="email" class="nl-input" placeholder="Votre adresse email..."/>
        <button type="submit" class="nl-btn">S'inscrire</button>
      </form>
    </div>
  </section>

  <div class="top"></div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* ── HERO ── */
.actu-hero {
  position: relative;
  height: 92vh;
  min-height: 560px;
  overflow: hidden;
}
.actu-hero-bg {
  position: absolute; inset: 0;
  background-image: url('/src/assets/images/banner/banner3.jpg');
  background-size: cover; background-position: 50% 40%;
  filter: brightness(0.45);
  transform: scale(1.03);
  transition: transform 8s ease;
}
.actu-hero:hover .actu-hero-bg { transform: scale(1); }
.actu-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10,2,5,0.3) 0%,
    rgba(60,10,20,0.6) 70%,
    rgba(20,5,10,0.85) 100%
  );
  display: flex; align-items: center; justify-content: center;
}
.actu-hero-content { text-align: center; padding: 20px; }
.hero-eyebrow {
  font-size: 12px; letter-spacing: 6px; color: #C9A84C;
  text-transform: uppercase; margin-bottom: 20px;
}
.actu-hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(56px, 9vw, 110px);
  color: #fff; font-weight: 400; line-height: 0.95;
  margin: 0 0 20px; letter-spacing: -1px;
}
.actu-hero-sub {
  color: rgba(255,255,255,0.7); font-size: 17px;
  font-style: italic; max-width: 500px; margin: 0 auto 32px; line-height: 1.6;
}
.hero-scroll-hint {
  display: flex; justify-content: center;
}
.hero-scroll-hint span {
  display: block; width: 1px; height: 50px;
  background: linear-gradient(to bottom, #C9A84C, transparent);
  animation: scrollPulse 2s ease infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

/* ── FEATURED ARTICLE ── */
.featured-article { padding: 80px 0 60px; }
.featured-inner {
  display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: start;
}
.featured-image-wrap { position: relative; overflow: hidden; }
.featured-img {
  width: 100%; height: 520px; object-fit: cover; display: block;
  transition: transform 0.7s ease;
}
.featured-image-wrap:hover .featured-img { transform: scale(1.03); }
.featured-category {
  position: absolute; top: 20px; left: 20px;
  background: #6B1A27; color: #fff;
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  padding: 6px 14px; font-weight: 700;
}
.article-meta {
  display: flex; gap: 16px; margin-bottom: 18px;
}
.meta-date, .meta-read {
  font-size: 11px; color: #bbb; letter-spacing: 0.5px;
  display: flex; align-items: center; gap: 6px;
}
.featured-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(22px, 2.5vw, 34px);
  color: #1C1C1C; font-weight: 700; line-height: 1.3; margin-bottom: 20px;
}
.featured-lead-line {
  width: 48px; height: 2px;
  background: linear-gradient(to right, #C9A84C, #E8D5A3);
  margin-bottom: 20px;
}
.featured-lead {
  font-size: 17px; color: #444; line-height: 1.85; font-style: italic;
  margin-bottom: 16px; font-family: 'Playfair Display', serif;
}
.featured-body { font-size: 14px; color: #666; line-height: 1.85; margin-bottom: 28px; }
.read-more-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: #6B1A27; color: #fff; text-decoration: none;
  padding: 14px 32px; font-size: 11px; letter-spacing: 2px;
  text-transform: uppercase; font-weight: 700;
  transition: background 0.25s, transform 0.2s;
}
.read-more-btn:hover { background: #3D0D17; transform: translateX(3px); color: #fff; }

/* ── GOLD SEPARATOR ── */
.gold-separator {
  display: flex; align-items: center; gap: 16px;
  padding: 40px 0;
}
.gold-sep-line { flex: 1; height: 1px; background: linear-gradient(to right, transparent, #C9A84C66, transparent); }
.gold-sep-diamond { color: #C9A84C; font-size: 12px; }

/* ── ARTICLES GRID ── */
.articles-grid-section { padding: 20px 0 80px; }
.section-header { margin-bottom: 48px; }
.gold-eyebrow { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
.section-title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 400; color: #1C1C1C; }

.articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

.article-card {
  background: #fff; border: 1px solid #ede5e0; overflow: hidden;
  transition: box-shadow 0.3s, transform 0.25s;
}
.article-card:hover {
  box-shadow: 0 12px 40px rgba(107,26,39,0.1);
  transform: translateY(-4px);
}
.article-img-wrap { position: relative; overflow: hidden; }
.article-img {
  width: 100%; height: 220px; object-fit: cover; display: block;
  transition: transform 0.6s ease;
}
.article-card:hover .article-img { transform: scale(1.05); }
.article-cat {
  position: absolute; bottom: 12px; left: 12px;
  background: rgba(107,26,39,0.9); color: #fff;
  font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
  padding: 4px 12px; font-weight: 700;
}
.article-body { padding: 24px 22px; }
.article-meta-small {
  display: flex; align-items: center; gap: 6px;
  font-size: 11px; color: #ccc; margin-bottom: 12px;
}
.dot { color: #C9A84C; }
.article-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px; color: #1C1C1C; font-weight: 700;
  line-height: 1.4; margin-bottom: 12px;
}
.article-excerpt { font-size: 13px; color: #888; line-height: 1.75; margin-bottom: 20px; }
.article-link {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
  color: #6B1A27; font-weight: 700; text-decoration: none;
  border-bottom: 1px solid transparent; padding-bottom: 2px;
  transition: border-color 0.2s, gap 0.2s;
}
.article-link:hover { border-color: #6B1A27; gap: 12px; color: #6B1A27; }

/* ── GALLERY STRIP ── */
.gallery-strip { position: relative; background: #1C1C1C; overflow: hidden; }
.gallery-strip-inner {
  display: grid; grid-template-columns: repeat(4, 1fr);
  height: 320px;
}
.gallery-img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7); transition: filter 0.3s, transform 0.4s; display: block; }
.gallery-img-tall { height: 100%; }
.gallery-img:hover { filter: brightness(0.9); transform: scale(1.03); }
.gallery-caption {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(20,5,10,0.8), transparent);
  padding: 30px 48px 20px; text-align: center;
}
.gallery-caption em {
  color: rgba(255,255,255,0.8); font-family: 'Playfair Display', serif;
  font-size: 18px; letter-spacing: 1px;
}

/* ── SPLIT ARTICLE ── */
.split-article { padding: 80px 0; }
.split-article-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.split-title {
  font-family: 'Playfair Display', serif;
  font-size: 28px; color: #1C1C1C; font-weight: 700; line-height: 1.35; margin-bottom: 20px;
}
.split-divider { width: 48px; height: 2px; background: linear-gradient(to right, #C9A84C, #E8D5A3); margin-bottom: 24px; }
.split-article p { font-size: 15px; color: #666; line-height: 1.85; margin-bottom: 18px; }
.split-quote { border-left: 3px solid #C9A84C; padding: 12px 20px; margin-top: 24px; }
.split-quote blockquote {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: 17px; color: #1C1C1C; line-height: 1.6; margin: 0 0 8px;
}
.split-quote cite { font-size: 12px; color: #C9A84C; letter-spacing: 1px; }
.split-img-main { width: 100%; height: 480px; object-fit: cover; display: block; }

/* ── SIDEBAR SECTION ── */
.sidebar-section { padding: 60px 0 80px; }
.sidebar-layout { display: grid; grid-template-columns: 1fr 400px; gap: 60px; }

.news-brief .gold-eyebrow, .events-widget .gold-eyebrow { display: block; margin-bottom: 8px; }
.news-brief-title, .events-title {
  font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700;
  color: #1C1C1C; margin-bottom: 28px;
}
.brief-list { display: flex; flex-direction: column; }
.brief-item {
  display: grid; grid-template-columns: 70px 1fr; gap: 16px;
  padding: 18px 0; border-bottom: 1px solid #f0e8e4;
  align-items: start;
}
.brief-date { font-size: 11px; color: #C9A84C; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; padding-top: 2px; }
.brief-text { font-size: 14px; color: #666; line-height: 1.65; }
.brief-text strong { color: #1C1C1C; }

.events-widget { background: #F8F4EF; padding: 36px; }
.event-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; }
.event-item { display: flex; gap: 18px; align-items: center; }
.event-date-box {
  background: #6B1A27; color: #fff; min-width: 54px;
  text-align: center; padding: 8px 6px;
  display: flex; flex-direction: column;
}
.event-day { font-size: 24px; font-weight: 700; line-height: 1; font-family: 'Playfair Display', serif; }
.event-month { font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: #C9A84C; }
.event-info h5 { font-size: 14px; color: #1C1C1C; font-weight: 600; margin-bottom: 4px; line-height: 1.3; }
.event-info p { font-size: 12px; color: #aaa; margin: 0; display: flex; align-items: center; gap: 5px; }
.events-cta {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;
  color: #6B1A27; font-weight: 700; text-decoration: none;
  border-bottom: 1px solid #6B1A27; padding-bottom: 2px;
}
.events-cta:hover { color: #3D0D17; border-color: #3D0D17; }

/* ── NEWSLETTER ── */
.newsletter-section {
  background: linear-gradient(135deg, #1C1C1C 50%, #3D0D17);
  padding: 80px 0;
  text-align: center;
}
.newsletter-inner { max-width: 540px; margin: 0 auto; }
.nl-icon { font-size: 24px; color: #C9A84C; letter-spacing: 8px; margin-bottom: 20px; }
.nl-title {
  font-family: 'Playfair Display', serif; font-size: 34px;
  color: #fff; font-weight: 400; margin-bottom: 14px;
}
.nl-desc { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 36px; }
.nl-form { display: flex; gap: 0; border: 1px solid rgba(255,255,255,0.2); overflow: hidden; }
.nl-input {
  flex: 1; border: none; background: rgba(255,255,255,0.07);
  color: #fff; font-size: 14px; padding: 16px 20px; outline: none;
}
.nl-input::placeholder { color: rgba(255,255,255,0.4); font-style: italic; }
.nl-btn {
  background: #C9A84C; color: #1C1C1C; border: none;
  padding: 16px 28px; font-size: 11px; letter-spacing: 2px;
  text-transform: uppercase; font-weight: 700; cursor: pointer;
  transition: background 0.2s;
}
.nl-btn:hover { background: #e8c96a; }
</style>
