<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotesList" 
      @click.native="deleteQuote(index)">
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import AppQuote from './Quote.vue'; 

  export default{
    props: ['quotesList'],
    components: {
      'app-quote': AppQuote
    },
    methods: {
      deleteQuote: function(index) {
        eventBus.$emit('quoteWasDelete', index);
      }
    }
  }
</script>

<style scoped>

</style>

