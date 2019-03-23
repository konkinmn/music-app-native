import React from 'react';
import { Svg } from 'expo';

const Indicator = props => (
  <Svg width={32} height={32} {...props}>
    <Svg.G
      transform="translate(1 .901)"
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
    >
      <Svg.Circle stroke="#EDEDF2" fill="#FFF" cx={15} cy={15.099} r={15} />
      <Svg.Path
        d="M26.007 4.908A14.96 14.96 0 0 0 15 .098"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg.G>
  </Svg>
);

export default Indicator;
