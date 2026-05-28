<template>
  <div class="banner1"></div>

  <!-- HERO SECTION -->
  <section class="section hero mt-5" data-aos="fade-up">
    <div class="container text-center">
      <img alt="Trois Puissances" src="@/assets/images/1.jpg" class="mb-5 hero-full-img">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="hero-card" style="position: relative; margin-top: -130px">
            <div class="hero-card-ornament">✦</div>
            <h1 class="title text-white head fw-bold" style="text-transform: uppercase">Trois Puissances</h1>
            <p class="col-md-8 mx-auto text-white hero-lead">
              L'Art de Valoriser les Grands Vins sur les Marchés Africains
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="container col-md-12 mt-5 mx-auto text-center about-intro" data-aos="fade-up">
    <div class="intro-wrap">
      <div class="gold-eyebrow">Notre Mission</div>
      <p class="intro-text">
        Depuis ses débuts, Trois Puissances s'est donné une mission claire : offrir aux domaines,
        maisons et négociants une passerelle privilégiée vers les marchés africains, là où la
        culture du vin gagne chaque année en raffinement et en exigence.
      </p>
    </div>
  </section>

  <!-- STORY — APPROCHE & RÔLE -->
  <section class="section my-5" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <div class="story-card">
            <img alt="" src="@/assets/images/2.jpg" class="img-fluid story-img">
            <div class="story-body bg-primary text-center">
              <h2 class="title fw-bold text-white">Notre approche</h2>
              <span class="text-light story-span">
                Inspirée des plus belles maisons de distribution, conjugue expertise
                stratégique, sens du détail et mise en valeur des terroirs.
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <div class="story-card">
            <img alt="" src="@/assets/images/3.jpg" class="img-fluid story-img">
            <div class="story-body bg-primary text-center">
              <h2 class="title fw-bold text-white">Notre rôle</h2>
              <span class="text-light story-span">
                Révéler votre singularité, sublimer votre image, structurer votre présence.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- EXPERTISES -->
  <section class="section soft bg-light py-5" data-aos="fade-up">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-3">
          <div class="card card-premium p-4 h-100 text-center">
            <div class="d-flex justify-content-center">
              <img alt="" src="@/assets/images/analyse.png" class="img-fluid w-25">
            </div>
            <h4 class="fw-bold title text-primary mt-4">Analyses de marché<br>pointues</h4>
            <span class="mt-2 text-justify expertise-text">Comprendre les dynamiques locales, anticiper la demande, identifier les marchés à fort potentiel : nous vous apportons une vision claire, guidée par l'observation des tendances premium qui dominent aujourd'hui en Afrique.</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-premium p-4 h-100 text-center">
            <div class="d-flex justify-content-center">
              <img alt="" src="@/assets/images/Importation.png" class="img-fluid w-25">
            </div>
            <h4 class="fw-bold title text-primary mt-4">Positionnement & image<br>de marque</h4>
            <span class="text-justify expertise-text">Comme pour une cuvée que l'on élève et affine, nous travaillons votre identité pour qu'elle trouve un écho naturel auprès des amateurs africains : élégance, cohérence, précision.</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-premium p-4 h-100 text-center">
            <div class="d-flex justify-content-center">
              <img alt="" :src="imgDistribution" class="img-fluid w-25">
            </div>
            <h4 class="fw-bold title text-primary mt-4">Réseaux d'importation<br>& distribution</h4>
            <span class="text-justify expertise-text">Nous vous ouvrons les portes des réseaux les plus sérieux, du Nigéria à la Côte d'Ivoire, du Ghana au Kenya : des partenaires fiables, engagés, à la recherche de vins ayant une histoire, un style, une signature.</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-premium p-4 h-100 text-center">
            <div class="d-flex justify-content-center">
              <img alt="" src="@/assets/images/Event.png" class="img-fluid w-25">
            </div>
            <h4 class="fw-bold title text-primary mt-4">Événements & expériences<br>exclusives</h4>
            <span class="text-justify expertise-text">Dégustations confidentielles, présentations privées à des acheteurs triés sur le volet, événements œnologiques de prestige : nous créons des moments où votre vin s'exprime pleinement.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- POURQUOI NOUS — REDESIGN ÉLÉGANT -->
  <section class="section why-section" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-12 mt-5 mb-4">
          <div class="why-header">
            <div class="gold-eyebrow">Nos engagements</div>
            <h2 class="why-title">Pourquoi choisir Trois Puissances ?</h2>
            <div class="why-title-line"></div>
          </div>
        </div>

        <div class="col-md-6" data-aos="fade-right">
          <div class="why-img-frame">
            <img alt="" :src="imgWhy" class="img-fluid why-img">
            <div class="why-img-border"></div>
          </div>
        </div>

        <div class="col-md-6" data-aos="fade-left">
          <!-- LISTE REDESIGNÉE EN ATOUTS ÉLÉGANTS -->
          <div class="why-features">

            <div class="why-feature-item">
              <div class="why-feature-icon">
                <i class="fa fa-chart-line"></i>
              </div>
              <div class="why-feature-text">
                <h5>Lecture fine des marchés africains</h5>
                <p>Une connaissance approfondie des attentes d'un marché en pleine montée en gamme, guidée par une veille permanente et une présence terrain inégalée.</p>
              </div>
            </div>

            <div class="why-feature-item">
              <div class="why-feature-icon">
                <i class="fa fa-handshake"></i>
              </div>
              <div class="why-feature-text">
                <h5>Accès à des réseaux d'importateurs exigeants</h5>
                <p>Un accès direct à des importateurs fidèles et qualifiés, sélectionnés pour leur engagement envers l'excellence et leur ancrage local.</p>
              </div>
            </div>

            <div class="why-feature-item">
              <div class="why-feature-icon">
                <i class="fa fa-compass"></i>
              </div>
              <div class="why-feature-text">
                <h5>Accompagnement discret et structuré</h5>
                <p>Une démarche discrète, rigoureusement structurée et orientée vers des résultats mesurables — sans compromis sur l'image de votre maison.</p>
              </div>
            </div>

            <div class="why-feature-item">
              <div class="why-feature-icon">
                <i class="fa fa-award"></i>
              </div>
              <div class="why-feature-text">
                <h5>Honorer le savoir-faire des producteurs</h5>
                <p>Une démarche qui respecte profondément le savoir-faire des producteurs et les attentes des connaisseurs africains les plus exigeants.</p>
              </div>
            </div>

            <div class="why-feature-item">
              <div class="why-feature-icon">
                <i class="fa fa-globe-africa"></i>
              </div>
              <div class="why-feature-text">
                <h5>Rayonner dans un écosystème en évolution</h5>
                <p>Une vraie capacité à faire briller une marque dans un environnement africain en constante évolution, porté par une nouvelle génération de passionnés.</p>
              </div>
            </div>

            <div class="why-feature-item why-feature-highlight">
              <div class="why-feature-icon why-feature-icon-gold">
                <i class="fa fa-star"></i>
              </div>
              <div class="why-feature-text">
                <h5>Un accompagnement sur mesure, sans compromis</h5>
                <p>
                  Avec Trois Puissances, chaque producteur bénéficie d'un accompagnement
                  taillé sur mesure, pensé pour valoriser l'authenticité des terroirs,
                  la précision des assemblages et l'émotion que procure un grand vin.
                  Nous créons des ponts solides entre les domaines de caractère et les
                  marchés africains les plus dynamiques.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ART DES INSTANTS -->
  <section class="section bg-light mt-5 py-4" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="gold-eyebrow">Notre philosophie événementielle</div>
          <h2 class="fw-bold mb-4 about-section-title">L'Art des Instants d'Exception</h2>
          <p class="about-p">Chez Trois Puissances, chaque événement est conçu comme une œuvre éphémère : une rencontre rare entre grands vins, haute gastronomie et lieux d'exception.</p>
          <p class="about-p">Nos Master Classes ne se contentent pas de présenter des cuvées ; elles en révèlent la profondeur, la personnalité, l'histoire.</p>
          <p class="about-p">Un moment suspendu, pensé pour un public averti et exigeant.</p>
        </div>
        <div class="col-md-6">
          <img alt="" :src="imgArt" class="img-fluid about-right-img">
        </div>
      </div>
    </div>
  </section>

  <!-- NOS SIGNATURES -->
  <section class="section soft" data-aos="fade-up">
    <div class="container">
      <div class="row g-5 mt-4">
        <div class="col-md-12 mb-2">
          <div class="gold-eyebrow">Notre catalogue</div>
          <h2 class="fw-bold about-section-title">Nos Signatures</h2>
        </div>
        <div class="col-md-4">
          <div class="sig-card">
            <img alt="" :src="imgCuvees" class="sig-img img-fluid">
            <div class="sig-body">
              <div class="sig-num">01</div>
              <h5 class="sig-title">Cuvées d'exception, sélectionnées avec exigence</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sig-card">
            <img alt="" :src="imgExperts" class="sig-img img-fluid">
            <div class="sig-body">
              <div class="sig-num">02</div>
              <h5 class="sig-title">Experts du vin dédiés à votre événement</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sig-card">
            <img alt="" :src="imgDegus" class="sig-img img-fluid">
            <div class="sig-body">
              <div class="sig-num">03</div>
              <h5 class="sig-title">Dégustations privées, élégantes et immersives</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sig-card">
            <img alt="" :src="imgAccords" class="sig-img img-fluid">
            <div class="sig-body">
              <div class="sig-num">04</div>
              <h5 class="sig-title">Accords mets-vins sur mesure, inspirés par de grands chefs</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sig-card">
            <img alt="" :src="imgLieux" class="sig-img img-fluid">
            <div class="sig-body">
              <div class="sig-num">05</div>
              <h5 class="sig-title">Lieux de prestige, soigneusement choisis pour sublimer l'expérience</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION FINALE -->
  <section class="section bg-light mt-5" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img alt="" :src="imgChaque" class="img-fluid about-fin-img">
        </div>
        <div class="col-md-6 ps-5">
          <p class="about-p">
            Chaque rendez-vous associe la précision d'une sélection œnologique à la créativité
            culinaire, pour donner naissance à une expérience où chaque détail a son importance :
            la lumière, le rythme, les arômes, l'histoire du vin, la délicatesse du service.
          </p>
          <p class="about-p">
            De dîners confidentiels à de grandes rencontres œnologiques, nos événements offrent
            aux maisons et producteurs une scène parfaitement maîtrisée pour dialoguer avec un
            public privilégié, sensible à l'excellence et à la distinction.
          </p>
          <div class="about-signature">
            <div class="about-sig-line"></div>
            <h3 class="text-primary fw-bold about-sig-text">
              Une signature Trois Puissances :<br>élégance, discrétion, profondeur.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import imgWhy from "@/assets/images/1/Pourquoi choisir Trois Puissance.jpg.jpeg"
