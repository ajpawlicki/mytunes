// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on("add", function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on("ended", function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });

    this.on("dequeue", function() {
      this.remove();
    });



  },


  playFirst: function() {
    //this[0].model.play();
    this.models[0].play();
  },

});