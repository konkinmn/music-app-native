import React from 'react';
import { Svg } from 'expo';

const Repeat = props => {
  let opacity = 0.9;

  if (props.isPlaying) {
    opacity = 0.2;
  }

  return (
    <Svg width={25} height={25} {...props}>
      <Svg.Path
        d="M12.5 0a12.453 12.453 0 0 0-8.293 3.166L2.083 1.042v6.25h6.25L5.683 4.64A10.349 10.349 0 0 1 12.5 2.083 10.401 10.401 0 0 1 22.917 12.5 10.401 10.401 0 0 1 12.5 22.917 10.401 10.401 0 0 1 2.083 12.5 1.042 1.042 0 1 0 0 12.5C0 19.391 5.609 25 12.5 25S25 19.391 25 12.5 19.391 0 12.5 0z"
        fill="#191919"
        fillRule="nonzero"
        opacity={opacity}
      />
    </Svg>
  );
};

export default Repeat;
