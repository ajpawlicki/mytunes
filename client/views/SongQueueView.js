// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    // this.collection.on('add', this.render, this);
    // this.collection.on('pop', this.render, this);
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    // new SongQueueEntryView({model: });
    // return this.$el.attr('src', this.model ? this.model.get('url') : '');

    // this.$el.append(this.collection.map(function(comment) {
    //   console.log("what is comment?", comment);
    //   console.log(comment.get('artist'));
    //   var html = [
    //       '<div>',
    //         '<span class="artist">',
    //           comment.get('artist'),
    //         '<span>',
    //         '<span class="title">',
    //           comment.get('title'),
    //         '</span>',
    //         '</br>',
    //       '</div>'
    //     ].join('');

    // return html;
    // ////////////////////////////////////////////////////////////  
    //   // var temp = comment.render();
    //   // return '<li>' + temp + '</li>';
    //   // YOUR CODE HERE
    // }));

    return this.$el;
  }

});
