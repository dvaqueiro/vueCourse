<template>
 <ul class="list-group">
     <app-server-status 
       v-for="server in servers" 
       :aserver="server">
     </app-server-status>
 </ul>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  
  export default {
    components: {
      'app-server-status': ServerStatus
    },
    props: ['aServer'],
    data: function() {
      return {
        servers: [
          { id:1, status: 'Normal'},
          { id:2, status: 'Critical'},
          { id:3, status: 'Unknow'},
          { id:5, status: 'Normal'}
        ] 
      }
    }
  }
</script>

<style>
  
</style>