import imgArt from "@/assets/images/1/L’Art des Instants d’Exception.jpg.jpeg"
import imgCuvees from "@/assets/images/1/Cuvées d’exception, sélectionnées avec exigences.jpg.jpeg"
import imgExperts from "@/assets/images/1/Experts du vin dédiés à votre événement.jpg.jpeg"
import imgDegus from "@/assets/images/1/Dégustations privées, élégantes et immersives.jpg.jpeg"
import imgAccords from "@/assets/images/1/Accords mets-vins sur mesure, inspirés par de grands chefs.jpg.jpeg"
import imgLieux from "@/assets/images/1/Lieux de prestige, soigneusement choisis pour sublimer l’expérience.jpg.jpeg"
import imgChaque from "@/assets/images/1/Chaque rendez-vous associe la précision d’une sélection œnologique à la créativité culinaire.jpg.jpeg"
import imgDistribution from "@/assets/images/Distribution & importation.png"
</script>

<style scoped>
/* BASE */
.gold-eyebrow {
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #C9A84C;
  margin-bottom: 12px;
  display: block;
}

/* HERO */
.hero-full-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 0 15%;
  display: block;
}
.hero-card {
  background: #8d4e56;
  padding: 40px 32px;
  text-align: center;
}
.hero-card-ornament {
  font-size: 20px;
  color: #C9A84C;
  letter-spacing: 6px;
  margin-bottom: 12px;
}
.hero-lead {
  font-size: 17px;
  font-style: italic;
  line-height: 1.6;
}
.head {
  font-size: clamp(32px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: 2px;
}

/* INTRO */
.about-intro { padding: 60px 0 40px; }
.intro-wrap { max-width: 680px; margin: 0 auto; text-align: center; }
.intro-text {
  font-size: 18px;
  color: #555;
  line-height: 1.85;
}

/* STORY CARDS */
.story-card { }
.story-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
}
.story-body {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 10px;
}
.story-span {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255,255,255,0.82);
}

