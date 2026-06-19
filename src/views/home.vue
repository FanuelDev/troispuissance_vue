<template>
  <!-- ══════════════════════════════════════
       HERO BANNER
  ══════════════════════════════════════ -->
  <div class="banner home-banner">
    <div class="home-banner-overlay">
      <div class="home-tagline" data-aos="fade-up">{{ $t('home.heroTagline') }}</div>
      <h1 class="home-banner-title" data-aos="fade-up" data-aos-delay="120">{{ $t('home.hero') }}</h1>
      <p class="home-banner-sub" data-aos="fade-up" data-aos-delay="240">{{ $t('home.heroSub') }}</p>
      <div class="home-banner-actions" data-aos="fade-up" data-aos-delay="360">
        <button class="home-banner-btn">
          {{ $t('home.readMore') }} <span class="home-btn-arrow">→</span>
        </button>
      </div>
      <div class="home-scroll-hint" data-aos="fade-up" data-aos-delay="500">
        <span class="scroll-line"></span>
        <span class="scroll-label">{{ $t('home.scrollHint') }}</span>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       CHIFFRES CLÉS
  ══════════════════════════════════════ -->
  <section class="stats-strip" data-aos="fade-up">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-num">{{ $t('home.stat1Num') }}</div>
          <div class="stat-label">{{ $t('home.stat1Label') }}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">{{ $t('home.stat2Num') }}</div>
          <div class="stat-label">{{ $t('home.stat2Label') }}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">{{ $t('home.stat3Num') }}</div>
          <div class="stat-label">{{ $t('home.stat3Label') }}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">{{ $t('home.stat4Num') }}</div>
          <div class="stat-label">{{ $t('home.stat4Label') }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       IDENTITÉ — BIENVENUE
  ══════════════════════════════════════ -->
  <section class="identity-section">
    <div class="container">
      <div class="identity-inner">
        <div class="identity-images" data-aos="tp-reveal" data-aos-delay="100">
          <div class="img-stack">
            <img src="@/assets/images/use/1.jpg" class="img-stack-back" alt="" />
            <img src="@/assets/images/use/2.jpg" class="img-stack-front" alt="" />
            <div class="img-stack-badge">
              <span class="badge-year">2014</span>
              <span class="badge-sub">Fondé en</span>
            </div>
          </div>
        </div>
        <div class="identity-text" data-aos="tp-right" data-aos-delay="200">
          <div class="gold-eyebrow">{{ $t('home.welcomeLabel') }}</div>
          <h2 class="identity-title">{{ $t('home.welcome') }}</h2>
          <div class="gold-divider"></div>
          <p class="identity-body">{{ $t('home.welcomeText') }}</p>
          <p class="identity-body">{{ $t('home.welcomeText2') }}</p>
          <a href="/about" class="identity-btn">{{ $t('home.welcomeBtn') }} →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       NOTRE UNIVERS — 3 CARTES
  ══════════════════════════════════════ -->
  <section class="universe-section" data-aos="fade-up">
    <div class="container">
      <div class="section-head text-center mb-5">
        <div class="gold-eyebrow mx-auto">{{ $t('home.universeLabel') }}</div>
        <h2 class="universe-title">{{ $t('home.universeTitle') }}</h2>
        <div class="gold-sep mx-auto"></div>
      </div>
      <div class="universe-grid">
        <!-- Primeurs -->
        <div class="universe-card" data-aos="fade-up" data-aos-delay="0">
          <div class="ucard-img-wrap">
            <img src="@/assets/images/use/p1.jpg" class="ucard-img" alt="Primeurs" />
            <div class="ucard-tag">{{ $t('home.card1Tag') }}</div>
          </div>
          <div class="ucard-body">
            <h3 class="ucard-title">{{ $t('home.card1Title') }}</h3>
            <p class="ucard-text">{{ $t('home.card1Text') }}</p>
            <a href="/primeur" class="ucard-btn">{{ $t('home.card1Btn') }} →</a>
          </div>
        </div>
        <!-- Top Afrique -->
        <div class="universe-card universe-card-featured" data-aos="fade-up" data-aos-delay="120">
          <div class="ucard-img-wrap">
            <img src="@/assets/images/use/5.jpg" class="ucard-img" alt="Top Afrique" />
            <div class="ucard-tag">{{ $t('home.card2Tag') }}</div>
          </div>
          <div class="ucard-body">
            <h3 class="ucard-title">{{ $t('home.card2Title') }}</h3>
            <p class="ucard-text">{{ $t('home.card2Text') }}</p>
            <a href="/top-afrique" class="ucard-btn">{{ $t('home.card2Btn') }} →</a>
          </div>
        </div>
        <!-- Club VIP -->
        <div class="universe-card" data-aos="fade-up" data-aos-delay="240">
          <div class="ucard-img-wrap">
            <img src="@/assets/images/use/8.jpg" class="ucard-img" alt="Club VIP" />
            <div class="ucard-tag">{{ $t('home.card3Tag') }}</div>
          </div>
          <div class="ucard-body">
            <h3 class="ucard-title">{{ $t('home.card3Title') }}</h3>
            <p class="ucard-text">{{ $t('home.card3Text') }}</p>
            <a href="/club" class="ucard-btn">{{ $t('home.card3Btn') }} →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       CAROUSEL — SÉLECTIONS
  ══════════════════════════════════════ -->
  <section class="carousel-section bg-cream" data-aos="fade-up">
    <div class="carousel-section-head container">
      <div class="gold-eyebrow">{{ $t('home.carouselLabel') }}</div>
      <h2 class="carousel-section-title">{{ $t('home.carouselTitle') }}</h2>
    </div>
    <div class="container carousel-wrap">
      <Carousel
        :items-to-show="3"
        :wrap-around="true"
        :autoplay="4000"
        :pause-autoplay-on-hover="true"
        :breakpoints="{ 0: { itemsToShow: 1 }, 768: { itemsToShow: 2 }, 1200: { itemsToShow: 3 } }"
        class="my-carousel"
      >
        <Slide>
          <div class="slide-card">
            <div class="slide-img-wrap">
              <img src="@/assets/images/carousel/1.jpg" class="slide-img" alt="" />
            </div>
            <p class="slide-caption italic">{{ $t('home.slide1') }}</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide-card">
            <div class="slide-img-wrap">
              <img src="@/assets/images/carousel/2.jpg" class="slide-img" alt="" />
            </div>
            <p class="slide-caption italic">{{ $t('home.slide2') }}</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide-card">
            <div class="slide-img-wrap">
              <img src="@/assets/images/carousel/3.jpg" class="slide-img" alt="" />
            </div>
            <p class="slide-caption italic">{{ $t('home.slide3') }}</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide-card">
            <div class="slide-img-wrap">
              <img src="@/assets/images/carousel/1.jpg" class="slide-img" alt="" />
            </div>
            <p class="slide-caption italic">{{ $t('home.slide1') }}</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide-card">
            <div class="slide-img-wrap">
              <img src="@/assets/images/carousel/2.jpg" class="slide-img" alt="" />
            </div>
            <p class="slide-caption italic">{{ $t('home.slide2') }}</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide-card">
            <div class="slide-img-wrap">
              <img src="@/assets/images/carousel/3.jpg" class="slide-img" alt="" />
            </div>
            <p class="slide-caption italic">{{ $t('home.slide3') }}</p>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       BOUTIQUE SPLIT
  ══════════════════════════════════════ -->
  <section class="boutique-section">
    <div class="boutique-inner">
      <div class="boutique-img-side" data-aos="tp-reveal">
        <img src="@/assets/images/use/3.jpg" class="boutique-img" alt="" />
        <div class="boutique-img-accent"></div>
      </div>
      <div class="boutique-text-side" data-aos="tp-right" data-aos-delay="150">
        <div class="gold-eyebrow">{{ $t('home.boutiqueLabel') }}</div>
        <h2 class="boutique-title">{{ $t('home.boutique') }}</h2>
        <div class="gold-divider"></div>
        <p class="boutique-body">{{ $t('home.boutiqueText') }}</p>
        <a href="#" class="boutique-btn">{{ $t('home.boutiqueBtn') }} →</a>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       CTA — REJOINDRE LE CERCLE
  ══════════════════════════════════════ -->
  <section class="cta-section" data-aos="fade-up">
    <div class="cta-bg"></div>
    <div class="cta-overlay">
      <div class="container cta-inner">
        <div class="gold-eyebrow cta-eyebrow">{{ $t('home.ctaLabel') }}</div>
        <h2 class="cta-title">{{ $t('home.ctaTitle') }}</h2>
        <p class="cta-text">{{ $t('home.ctaText') }}</p>
        <div class="cta-actions">
          <a href="/club" class="cta-btn-primary">{{ $t('home.ctaBtn') }}</a>
          <a href="/about" class="cta-btn-ghost">{{ $t('home.ctaSecondary') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Slide, Carousel, Pagination, Navigation }
})
</script>

