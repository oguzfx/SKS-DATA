<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'Hello'}"><img src="/static/img/skslogo.jpeg" width="112" height="28"></router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <router-link class="navbar-item" :to="{ name: 'Hello'}">Anasayfa</router-link>
          <a class="navbar-item">
            Dokuman
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Setler
            </a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" :to="{ name: 'SksStandart', params: { sksId: 'ADSH' }}">ADSH</router-link>
              <router-link class="navbar-item" :to="{ name: 'SksStandart', params: { sksId: 'Diyaliz' }}">Diyaliz</router-link>
              <router-link class="navbar-item" :to="{ name: 'SksStandart', params: { sksId: 'Evde Saglik' }}">Evde Saglik</router-link>
              <router-link class="navbar-item" :to="{ name: 'SksStandart', params: { sksId: 'Hastane' }}">Hastane</router-link>
              <hr class="navbar-divider">
              <router-link class="navbar-item" :to="{ name: 'degerlendir'}">Değerlendir</router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Kayit ol</strong>
              </a>
              <a class="button is-light">
                Giris
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
     <router-view></router-view>
    </main>
  </div>
</template>

<script>
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });
export default {
  name: 'app'
}
</script>

<style>

</style>
