import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import TOKENS from 'bpk-tokens/tokens/base.common';

import BpkBreakpoint, { BREAKPOINTS } from './index';

const MediaQueryStatus = (props) => {
  const style = {
    padding: TOKENS.spacingBase,
    backgroundColor: props.isActive ? TOKENS.colorGreen500 : TOKENS.colorGray100,
  };

  return <div style={style}>{props.children}</div>;
};

MediaQueryStatus.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

storiesOf('bpk-component-breakpoint', module)
  .add('Examples', () => (
    <div>
      <BpkBreakpoint query={BREAKPOINTS.MOBILE}>
        {isActive => <MediaQueryStatus isActive={isActive}>MOBILE</MediaQueryStatus>}
      </BpkBreakpoint>
      <BpkBreakpoint query={BREAKPOINTS.TABLET}>
        {isActive => <MediaQueryStatus isActive={isActive}>TABLET</MediaQueryStatus>}
      </BpkBreakpoint>
      <BpkBreakpoint query={BREAKPOINTS.TABLET_ONLY}>
        {isActive => <MediaQueryStatus isActive={isActive}>TABLET ONLY</MediaQueryStatus>}
      </BpkBreakpoint>
      <BpkBreakpoint query={BREAKPOINTS.ABOVE_MOBILE}>
        {isActive => <MediaQueryStatus isActive={isActive}>ABOVE MOBILE</MediaQueryStatus>}
      </BpkBreakpoint>
      <BpkBreakpoint query={BREAKPOINTS.ABOVE_TABLET}>
        {isActive => <MediaQueryStatus isActive={isActive}>ABOVE TABLET</MediaQueryStatus>}
      </BpkBreakpoint>
    </div>
  ));
