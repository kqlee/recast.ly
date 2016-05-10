var searchYouTube = (options, callback) => {
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video'
    },
    success: (data) => {
      if (callback) {
        callback(data.items);
      }
      return data.items;
    }
  });
};

window.searchYouTube = searchYouTube;
