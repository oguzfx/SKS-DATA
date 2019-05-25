<template>
  <div class="columns is-centered">

   <div class="column is-2">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/static/img/hastane.jpeg" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <router-link class="title is-4" :to="{ name: 'SksStandart', params: { sksId: 'Hastane' }}">Hastane</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-2">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/static/img/diyaliz.jpeg" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <router-link class="title is-4" :to="{ name: 'SksStandart', params: { sksId: 'Diyaliz' }}">Diyaliz</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-2">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/static/img/evdesag.jpeg" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <router-link class="title is-4" :to="{ name: 'SksStandart', params: { sksId: 'Evde Saglik' }}">Evde Saglik</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-2">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/static/img/adsh.jpeg" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <router-link class="title is-4" :to="{ name: 'SksStandart', params: { sksId: 'ADSH' }}">ADSH</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
