import React from 'react';
import { Svg } from 'expo';

const Info = props => (
  <Svg width={31} height={27} {...props}>
    <Svg.G fill="#000" fillRule="nonzero" stroke="#FFF">
      <Svg.Path
        d="M1 1v20.588c0 1.608 1.315 2.941 2.9 2.941h9.552A2.177 2.177 0 0 0 15.5 26c.92-.001 1.74-.59 2.048-1.47H27.1c1.585 0 2.9-1.334 2.9-2.942V1H19.85c-1.756 0-3.283.847-4.35 2.111C14.433 1.847 12.906 1 11.15 1H1zm2.9 2.941h7.25c1.62 0 2.9 1.3 2.9 2.941h2.9c0-1.642 1.28-2.94 2.9-2.94h7.25v17.646H3.9V3.941z"
        strokeWidth={1.2}
      />
      <Svg.Path d="M20.2 8.059v2.823H23V8.06zM20.2 12.294v5.647H23v-5.647z" />
    </Svg.G>
  </Svg>
);

export default Info;
