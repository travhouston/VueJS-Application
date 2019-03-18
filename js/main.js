new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    ended: false,
    colorChange: false,
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
      if (this.health <= 50) {
        this.colorChange = true;
      }
      if(this.health === 0) {
        setTimeout(function() {
          alert("Click Restart to Play Again!");
      }, 100);
      }
    },
    restart: function() {
      this.health = 100;
      this.colorChange = false;
      this.ended = false;
    },

    playSound: function(sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
});
