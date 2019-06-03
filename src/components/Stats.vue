<template>
  <div class="hello">
    <h1> Current nodes count is {{ getNodesCount }}</h1>
  </div>
</template>

<script>


import {mapGetters} from 'vuex'

export default {
  name: 'Stats',
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

