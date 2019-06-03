<template>
  <div class="navigation">
    <ul class="nav-ul">
      <li :id="node.id" class="menuItem" v-for="(node,index) in nodes" v-bind:key="index" @mouseover="hover($event)">
        {{node.id}}<br>
        {{node.title}}<br>
        {{node.author}}<br>

        <!--<button v-on:click="removeNodes(node.id)" >Remove me</button>-->
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>


import {mapGetters,mapState,mapActions} from 'vuex'
import axios from 'axios'
import $ from "jquery";

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(
      ['getNodesCount']
    ),
    ...mapState(
      ['logo',
      'nodes']
    )
  },
  methods:{
    ...mapActions([
      'removeNode',
      'addNode',
      'removeAll'
    ]),

    generateDropDownMenu: function(data){
      $('.subMenu').hide()
    },

    hideMenus: function () {
      
    },


    hover: function(event){
      console.log('id',event)
      console.log(event.currentTarget)
      console.log(event.currentTarget.id)
      var currentElementID = event.currentTarget.id
      var offsetTop = event.currentTarget.offsetTop
      var offsetLeft = event.currentTarget.clientWidth;
      var self = this;
       $('.subMenu').remove()

      axios.get('http://localhost:3000/posts')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log('data---',response.data)

        if ( document.getElementById('submenu_' + currentElementID) == null){
          var div = document.createElement('div');
          div.id = 'submenu_' + currentElementID
          div.className = "subMenu"
          div.style.top = offsetTop + 'px'
          div.style.left = offsetLeft + 'px'
          var ul = document.createElement('ul')
          for (var i = 0; i < response.data.length; i++ ) {
           var listItem = document.createElement('li')
           listItem.innerHTML = response.data[i].title;
           ul.appendChild(listItem)
          }
          div.appendChild(ul)
          document.body.appendChild(div)
        }
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
      //this.generateDropDownMenu(self,id)
    }
  },
  
  props: {
    msg: String
  }
}
</script>

