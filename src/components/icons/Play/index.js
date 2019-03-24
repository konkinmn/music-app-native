import React from 'react';
import { Svg } from 'expo';

const Play = (props) => {
  let opacity = 0.9;

  if (props.isPlaying) {
    opacity = 0.2;
  }

  return (
    <Svg width={22} height={26} {...props}>
      <Svg.Path
        d="M1.592.755C.92 1.134.5 1.875.5 2.69v20.62c0 .815.419 1.556 1.092 1.936a1.92 1.92 0 0 0 2.017-.066l16.905-10.31c.618-.4.986-1.098.986-1.87 0-.771-.368-1.47-.984-1.87L3.61.82A1.924 1.924 0 0 0 1.592.754z"
        fill="#000"
        fillRule="nonzero"
        opacity={opacity}
      />
    </Svg>
  );
};

export default Play;
