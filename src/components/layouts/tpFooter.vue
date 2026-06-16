<template>
  <footer class="">
    <div class="d-flex p-3 justify-content-end bg-primary">
      <div class="container">
        <div class="row align-items-end py-5">
          <div class="col-md-7 px-5">
            <div class="mt-5">
<!--              <h2 class="text-white title">News Letters</h2>-->
            </div>
            <div class="">
              <p class="text-white" style="font-size: 20px !important">
                {{ $t('footer.newsletter') }}
              </p>
            </div>
          </div>
          <div class="col-md-5 px-5">
            <div class="pb-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-lg input mx-4 py-4"
                  :placeholder="$t('footer.emailPlaceholder')"
                />
                <button class="btn btn-light px-4">{{ $t('footer.send') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#top" class="btn btn-light btn-tran">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
      </a>
    </div>
    <div class="bg-primar border-white">
      <div class="container">
        <div class="row py-5">
          <div class="col-md-3 px-4 py-4">
            <div>
              <img src="/src/assets/images/logo/1.png" class="img-logo img-fluid" alt="" />
            </div>
            <div></div>
          </div>
          <div class="col-md-3 px-5">
            <div class="">
              <h4 class="text-primary title fw-bold">{{ $t('footer.quickLinks') }}</h4>
              <!-- <img src="/src/assets/images/logo/logo.png" class="img-logo img-fluid" alt="" /> -->
            </div>
            <div>
              <!-- <p class="text-white my-4 title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odio, vel porro minima
                incidunt explicabo illum debitis eos provident ab dicta, alias reprehenderit, harum
                totam praesentium officia. Eaque, hic ea!
              </p> -->
              <ul class="my-4 ul">
                <li><a href="#">{{ $t('nav.primeurs') }}</a></li>
                <li><a href="#">{{ $t('nav.notes') }}</a></li>
                <li><a href="#">{{ $t('nav.topAfrique') }}</a></li>
                <li><a href="#">{{ $t('nav.explore') }}</a></li>
                <li><a href="#">{{ $t('footer.degus') }}</a></li>
                <!-- <li><a href="#">Club VIP</a></li>
                <li><a href="#">Boutique</a></li>
                <li><a href="#">Actualité</a></li>
                <li><a href="#">Inscription</a></li> -->
              </ul>
            </div>
          </div>
          <div class="col-md-3 px-5">
            <div class="">
              <h4 class="text-primary title fw-bold">{{ $t('footer.usefulLinks') }}</h4>
            </div>
            <div>
              <ul class="my-4 ul">
                <li><a href="#">{{ $t('footer.home') }}</a></li>
                <li><a href="#">{{ $t('footer.contact') }}</a></li>
                <li><a href="#">{{ $t('footer.about') }}</a></li>
                <li><a href="#">{{ $t('footer.legal') }}</a></li>
                <li><a href="#">{{ $t('footer.faq') }}</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 px-5">
            <div class="mb-4">
              <h4 class="text-primary title fw-bold">{{ $t('footer.contacts') }}</h4>
            </div>
            <ul class="my-5 ul">
              <li>
                <a href="#"><i class="fa fa-phone mr-2" aria-hidden="true"></i> +228 99 00 99 00</a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-envelope mr-2" aria-hidden="true"></i>
                  contact@troispuissances.com</a
                >
              </li>
            </ul>
            <div class="">
              <!-- <div>
                <img
                  src="/src/assets/images/logo/logo-wite.png"
                  class="img-fluid img-logo1"
                  alt=""
                />
              </div> -->
              <div style="margin-left: -15px">
                <a href="#" class="a1"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a href="#" class="a1"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="#" class="a1"><i class="fab fa-x-twitter" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container">
        <div class="row py-4">
          <div class="d-flex justify-content-between">
            <small class="" style="font-size: 13px">{{ $t('footer.rights') }}</small>
            <small class="" style="font-size: 13px">{{ $t('footer.poweredBy') }}</small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
