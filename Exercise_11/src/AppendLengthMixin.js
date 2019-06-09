export const appendLegthMixin = {
  computed: {
    appendLength() {
      return this.someText + ' (' + this.someText.length + ')';
    }
  }
}
