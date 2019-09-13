import * as React from 'react';

import './SideBarFooter.scss';

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <div> About Press Copyright </div>
        <div> Contact Us Creators Advertise </div>
        <div> Developers</div>
      </div>
      <div className='footer-block'>
        <div> Terms Privacy Policy and Safety</div>
      </div>
      <div className='footer-block-copyright'>
        <div>© 2019 Gionelle Tribana - A YouTube clone undertaken as personal exercise on React</div>
      </div>
    </React.Fragment>
  );
}