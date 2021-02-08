<template>
  <div>
    <app-header></app-header>
    <router-view v-on:toLoad="updateLoad($event)" v-show="!load"></router-view>
    <loading v-show="load"></loading>
  </div>
</template>

<script>
import Header from "./components/header"
import Loading from './components/loading.vue'

export default {
  components:{
    "app-header" : Header,
    "loading" : Loading
  },
  data () {
    return {
      load : false
    }
  },
  methods : {
    updateLoad : function(val){
      this.load = val
    }
  }
}
</script>

<style scoped>

</style>