/* EXPERTISE CARDS */
.card { border-radius: 0 !important; }
.card-premium {
  background: #fff;
  padding: 30px 26px;
  border: 1px solid #eee !important;
  transition: .25s ease;
}
.card-premium:hover { box-shadow: 0 8px 32px rgba(107,26,39,0.08); border-color: #ddd !important; }
.expertise-text { font-size: 14px; color: #666; line-height: 1.7; }

/* WHY SECTION */
.why-section { padding: 60px 0 80px; background: #fff; }
.why-header { margin-bottom: 8px; }
.why-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(26px, 3vw, 38px);
  color: #1C1C1C;
  font-weight: 700;
  margin-bottom: 14px;
}
.why-title-line {
  width: 64px; height: 2px;
  background: linear-gradient(to right, #C9A84C, #E8D5A3);
  margin-bottom: 0;
}
.why-img-frame {
  position: relative;
  margin-right: 24px;
}
.why-img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  display: block;
}
.why-img-border {
  position: absolute;
  top: 16px; left: 16px; right: -16px; bottom: -16px;
  border: 1px solid #C9A84C;
  z-index: -1;
}

/* WHY FEATURES — redesign élégant */
.why-features {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.why-feature-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #f0e8e4;
  align-items: flex-start;
  transition: background 0.2s;
}
.why-feature-item:last-child { border-bottom: none; }
.why-feature-item:hover { background: #fdf9f7; padding-left: 8px; border-radius: 2px; }

.why-feature-highlight {
  background: linear-gradient(135deg, #fdf5ec, #fff);
  border: 1px solid #e8d5a3 !important;
  border-radius: 2px;
  padding: 20px;
  margin-top: 8px;
}
.why-feature-highlight:hover { background: linear-gradient(135deg, #faebd7, #fff); padding-left: 20px; }

.why-feature-icon {
  width: 44px;
  height: 44px;
  background: #6B1A27;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
  transition: background 0.2s;
}
.why-feature-item:hover .why-feature-icon { background: #3D0D17; }
.why-feature-icon-gold { background: linear-gradient(135deg, #C9A84C, #a8893e) !important; }
.why-feature-item:hover .why-feature-icon-gold { background: linear-gradient(135deg, #b8943c, #8a6d2e) !important; }

.why-feature-text h5 {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  color: #1C1C1C;
  font-weight: 700;
  margin-bottom: 4px;
  line-height: 1.3;
}
.why-feature-text p {
  font-size: 13px;
  color: #777;
  line-height: 1.7;
  margin: 0;
}

/* ABOUT GENERIC */
.about-p { font-size: 16px; color: #555; line-height: 1.85; margin-bottom: 16px; }
.about-section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(22px, 2.5vw, 32px);
  color: #1C1C1C;
  margin-bottom: 20px;
}
.about-right-img { width: 100%; height: 420px; object-fit: cover; }
.about-fin-img { width: 100%; height: 480px; object-fit: cover; }
.about-signature { margin-top: 28px; }
.about-sig-line { width: 48px; height: 2px; background: linear-gradient(to right, #C9A84C, #E8D5A3); margin-bottom: 16px; }
.about-sig-text { font-size: clamp(16px, 2vw, 22px); line-height: 1.4; }

/* SIGNATURE CARDS */
.sig-card { overflow: hidden; border: 1px solid #ede5e0; transition: box-shadow 0.3s; }
.sig-card:hover { box-shadow: 0 10px 30px rgba(107,26,39,0.1); }
.sig-img { width: 100%; height: 220px; object-fit: cover; display: block; transition: transform 0.5s; }
.sig-card:hover .sig-img { transform: scale(1.04); }
.sig-body { padding: 18px 20px; display: flex; gap: 12px; align-items: flex-start; background: #fff; }
.sig-num {
  font-family: 'Playfair Display', serif;
  font-size: 28px; color: #e8ddd5; line-height: 1; font-weight: 700; flex-shrink: 0;
}
.sig-title { font-size: 14px; color: #1C1C1C; line-height: 1.4; margin: 0; font-weight: 600; }

.section { padding: 40px 0; }
.soft { background: #ffffff; }
</style>
