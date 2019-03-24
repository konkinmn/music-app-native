import React from 'react';

import { Svg } from 'expo';

const PianoKeyBoard = props => (
  <Svg width={281} height={90} {...props}>
    <Svg.G fill="none" fillRule="evenodd">
      <Svg.Path id="BG" fill="#000000" d="M0,0 L280.5,0 L280.5,87.5 C280.5,88.8807119 279.380712,90 278,90 L262.5,90 C261.51045,90 260.65518,89.4250744 260.25,88.5910313 C259.84482,89.4250744 258.98955,90 258,90 L242.5,90 C241.51045,90 240.65518,89.4250744 240.25,88.5910313 C239.84482,89.4250744 238.98955,90 238,90 L222.5,90 C221.51045,90 220.65518,89.4250744 220.25,88.5910313 C219.84482,89.4250744 218.98955,90 218,90 L202.5,90 C201.51045,90 200.65518,89.4250744 200.25,88.5910313 C199.84482,89.4250744 198.98955,90 198,90 L182.5,90 C181.51045,90 180.65518,89.4250744 180.25,88.5910313 C179.84482,89.4250744 178.98955,90 178,90 L162.5,90 C161.51045,90 160.65518,89.4250744 160.25,88.5910313 C159.84482,89.4250744 158.98955,90 158,90 L142.5,90 C141.51045,90 140.65518,89.4250744 140.25,88.5910313 C139.84482,89.4250744 138.98955,90 138,90 L122.5,90 C121.51045,90 120.65518,89.4250744 120.25,88.5910313 C119.84482,89.4250744 118.98955,90 118,90 L102.5,90 C101.51045,90 100.65518,89.4250744 100.25,88.5910313 C99.8448198,89.4250744 98.9895504,90 98,90 L82.5,90 C81.5104496,90 80.6551802,89.4250744 80.25,88.5910313 C79.8448198,89.4250744 78.9895504,90 78,90 L62.5,90 C61.5104496,90 60.6551802,89.4250744 60.25,88.5910313 C59.8448198,89.4250744 58.9895504,90 58,90 L42.5,90 C41.5104496,90 40.6551802,89.4250744 40.25,88.5910313 C39.8448198,89.4250744 38.9895504,90 38,90 L22.5,90 C21.5104496,90 20.6551802,89.4250744 20.25,88.5910313 C19.8448198,89.4250744 18.9895504,90 18,90 L2.5,90 C1.11928813,90 1.69088438e-16,88.8807119 0,87.5 L0,0 Z" />
      <Svg.Path id="C" fill="#FFFFFF" d="M0.5,0.5 L20,0.5 L20,87.5 C20,88.6045695 19.1045695,89.5 18,89.5 L2.5,89.5 C1.3954305,89.5 0.5,88.6045695 0.5,87.5 L0.5,0.5 Z" />
      <Svg.Path id="D" fill="#FFFFFF" d="M20.5,0.5 L40,0.5 L40,87.5 C40,88.6045695 39.1045695,89.5 38,89.5 L22.5,89.5 C21.3954305,89.5 20.5,88.6045695 20.5,87.5 L20.5,0.5 Z" />
      <Svg.Path id="E" fill="#FFFFFF" d="M40.5,0.5 L60,0.5 L60,87.5 C60,88.6045695 59.1045695,89.5 58,89.5 L42.5,89.5 C41.3954305,89.5 40.5,88.6045695 40.5,87.5 L40.5,0.5 Z" />
      <Svg.Path id="F" fill="#FFFFFF" d="M60.5,0.5 L80,0.5 L80,87.5 C80,88.6045695 79.1045695,89.5 78,89.5 L62.5,89.5 C61.3954305,89.5 60.5,88.6045695 60.5,87.5 L60.5,0.5 Z" />
      <Svg.Path id="G" fill="#FFFFFF" d="M80.5,0.5 L100,0.5 L100,87.5 C100,88.6045695 99.1045695,89.5 98,89.5 L82.5,89.5 C81.3954305,89.5 80.5,88.6045695 80.5,87.5 L80.5,0.5 Z" />
      <Svg.Path id="A" fill="#FFFFFF" d="M100.5,0.5 L120,0.5 L120,87.5 C120,88.6045695 119.104569,89.5 118,89.5 L102.5,89.5 C101.395431,89.5 100.5,88.6045695 100.5,87.5 L100.5,0.5 Z" />
      <Svg.Path id="B" fill="#FFFFFF" d="M120.5,0.5 L140,0.5 L140,87.5 C140,88.6045695 139.104569,89.5 138,89.5 L122.5,89.5 C121.395431,89.5 120.5,88.6045695 120.5,87.5 L120.5,0.5 Z" />
      <Svg.Path id="C2" fill="#FFFFFF" d="M140.5,0.5 L160,0.5 L160,87.5 C160,88.6045695 159.104569,89.5 158,89.5 L142.5,89.5 C141.395431,89.5 140.5,88.6045695 140.5,87.5 L140.5,0.5 Z" />
      <Svg.Path id="D2" fill="#FFFFFF" d="M160.5,0.5 L180,0.5 L180,87.5 C180,88.6045695 179.104569,89.5 178,89.5 L162.5,89.5 C161.395431,89.5 160.5,88.6045695 160.5,87.5 L160.5,0.5 Z" />
      <Svg.Path id="E2" fill="#FFFFFF" d="M180.5,0.5 L200,0.5 L200,87.5 C200,88.6045695 199.104569,89.5 198,89.5 L182.5,89.5 C181.395431,89.5 180.5,88.6045695 180.5,87.5 L180.5,0.5 Z" />
      <Svg.Path id="F2" fill="#FFFFFF" d="M200.5,0.5 L220,0.5 L220,87.5 C220,88.6045695 219.104569,89.5 218,89.5 L202.5,89.5 C201.395431,89.5 200.5,88.6045695 200.5,87.5 L200.5,0.5 Z" />
      <Svg.Path id="G2" fill="#FFFFFF" d="M220.5,0.5 L240,0.5 L240,87.5 C240,88.6045695 239.104569,89.5 238,89.5 L222.5,89.5 C221.395431,89.5 220.5,88.6045695 220.5,87.5 L220.5,0.5 Z" />
      <Svg.Path id="A2" fill="#FFFFFF" d="M240.5,0.5 L260,0.5 L260,87.5 C260,88.6045695 259.104569,89.5 258,89.5 L242.5,89.5 C241.395431,89.5 240.5,88.6045695 240.5,87.5 L240.5,0.5 Z" />
      <Svg.Path id="B2" fill="#FFFFFF" d="M260.5,0.5 L280,0.5 L280,87.5 C280,88.6045695 279.104569,89.5 278,89.5 L262.5,89.5 C261.395431,89.5 260.5,88.6045695 260.5,87.5 L260.5,0.5 Z" />
      <Svg.Path id="C#" fill="#000000" d="M13.5,0.5 L23.5,0.5 L23.5,57.5 C23.5,58.3284271 22.8284271,59 22,59 L15,59 C14.1715729,59 13.5,58.3284271 13.5,57.5 L13.5,0.5 Z" />
      <Svg.Path id="C2#" fill="#000000" d="M153.5,0.5 L163.5,0.5 L163.5,57.5 C163.5,58.3284271 162.828427,59 162,59 L155,59 C154.171573,59 153.5,58.3284271 153.5,57.5 L153.5,0.5 Z" />
      <Svg.Path id="F2#" fill="#000000" d="M213.5,0.5 L223.5,0.5 L223.5,57.5 C223.5,58.3284271 222.828427,59 222,59 L215,59 C214.171573,59 213.5,58.3284271 213.5,57.5 L213.5,0.5 Z" />
      <Svg.Path id="A2#" fill="#000000" d="M257,0.5 L267,0.5 L267,57.5 C267,58.3284271 266.328427,59 265.5,59 L258.5,59 C257.671573,59 257,58.3284271 257,57.5 L257,0.5 Z" />
      <Svg.Path id="D2#" fill="#000000" d="M177,0.5 L187,0.5 L187,57.5 C187,58.3284271 186.328427,59 185.5,59 L178.5,59 C177.671573,59 177,58.3284271 177,57.5 L177,0.5 Z" />
      <Svg.Path id="D#" fill="#000000" d="M37,0.5 L47,0.5 L47,57.5 C47,58.3284271 46.3284271,59 45.5,59 L38.5,59 C37.6715729,59 37,58.3284271 37,57.5 L37,0.5 Z" />
      <Svg.Path id="F#" fill="#000000" d="M73.5,0.5 L83.5,0.5 L83.5,57.5 C83.5,58.3284271 82.8284271,59 82,59 L75,59 C74.1715729,59 73.5,58.3284271 73.5,57.5 L73.5,0.5 Z" />
      <Svg.Path id="A#" fill="#000000" d="M117,0.5 L126,0.5 L126,57.5 C126,58.3284271 125.328427,59 124.5,59 L118.5,59 C117.671573,59 117,58.3284271 117,57.5 L117,0.5 Z" />
      <Svg.Path id="G#" fill="#000000" d="M95.25,0.5 L105.25,0.5 L105.25,57.5 C105.25,58.3284271 104.578427,59 103.75,59 L96.75,59 C95.9215729,59 95.25,58.3284271 95.25,57.5 L95.25,0.5 Z" />
      <Svg.Path id="G2#" fill="#000000" d="M235.25,0.5 L245.25,0.5 L245.25,57.5 C245.25,58.3284271 244.578427,59 243.75,59 L236.75,59 C235.921573,59 235.25,58.3284271 235.25,57.5 L235.25,0.5 Z" />
    </Svg.G>
  </Svg>
);

export default PianoKeyBoard;