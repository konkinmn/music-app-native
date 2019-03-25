import React from 'react';
import { Svg } from 'expo';

const ArrowForward = props => (
  <Svg width={36} height={31} {...props}>
    <Svg.Path
      d="M20.666 2c.683 0 1.366.265 1.886.791l10.666 10.8a2.721 2.721 0 0 1 0 3.818l-10.666 10.8a2.64 2.64 0 0 1-3.771 0 2.721 2.721 0 0 1 0-3.819l6.114-6.19H4.667C3.195 18.2 2 16.993 2 15.5s1.195-2.7 2.667-2.7h20.228l-6.114-6.191a2.721 2.721 0 0 1 0-3.818A2.643 2.643 0 0 1 20.666 2z"
      fill="#000"
      fillRule="nonzero"
      stroke="#FFF"
      strokeWidth={3.7}
    />
  </Svg>
);

export default ArrowForward;
