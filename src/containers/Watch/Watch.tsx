import * as React from 'react';

import * as watchActions from '../../store/actions/watch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';

import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../Comments/Comments';

import './Watch.scss';

export class Watch extends React.Component<any, any> {
  render() {
    return (
      <div className='watch-grid'>
        <Video className='video' id='P5ktQh3sWZk' />
        <VideoMetadata className='metadata' viewCount={1000} />
        <VideoInfoBox className='video-info-box' />
        <Comments className='comments' numberOfComments={52374} />
        <RelatedVideos className='related-videos' />
      </div>

    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();

    if (!videoId) {
      this.props.history.push('/');
    }

    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }

  getVideoId() {
    const searchParams = new URLSearchParams(this.props.location.search);
    return searchParams.get('v');
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators ({ fetchWatchDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Watch));