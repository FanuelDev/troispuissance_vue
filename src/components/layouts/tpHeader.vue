<template>
  <!-- HEADER TOP -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white mt-3">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="/src/assets/images/logo/logo.png" class="img-logo" alt="Logo" />
      </router-link>

      <!-- Toggle mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="topNavbar">
        <ul class="navbar-nav ms-auto align-items-lg-center menu1">
          <li class="nav-item">
            <router-link class="nav-link title" to="">Magazine</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link title" to="actualite">Actualité</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link title" to="about">Qui sommes-nous ?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-primary btn-tran ms-lg-3" to="">EN</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- MENU PRINCIPAL -->
  <nav class="py-2 navbar navbar-expand-lg navbar-dark bg-primary menu2">
    <div class="container">
<!--      <button-->
<!--        class="navbar-toggler"-->
<!--        type="button"-->
<!--        data-bs-toggle="collapse"-->
<!--        data-bs-target="#mainNavbar"-->
<!--      >-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->

      <div class="collapse navbar-collapse" id="topNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link title" to="primeur">Primeurs</router-link></li>
          <li class="nav-item"><router-link class="nav-link title" to="notes">Notes</router-link></li>
          <li class="nav-item"><router-link class="nav-link title" to="topafrique">Top Afrique</router-link></li>
          <li class="nav-item"><router-link class="nav-link title" to="explore">Explorez l’art du vin</router-link></li>
          <li class="nav-item"><router-link class="nav-link title" to="club">Club VIP</router-link></li>
        </ul>

        <!-- Search + User -->
        <div class="d-flex align-items-center gap-3">
          <div class="input-group d-none d-lg-flex">
            <span class="input-group-text">
              <img src="/src/assets/icons/s1.png" style="width:15px " />
            </span>
            <input type="text" class="form-control input-search" placeholder="Recherche..." />
          </div>

          <router-link to="auth/login">
            <img src="/src/assets/images/1/Connexion-01.png" class="img-user" />
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style>
.menu2 .nav-link {
  font-size: 18px;
  color: #fff !important;
}

.menu1 .nav-link {
  font-size: 18px;
  color: #000 !important;
}

.img-logo {
  height: auto !important;
}

.img-user {
  width: 30px;
  height: 30px;
}

.title {
  font-weight: 500;
  white-space: nowrap;
}

.input-search {
  min-width: 200px;
}

/* Mobile */
@media (max-width: 991px) {
  .img-logo {
    width: 120px;
    height: 40px;
  }

  .navbar-nav .nav-link {
    padding: 10px 0;
  }

  .input-search {
    width: 100%;
  }
}

</style>
