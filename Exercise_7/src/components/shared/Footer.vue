<template>
  <footer>
    <p v-if="aServer == null">All Servers are managed here</p>
    <p v-else>ServerId: {{ aServer.id }} 
    <button @click="resetStatus">Reset Status</button>
    </p>
  </footer>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data: function() {
      return {
        aServer: null
      }
    },
    methods: {
      resetStatus: function() {
        this.aServer.status = 'Normal';
      }
    },
    created() {
      eventBus.$on('serverWasSelected', (aServer) => {
        this.aServer = aServer;
      });
    }
  }
</script>

<style>
  
</style>
