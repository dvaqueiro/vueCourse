<template>
  <p v-if="aSelectedServer == null">
  No server selected !!
  </p>
  <p v-else>
  Id: {{ aSelectedServer.id }} - Status: {{ aSelectedServer.status }}
  </p>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data: function() {
      return {
        aSelectedServer: null,
      }
    },
    created() {
      eventBus.$on('serverWasSelected', (aServer) => {
        this.aSelectedServer = aServer;
      });
    }
  }
</script>

<style>
  
</style>
