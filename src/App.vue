<template>
  <div id="app">
   
    <div class="container knowledge-base-layout">
      <div class="row knowledge-base-wrapper">
        <div style="background:green;padding: 0;" class="col-3 no-float">
          test
          <Navigation></Navigation>
        </div>
        <div style="background:red" class="col-9 no-float">
          <div class="row" style="background:pink">search ???<Search/></div>
          <div class="row">
            <div style="background:gray" class="card col px-2">
              1 of 3
            </div>
            <div  style="background:gray" class="card col-6 px-2">
              2 of 3 (wider)
              <HelloWorld/>
            </div>
            <div  style="background:gray" class="card col px-2">
              <Stats/>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Stats from './components/Stats.vue'
import Navigation from './components/Navigation.vue'
import Search from './components/Search.vue'



export default {
  name: 'app',
  components: {
    HelloWorld,
    Stats,
    Navigation,
    Search
  }
}
</script>

<style lang="scss">
@import "styles.scss";

</style>
