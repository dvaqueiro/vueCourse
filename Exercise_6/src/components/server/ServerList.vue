<template>
 <ul class="list-group">
   <li
     class="list-group-item"
     v-for="index in 5">
     {{ serverName }} #{{ index }}
   </li>
 </ul>
</template>

<script>
  export default {
    data: function() {
      return {
        serverName: 'Server'
      }
    }
  }
</script>

<style>
  
</style>