<style lang="css">
/* ════════════════════════════════════
   HERO BANNER
════════════════════════════════════ */
.home-banner { position: relative; }
.home-banner-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(15,5,8,0.55) 0%, rgba(40,8,15,0.80) 100%);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 20px;
}
.home-tagline {
  font-size: 11px; letter-spacing: 6px; color: #C9A84C;
  text-transform: uppercase; margin-bottom: 20px; font-family: 'Lato', sans-serif;
}
.home-banner-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(44px, 6.5vw, 86px);
  color: #fff; font-weight: 400; letter-spacing: 2px;
  margin: 0 0 18px; line-height: 1.12;
}
.home-banner-sub {
  color: rgba(255,255,255,0.72); font-size: 17px; font-style: italic;
  margin: 0 0 40px; max-width: 540px;
}
.home-banner-actions { display: flex; gap: 16px; align-items: center; }
.home-banner-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; border: 1px solid rgba(201,168,76,0.75);
  color: #C9A84C; padding: 14px 40px;
  font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
  font-family: 'Lato', sans-serif; font-weight: 700; cursor: pointer;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}
.home-banner-btn:hover { background: #C9A84C; color: #fff; border-color: #C9A84C; }
.home-btn-arrow { font-size: 15px; transition: transform 0.2s; }
.home-banner-btn:hover .home-btn-arrow { transform: translateX(4px); }
.home-scroll-hint {
  position: absolute; bottom: 36px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
}
.scroll-line {
  width: 1px; height: 48px;
  background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.7));
  animation: scrollPulse 2s ease-in-out infinite;
}
.scroll-label { font-size: 9px; letter-spacing: 3px; color: rgba(201,168,76,0.7); text-transform: uppercase; font-family: 'Lato', sans-serif; }
@keyframes scrollPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }

