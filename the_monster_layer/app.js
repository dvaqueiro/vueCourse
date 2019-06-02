new Vue({
    el: '#app',
    data: {
        isGameStarted: false,
        user: {
            name: 'Player',
            live:100
        },
        monster: {
            name: 'Monster',
            live:100
        },
        monsterActions: ['attack', 'specialAttack'],
        logs: []
    },
    methods: {
        startGame: function() {
            this.isGameStarted = true,
            this.user.live = 100,
            this.monster.live = 100,
            this.logs = [];
        },
        endGame: function() {
            this.isGameStarted = false
        },
        giveUp: function() {
            alert("Monster wins");
            this.endGame();
        },
        playRound: function(action) {
            this.playTurn('user', action);
            this.playTurn('monster', this.selectRandomAction());
            this.checkWinner();
        },
        playTurn: function(current, action) {
            this[action](current);
        },
        attack: function(current) {
            opponent = this.opponent(current);
            hurt = this.calculateHurt(0,20);
            this[opponent].live -= hurt;
            this.logs.unshift(this[current].name + ' hits ' + this[opponent].name + ' for ' + hurt);
        },
        specialAttack: function(current) {
            opponent = this.opponent(current);
            hurt = this.calculateHurt(20,40);
            selfHurt = this.calculateHurt(0,30);
            this[current].live -= selfHurt;
            this[opponent].live -= hurt;
            this.logs.unshift(this[current].name + ' hits ' + this[opponent].name + ' for ' + hurt);  
        },
        heal: function(current) {
            heal = this.calculateHurt(0,30);
            this[current].live += heal;
            this.logs.unshift(this[current].name + ' heals himself for ' + heal);
        },
        calculateHurt: function(min, max) {
            return Math.floor(Math.random() * (+max - +min)) + +min;
        },
        selectRandomAction: function() {
            return this.monsterActions[Math.floor(Math.random() * this.monsterActions.length)];
        },
        opponent: function(current) {
            return (current == 'monster') ? 'user' : 'monster';
        },
        turnClass: function(index) {
            var condition = (index % 2 == 0);
            return {
                "player-turn": !condition,
                "monster-turn": condition 
            }
        },
        calculateBarColor: function(character) {
            var color = 'green'
            if (character.live < 60) {
                color = 'orange'
            }
            if (character.live < 30) {
                color = 'red'
            }

            return color;
        },
        checkWinner: function() {
            if (this.user.live <= 0 && this.user.live < this.monster.live) {
                alert("Monster win");
                this.endGame();
            }
            if (this.monster.live <= 0 && this.monster.live < this.user.live) {
                alert("User win");
                this.endGame();
            }
        }
    },
    computed: {
        userhealthBarColor: function() {
            return this.calculateBarColor(this.user);
        },
        monsterHealthBarColor: function() {
            return this.calculateBarColor(this.monster);
        }
    }
});
