import React from 'react';
import { Svg } from 'expo';

const PlayUp = props => (
  <Svg width={30} height={31} {...props}>
    <Svg.G transform="translate(1 1)" fill="none" fillRule="evenodd" opacity={0.92}>
      <Svg.Path
        stroke="#000"
        strokeWidth={1.5}
        d="M3.1 24.694L14.61 3.653l11.347 20.745"
      />
      <Svg.Ellipse
        stroke="#FFF"
        strokeWidth={2}
        fill="#000"
        cx={14.438}
        cy={4.138}
        rx={4.125}
        ry={4.138}
      />
      <Svg.Ellipse
        stroke="#FFF"
        strokeWidth={2}
        fill="#000"
        cx={4.125}
        cy={22.759}
        rx={4.125}
        ry={4.138}
      />
      <Svg.Path
        stroke="#FFF"
        strokeWidth={2}
        fill="#000"
        d="M27.597 16.658l.132 10.674-9.035-5.452z"
      />
    </Svg.G>
  </Svg>
);

export default PlayUp;
