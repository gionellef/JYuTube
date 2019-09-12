import React from 'react';

import { CommentsHeader } from './CommentsHeader/CommentsHeader';
import { AddComment } from './AddComment/AddComment';
import { Comment } from './Comment/Comment';

import './Comments.scss';


export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentsHeader numberOfComments={this.props.numberOfComments} />
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}
