<template>


<div class="column">
  <h1>User {{ $route.params.sksId }}</h1>
  <div v-for="value in datagetir">
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

        }
      },
      computed: { datagetir : function(){
        if ("Evde Saglik"==this.$route.params.sksId){
          return  json.EvdeSaglik
        }
        else if ("Diyaliz"==this.$route.params.sksId){return json.Diyaliz}
        else{return json.ERR}
      }
    }
  }

</script>

<style scoped>

</style>
