import React from 'react';
import { Svg } from 'expo';

const Checked = props => (
  <Svg width={52} height={52} {...props}>
    <Svg.G transform="translate(1 1)" fill="none" fillRule="evenodd">
      <Svg.Path
        d="M25 50C11.216 50 0 38.784 0 25S11.216 0 25 0s25 11.216 25 25-11.216 25-25 25z"
        fill="#FFF"
        fillRule="nonzero"
      />
      <Svg.Path
        fill="#01E677"
        fillRule="nonzero"
        d="M21.875 33.333l-7.188-6.614 2.188-2.013 5 4.601 12.604-11.599 2.188 2.013z"
      />
      <Svg.Circle stroke="#01E677" strokeWidth={0.521} cx={25} cy={25} r={25} />
    </Svg.G>
  </Svg>
);

export default Checked;
