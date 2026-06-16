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
          <span class="meta-date"><i class="fa fa-calendar-alt"></i> {{ $t('actualite.featuredDate') }}</span>
          <span class="meta-read"><i class="fa fa-clock"></i> {{ $t('actualite.featuredDuration') }}</span>
        </div>
        <h2 class="featured-title">{{ $t('actualite.featuredTitle') }}</h2>
        <div class="featured-lead-line"></div>
        <p class="featured-lead">{{ $t('actualite.featuredLead') }}</p>
        <p class="featured-body">{{ $t('actualite.featuredBody') }}</p>
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
          <div class="article-cat">{{ $t('actualite.cat1') }}</div>
        </div>
        <div class="article-body">
          <div class="article-meta-small">
            <span>{{ $t('actualite.art1Date') }}</span><span class="dot">·</span><span>{{ $t('actualite.art1Duration') }}</span>
          </div>
          <h3 class="article-title">{{ $t('actualite.art1Title') }}</h3>
          <p class="article-excerpt">{{ $t('actualite.art1Excerpt') }}</p>
          <a href="#" class="article-link">{{ $t('actualite.readMore') }} <i class="fa fa-arrow-right"></i></a>
        </div>
      </article>

      <!-- Article 2 -->
      <article class="article-card" data-aos="fade-up" data-aos-delay="80">
        <div class="article-img-wrap">
          <img src="/src/assets/images/use/6.jpg" class="article-img" alt=""/>
          <div class="article-cat">{{ $t('actualite.cat2') }}</div>
        </div>
        <div class="article-body">
          <div class="article-meta-small">
            <span>{{ $t('actualite.art2Date') }}</span><span class="dot">·</span><span>{{ $t('actualite.art2Duration') }}</span>
          </div>
          <h3 class="article-title">{{ $t('actualite.art2Title') }}</h3>
          <p class="article-excerpt">{{ $t('actualite.art2Excerpt') }}</p>
          <a href="#" class="article-link">{{ $t('actualite.readMore') }} <i class="fa fa-arrow-right"></i></a>
        </div>
      </article>

      <!-- Article 3 -->
      <article class="article-card" data-aos="fade-up" data-aos-delay="160">
        <div class="article-img-wrap">
          <img src="/src/assets/images/use/7.jpg" class="article-img" alt=""/>
          <div class="article-cat">{{ $t('actualite.cat3') }}</div>
        </div>
        <div class="article-body">
          <div class="article-meta-small">
            <span>{{ $t('actualite.art3Date') }}</span><span class="dot">·</span><span>{{ $t('actualite.art3Duration') }}</span>
          </div>
          <h3 class="article-title">{{ $t('actualite.art3Title') }}</h3>
          <p class="article-excerpt">{{ $t('actualite.art3Excerpt') }}</p>
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
      <em>{{ $t('actualite.galleryQuote') }}</em>
    </div>
  </section>

  <!-- ARTICLE DOUBLE COLONNE -->
  <section class="split-article container" data-aos="fade-up">
    <div class="split-article-inner">
      <div class="split-text">
        <div class="gold-eyebrow">{{ $t('actualite.dossierLabel') }}</div>
        <h2 class="split-title">{{ $t('actualite.dossierTitle') }}</h2>
        <div class="split-divider"></div>
        <p>{{ $t('actualite.dossierText1') }}</p>
        <p>{{ $t('actualite.dossierText2') }}</p>
        <div class="split-quote">
          <blockquote>{{ $t('actualite.dossierQuote') }}</blockquote>
          <cite>{{ $t('actualite.dossierQuoteCite') }}</cite>
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
        <div class="gold-eyebrow">{{ $t('actualite.briefLabel') }}</div>
        <h3 class="news-brief-title">{{ $t('actualite.briefTitle') }}</h3>
        <div class="brief-list">
          <div class="brief-item">
            <div class="brief-date">{{ $t('actualite.brief1Date') }}</div>
            <div class="brief-text"><strong>{{ $t('actualite.brief1Title') }}</strong> — {{ $t('actualite.brief1Text') }}</div>
          </div>
          <div class="brief-item">
            <div class="brief-date">{{ $t('actualite.brief2Date') }}</div>
            <div class="brief-text"><strong>{{ $t('actualite.brief2Title') }}</strong> — {{ $t('actualite.brief2Text') }}</div>
          </div>
          <div class="brief-item">
            <div class="brief-date">{{ $t('actualite.brief3Date') }}</div>
            <div class="brief-text"><strong>{{ $t('actualite.brief3Title') }}</strong> — {{ $t('actualite.brief3Text') }}</div>
          </div>
          <div class="brief-item">
            <div class="brief-date">{{ $t('actualite.brief4Date') }}</div>
            <div class="brief-text"><strong>{{ $t('actualite.brief4Title') }}</strong> — {{ $t('actualite.brief4Text') }}</div>
          </div>
        </div>
      </div>

      <!-- ÉVÉNEMENTS À VENIR -->
      <div class="events-widget">
        <div class="gold-eyebrow">{{ $t('actualite.agendaLabel') }}</div>
        <h3 class="events-title">{{ $t('actualite.eventsTitle') }}</h3>
        <div class="event-list">
          <div class="event-item">
            <div class="event-date-box">
              <span class="event-day">{{ $t('actualite.event1Day') }}</span>
              <span class="event-month">{{ $t('actualite.event1Month') }}</span>
            </div>
            <div class="event-info">
              <h5>{{ $t('actualite.event1Title') }}</h5>
              <p><i class="fa fa-map-marker-alt"></i> {{ $t('actualite.event1Place') }}</p>
            </div>
          </div>
          <div class="event-item">
            <div class="event-date-box">
              <span class="event-day">{{ $t('actualite.event2Day') }}</span>
              <span class="event-month">{{ $t('actualite.event2Month') }}</span>
            </div>
            <div class="event-info">
              <h5>{{ $t('actualite.event2Title') }}</h5>
              <p><i class="fa fa-map-marker-alt"></i> {{ $t('actualite.event2Place') }}</p>
            </div>
          </div>
          <div class="event-item">
            <div class="event-date-box">
              <span class="event-day">{{ $t('actualite.event3Day') }}</span>
              <span class="event-month">{{ $t('actualite.event3Month') }}</span>
            </div>
            <div class="event-info">
              <h5>{{ $t('actualite.event3Title') }}</h5>
              <p><i class="fa fa-map-marker-alt"></i> {{ $t('actualite.event3Place') }}</p>
            </div>
          </div>
        </div>
        <a href="#" class="events-cta">{{ $t('actualite.seeAgenda') }} <span>→</span></a>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="newsletter-section" data-aos="fade-up">
    <div class="newsletter-inner container">
      <div class="nl-icon">✦</div>
      <h2 class="nl-title">{{ $t('actualite.nlTitle') }}</h2>
      <p class="nl-desc">{{ $t('actualite.nlDesc') }}</p>
      <form class="nl-form" @submit.prevent>
        <input type="email" class="nl-input" :placeholder="$t('actualite.nlPlaceholder')"/>
        <button type="submit" class="nl-btn">{{ $t('actualite.nlBtn') }}</button>
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
