// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    console.log(this);
    //this.fetch();
    //this.on('fetch', this.render(), this);
    //this.render();

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
   // this.collection.fetch('http://parse.sfm6.hackreactor.com/mytunes/classes/songs');



    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
