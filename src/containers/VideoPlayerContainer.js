import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {};

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.


VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;






// var VideoListContainer = () => {};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     videos: state.videoList
//   };
// };

// //TODO: define a VideoListContainer component which will hook up your action
// // dispatchers with your VideoList component props.

// VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

// export default VideoListContainer;