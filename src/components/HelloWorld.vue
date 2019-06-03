<template>
  <div class="hello">
    <h1>{{ logo }}</h1>
    <button v-on:click="addNodes('Test')">Add new Node</button>
     <button v-on:click="removeAllNodes()">Remove all</button>
    <ul>
      <li v-for="(node,index) in nodes" v-bind:key="index">
        {{node.id}}<br>
        {{node.title}}<br>
        {{node.author}}<br>

        <button v-on:click="removeNodes(node.id)" >Remove me</button>
      </li>
    </ul>
  </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(
      ['logo',
      'nodes']
    )
  },
  props: {
    msg: String
  },
  methods:{
    //...mapMutations([
    //  'ADD_NODE'
    //]),
    ...mapActions([
      'removeNode',
      'addNode',
      'removeAll'
    ]),
    removeNodes: function(id){
      this.removeNode(id)
    },
    addNodes: function(id){
      this.addNode(id)
    },
    removeAllNodes(){
      this.removeAll();
    },
    getData:function(){
      axios.get('http://localhost:3000/posts')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log('data---',response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
  },
  mounted(){
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
