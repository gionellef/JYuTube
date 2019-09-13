import * as React from 'react';

import { Icon, Menu } from 'semantic-ui-react';

import './SideBarItem.scss';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

interface Props {
  highlight?: boolean;
  icon: SemanticICONS,
  label: string,
};

const SideBarItem : React.FC<Props> = (props) => {
  // React ignores custom boolean attributes  so we use string instead
  // This attribute will be used in the SCSS for styling
  const highlight = props.highlight ? 'highlight-item' : null;

  return (
    <Menu.Item className={ ['sidebar-item', highlight].join(' ') }>
      <div className='sidebar-item-alignment-container'>
        <span><Icon size='large' name={ props.icon } /></span>
        <span>{ props.label }</span>
      </div>
    </Menu.Item>
  );
}

export default SideBarItem;

