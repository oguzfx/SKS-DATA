<template>


<div class="column">
  <h1>User {{ $route.params.sksId }}</h1>
  <div v-for="value in myJson.Diyaliz">
    <b-collapse :open="false" class="card" >
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button">
        <p class="card-header-title">
          {{value.ust}}
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <ul>
            <li v-for="iter in value.alt">
              {{ iter}}
            </li>
          </ul>
        </div>
      </div>
    </b-collapse>
  </div>
</div>
</template>

<script>
  import json from '../../static/data.json'
    export default {
        name: "SksStandart",
      data(){
        return{
          myJson: json
        }
      }
    }

</script>

<style scoped>

</style>
