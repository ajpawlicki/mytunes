// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  
  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  initialize: function() {
    // this.listenTo(this.model, "change", this.render);
    // this.model.on('click', function() {
    //   this.model.dequeue();
    // }, this);
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

  // render: function() {
  //   // console.log(this);
  //   // var html = [
  //   //   '<div>',
  //   //   '<span class="artist">',
  //   //   this.model.get('artist'),
  //   //   '<span>',
  //   //   '<span class="title">',
  //   //   this.model.get('title'),
  //   //   '</span>',
  //   //   '</br>',
  //   //   '</div>'
  //   // ].join('');

  //   // return this.$el.html(html);

  // this.$el.children().detach();
  //   this.$el.html('<th>Library</th>').append(
  //     this.collection.map(function(song) {
  //       return new LibraryEntryView({model: song}).render();
  //     })
  //   );
  // }

});
