import React from 'react';
import { Svg } from 'expo';

const LeftArrow = props => (
  <Svg width={12} height={21} {...props}>
    <Svg.Path
      d="M.292 11.213a1.016 1.016 0 0 1 0-1.426L9.537.427a1.431 1.431 0 0 1 2.04 0c.563.57.563 1.496 0 2.066L3.67 10.5l7.909 8.005a1.476 1.476 0 0 1 0 2.066c-.564.57-1.479.57-2.04 0l-9.246-9.36z"
      fill="#191919"
      fillRule="evenodd"
    />
  </Svg>
);

export default LeftArrow;
