<template>
  <div class="container">
    <app-info-header :quoteCount="quotes.length" :maxQuotes="maxQuotes">
    </app-info-header>
    <app-new-quote></app-new-quote>
    <app-quote-list :quotesList="quotes"></app-quote-list>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it! 
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { eventBus } from './main';
import AppInfoHeader from './components/InfoHeader.vue'; 
import AppNewQuote from './components/NewQuote.vue'; 
import AppQuoteList from './components/QuoteList.vue'; 

export default {
  components: {
    'app-info-header': AppInfoHeader,
    'app-new-quote': AppNewQuote,
    'app-quote-list': AppQuoteList,
  },
  data: function() {
    return {
      maxQuotes: 10,
      quotes: []
    }
  },
  created() {
    eventBus.$on('quoteWasAdded', (quoteContent) => {
      if (this.quotes.length >= 10) {
        return alert('Please delete Quotes first!');
      }
      this.quotes.push(quoteContent);
    });
    eventBus.$on('quoteWasDelete', (index) => {
      this.quotes.splice(index, 1);
    });
  }
}
</script>
<style scoped>
</style>
