import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {

  return (dispatch) => {
    var options = {};
    options.query = q;
    options.key = YOUTUBE_API_KEY;
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });

  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
