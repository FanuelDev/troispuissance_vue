<template>
  <div class="banner">
    <div class="text-center">
      <h3 class="title fw-900 head text-white text-center" data-aos="fade-up">
        Explorez <br />
        l'univers infini du vin
      </h3>
      <button class="btn btn-primary btn-lg mt-4" data-aos="fade-up" data-aos-duration="1500">
        Lire plus
      </button>
    </div>
  </div>

  <section class="top container">
    <div class="row">
      <div class="col-md-6 p-4" data-aos="fade-up">
        <div class="extra">
          <img src="/src/assets/images/use/1.jpg" class="img img-fluid" alt="" />
          <div class="brd"></div>
        </div>
      </div>
      <div class="col-md-6 p-4" data-aos="fade-up" data-aos-duration="1500">
        <div class="extra1">
          <img src="/src/assets/images/use/2.jpg" class="img img-fluid" alt="" />
          <div class="brd"></div>
        </div>
        <div class="top">
          <h1 class="title text-primary h1 pt-5" data-aos="fade-up" data-aos-duration="2000">
            BIENVENUE CHEZ <br />
            TROIS PUISSANCE
          </h1>
          <p class="p text-justify" data-aos="fade-up" data-aos-duration="2500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque eum accusamus aliquid
            voluptates? Sint ab deserunt autem omnis, tenetur accusantium animi labore, enim. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
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
              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
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
              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
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
              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
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
              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />
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
              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />
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
              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />
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
        <!--              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/1.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/2.jpg" class="img-fluid" alt="" />-->
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
        <!--              <img src="/src/assets/images/carousel/3.jpg" class="img-fluid" alt="" />-->
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
        <img src="/src/assets/images/use/3.jpg" class="img-fluid img-boutique" alt="" />
      </div>
      <div class="col-md-5">
        <div class="py-5 w-half">
          <h1 class="text-primary title h1" data-aos="fade-up" data-aos-duration="1200">
            NOTRE <br />
            BOUTIQUE
          </h1>
          <p class="text-justify p" data-aos="fade-up" data-aos-duration="1500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam provident
            consequuntur quo placeat. Praesentium ullam quam aliquid obcaecati asperiores
            dignissimos, similique autem. Voluptates optio temporibus corrupti sed inventore atque
            aspernatur dolore, debitis consequuntur rerum sequi similique non id at quod nesciunt
            iusto repudiandae. Culpa, odio!
          </p>
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