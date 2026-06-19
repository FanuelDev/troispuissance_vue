<template>
  <div class="banner home-banner">
    <div class="home-banner-overlay">
      <div class="home-tagline" data-aos="fade-up">{{ $t('home.heroTagline') }}</div>
      <h1 class="home-banner-title" data-aos="fade-up" data-aos-delay="100">{{ $t('home.hero') }}</h1>
      <p class="home-banner-sub" data-aos="fade-up" data-aos-delay="200">{{ $t('home.heroSub') }}</p>
      <button class="home-banner-btn" data-aos="fade-up" data-aos-delay="300">
        {{ $t('home.readMore') }}
        <span class="home-btn-arrow">→</span>
      </button>
    </div>
  </div>

  <section class="top container">
    <div class="row">
      <div class="col-md-6 p-4" data-aos="fade-up">
        <div class="extra">
          <img src="@/assets/images/use/1.jpg" class="img img-fluid" alt="" />
          <div class="brd"></div>
        </div>
      </div>
      <div class="col-md-6 p-4" data-aos="fade-up" data-aos-duration="1500">
        <div class="extra1">
          <img src="@/assets/images/use/2.jpg" class="img img-fluid" alt="" />
          <div class="brd"></div>
        </div>
        <div class="top">
          <h1 class="title text-primary h1 pt-5" data-aos="fade-up" data-aos-duration="2000">
            {{ $t('home.welcome') }}
          </h1>
          <p class="p text-justify" data-aos="fade-up" data-aos-duration="2500">
            {{ $t('home.welcomeText') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-5 bg-light">
    <div class="container py-5">
      <div class="col-md-12">
        <Carousel
          :items-to-show="3"
          :wrap-around="true"
          :autoplay="3000"
          :pause-autoplay-on-hover="true"
          :breakpoints="{
            0: { itemsToShow: 1 },
            768: { itemsToShow: 2 },
            1200: { itemsToShow: 3 }
          }"
          class="my-carousel"
        >
          <Slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="@/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title text-justify mt-4">
                Lorem ipsum dolor sit amet consectetur adipisic <br />
                elit. Repellendus nobis, perspiciatis asperiores <br />
                quibusdam officiis aperiam recusandae, autem <br />
                quaerat tempore laborum, totam porro ipsum <br />
                blanditiis nam tenetur minus!
              </h5>
            </div>
          </Slide>
          <Slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="@/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title text-justify mt-4">
                Lorem ipsum dolor sit amet consectetur adipisic <br />
                elit. Repellendus nobis, perspiciatis asperiores <br />
                quibusdam officiis aperiam recusandae, autem <br />
                quaerat tempore laborum, totam porro ipsum <br />
                blanditiis nam tenetur minus!
              </h5>
            </div>
          </Slide>
          <Slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="@/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title text-justify mt-4">
                Lorem ipsum dolor sit amet consectetur adipisic <br />
                elit. Repellendus nobis, perspiciatis asperiores <br />
                quibusdam officiis aperiam recusandae, autem <br />
                quaerat tempore laborum, totam porro ipsum <br />
                blanditiis nam tenetur minus!
              </h5>
            </div>
          </Slide>
          <Slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="@/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title text-justify mt-4">
                Lorem ipsum dolor sit amet consectetur adipisic <br />
                elit. Repellendus nobis, perspiciatis asperiores <br />
                quibusdam officiis aperiam recusandae, autem <br />
                quaerat tempore laborum, totam porro ipsum <br />
                blanditiis nam tenetur minus!
              </h5>
            </div>
          </Slide>
          <Slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="@/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title text-justify mt-4">
                Lorem ipsum dolor sit amet consectetur adipisic <br />
                elit. Repellendus nobis, perspiciatis asperiores <br />
                quibusdam officiis aperiam recusandae, autem <br />
                quaerat tempore laborum, totam porro ipsum <br />
                blanditiis nam tenetur minus!
              </h5>
            </div>
          </Slide>
          <Slide>
            <div class="p-4 mx-5" data-aos="fade-up">
              <img src="@/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
              <h5 class="italic text-primary title text-justify mt-4">
                Lorem ipsum dolor sit amet consectetur adipisic <br />
                elit. Repellendus nobis, perspiciatis asperiores <br />
                quibusdam officiis aperiam recusandae, autem <br />
                quaerat tempore laborum, totam porro ipsum <br />
                blanditiis nam tenetur minus!
              </h5>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
        <!--        <swiper-->
        <!--          ref="swiperRef"-->
        <!--          :slides-per-view="3"-->
        <!--          :loop="true"-->
        <!--          navigation-->
        <!--          pagination-->
        <!--          :autoplay="{ delay: 3000 }"-->
        <!--          class="mySwiper"-->
        <!--        >-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--          <swiper-slide>-->
        <!--            <div class="p-4 mx-5" data-aos="fade-up">-->
        <!--              <img src="@/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
        <!--              <h5 class="italic text-primary title text-justify mt-4">-->
        <!--                Lorem ipsum dolor sit amet consectetur adipisic <br />-->
        <!--                elit. Repellendus nobis, perspiciatis asperiores <br />-->
        <!--                quibusdam officiis aperiam recusandae, autem <br />-->
        <!--                quaerat tempore laborum, totam porro ipsum <br />-->
        <!--                blanditiis nam tenetur minus!-->
        <!--              </h5>-->
        <!--            </div>-->
        <!--          </swiper-slide>-->
        <!--        </swiper>-->
      </div>
    </div>
  </section>

  <section class="top container">
    <div class="row align-items-end">
      <div class="col-md-6" data-aos="fade-up">
        <img src="@/assets/images/use/3.jpg" class="img-fluid img-boutique" alt="" />
      </div>
      <div class="col-md-5">
        <div class="py-5 w-half">
          <h1 class="text-primary title h1" data-aos="fade-up" data-aos-duration="1200">
            {{ $t('home.boutique') }}
          </h1>
          <p class="text-justify p" data-aos="fade-up" data-aos-duration="1500">
            {{ $t('home.boutiqueText') }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="top"></div>
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
/* ═══ HOME BANNER OVERLAY ═══ */
.home-banner {
  position: relative;
}
.home-banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15,5,8,0.45) 0%, rgba(40,8,15,0.72) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
.home-tagline {
  font-size: 12px;
  letter-spacing: 6px;
  color: #C9A84C;
  text-transform: uppercase;
  margin-bottom: 18px;
  font-family: 'Lato', sans-serif;
}
.home-banner-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(42px, 6vw, 80px);
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0 0 16px;
  line-height: 1.15;
}
.home-banner-sub {
  color: rgba(255,255,255,0.75);
  font-size: 17px;
  font-style: italic;
  letter-spacing: 0.5px;
  margin: 0 0 36px;
  max-width: 560px;
}
.home-banner-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 1px solid rgba(201,168,76,0.7);
  color: #C9A84C;
  padding: 14px 36px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}
.home-banner-btn:hover {
  background: #C9A84C;
  color: #fff;
  border-color: #C9A84C;
}
.home-btn-arrow { font-size: 15px; transition: transform 0.2s; }
.home-banner-btn:hover .home-btn-arrow { transform: translateX(4px); }

.carousel__icon {
  display: none;
}

.carousel__prev,
.carousel__next {
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: absolute;
}

.carousel__prev {
  left: -35px;
}

.carousel__next {
  right: -35px;
}

/* Chevron commun */
.carousel__prev::before,
.carousel__next::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-right: 3px solid #8b4a4a; /* couleur du chevron */
  border-bottom: 3px solid #8b4a4a;
  top: 50%;
  left: 50%;
  transform-origin: center;
}

/* Flèche droite  > */
.carousel__next::before {
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* Flèche gauche  < */
.carousel__prev::before {
  transform: translate(-50%, -50%) rotate(135deg);
}

@media (max-width: 768px) {
  .carousel__prev,
  .carousel__next {
    width: 30px;
    height: 30px;
  }
}

</style>