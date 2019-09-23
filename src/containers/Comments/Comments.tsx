import * as React from 'react';

import CommentsHeader from './CommentsHeader/CommentsHeader';
import { AddComment } from './AddComment/AddComment';
import { Comment } from './Comment/Comment';

import './Comments.scss';

interface Props {
  className?: string;
  numberOfComments?: number;
}

export class Comments extends React.Component<Props> {
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
