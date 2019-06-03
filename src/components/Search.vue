<template>
  <div class="search">
    <h1>Search component</h1>
  </div>
</template>

<script>


import {mapGetters} from 'vuex'

export default {
  name: 'Search',
  computed: {
    ...mapGetters(
      ['getNodesCount']
    )
  },
  props: {
    msg: String
  }
}
</script>

