import React from 'react';

import { CommentsHeader } from './CommentsHeader/CommentsHeader';

import './Comments.scss';

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentsHeader numberOfComments={this.props.numberOfComments} />
      </div>
    );
  }
}
