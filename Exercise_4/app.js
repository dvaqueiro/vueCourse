new Vue({
  el: '#exercise',
  data: {
      effect: 'highlight',
      dashed: 'dashed',
      blue: 'blue',
      appliedStyle: '',
      color: 'blue',
      changeEffect: false,
      barLoad: 0
  },
  methods: {
    startEffect: function() {
        var vue = this;
        setTimeout(function() {
            vue.effect = 
                (vue.effect == 'shrink') 
                ? 'highlight' 
                : 'shrink';
        }, 2000);
    },
    startBar: function() {
        var vue = this;
        interval = setInterval(function() {
            if (vue.barLoad == 100) {
                clearInterval(interval);
            } else {
                vue.barLoad++; 
            }
        }, 50);
    }
  },
  watch: {
      changeEffect: function() {
          return {
              highlight: this.changeEffect,
              shrink: !this.changeEffect
          }
      }
  }
});
