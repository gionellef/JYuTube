import * as React from 'react';

import { Button, Icon } from 'semantic-ui-react';

import './CommentsHeader.scss';

interface Props {
  numberOfComments: number;
}

const CommentsHeader : React.FC<Props> = (props) => {
  return (
    <div className='comments-header'>
      <h4>{ props.numberOfComments } Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
    </div>
  );
}

export default CommentsHeader;