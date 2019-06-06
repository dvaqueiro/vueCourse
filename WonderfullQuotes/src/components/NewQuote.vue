<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote:</label>
        <textarea class="form-control" v-model="quoteContent" rows="3"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default{
  data: function() {
    return {
      quoteContent: ''
    }
  },
  methods: {
    addQuote: function() {
      if (this.quoteContent) {
        eventBus.$emit('quoteWasAdded', this.quoteContent);
      }
      this.quoteContent = '';
    }
  }
}
</script>

<style scoped>
</style>