/* ════════════════════════════════════
   STATS STRIP
════════════════════════════════════ */
.stats-strip {
  background: linear-gradient(135deg, #3D0D17 0%, #6B1A27 100%);
  padding: 40px 0;
}
.stats-grid {
  display: flex; align-items: center; justify-content: center;
  gap: 0; flex-wrap: wrap;
}
.stat-item {
  text-align: center; padding: 16px 48px; flex: 1; min-width: 160px;
}
.stat-num {
  font-family: 'Playfair Display', serif; font-size: 42px;
  color: #C9A84C; font-weight: 400; line-height: 1;
}
.stat-label { font-size: 11px; letter-spacing: 2px; color: rgba(255,255,255,0.65); text-transform: uppercase; margin-top: 8px; font-family: 'Lato', sans-serif; }
.stat-divider { width: 1px; height: 60px; background: rgba(255,255,255,0.15); flex-shrink: 0; }
@media (max-width: 768px) { .stat-divider { display: none; } .stat-item { min-width: 50%; } }

/* ════════════════════════════════════
   IDENTITY
════════════════════════════════════ */
.identity-section { background: #F8F4EF; padding: 100px 0; }
.identity-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.img-stack { position: relative; height: 520px; }
.img-stack-back {
  position: absolute; top: 0; left: 0;
  width: 75%; height: 420px; object-fit: cover; display: block;
}
.img-stack-front {
  position: absolute; bottom: 0; right: 0;
  width: 65%; height: 320px; object-fit: cover;
  border: 6px solid #F8F4EF; display: block;
}
.img-stack-badge {
  position: absolute; bottom: 60px; left: 10px;
  background: linear-gradient(135deg, #6B1A27, #3D0D17);
  color: #fff; padding: 16px 22px; text-align: center;
  box-shadow: 0 8px 24px rgba(107,26,39,0.35);
}
.badge-year { font-family: 'Playfair Display', serif; font-size: 32px; display: block; line-height: 1; }
.badge-sub { font-size: 10px; letter-spacing: 2px; color: #C9A84C; text-transform: uppercase; font-family: 'Lato', sans-serif; }
.gold-eyebrow {
  font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
  color: #C9A84C; margin-bottom: 16px; font-family: 'Lato', sans-serif;
}
.identity-title {
  font-family: 'Playfair Display', serif; font-size: clamp(22px,3vw,36px);
  color: #1C1C1C; font-weight: 400; margin-bottom: 20px; line-height: 1.25;
}
.gold-divider { width: 60px; height: 2px; background: linear-gradient(to right,#C9A84C,#E8D5A3); margin-bottom: 28px; }
.identity-body { font-size: 16px; color: #666; line-height: 1.9; margin-bottom: 16px; }
.identity-btn {
  display: inline-block; margin-top: 12px;
  font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
  color: #6B1A27; font-weight: 700; font-family: 'Lato', sans-serif;
  text-decoration: none; border-bottom: 1px solid #6B1A27;
  padding-bottom: 3px; transition: color 0.2s, border-color 0.2s;
}
.identity-btn:hover { color: #C9A84C; border-color: #C9A84C; }
@media (max-width: 768px) { .identity-inner { grid-template-columns: 1fr; gap: 40px; } .img-stack { height: 360px; } }

/* ════════════════════════════════════
   UNIVERSE CARDS
════════════════════════════════════ */
.universe-section { background: #fff; padding: 100px 0; }
.universe-title {
  font-family: 'Playfair Display', serif; font-size: clamp(26px,3vw,40px);
  color: #1C1C1C; font-weight: 400; margin-bottom: 16px;
}
.gold-sep { width: 50px; height: 2px; background: linear-gradient(to right,#C9A84C,#E8D5A3); margin-top: 12px; }
.universe-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
.universe-card {
  background: #fff; border: 1px solid #ede5e0; overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}
.universe-card:hover { box-shadow: 0 16px 48px rgba(107,26,39,0.12); transform: translateY(-6px); }
.universe-card-featured { border-color: #C9A84C; }
.ucard-img-wrap { position: relative; overflow: hidden; height: 280px; }
.ucard-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; display: block; }
.universe-card:hover .ucard-img { transform: scale(1.06); }
.ucard-tag {
  position: absolute; top: 16px; left: 16px;
  background: linear-gradient(135deg,#6B1A27,#3D0D17);
  color: #C9A84C; font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
  padding: 5px 12px; font-family: 'Lato', sans-serif; font-weight: 700;
}
.ucard-body { padding: 28px 24px 32px; }
.ucard-title {
  font-family: 'Playfair Display', serif; font-size: 22px;
  color: #1C1C1C; font-weight: 400; margin-bottom: 12px;
}
.ucard-text { font-size: 14px; color: #777; line-height: 1.8; margin-bottom: 20px; }
.ucard-btn {
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;
  color: #6B1A27; text-decoration: none; font-family: 'Lato', sans-serif;
  border-bottom: 1px solid #6B1A27; padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.ucard-btn:hover { color: #C9A84C; border-color: #C9A84C; }
@media (max-width: 768px) { .universe-grid { grid-template-columns: 1fr; } }

/* ════════════════════════════════════
   CAROUSEL
════════════════════════════════════ */
.carousel-section { background: #F8F4EF; padding: 80px 0 100px; }
.carousel-section-head { margin-bottom: 48px; }
.carousel-section-title {
  font-family: 'Playfair Display', serif; font-size: clamp(24px,3vw,36px);
  color: #1C1C1C; font-weight: 400; margin-top: 8px;
}
.carousel-wrap { position: relative; padding: 0 40px; }
.slide-card { padding: 0 16px; width: 100%; }
.slide-img-wrap { overflow: hidden; height: 300px; }
.slide-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s; }
.slide-card:hover .slide-img { transform: scale(1.04); }
.slide-caption {
  font-family: 'Playfair Display', serif; font-size: 15px;
  color: #6B1A27; margin-top: 18px; line-height: 1.6; text-align: left;
}
.carousel__icon { display: none; }
.carousel__prev, .carousel__next {
  width: 40px; height: 40px; background: transparent; border: 1px solid #C9A84C;
  position: absolute; top: 50%; transform: translateY(-80%);
  display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s;
}
.carousel__prev:hover, .carousel__next:hover { background: #C9A84C; }
.carousel__prev { left: -5px; }
.carousel__next { right: -5px; }
.carousel__prev::before, .carousel__next::before {
  content: ''; position: absolute; width: 8px; height: 8px;
  border-right: 2px solid #C9A84C; border-bottom: 2px solid #C9A84C; top: 50%; left: 50%; transform-origin: center;
}
.carousel__prev:hover::before, .carousel__next:hover::before { border-color: #fff; }
.carousel__next::before { transform: translate(-70%,-50%) rotate(-45deg); }
.carousel__prev::before { transform: translate(-30%,-50%) rotate(135deg); }
.carousel__pagination { margin-top: 28px; }
.carousel__pagination-button::after { background: #ddd; width: 28px; height: 2px; border-radius: 0; }
.carousel__pagination-button--active::after { background: #C9A84C; }
@media (max-width: 768px) { .carousel__prev, .carousel__next { width: 30px; height: 30px; } }

/* ════════════════════════════════════
   BOUTIQUE SPLIT
════════════════════════════════════ */
.boutique-section { background: #fff; }
.boutique-inner { display: grid; grid-template-columns: 1fr 1fr; min-height: 560px; }
.boutique-img-side { position: relative; overflow: hidden; }
.boutique-img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 480px; transition: transform 0.5s; }
.boutique-img-side:hover .boutique-img { transform: scale(1.04); }
.boutique-img-accent {
  position: absolute; top: 20px; left: 20px; right: 20px; bottom: 20px;
  border: 1px solid rgba(201,168,76,0.3); pointer-events: none;
}
.boutique-text-side {
  background: #F8F4EF; padding: 80px 70px;
  display: flex; flex-direction: column; justify-content: center;
}
.boutique-title {
  font-family: 'Playfair Display', serif; font-size: clamp(22px,2.5vw,36px);
  color: #1C1C1C; font-weight: 400; margin-bottom: 20px;
}
.boutique-body { font-size: 15.5px; color: #666; line-height: 1.9; margin-bottom: 32px; }
.boutique-btn {
  display: inline-block; font-size: 11px; letter-spacing: 2.5px;
  text-transform: uppercase; font-weight: 700; color: #6B1A27;
  text-decoration: none; font-family: 'Lato', sans-serif;
  border-bottom: 1px solid #6B1A27; padding-bottom: 3px; align-self: flex-start;
  transition: color 0.2s, border-color 0.2s;
}
.boutique-btn:hover { color: #C9A84C; border-color: #C9A84C; }
@media (max-width: 768px) { .boutique-inner { grid-template-columns: 1fr; } .boutique-text-side { padding: 48px 32px; } }

/* ════════════════════════════════════
   CTA
════════════════════════════════════ */
.cta-section { position: relative; overflow: hidden; }
.cta-bg {
  position: absolute; inset: 0;
  background-image: url('@/assets/images/use/p2.jpg');
  background-size: cover; background-position: center 40%;
  filter: brightness(0.25);
}
.cta-overlay {
  position: relative; z-index: 1;
  padding: 100px 0; text-align: center;
}
.cta-eyebrow { color: #C9A84C; margin-bottom: 20px; }
.cta-title {
  font-family: 'Playfair Display', serif; font-size: clamp(30px,4vw,52px);
  color: #fff; font-weight: 400; margin-bottom: 20px; line-height: 1.2;
}
.cta-text { font-size: 16px; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto 44px; line-height: 1.8; }
.cta-actions { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
.cta-btn-primary {
  display: inline-block; background: #C9A84C; color: #fff;
  padding: 16px 44px; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 700; font-family: 'Lato', sans-serif; text-decoration: none;
  transition: background 0.3s, transform 0.2s;
}
.cta-btn-primary:hover { background: #b8963e; transform: translateY(-2px); }
.cta-btn-ghost {
  display: inline-block; background: transparent;
  border: 1px solid rgba(255,255,255,0.4); color: rgba(255,255,255,0.8);
  padding: 16px 44px; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 700; font-family: 'Lato', sans-serif; text-decoration: none;
  transition: border-color 0.3s, color 0.3s;
}
.cta-btn-ghost:hover { border-color: #C9A84C; color: #C9A84C; }
</style>
