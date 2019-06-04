<template>
   <li @click="serverSelected(aserver)" class="list-group-item" >
     Server #{{ aserver.id }}
   </li>
</template>

<script>
  import { eventBus } from '../../main';
  
  export default{
    props: ['aserver'],
    methods: {
      serverSelected: function(selectedServer) {
        eventBus.$emit('serverWasSelected', selectedServer);
      }
    }
  }
</script>

<style scoped>

</style>

