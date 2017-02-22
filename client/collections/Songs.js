// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
    $.ajax({
      url: this.url,
      type: 'GET',
      // data: JSON.stringify(songs),
      //datatype: 'json',
      contentType: 'application/json',
      success: (function (data) {
        for (var i = 0; i < data.results.length; i++) {
          this.push(data.results[i]);
        }
        console.log('ajax success!');
      }).bind(this),
      error: function (data) {
        console.error('mytunes: Failed to send message', data);
      }
    });
  }




});